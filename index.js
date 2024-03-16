let equn = document.querySelector('.display input');
let button = document.querySelectorAll('button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
        action(event.target.id);
    });
};

document.addEventListener('keydown', (event) => {
    action(event.key);
});
equn.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter' || event.key == ' '){
        action(event.key);
    }
    else event.stopPropagation();
})
function action(evt) {
    let check = evt;
    switch (check) {
        case (' '):
            equn.value = '';
            temp.innerHTML = '=';
            break;
        case ('Backspace'):
            let value = equn.value;
            equn.value = value.slice(0, - 1);
            break;
        case ('%'):
            equn.value += '%';
            break;
        case ('/'):
            equn.value += '/';
            break;
        case ('7'):
            equn.value += '7';
            break;
        case ('8'):
            equn.value += '8';
            break;
        case ('9'):
            equn.value += '9';
            break;
        case ('*'):
            equn.value += '*';
            break;
        case ('4'):
            equn.value += '4';
            break;
        case ('5'):
            equn.value += '5';
            break;
        case ('6'):
            equn.value += '6';
            break;
        case ('-'):
            equn.value += '-';
            break;
        case ('1'):
            equn.value += '1';
            break;
        case ('2'):
            equn.value += '2';
            break;
        case ('3'):
            equn.value += '3';
            break;
        case ('+'):
            equn.value += '+';
            break;
        case ('.'):
            equn.value += '.';
            break;
        case ('0'):
            equn.value += '0';
            break;
        case ('Enter'):
            equn.value = eval(equn.value);
            break;
    }
};
