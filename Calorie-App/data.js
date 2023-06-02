const food = [
  {
    name: "Яблоко",
    calories: 52,
    grams: 100,
  },
  {
    name: "Апельсин",
    calories: 47,
    grams: 100,
  },
  {
    name: "Груша",
    calories: 57,
    grams: 100,
  },
  {
    name: "Ананас",
    calories: 50,
    grams: 100,
  },
  {
    name: "Абрикос",
    calories: 48,
    grams: 100,
  },
  {
    name: "Персик",
    calories: 39,
    grams: 100,
  },
  {
    name: "Папайя",
    calories: 39,
    grams: 100,
  },
  {
    name: "Нектарин",
    calories: 44,
    grams: 100,
  },
  {
    name: "Авокадо",
    calories: 200,
    grams: 100,
  },
  {
    name: "Банан",
    calories: 89,
    grams: 100,
  },
  {
    name: "Черника",
    calories: 57,
    grams: 100,
  },
  {
    name: "Черная⠀смородина",
    calories: 44,
    grams: 100,
  },
  {
    name: "Красная⠀смородина",
    calories: 43,
    grams: 100,
  },
  {
    name: "Белая⠀смородина",
    calories: 42,
    grams: 100,
  },
  {
    name: "Брусника",
    calories: 43,
    grams: 100,
  },
  {
    name: "Голубика",
    calories: 35,
    grams: 100,
  },
  {
    name: "Вишня",
    calories: 50,
    grams: 100,
  },
  {
    name: "Черешня",
    calories: 50,
    grams: 100,
  },
  {
    name: "Крыжовник",
    calories: 43,
    grams: 100,
  },
  {
    name: "Малина",
    calories: 53,
    grams: 100,
  },
  {
    name: "Клубника",
    calories: 33,
    grams: 100,
  },
  {
    name: "Земляника",
    calories: 33,
    grams: 100,
  },
  {
    name: "Ежевика",
    calories: 43,
    grams: 100,
  },
  {
    name: "Клементин",
    calories: 47,
    grams: 100,
  },
  {
    name: "Мандарин",
    calories: 47,
    grams: 100,
  },
  {
    name: "Слива",
    calories: 46,
    grams: 100,
  },
  {
    name: "Виноград",
    calories: 50,
    grams: 100,
  },
  {
    name: "Инжир",
    calories: 74,
    grams: 100,
  },
  {
    name: "Грейпфрут",
    calories: 42,
    grams: 100,
  },
  {
    name: "Гуава",
    calories: 68,
    grams: 100,
  },
  {
    name: "Киви",
    calories: 61,
    grams: 100,
  },
  {
    name: "Личи",
    calories: 66,
    grams: 100,
  },
  {
    name: "Лимон",
    calories: 29,
    grams: 100,
  },
  {
    name: "Манго",
    calories: 60,
    grams: 100,
  },
  {
    name: "Арбуз",
    calories: 30,
    grams: 100,
  },
  {
    name: "Дыня",
    calories: 34,
    grams: 100,
  },
  {
    name: "Оливки",
    calories: 115,
    grams: 100,
  },
  {
    name: "Чернослив",
    calories: 240,
    grams: 100,
  },
  {
    name: "Курага",
    calories: 241,
    grams: 100,
  },
  {
    name: "Цукаты",
    calories: 216,
    grams: 100,
  },
  {
    name: "Булочка",
    calories: 310,
    grams: 100,
  },
  {
    name: "Печенье",
    calories: 480,
    grams: 100,
  },
  {
    name: "Торт",
    calories: 370,
    grams: 100,
  },
  {
    name: "Батон",
    calories: 240,
    grams: 100,
  },
  {
    name: "Хлеб",
    calories: 220,
    grams: 100,
  },
  {
    name: "Кукурузные⠀хлопья",
    calories: 370,
    grams: 100,
  },
  {
    name: "Крекер",
    calories: 325,
    grams: 100,
  },
  {
    name: "Лепешка",
    calories: 198,
    grams: 100,
  },
  {
    name: "Макароны",
    calories: 95,
    grams: 100,
  },
  {
    name: "Мюсли",
    calories: 390,
    grams: 100,
  },
  {
    name: "Лапша",
    calories: 70,
    grams: 100,
  },
  {
    name: "Паста",
    calories: 110,
    grams: 100,
  },
  {
    name: "Злаковая⠀каша",
    calories: 55,
    grams: 100,
  },
  {
    name: "Картофель⠀вареный",
    calories: 70,
    grams: 100,
  },
  {
    name: "Пюре⠀картофельное",
    calories: 88,
    grams: 100,
  },
  {
    name: "Картофель⠀жареный",
    calories: 140,
    grams: 100,
  },
  {
    name: "Рис⠀белый",
    calories: 140,
    grams: 100,
  },
  {
    name: "Рис⠀коричневый",
    calories: "135",
    grams: 100,
  },
  {
    name: "Спагетти",
    calories: 101,
    grams: 100,
  },
  {
    name: "Анчоусы⠀консервированные",
    calories: 300,
    grams: 100,
  },
  {
    name: "Бекон",
    calories: 500,
    grams: 100,
  },
  {
    name: "Говядина⠀жаренная",
    calories: 280,
    grams: 100,
  },
  {
    name: "Бургер⠀из⠀говядины",
    calories: 280,
    grams: 100,
  },
  {
    name: "Курица",
    calories: 200,
    grams: 100,
  },
  {
    name: "Моллюски",
    calories: 50,
    grams: 100,
  },
  {
    name: "Треска",
    calories: 100,
    grams: 100,
  },
  {
    name: "Краб",
    calories: 110,
    grams: 100,
  },
  {
    name: "Утка⠀жареная",
    calories: 430,
    grams: 100,
  },
  {
    name: "Рыбный⠀пирог",
    calories: 200,
    grams: 100,
  },
  {
    name: "Рыбные⠀палочки",
    calories: 220,
    grams: 100,
  },
  {
    name: "Окорок",
    calories: 280,
    grams: 100,
  },
  {
    name: "Окунь",
    calories: 110,
    grams: 100,
  },
  {
    name: "Палтус",
    calories: 125,
    grams: 100,
  },
  {
    name: "Ветчина",
    calories: 240,
    grams: 100,
  },
  {
    name: "Сельдь⠀запеченная",
    calories: 200,
    grams: 100,
  },
  {
    name: "Почки",
    calories: 160,
    grams: 100,
  },
  {
    name: "Сельдь⠀копченая",
    calories: 120,
    grams: 100,
  },
  {
    name: "Печень",
    calories: 150,
    grams: 100,
  },
  {
    name: "Паштет⠀из⠀печени",
    calories: 300,
    grams: 100,
  },
  {
    name: "Ягнятина",
    calories: 300,
    grams: 100,
  },
  {
    name: "Баранина",
    calories: 300,
    grams: 100,
  },
  {
    name: "Лобстер",
    calories: 100,
    grams: 100,
  },
  {
    name: "Мясной⠀рулет",
    calories: 400,
    grams: 100,
  },
  {
    name: "Скумбрия",
    calories: 300,
    grams: 100,
  },
  {
    name: "Мидии",
    calories: 90,
    grams: 100,
  },
  {
    name: "Фазан⠀жаренный",
    calories: 200,
    grams: 100,
  },
  {
    name: "Сардины⠀консервированные",
    calories: 140,
    grams: 100,
  },
  {
    name: "Сардины⠀консервированные⠀в⠀масле",
    calories: 220,
    grams: 100,
  },
  {
    name: "Сардины⠀в⠀томатном⠀соку",
    calories: 180,
    grams: 100,
  },
  {
    name: "Креветки",
    calories: 100,
    grams: 100,
  },
  {
    name: "Свинина",
    calories: 290,
    grams: 100,
  },
  {
    name: "Пирог⠀мясной",
    calories: 450,
    grams: 100,
  },
  {
    name: "Крольчатина",
    calories: 180,
    grams: 100,
  },
  {
    name: "Лосось",
    calories: 180,
    grams: 100,
  },
  {
    name: "Колбаса",
    calories: 480,
    grams: 100,
  },
  {
    name: "Сосиски⠀жареные",
    calories: 320,
    grams: 100,
  },
  {
    name: "Сосиски",
    calories: 230,
    grams: 100,
  },
  {
    name: "Стейк",
    calories: 350,
    grams: 100,
  },
  {
    name: "Форель",
    calories: 120,
    grams: 100,
  },
  {
    name: "Тунец",
    calories: 100,
    grams: 100,
  },
  {
    name: "Тунец⠀консервированный⠀в⠀масле",
    calories: 180,
    grams: 100,
  },
  {
    name: "Индейка",
    calories: 160,
    grams: 100,
  },
  {
    name: "Телятина",
    calories: 240,
    grams: 100,
  },
  {
    name: "Сыр",
    calories: 440,
    grams: 100,
  },
  {
    name: "Сыр⠀Чеддар",
    calories: 260,
    grams: 100,
  },
  {
    name: "Сыр⠀плавленый",
    calories: 270,
    grams: 100,
  },
  {
    name: "Творог",
    calories: 98,
    grams: 100,
  },
  {
    name: "Творог⠀обезжиренный",
    calories: 80,
    grams: 100,
  },
  {
    name: "Сливочный⠀сыр",
    calories: 428,
    grams: 100,
  },
  {
    name: "Заварной⠀крем",
    calories: 100,
    grams: 100,
  },
  {
    name: "Яйца⠀вареные",
    calories: 150,
    grams: 100,
  },
  {
    name: "Яйца⠀жареные",
    calories: 180,
    grams: 100,
  },
  {
    name: "Мороженое",
    calories: 180,
    grams: 100,
  },
  {
    name: "Молоко⠀цельное",
    calories: 70,
    grams: 100,
  },
  {
    name: "Молоко⠀полуобезжиренное",
    calories: 50,
    grams: 100,
  },
  {
    name: "Молоко⠀обезжиренное",
    calories: 38,
    grams: 100,
  },
  {
    name: "Молоко⠀соевое",
    calories: 36,
    grams: 100,
  },
  {
    name: "Пудинг",
    calories: 140,
    grams: 100,
  },
  {
    name: "Омлет",
    calories: 266,
    grams: 100,
  },
  {
    name: "Торт⠀со⠀сливочным⠀кремом",
    calories: 190,
    grams: 100,
  },
  {
    name: "Йогурт",
    calories: 60,
    grams: 100,
  },
  {
    name: "Йогурт⠀обезжиренный",
    calories: 45,
    grams: 100,
  },
  {
    name: "Масло",
    calories: 750,
    grams: 100,
  },
  {
    name: "Шоколад",
    calories: 500,
    grams: 100,
  },
  {
    name: "Жир",
    calories: 900,
    grams: 100,
  },
  {
    name: "Рыбий⠀жир",
    calories: 900,
    grams: 100,
  },
  {
    name: "Чипсы",
    calories: 500,
    grams: 100,
  },
  {
    name: "Мед",
    calories: 280,
    grams: 100,
  },
  {
    name: "Варенье",
    calories: 250,
    grams: 100,
  },
  {
    name: "Спред",
    calories: 400,
    grams: 100,
  },
  {
    name: "Маргарин",
    calories: 750,
    grams: 100,
  },
  {
    name: "Шоколадный⠀батончик",
    calories: 480,
    grams: 100,
  },
  {
    name: "Масло⠀подсолнечное",
    calories: 900,
    grams: 100,
  },
  {
    name: "Масло⠀оливковое",
    calories: 900,
    grams: 100,
  },
  {
    name: "Попкорн",
    calories: 460,
    grams: 100,
  },
  {
    name: "Сахар",
    calories: 400,
    grams: 100,
  },
  {
    name: "Леденцы",
    calories: 300,
    grams: 100,
  },
  {
    name: "Сироп",
    calories: 300,
    grams: 100,
  },
  {
    name: "Ириски",
    calories: 400,
    grams: 100,
  },
  {
    name: "Конфеты⠀шоколадные",
    calories: 500,
    grams: 100,
  },
  {
    name: "Бобы⠀запеченые",
    calories: 80,
    grams: 100,
  },
  {
    name: "Бобы⠀вареные",
    calories: 130,
    grams: 100,
  },
  {
    name: "Брокколи",
    calories: 32,
    grams: 100,
  },
  {
    name: "Капуста⠀вареная",
    calories: 20,
    grams: 100,
  },
  {
    name: "Морковь⠀вареная",
    calories: 25,
    grams: 100,
  },
  {
    name: "Цветная⠀капуста⠀вареная",
    calories: 30,
    grams: 100,
  },
  {
    name: "Сельдерей",
    calories: 10,
    grams: 100,
  },
  {
    name: "Кабачок",
    calories: 20,
    grams: 100,
  },
  {
    name: "Огурец",
    calories: 10,
    grams: 100,
  },
  {
    name: "Чечевица",
    calories: 100,
    grams: 100,
  },
  {
    name: "Салат-латук",
    calories: 15,
    grams: 100,
  },
  {
    name: "Грибы⠀вареные",
    calories: 12,
    grams: 100,
  },
  {
    name: "Грибы⠀жареные",
    calories: 145,
    grams: 100,
  },
  {
    name: "Лук⠀вареный",
    calories: 18,
    grams: 100,
  },
  {
    name: "Лук⠀свежий",
    calories: 33,
    grams: 100,
  },
  {
    name: "Лук⠀жареный",
    calories: 155,
    grams: 100,
  },
  {
    name: "Горох",
    calories: 148,
    grams: 100,
  },
  {
    name: "Горох⠀вареный",
    calories: 120,
    grams: 100,
  },
  {
    name: "Шпинат",
    calories: 8,
    grams: 100,
  },
  {
    name: "Кукуруза",
    calories: 130,
    grams: 100,
  },
  {
    name: "Кукуруза⠀с⠀початком",
    calories: 70,
    grams: 100,
  },
  {
    name: "Помидор",
    calories: 20,
    grams: 100,
  },
  {
    name: "Помидор⠀Черри",
    calories: 17,
    grams: 100,
  },
  {
    name: "Кетчуп",
    calories: 70,
    grams: 100,
  },
  {
    name: "Чай",
    calories: 2,
    grams: 100,
  },
  {
    name: "Кофе",
    calories: 2,
    grams: 100,
  },
  {
    name: "Кофе⠀с⠀молоком",
    calories: 4,
    grams: 100,
  },
  {
    name: "Сок",
    calories: 60,
    grams: 100,
  },
  {
    name: "Какао",
    calories: 60,
    grams: 100,
  },
  {
    name: "Кефир",
    calories: 40,
    grams: 100,
  },
  {
    name: "Суп⠀куриный⠀с⠀вермишелью",
    calories: 40,
    grams: 100,
  },
  {
    name: "Суп⠀с⠀фрикадельками",
    calories: 53,
    grams: 100,
  },
  {
    name: "Суп⠀гороховый",
    calories: 55,
    grams: 100,
  },
  {
    name: "Суп⠀куриный⠀с⠀овощами",
    calories: 56,
    grams: 100,
  },
  {
    name: "Крем-суп",
    calories: 52,
    grams: 100,
  },
  {
    name: "Борщ",
    calories: 32,
    grams: 100,
  },
  {
    name: "Суп⠀из⠀крапивы",
    calories: 30,
    grams: 100,
  },
  {
    name: "Холодник⠀свекольный",
    calories: 26,
    grams: 100,
  },
];
