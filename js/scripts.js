

var Musician = {
  initialize: function(memberName, instrument) {
    this.memberName = memberName;
    this.instrument = instrument;
  }
}

var Band = {
  initialize: function(bandName, bandGenre, bandMembers){
    this.bandName = bandName;
    this.bandGenre = bandGenre;
    this.bandMembers = [];

  }
}

// var sexPistols = Object.create(Band);
// sexPistols.initialize("The Sex Pistols", "Punk Rock",["John Lydon", "Sid Vicious"]);