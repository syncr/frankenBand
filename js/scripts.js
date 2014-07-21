

var Musician = {
  initialize: function(memberName, instrument) {
    this.memberName = memberName;
    this.instrument = instrument;
  }
}

var Band = {
  initialize: function(bandName, bandGenre, Musician){
    this.bandName = bandName;
    this.bandGenre = bandGenre;
    this.bandMembers = [];

  }
}

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
brianMay.initialize('Brian May','Guitar');

var johnDeacon = Object.create(Musician);
johnDeacon.initialize('John Deacon','Bass Guitar');

var rogerTaylor = Object.create(Musician);
rogerTaylor.initialize('Roger Taylor','Drums');

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


var frankenBand = {
  newName : function(bandSelect1, bandSelect2){

  },
  newGenre : function(){

  },
  newMembers: function(){

  }

}


console.log(sexPistols);
console.log(beatles);
console.log(queen);


$(document).ready(function(){
  
  $('select[name=bandSelect1]').change(function (){
    $('#band1Container').css("visibility","visible").text($('#bandSelect1').val());
  });
   
  $('select[name=bandSelect2]').change(function (){
    $('#band2Container').css("visibility","visible").text($('#bandSelect2').val());
  });

  $('form#bandSelector').submit(function(event){
    event.preventDefault();
    $('#result').css("visibility","visible").text("ack. It's hideous");
  
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
  });
