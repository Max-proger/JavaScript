if (!("a" in window)) {
    var a = 1;
}
alert(a);

// Переменная объявлена в локальной области, поэтому проверка оператором условия выведет undefind.


var b = function a(x) {
    x && a(--x);
};
alert(a);

// Переменная не объявлена в глобальной области видимости поэтому будет ошибка.


function a(x) {
    return x * 2;
}
var a;
alert(a);

// Объявление переменной со значением функции, что при выводе получиться объект [Function: a]


function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

// Элементу 2 присвоили значение 10, что подтверждается выводом 10.



function a() {
    alert(this);
}
a.call(null);

/*
this в глобальной области указывает на window. 
ECMA-262 If thisArg is null or undefined, the called function is passed the global object
 as the this value. Otherwise, the called function is passed ToObject(thisArg) as the this value.
 Таким образом, всякий раз, когда null передается call(), по умолчанию используется глобальный объект, которым является window
 */
