const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const spawnCreeps = require('task.spawnCreeps');

spawnCreeps.emptyMemory();
spawnCreeps.spawnHarvester(2);
spawnCreeps.spawnUpgrader(4);
spawnCreeps.spawnBuilder(4);

for (let name in Game.creeps) {
  const creep = Game.creeps[name];

  if (creep.memory.role == 'harvester') roleHarvester.run(creep);
  if (creep.memory.role == 'upgrader') roleUpgrader.run(creep);
  if (creep.memory.role == 'builder') roleBuilder.run(creep);
}
