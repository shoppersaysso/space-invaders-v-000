class CrewMember {
constructor(position) {
  this.position = position;
  }

  sayHello() {
    console.log("Hello, my name is "+ this.name);
  }
}

class Spaceship {
constructor(name, crew, phasers, shields) {
  this.name = name;
  this.crew = crew;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
   this.warpDrive = 'disengaged';
  }
}
