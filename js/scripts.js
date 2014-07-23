
var Musician = {
  initialize: function(memberName, instrument) {
    this.memberName = memberName;
    this.instrument = instrument;
  }
};

var Band = {
    initialize: function(bandName, bandGenre, Musician) {
      this.bandName = bandName;
      this.bandGenre = bandGenre;
      this.bandMembers = [];
    }
  };

//SexPistols members initialization
var johnnyRotten = Object.create(Musician);
johnnyRotten.initialize("Johnny Rotten", "Vocals");
var sidVicious = Object.create(Musician);
sidVicious.initialize("Sid Vicious", "Bass Guitar");
var steveJones = Object.create(Musician);
steveJones.initialize("Steve Jones", "Guitar");
var paulCook = Object.create(Musician);
paulCook.initialize("Paul Cook", "Drums");

//Beatles members initialization
var johnLennon = Object.create(Musician);
johnLennon.initialize("John Lennon", "Vocals");
var paulMccartney = Object.create(Musician);
paulMccartney.initialize("Paul McCartney", "Bass Guitar");
var georgeHarrison = Object.create(Musician);
georgeHarrison.initialize("George Harrison", "Guitar");
var ringoStarr = Object.create(Musician);
ringoStarr.initialize("Ringo Starr", "Drums");

//Queen musicians initialization
var freddieMercury = Object.create(Musician);
freddieMercury.initialize('Freddie Mercury', 'Vocals');
var brianMay = Object.create(Musician);
brianMay.initialize('Brian May', 'Guitar');
var johnDeacon = Object.create(Musician);
johnDeacon.initialize('John Deacon', 'Bass Guitar');
var rogerTaylor = Object.create(Musician);
rogerTaylor.initialize('Roger Taylor', 'Drums');

// Band initiailzation
var sexPistols = Object.create(Band);
sexPistols.initialize("The Sex Pistols", "Punk Rock");
sexPistols.bandMembers.push(johnnyRotten, sidVicious, steveJones, paulCook);
var beatles = Object.create(Band);
beatles.initialize("The Beatles", "Brit Pop");
beatles.bandMembers.push(johnLennon, paulMccartney, georgeHarrison, ringoStarr);
var queen = Object.create(Band);
queen.initialize("Queen", "Glam Rock");
queen.bandMembers.push(freddieMercury, brianMay, johnDeacon, rogerTaylor);

var FrankenBand = {

  frakenName: "",
  frankenGenre: "",
  frankenMembers: "",
  newName: function(bandSelect1, bandSelect2) {
    // console.log($('#bandSelect1').val());
    // console.log($('#bandSelect2').val());
    this.frankenName = bandSelect1 + " " + bandSelect2;
    this.frankenName = beatles.bandName;  
  },
  newGenre: function(bandGenre) {
    this.frankenGenre = " " + beatles.bandGenre + " " + sexPistols.bandGenre;
  },
  newMembers: function() {
    this.frankenMembers;
  }
};

console.log(sexPistols);
console.log(beatles);
console.log(queen);
console.log(typeof bandSelect1);

$(document).ready(function() {

  console.log(typeof bandSelect1);
  
  $('select[name=bandSelect1]').change(function() {
    var bandSelect1 = $(this).val();
    $('#band1Container').css("visibility", "visible").text($('#bandSelect1').val());
    console.log(typeof bandSelect1);
  });
  
  $('select[name=bandSelect2]').change(function() {
    var bandSelect2 = $(this).val();
    $('#band2Container').css("visibility", "visible").text($('#bandSelect2').val());
  });
  
  var newFrankenBand = Object.create(FrankenBand);
  
  newFrankenBand.newName(bandSelect1, bandSelect2);
  newFrankenBand.newGenre(bandSelect1, bandSelect2);
  newFrankenBand.newMembers(bandSelect1, bandSelect2);
  
  var frankenName = newFrankenBand.frankenName;
  var frankenGenre = newFrankenBand.frankenGenre;
  var frankenMembers = newFrankenBand.frankenMembers;
  
  console.log(frankenName);
  console.log(frankenGenre);
  console.log(frankenMembers);
  
  $('form#bandSelector').submit(function(event) {
    $('#result').css("visibility", "visible").text(frankenName + " " + frankenGenre);
    event.preventDefault();
  });
  return bandSelect1, bandSelect2;
});





//console.log(band1);
// var myPackage = Object.create(Package);
// myPackage.packageWeight(weight);
// myPackage.packageClass(classSelect);
// myPackage.packageDistance(from, to);
// myPackage.packageDimensions(length, width, height);
// myPackage.packageCost();
// var cost = myPackage.cost;
// var cost = Math.pow((myPackage.distance  * myPackage.mass
//            * myPackage.volume), myPackage.classMultiplier)*.0001;