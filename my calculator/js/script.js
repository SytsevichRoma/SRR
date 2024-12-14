const out = document.querySelector('.calc-screen p');
if (!out) {
    alert('Елемент з класом calc-screen p не знайдено.');
}

let a = ''; // Перша частина числа
let b = ''; // Друга частина числа
let sign = ''; // Оператор
let finish = false; // Чи завершено обчислення

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;

    const key = event.target.textContent;

    if (key === '=') {
        if (a && b && sign) {
            // Виконуємо операцію
            if (sign === '+') a = (+a + +b).toString();
            if (sign === '-') a = (a - b).toString();
            if (sign === 'X') a = (a * b).toString();
            if (sign === '/') a = (a / b).toString();

            out.textContent = a; // Виводимо результат
            b = '';
            sign = '';
            finish = true;
        }
    } else if (digit.includes(key)) {
        if (finish) {
            a = key;
            finish = false;
        } else {
            a += key;
        }
        out.textContent = a;
    } else if (action.includes(key)) {
        if (sign && b) {
            if (a === '') a = b;
            if (sign === '+') a = (+a + +b).toString();
            if (sign === '-') a = (a - b).toString();
            if (sign === 'X') a = (a * b).toString();
            if (sign === '/') a = (a / b).toString();
        }

        sign = key;
        b = a;
        a = '';
        out.textContent = sign;
    }
};
