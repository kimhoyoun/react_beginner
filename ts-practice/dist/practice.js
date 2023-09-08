"use strict";
let count = 0;
count += 1;
// count = '갑자기 분위기 문자열'; //에러
const message = 'hello world';
const done = true;
const numbers = [1, 2, 3];
const messages = ['hello', 'world'];
// message.push(1); // 안됨.
let mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있다.
let nullableNumber = null; // number 일수도 있고 null 일수도 있음.
let color = 'red'; // red, orange, yellow 중 하나
color = 'yellow';
// color = 'green'; // 에러 
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
