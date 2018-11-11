const harvest = require('task.harvest');
const logger = require('helper.logger');

const buildContructionSites = creep => {
  const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
  if (targets.length) {
    if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(targets[0]);
    }
  }
};

const roleBuilder = {
  run: (creep) => {
    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
      logger(creep, 'harvest');
    }

    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
      logger(creep, 'build');
    }

    if (creep.memory.building) {
      buildContructionSites(creep);
    } else {
      harvest(creep, 0);
    }
  }
}

module.exports = roleBuilder;
