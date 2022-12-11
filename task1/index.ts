// переменная с типом число
let myNumber: number;

// переменная с типом строка
let myString: string;

// переменная с типом 2 или 3
let twoOrThree: 2 | 3;

// переменная с типом строка или булево или undefined
let StringOrBoolOrNothing: string | boolean | undefined;

// переменная с типом массива строк
let arrayOfString: string[]

// переменная с типом массива строк или чисел
let arrayOfStringOrNumbers: string[] | number[]

// переменная с типом массива (кортежа) из трех элементов: первый - строка, второй число, третий объект с полями id (число) и label (строка)
let myTuple: Array<string & number & {id: number, label: string}>;

// переменная с типом объекта ключи которого любая строка, а значения строка или число
let myCollectionOfNumberOrString: any;

// Переписать объект на enum
const USER_ROLES = {
  ADMIN: 'admin',
  GUEST: 'guest',
  UNKNOWN: 'unknown',
};

enum roles {
    ADMIN = 'admin',
    GUEST = 'guest',
    UNKNOWN = 'unknown',
}

// Создать аналогичные друг другу интерфейс и тип: объект со свойствами id типа число и name типа строка
type User1 = {id: number, name: string};
interface User2 {
    id: number,
    name: string,
};

// "Наследуясь" от предыдущих типов User1 и User2 создать новые аналогичные тип и интерфейс у которых помимо id и name будет еще свойство isAdmin с типом true
type Admin1 = User1 & {isAdmin: boolean};
interface Admin2 extends User2 {idAdmin: true};

// Создать аналогичные друг другу интерфейс и тип: объект с обязательным неизменяемым свойством id типа число, обязательным полем name типа строка и опциональным полем gender с типом либо 'male' либо 'female'
type Guest1 = {id: number, name: string, gender? : 'male' | 'female'};
interface Guest2 {
    id: number, name: string, gender? : 'male' | 'female'
};

// Затипизировать входящие параметры "x" и "y" как числа и возвращаемое значение
const sumTwoNumbers = (x: number, y: number): number => x + y;

// Затипизировать входящие параметры "x", "y" и "z" как числа. Параметр "z" должен быть необязательным. Написать корректную реализацию функции с учетом необязательности "z"
const sumThreeNumbers = (x: number, y: number, z?: number): number => {
    return z ? x+y+z : x +y ;
};

// Написать перегрузку и реализацию функции sum такую что: 1) если на вход приходят два числа, то возвращается число 2) если на входит приходит строка и число или обе строки, то возвращается строка
function sum(x: number, y: number): number {return x+y}
function sum(x: string, y: number | string): string {return `${x}${y}`}


// Затипизировать this
function getName(this: {[id: string]: {name: string}}, id: string) {
  return this[id]?.name;
}

// Затипизировать возвращаемое значение
const sayHi = (): void => {
  console.log('hi');
}

// Тип значение которого может быть тип Book или Car
interface Book {}
interface Car {}
type BookOrCar = Book | Car;

// Используя типы House, City, Country создать новый тип FullAddress который включает все свойства вышеперечисленных
interface House { apartment: number }
interface City { zipCode: number }
interface Country { name: string }
type FullAddress = House & City & Country;

// переменная с типом строка, начинающаяся с префикса "id:" и дальше числовое id. Например, let myId = 'id:2'
let prefixedId: `id:${number}`

// Нам точно известно, что в качестве параметра "x" придет число. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
const f = (x: number | string): number => {
  // На данной строке нужно исправить текущую ошибку путем приведения типа "x" от текущего число или строка к только число
  return Number.parseInt(`${x}`);
}

// переменная с типом массива строк, который нельзя изменять (например, пушить в него значения)
let readonlyStringArray: readonly string[];

// Сделать переменную неизменяемой (чтобы на уровне типизации ее нельзя было мутировать)
const USER: Readonly<{readonly id: number, readonly name: string}> = {
  id: 1,
  name: 'Alex',
};

// Написать реализацию функции getArea, чтобы она рассчитывала и возвращала площадь фигуры
interface Circle { type: 'circle', radius: number }
interface Square { type: 'square', side: number }

const getArea = (shape: Circle | Square): number => {
  if('radius' in shape){
    return Math.PI * Math.pow(shape.radius, 2);
  }
  return Math.pow(shape.side, 2);
}

// У функции toLowerCase ошибка типизации т.к. value может быть числом, а у числа нету метода toLowerCase. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно решать проблему любыми двумя способами.
const toLowerCase1 = (value: string | number): number | string => {
    return typeof value === 'number' ? value : value.toLowerCase();
}

const toLowerCase2 = (value: string | number): number | string => {
    return typeof value === 'number' ? value : value.toLowerCase();
}


// У функции log ошибка типизации, т.к. метод log есть только у класса Logger. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно исправить функцию так, чтобы метод лог вызывался только в случае если value - инстанс класса Logger, иначе логировать value c помощью console.log
class Logger {
  log() {};
}

const log = (value: Logger | string | number | boolean) => {
  if(value instanceof Logger) value.log()
}