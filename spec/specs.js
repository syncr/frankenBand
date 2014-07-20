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
    it("build an band object containing core band values(name/genre)", function() {
      var newBand = Object.create(Band);
      // var newMusician = Object.create(Musician);

      newBand.initialize("The Sex Pistols", "Punk Rock");
      newBand.bandName.should.equal("The Sex Pistols");
      newBand.bandGenre.should.equal("Punk Rock");
      newBand.bandMembers.should.eql([])
      

      // newMusician.initialize("Sid Vicious", "Guitar");
      // newMusician.memberName.should.equal("Sid Vicious");
      // //newMusician.instrument.should.equal("Guitar");

      // newMusician.initialize("John Lydon", "Vocal");
      // newMusician.memberName.should.equal("John Lydon");
      // //newMusician.instrument.should.equal("Vocals");

    });
  });


});