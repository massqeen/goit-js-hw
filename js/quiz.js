alert((20e-1)['toString'](2)); //- ответ "10" почему?

// Что выведет этот код? Ответ Uncaught ReferenceError: f is not defined почему?
let f = (function (x) {
  alert(x);
})(
  (function () {
    f(1);
  })(),
);

//Почему этот код выводит ошибку?
('use strict');
a = null + undefined;
alert(a);

//Что выведет этот код? Посмотрите на него очень внимательно, в этом вопросе есть подвох. - почему ошибка?
let a = [1, 2](function () {
  alert(a);
})();

//Чему равно a + b + c? Ответ 111
let a = 1;
let b = {
  toString() {
    return '1';
  },
};
let c = 1;

//Чему будет равен this? Почему undefined?
let user = {
  sayHi: function () {
    alert(this);
  },
};
(user.sayBye = user.sayHi)();

//Есть ли различия между проверками: - почему такой ответ?
if (x <= 100) {
}
// и
if (!(x > 100)) {
}
//Да, существует значение x, для которого они работают по-разному.
