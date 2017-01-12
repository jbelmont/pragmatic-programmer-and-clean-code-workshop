function Demeter(soldier) {
  this.name = soldier.name || '';
  this.rank = soldier.rank || 'private';
  this.specialty = soldier.specialty || [];
  this.years = soldier.years || 0;
  this.job = soldier.job || 'firefighter';
  this.getInformation = function(newSoldier) {
    return Object.assign(
      {},
      { name: this.name, rank: this.rank, specialty: this.specialty, years: this.years },
      { exercise: newSoldier.exercise, branch: newSoldier.branch }
    );
  };
  this.civilianPlan = {
    printPlan: function() {
      return `Civilian Job Plan: ${this.job}`;
    }.bind(this)
  };
}

Demeter.prototype.getSoldier = function() {
  return {
    name: this.name,
    rank: this.rank,
    specialty: this.specialty
  };
};

Demeter.prototype.soldierStats = function(newSoldier) {
  return {
    height: newSoldier.height,
    weight: newSoldier.weight,
    gender: newSoldier.gender,
    age: newSoldier.age
  };
};

exports.Demeter = Demeter;
