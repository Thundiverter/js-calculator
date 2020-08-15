let calcHeader = document.querySelector('#result');

isCounting = false;
let counting = {
    num1: '',
    action: '',
    num2: '',
    lastresult: 0
}

function showText() {
    if (isCounting == true) {
        if (counting.action == '') { calcHeader.innerText = '\n' + counting.num1 }
        if (counting.num2 == '' && counting.action != '') { calcHeader.innerText = counting.num1 + ' ' + counting.action + '\n' + counting.num1 }
        if (counting.num2 != '') { calcHeader.innerText = counting.num1 + ' ' + counting.action + ' ' + counting.num2 + '\n' + counting.num2 }
    } else { calcHeader.innerText = '\n' + counting.lastresult }
}
showText()

function addNum (number) {
    isCounting = true;
    if (counting.action == '') {
        if (counting.num1 != '0' && counting.num1 != '-0') {
            counting.num1 = counting.num1 + number;
        }
        if (counting.num1 == '0') { counting.num1 = number; }
        if (counting.num1 == '-0') { counting.num1 = '-' + number; }
    } else {
        counting.num2 = counting.num2 + number;
    }
    showText()
}

function addAction(action) {
    let calcactiontemp;
    counting.action = '';
    counting.num2 = '';
    if (action == 'P') { calcactiontemp = '+' }
    if (action == 'S') {
        if (counting.num1 == '0') { counting.num1 = '-0' }
        else { calcactiontemp = '-' }
    }
    if (action == 'M') { calcactiontemp = '×' }
    if (action == 'D') { calcactiontemp = '÷' }
    if (counting.num2 == '') {
        counting.action = calcactiontemp;
    }
    else {
        showResult()
        counting.action = calcactiontemp;
    }
    showText()
}

document.querySelector('#clear').addEventListener('click', function() {
    counting.num1 = '';
    counting.action = '';
    counting.num2 = '';
    counting.lastresult = 0;
    isCounting = false;
    showText()
});

function showResult() {
    if (counting.action == '' || counting.num2 == '') {
        counting.lastresult = Number(counting.num1);
    }
    else {
        if (counting.action == '+') { counting.lastresult = Number(counting.num1) + Number(counting.num2) }
        if (counting.action == '-') { counting.lastresult = Number(counting.num1) - Number(counting.num2) }
        if (counting.action == '×') { counting.lastresult = Number(counting.num1) * Number(counting.num2) }
        if (counting.action == '÷') { counting.lastresult = Number(counting.num1) / Number(counting.num2) }
    }
    isCounting = false;
    counting.num1 = counting.lastresult;
    showText()
}