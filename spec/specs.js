describe("Musician", function() {
  describe("initialize", function() {
    it("build an object containing musician values", function() {
      var newMusician = Object.create(Musician);
      newMusician.initialize("Sid Vicious", "Guitar");
      newMusician.memberName.should.equal("Sid Vicious");
      newMusician.instrument.should.equal("Guitar");
    });
  });
});
describe("Band", function() {
  describe("initialize", function() {
    it("build a band object containing core band values(name/genre)", function() {

      var newMusician = Object.create(Musician);
      var newBand = Object.create(Band);

      johnnyRotten.initialize("Johnny Rotten", "Vocals");
      sidVicious.initialize("Sid Vicious", "Bass Guitar");

      newBand.initialize("The Sex Pistols", "Punk Rock");
      newBand.bandMembers.push(johnnyRotten, sidVicious);
      
      newBand.bandName.should.equal("The Sex Pistols");
      newBand.bandGenre.should.equal("Punk Rock");
      
      newBand.bandMembers.should.eql(
        [{instrument: "Bass Guitar", memberName: "Sid Vicious"},{instrument: "Vocals", memberName: "Johnny Rotten"}]);

    });
  });
  // describe("initialize", function() {
  //   it("build an band object containing core band values(name/genre)", function() {
  //     var newBand = Object.create(Band);
  //     // var newMusician = Object.create(Musician);

  //     newBand.initialize("The Sex Pistols", "Punk Rock");
  //     newBand.bandName.should.equal("The Sex Pistols");
  //     newBand.bandGenre.should.equal("Punk Rock");
  //     newBand.bandMembers.should.eql([])

});