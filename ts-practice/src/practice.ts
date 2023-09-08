let count = 0;
count += 1;
// count = '갑자기 분위기 문자열'; //에러

const message: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1,2,3];
const messages: string[] = ['hello', 'world'];

// message.push(1); // 안됨.

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있다.
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음.

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나
color = 'yellow';
// color = 'green'; // 에러 

function sum (x: number, y: number): number {
    return x + y;
}

sum(1,2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);


interface Shape {
    getArea(): number; //Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자이다.
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    
    constructor(private width: number, private height: number ) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10,5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
});

interface Person {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
  }
  interface Developer extends Person {
    skills: string[];
  }
  
  const person: Person = {
    name: '김사람',
    age: 20
  };
  
  const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
  };
  
  const people: Person[] = [person, expert];