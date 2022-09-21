const candles = [{
        title: "Свеча Гарри Поттер",
        notes: ["Тыква", "карамель", "кофе"],
        description: "Поттер, учишься балету? Представь, что ты на завтраке в Хогсмиде, повсюду аромат тыквенного сока, сливочного пива, карамели и кофе. Обволакивающий, тёплый, уютный, просто отвал всего. Пахнет, как твой настоящий друг.",
        collection: "Гарри Поттер",
        fragrance: "Десертные",
        price: 390,
        img: "./images/garry.jpg",
        intensity: 5,
    },
    {
        title: "Свеча 'Рон Уизли'",
        notes: ["Выпечка", "какао", "ваниль"],
        description: "Тёплый и сладкий аромат домашней выпечки, уюта и веснушек, как в доме у миссис Уизли. Если уткнуться носиком носом в бордовый свитер Рона, который связала ему матушка, от него будет пахнуть именно так.Эта свеча точно разыграет твой аппетит!",
        collection: "Гарри Поттер",
        fragrance: "Десертные",
        price: 390,
        img: "./images/ron.jpg",
        intensity: 5,

    },
    {
        title: "Свеча 'Гермиона'",
        notes: ["Шоколад", "печенье"],
        description: "Малышка Грейнджер пахнет настоящим домашним шоколадным печеньем, заклинаниями, которые нужно произносить правильно, а также отвагой и добротой.",
        collection: "Гарри Поттер",
        fragrance: "Десертные",
        price: 390,
        img: "./images/germiona.jpg",
        intensity: 5,

    },
    {
        title: "Свеча 'Драко'",
        notes: ["Яблоко", "пачули"],
        description: "Мужественный и пленительный аромат с нотками сочного зелёного яблока. Такой же как и сам Драко. Если вы хотите, чтобы у вас дома пахло секси мужиком, вам точно нужна эта свеча.",
        collection: "Гарри Поттер",
        fragrance: "Мужественные",
        price: 390,
        img: "./images/drako.jpg",
        intensity: 4,

    },
    {
        title: "Свеча 'Профессор Снейп'",
        notes: ["Кедр", "лаванда", "лимон"],
        description: "Снейп.. Как мы ненавидели его в начале, и как мы полюбили его в конце. Потрясающий, многогранный, бесчувственный и такой любящий одновременно. Все ради любви, даже после стольких лет.",
        collection: "Гарри Поттер",
        fragrance: "Природные",
        price: 390,
        img: "./images/sneip.jpg",
        intensity: 4,

    },
    {
        title: "Свеча 'Ты пахнешь, как любовь.'",
        notes: ["Розы", "кедр", "бергамот"],
        description: "Что такое любовь, и как она пахнет? Яркий аромат свежесрезанных роз и глубокий аромат кедра. Как Инь и Янь, как две половины одного целого, как первое свидание, первые подаренные розы, как улицы в день всех влюбленных!",
        collection: "Без персонажей",
        fragrance: "Цветочные",
        price: 390,
        img: "./images/pahnesh.jpg",
        intensity: 5,

    },
    {
        title: "Свеча 'Пойдем в Кино?'",
        notes: ["Карамель", "шоколад", "лимон"],
        description: "Аромат момента из детства, когда вы с родителями пошли в кино. Ты помнишь этот фильм, запах попкорна и непередаваемый детский восторг от громких звуков и огромного экрана!",
        collection: "Без персонажей",
        fragrance: "Десертные",
        price: 390,
        img: "./images/kino.jpg",
        intensity: 4,

    },
    {
        title: "Свеча 'Зажги,когда все достало'",
        notes: ["Бергамот", "петитгрейн", "лаванда"],
        description: "Та свеча, которая поможет тебе расслабиться после ужасного дня. Просто подожги фитиль, как мог бы поджечь всех, кто тебя выбесил,и смотри на это игривое пламя.",
        collection: "Без персонажей",
        fragrance: "Свежие",
        price: 390,
        img: "./images/dostalo.jpg",
        intensity: 3,

    },
    {
        title: "Свеча 'Джек Воробей'",
        notes: ["Белый чай", "яблоко"],
        description: "Прошу меня извинить, но вообще-то КАПИТАН Джек Воробей. Много ли нужно говорить про этого персонажа? Все мы его прекрасно знаем, любим за харизму, мастерство выбираться из самых невероятных ситуаций и великолепное чувство юмора. Разумеется КАПИТАН пахнет карибским морем, черной жемчужиной и рисунком ключа.",
        collection: "Фильмы",
        fragrance: "Мужественные",
        price: 390,
        img: "./images/vorobey.jpg",
        intensity: 5,

    },
    {
        title: "Свеча 'Шерлок'",
        notes: ["Ваниль", "табак", "черная смородина"],
        description: "Вы тоже, после знакомства с шерлоком начинали повсеместно использовать метод дедукции и замечать то, что не замечают другие смертные? А в чертоги разума погружаетесь? А все потому, что на классных персонажей хочется равняться. А пахнет он, как настоящий англичанин, чаем, табаком и лимоном.",
        collection: "Сериалы",
        fragrance: "Десертные",
        price: 390,
        img: "./images/sherlok.jpg",
        intensity: 4,

    },
    {
        title: "Свеча 'Дарт Вейдер'",
        notes: ["Амбра", "цветок апельсина", "карамель"],
        description: "Почему нам всем так нравятся плохие парни? От них исходит какой-то умопомрачительный вайб. Вот это прям про Дарта, глубокий аромат горького шоколада и табака, такой же тёмный и мрачный, как и сам Дарт. Переходи на темную сторону!",
        collection: "Фильмы",
        fragrance: "Десертные",
        price: 390,
        img: "./images/dart.jpg",
        intensity: 5,

    },
    {
        title: "Свеча 'Принцесса Лея'",
        notes: ["Белый чай", "мох", "черная смородина"],
        description: "Представьте мудрую и сильную принцессу Лею. Как бы она пахла? Мы думаем, что аромат должен быть сложным и интересным. Кислинка малины и нежность пачули - perfect match!",
        collection: "Фильмы",
        fragrance: "Природные",
        price: 390,
        img: "./images/leya.jpg",
        intensity: 3,

    },
];

// товары, которые мы будем показывать пользователю, после пременения поиска/фильтров
const searchMatch = [...candles];

// шаблон для товара
const cardTemplate = document.querySelector('#item-template');
// переменная с контейнером для товара
const container = document.querySelector('#shop-items');



// Текст, если ничего не найдено
const nothingFound = document.querySelector("#nothing-found");

// функция отрисовки карточек
function addСard(candles) {

    // Сбрасываем текст "Ничего не найдено" после предыдущего поиска
    nothingFound.textContent = "";
    // И чистим контейнер с товарами на случай, если там что-то было
    container.innerHTML = "";

    // Отрисовываем товары из переданного параметра
    candles.forEach((candle) => {

        container.append(createСard(candle));

    });
    if (!candles.length) {
        nothingFound.textContent = "Ничего не найдено";
    }

}

// вызов функции для начальной отрисовки карточек товаров
addСard(candles);


// функция создания верстки карточки
function createСard(cardItem) {

    const { title, notes, description, collection, fragrance, img, price, intensity } = cardItem;
    // копируем основу товара из шаблона
    const copyCard = cardTemplate.content.cloneNode(true);

    copyCard.querySelector('h1').textContent = title;
    copyCard.querySelector('p').textContent = description;
    copyCard.querySelector(".collection").textContent = collection;
    copyCard.querySelector(".fragrance").textContent = fragrance;
    copyCard.querySelector('img').src = img;
    copyCard.querySelector('.price').textContent = `${price}руб`;
    copyCard.querySelector(".intensity").textContent = intensity;



    // Находим шаблон для тегов
    const notesHolder = copyCard.querySelector(".notes");

    // Отрисовываем теги для товара
    notes.forEach((note) => {
        const element = document.createElement("span");
        element.textContent = note;
        element.classList.add("note");
        notesHolder.append(element);
    });


    return copyCard;
}



const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');


// функция поиска
function searchCard() {

    // причесываем значение инпута
    const searchString = searchInput.value.trim().toLowerCase();

    // ищем все товары, в title которых есть searchString
    searchMatch = items.filter((element) =>
        element.title.toLocaleLowerCase().includes(searchString)
    );

    // Отрисовываем результаты поиска
    addСard(searchMatch);

}

// обработчик события при клике на кнопку
searchButton.addEventListener("click", searchCard);
// обработчик события при нажатии enter в input
searchInput.addEventListener("search", searchCard);