abstract class Shape{ // to provide common features for all shapes
    public shapeName:string;

    constructor(name: string){
        this.shapeName = name;
    }

    public abstract calculateArea(): number;

    public abstract calculatePerimeter(): number;
}

interface Volume{ //to provide additional functionality for some shapes
    calculateVolume(): number;
}

class Circle extends Shape{
    private radius: number;


    constructor(radius: number){
        super("Circle");
        this.radius = radius;
    }

    public calculateArea(): number {
        // calculate the Area
        return Math.PI*this.radius*this.radius;
    }

    public calculatePerimeter(): number {
        return  2*Math.PI*this.radius;
    }
}

class Rectangle extends Shape {
    private length!: number;
    private width!: number;

    constructor(length: number, width: number) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }

    public calculateArea(): number {
        return this.length * this.width;
    }

    public calculatePerimeter(): number {
        return 2 * (this.length + this.width);
    }
}

class Square extends Shape{
    private side!: number;
 
    constructor(side: number){
        super("Square");
        this.side = side;
    }
    public calculateArea(): number {
        return this.side * this.side;
    }
    public calculatePerimeter(): number {
        return 4 * this.side;
    }

}

class Cube extends Shape implements Volume {
    private side!: number;

    constructor(side: number){
        super("Cube");
        this.side = side;
    }
    public calculateArea(): number {
        return 6 * this.side * this.side;
    }
    public calculatePerimeter(): number {
        return 12 * this.side;
    }
    public calculateVolume(): number {
        return this.side * this.side * this.side;
    }

 
}

class Cylinder extends Shape implements Volume{
    private radius!: number;
    private height!: number;

    constructor(radius: number, height: number){
        super("Cylinder");
        this.radius = radius;
        this.height = height;
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius + 2 * Math.PI * this.radius * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius + 2 * Math.PI * this.height;
    }
    public calculateVolume(): number {
        return Math.PI * this.radius * this.radius * this.height;
    }

  
}

// create object for each shape
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);
let square = new Square(5);
let cube = new Cube(5);
let cylinder = new Cylinder(5, 10);

console.log(circle);
console.log("Area: " + circle.calculateArea());
console.log("Perimeter: " + circle.calculatePerimeter());


console.log(rectangle);
console.log("Area: " + rectangle.calculateArea());
console.log("Perimeter: " + rectangle.calculatePerimeter());


console.log(square);
console.log("Area: " + square.calculateArea());
console.log("Perimeter: " + square.calculatePerimeter());


console.log(cube);
console.log("Area: " + cube.calculateArea());
console.log("Perimeter: " + cube.calculatePerimeter());


console.log(cylinder);
console.log("Area: " + cylinder.calculateArea());
console.log("Perimeter: " + cylinder.calculatePerimeter());

console.log(Shape.prototype.constructor);
console.log(circle.constructor);
console.log(rectangle.constructor);
console.log(square.constructor);
