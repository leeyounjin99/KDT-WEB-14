// 실습 1.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);

console.log(rec1.getArea());

//////////////////////////////////////////

// 실습 2.

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return this.width * this.height;
  }

  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

const rec2 = new Rectangle(3, 4);
console.log(rec2.getDiagonal());

/////////////////////////////////////////
class Triangle extends Shape {
  constructor(base, height) {
    super(base, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(0, 0);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

let rectangle = new Rectangle(3, 4);
console.log("Rectangle 넓이:", rectangle.getArea());

let triangle = new Triangle(3, 4);
console.log("Triangle 넓이:", triangle.getArea());

let circle = new Circle(3, 4, 3);
console.log("Circle 넓이:", circle.getArea());
