function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
   return `(${this.x},${this.y})`
}

function Side(l) {
  this.length = l
}

function Shape() {

}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y)
}

function Circle(r) {
  this.radius = r
  Shape.call(this)
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.diameter = function () {
  return this.radius * 2
}

Circle.prototype.circumference = function () {
  return 2 * this.radius * Math.PI
}

Circle.prototype.area = function () {
  return Math.PI * this.radius ** 2
}

Polygon.prototype.perimeter = function () {
  let perimeter = 0
  this.sides.forEach( s => (perimeter += s.length))
  return perimeter
}

Polygon.prototype.numberOfSides = function () {
  let numOfSides = 0
  this.sides.forEach( s => (numOfSides += 1))
  return numOfSides
}

function Quadrilateral(a,b,c,d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

function Rectangle(a,b) {
  Quadrilateral.call(this, a, b, a, b)
  this.width = a
  this.height = b
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function () {
  return this.width * this.height
}

function Square(x) {
  Rectangle.call(this, x, x)
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.listProperties = function(prop) {
  return this.hasOwnProperty(prop)
}

function Triangle(a,b,c) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c)])
}

Triangle.prototype = Object.create(Polygon.prototype)
