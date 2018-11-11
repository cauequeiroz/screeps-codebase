const harvest = creep => {
  const sources = creep.room.find(FIND_SOURCES);
  if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
    creep.moveTo(sources[1]);
  }
};

const transferEnergy = creep => {
  const targets = creep.room.find(FIND_STRUCTURES, {
    filter: structure => {
      return (
          structure.structureType == STRUCTURE_SPAWN ||
          structure.structureType == STRUCTURE_EXTENSION
        ) &&
        structure.energy < structure.energyCapacity;
    }
  });

  if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    creep.moveTo(targets[0]);
  }
};

const roleHarvester = {
  run: (creep) => {

    if (creep.memory.transfering && creep.carry.energy == 0) {
      creep.memory.transfering = false;
    }

    if (!creep.memory.transfering && creep.carry.energy == creep.carryCapacity) {
      creep.memory.transfering = true;
    }

    if (creep.memory.transfering) {
      transferEnergy(creep);
    } else {
      harvest(creep);
    }
  }
}

module.exports = roleHarvester;
