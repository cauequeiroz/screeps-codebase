const harvest = require('task.harvest');
const logger = require('helper.logger');

const upgradeController = creep => {
  if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.controller);
  }
}

const roleUpgrader = {
  run: (creep) => {
    if (creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
      logger(creep, 'harvest');
    }

    if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
      logger(creep, 'upgrade');
    }

    if (creep.memory.upgrading) {
      upgradeController(creep);
    } else {
      harvest(creep, 0);
    }
  }
}

module.exports = roleUpgrader;
