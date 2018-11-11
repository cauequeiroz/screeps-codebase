const harvest = (creep, source) => {
  const sources = creep.room.find(FIND_SOURCES);
  if (creep.harvest(sources[source]) == ERR_NOT_IN_RANGE) {
    creep.moveTo(sources[source]);
  }
};

module.exports = harvest;
