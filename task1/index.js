// переменная с типом число
var myNumber;
// переменная с типом строка
var myString;
// переменная с типом 2 или 3
var twoOrThree;
// переменная с типом строка или булево или undefined
var StringOrBoolOrNothing;
// переменная с типом массива строк
var arrayOfString;
// переменная с типом массива строк или чисел
var arrayOfStringOrNumbers;
// переменная с типом массива (кортежа) из трех элементов: первый - строка, второй число, третий объект с полями id (число) и label (строка)
var myTuple;
// переменная с типом объекта ключи которого любая строка, а значения строка или число
var myCollectionOfNumberOrString;
// Переписать объект на enum
var USER_ROLES = {
    ADMIN: 'admin',
    GUEST: 'guest',
    UNKNOWN: 'unknown'
};
var roles;
(function (roles) {
    roles["ADMIN"] = "admin";
    roles["GUEST"] = "guest";
    roles["UNKNOWN"] = "unknown";
})(roles || (roles = {}));
;
;
;
// Затипизировать входящие параметры "x" и "y" как числа и возвращаемое значение
var sumTwoNumbers = function (x, y) { return x + y; };
// Затипизировать входящие параметры "x", "y" и "z" как числа. Параметр "z" должен быть необязательным. Написать корректную реализацию функции с учетом необязательности "z"
var sumThreeNumbers = function (x, y, z) {
    return z ? x + y + z : x + y;
};
// Написать перегрузку и реализацию функции sum такую что: 1) если на вход приходят два числа, то возвращается число 2) если на входит приходит строка и число или обе строки, то возвращается строка
function sum(x, y) { return x + y; }
function sum(x, y) { return "".concat(x).concat(y); }
// Затипизировать this
function getName(id) {
    var _a;
    return (_a = this[id]) === null || _a === void 0 ? void 0 : _a.name;
}
// Затипизировать возвращаемое значение
var sayHi = function () {
    console.log('hi');
};
// переменная с типом строка, начинающаяся с префикса "id:" и дальше числовое id. Например, let myId = 'id:2'
var prefixedId;
// Нам точно известно, что в качестве параметра "x" придет число. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
var f = function (x) {
    // На данной строке нужно исправить текущую ошибку путем приведения типа "x" от текущего число или строка к только число
    return Number.parseInt("".concat(x));
};
// переменная с типом массива строк, который нельзя изменять (например, пушить в него значения)
var readonlyStringArray;
// Сделать переменную неизменяемой (чтобы на уровне типизации ее нельзя было мутировать)
var USER = {
    id: 1,
    name: 'Alex'
};
var getArea = function (shape) {
    if ('radius' in shape) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return Math.pow(shape.side, 2);
};
// У функции toLowerCase ошибка типизации т.к. value может быть числом, а у числа нету метода toLowerCase. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно решать проблему любыми двумя способами.
var toLowerCase1 = function (value) {
    return typeof value === 'number' ? value : value.toLowerCase();
};
var toLowerCase2 = function (value) {
    return typeof value === 'number' ? value : value.toLowerCase();
};
// У функции log ошибка типизации, т.к. метод log есть только у класса Logger. Изменять типизацию функции (параметров или возвращаемого значения) нельзя.
// Нужно исправить функцию так, чтобы метод лог вызывался только в случае если value - инстанс класса Logger, иначе логировать value c помощью console.log
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function () { };
    ;
    return Logger;
}());
var log = function (value) {
    if (value instanceof Logger)
        value.log();
};
