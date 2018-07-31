import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });
  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
  it('should correct determine if the triangle is equilateral triangle', function() {
    var equalTriangle = new Triangle(3,3,3);
    expect(equalTriangle.checkEqual()).toEqual("this is a equilateral triangle");
  });
  it('should correctly determine whether three sides are not a triangle', function() {
    var triangle = new Triangle(12,3,3)
    expect(triangle.checkType()).toEqual("not a triangle");
  });

});
