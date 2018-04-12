const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation});
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })

};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let distanceArray = this.journeys.map((journey) => {
    return journey.distance;
  })
  return distanceArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let transportArray = this.getModesOfTransport();
  let uniqueArray = [];
  transportArray.forEach((transport) => {
    if(uniqueArray.includes(transport) === false ){
      uniqueArray.push(transport)
    }
  })
  return uniqueArray;
};


module.exports = Traveller;
