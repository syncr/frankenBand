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