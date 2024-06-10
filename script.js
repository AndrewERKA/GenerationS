document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById('userForm');
    const userDataForm = document.getElementById('userDataForm');
    const mainContent = document.getElementById('mainContent');
    const statsButton = document.getElementById('statsButton');
    const statsModal = document.getElementById('statsModal');
    const userStats = document.getElementById('userStats');
    const closeStats = document.getElementById('closeStats');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    userDataForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('Почта').value;
        const age = document.getElementById('Возрст').value;
        users.push({ Почта, Возраст });
        localStorage.setItem('users', JSON.stringify(users));
        userForm.style.display = 'none';
        mainContent.style.display = 'block';
    });

    statsButton.addEventListener('click', () => {
        userStats.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `Email: ${user.email}, Age: ${user.age}`;
            userStats.appendChild(li);
        });
        statsModal.style.display = 'block';
    });

    closeStats.addEventListener('click', () => {
        statsModal.style.display = 'none';
    });

    const contactButton = document.getElementById('contactButton');
    const contactForm = document.getElementById('contactForm');

    contactButton.addEventListener('click', () => {
        contactForm.style.display = contactForm.style.display === 'block' ? 'none' : 'block';
    });
    
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => switchGenerator(index + 1));
    });

    document.getElementById('generateEvent1').addEventListener('click', () => generateEvent('eventOutput1'));

    function switchGenerator(generator) {
        document.querySelectorAll('.generator').forEach((gen, index) => {
            gen.style.display = (index + 1 === generator) ? 'block' : 'none';
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index + 1 === generator);
        });
    }
});

function generateEvent(outputId) {
    const events = [
        "Вы нашли потерянный кошелек",
        "Вам звонит давний друг",
        "Вы находите редкую монету на улице",
        "Вас приглашают на интересную конференцию",
        "Вы выиграли билеты на концерт",
        "На улице с вами начинает разговаривать интересный незнакомец",
        "Получили неожиданный подарок",
        "Встретили знаменитость",
        "Посмотрели фильм, который давно хотели посмотреть",
        "Сделали долгожданную покупку"
    ];

    const eventOutput = document.getElementById(outputId);
    eventOutput.innerHTML = events[Math.floor(Math.random() * events.length)];
    eventOutput.style.display = 'block';
}

function generateQuote() {
    const quotes = [
        "Успех — это не конечная точка, а лишь начало следующего вызова. - Билл Гейтс",
        "Только тот, кто делает ничего, не ошибается. - Фридрих Шиллер",
        "Успех — это способность идти от поражения к поражению, не теряя энтузиазма. - Уинстон Черчилль",
        "Всегда готов к худшему, но надеюсь на лучшее. - Бенджамин Дисраэли",
        "Любовь к тому, что делаешь — это секрет успеха. - Мишель Коржак",
        "Секрет успеха — в том, чтобы начинать. - Марк Твен",
        "Действия человека — единственное истинное богатство. - Бенджамин Франклин",
        "Не бойтесь делать ошибки. Это путь к успеху. - Лоуренс Оливер",
        "Успех приходит к тем, кто ищет. - Томас Эдисон",
        "Неудачи — это просто повод начать снова, но с большим опытом. - Генри Форд"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function generateTask() {
    const tasks = [
        "Почистить комнату",
        "Написать благодарственное письмо",
        "Позвонить родителям",
        "Прочитать 10 страниц книги",
        "Сделать 30 минут физических упражнений",
        "Записать планы на неделю",
        "Выучить 5 новых слов на английском",
        "Посадить растение",
        "Приготовить здоровый обед",
        "Послушать мотивационный подкаст"
    ];

    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
}

function generateJoke() {
    const jokes = [
        "Почему утка сидит в холодильнике? Потому что холодильник сломался!",
        "Почему курица перешла дорогу? Чтобы попасть на другую сторону!",
        "Почему кошка не может стать программистом? Потому что она не знает, как работать с мышкой!",
        "Почему программисты любят природу? Потому что там нет багов!",
        "Почему программисты не ходят в горы? Потому что они боятся стековых перегрузок!",
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function generateFact() {
    const facts = [
        "Человеческое тело содержит достаточно углерода, чтобы сделать 9000 карандашей.",
        "Осьминоги имеют три сердца.",
        "Молоко бегемота розового цвета.",
        "Человеческий мозг работает быстрее, чем любой компьютер.",
        "У бабочек есть вкусовые рецепторы на ногах.",
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => switchGenerator(index + 1));
    });

    document.getElementById('generateEvent1').addEventListener('click', () => generateEvent('eventOutput1'));
    document.getElementById('generateQuote').addEventListener('click', () => {
        const quoteOutput = document.getElementById('quoteOutput');
        quoteOutput.innerHTML = generateQuote();
        quoteOutput.style.display = 'block';
    });
    document.getElementById('generateTask').addEventListener('click', () => {
        const taskOutput = document.getElementById('taskOutput');
        taskOutput.innerHTML = generateTask();
        taskOutput.style.display = 'block';
    });
    document.getElementById('generateJoke').addEventListener('click', () => {
        const jokeOutput = document.getElementById('jokeOutput');
        jokeOutput.innerHTML = generateJoke();
        jokeOutput.style.display = 'block';
    });
    document.getElementById('generateFact').addEventListener('click', () => {
        const factOutput = document.getElementById('factOutput');
        factOutput.innerHTML = generateFact();
        factOutput.style.display = 'block';
    });
    document.getElementById('generateNumber').addEventListener('click', () => {
        const minNumber = parseInt(document.getElementById('minNumber').value);
        const maxNumber = parseInt(document.getElementById('maxNumber').value);
        if (!isNaN(minNumber) && !isNaN(maxNumber) && minNumber <= maxNumber) {
            const numberOutput = document.getElementById('numberOutput');
            numberOutput.innerHTML = `Случайное число: ${generateRandomNumber(minNumber, maxNumber)}`;
            numberOutput.style.display = 'block';
        } else {
            alert('Пожалуйста, введите корректные значения для минимального и максимального чисел.');
        }
        
    });
});

function switchGenerator(generator) {
    document.querySelectorAll('.generator').forEach((gen, index) => {
        gen.style.display = (index + 1 === generator) ? 'block' : 'none';
    });

    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[generator - 1].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactUsButton");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
