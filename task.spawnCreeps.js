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
    const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if (upgraders.length < quantity) {
       const newName = `Upgrader ${Game.time}`;
       console.log('Spawning new upgrader: ' + newName);
       Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
           {memory: {role: 'upgrader'}});
    }
  },

  spawnHarvester: quantity => {
    const harvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    if (harvester.length < quantity) {
       const newName = `Harvester ${Game.time}`;
       console.log('Spawning new harvester: ' + newName);
       Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
           {memory: {role: 'harvester'}});
    }
  },

  spawnBuilder: quantity => {
    const builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if (builder.length < quantity) {
       const newName = `Builder ${Game.time}`;
       console.log('Spawning new builder: ' + newName);
       Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
           {memory: {role: 'builder'}});
    }
  }
};

module.exports = spawnCreeps;
