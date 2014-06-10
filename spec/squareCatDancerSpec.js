describe("squareCatDancer", function() {

  var squareDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();


    squareDancer =new SquareCatDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it animate", function() {
    sinon.spy(squareDancer.$node, 'animate');
    squareDancer.step();
    expect(squareDancer.$node.animate.called).to.be.true;
  });

  it("should have a step function that moves the dancer", function() {
    sinon.spy(squareDancer.$node, 'animate');
    var beforeTop = squareDancer.top;
    var beforeLeft = squareDancer.left;

    squareDancer.step();
    expect(squareDancer.top).to.not.equal(beforeTop);

    squareDancer.step();
    expect(squareDancer.left).to.not.equal(beforeLeft);

    beforeTop = squareDancer.top;
    beforeLeft = squareDancer.left;

    squareDancer.step();
    expect(squareDancer.top).to.not.equal(beforeTop);

    squareDancer.step();
    expect(squareDancer.left).to.not.equal(beforeLeft);
  });

  it("should add squaredancer class to the dancer's element", function() {
    expect(squareDancer.$node.hasClass('squaredancer')).to.be.true;
  });

  it("should add squarecatdancer class to the dancer's element", function() {
    expect(squareDancer.$node.hasClass('squarecatdancer')).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(squareDancer, "step");
      expect(squareDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
    });
  });
});
