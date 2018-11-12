const spawn = role => {
  const spawnHasEnergy = Game.spawns['Spawn1'].room.energyAvailable >= 200;
  if (!spawnHasEnergy) return;

  const newName = `${role} ${Game.time}`;
  Game.spawns['Spawn1'].spawnCreep(
    [WORK,CARRY,MOVE],
    newName,
    {memory: { role }}
  );

  console.log(`Spawning new ${role}: ${newName}`);
};

const canProduceCreep = (role, quantity) => {
  const creeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);
  return creeps.length < quantity;
};

const spawnCreeps = {
  emptyMemory: () => {
    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
  },

  spawnUpgrader: quantity => {
    if (canProduceCreep('upgrader', quantity)) {
       spawn('upgrader');
    }
  },

  spawnHarvester: quantity => {
    if (canProduceCreep('harvester', quantity)) {
       spawn('harvester');
    }
  },

  spawnBuilder: quantity => {
    if (canProduceCreep('builder', quantity)) {
       spawn('builder');
    }
  }
};

module.exports = spawnCreeps;
