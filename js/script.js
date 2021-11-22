const click = document.querySelector('.btn').onclick = () => {
    const input = document.querySelector('.input_date');
    const btn = document.querySelector('.btn');

    const trueAnswers = ['6 мая', '6мая', '6МАЯ', '6 МАЯ', '6май', '6 май', '6МАЙ', '6 МАЙ','6 5', '6.5', '06.05', '6.05', '06 05', '6 05', '06/05', '6/05', '6/5', '0605', '605'];
    const fasleAnswerMessages = ['Мимо', 'Неа', 'Нет', 'Промах!', 'Я в тебя верю', 'Давай еще разок попробуй', 'Соберись', 'Лол', 'Ахахахах, нет!', 'Кек', 'Дам подсказку, это число месяца', 'Ололололо', 'с 365-го раза точно получится', 'Ну ты серьезно?', 'Не выдумывай!', 'НИТ :c', 'Стыдно должно быть!', 'Загляни в календарь, там есть эта дата', 'Интересный выбор'];

    const p = document.querySelector('.text');
    

    for (let elem of trueAnswers) {
        if (input.value === elem) {
            input.classList.add('true');
            p.classList.add('true-color')
            return p.innerHTML = 'БЛЯТЬ!!! НУ НАКОНЕЦ-ТО!!! АХУЕТЬ!!!!! УРА ЕБАТЬ!!!!!!'
        }

    }

    if(input.value === '' || /^\s+$/.test(input.value)) {
        input.value = ''
        input.focus();
        input.classList.add('invalid');
        p.classList.add('invalid-color')
        return p.innerHTML = 'Ну введи ты хоть что-нибудь, Хоспаде!';
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomElem = getRandomIntInclusive(0, fasleAnswerMessages.length - 1);

    input.value = '';
    input.focus();
    input.classList.add('invalid');
    p.classList.add('invalid-color')
    return p.innerHTML = fasleAnswerMessages[randomElem];
}

(function() {
    document.querySelector('.input_date').addEventListener('keydown', function(e) {
      if (e.keyCode === 13) {
        click()
      }
    });
  })();