// 기본형
let age: number;
age = 12;

let userName: string;
userName = "jaeho";

let isInstructor: boolean;
isInstructor = true;

// object or array
let hobbies: string[];
hobbies = ['test1', 'test2', 'test3'];

// Type alise
type Person = {
    name: string,
    age: number
}

let person: Person;
person = {
    name: 'Jaeho',
    age: 27,
    // test: 'asdf'
}
let people: Person[];

// Type inference
let course = "String 값만 들어갈 수 있다.";
// course = 1234;

// union Type
let unionType: string | number = "String 과 number 값이 들어갈 수 있다.";
unionType = 1234;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
// updatedArray[0].split('');

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
