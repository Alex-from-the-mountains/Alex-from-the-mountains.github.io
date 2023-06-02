const sport = [
  {
    name: "Гимнастика",
    calories: 210,
    minutes: 30,
  },
  {
    name: "Велосипед⠀расслабленно",
    calories: 193,
    minutes: 30,
  },
  {
    name: "Велосипед⠀нормально",
    calories: 245,
    minutes: 30,
  },
  {
    name: "Велосипед⠀интенсивно",
    calories: 368,
    minutes: 30,
  },
  {
    name: "Физкультура⠀нормально",
    calories: 123,
    minutes: 30,
  },
  {
    name: "Физкультура⠀интенсивно",
    calories: 280,
    minutes: 30,
  },
  {
    name: "Фитнес",
    calories: 193,
    minutes: 30,
  },
  {
    name: "Пробежка",
    calories: 335,
    minutes: 30,
  },
  {
    name: "Прогулка",
    calories: 164,
    minutes: 30,
  },
  {
    name: "Ходьба",
    calories: 164,
    minutes: 30,
  },
  {
    name: "Планка",
    calories: 120,
    minutes: 30,
  },
  {
    name: "Аква-аэробика",
    calories: 140,
    minutes: 30,
  },
  {
    name: "Гребля",
    calories: 245,
    minutes: 30,
  },
  {
    name: "Обруч",
    calories: 109,
    minutes: 30,
  },
  {
    name: "Легкая⠀растяжка",
    calories: 88,
    minutes: 30,
  },
  {
    name: "Лестничный⠀тренажер",
    calories: 315,
    minutes: 30,
  },
  {
    name: "Подъем⠀тяжестей⠀нормально",
    calories: 105,
    minutes: 30,
  },
  {
    name: "Подъем⠀тяжестей⠀интенсивно",
    calories: 210,
    minutes: 30,
  },
  {
    name: "Йога",
    calories: 88,
    minutes: 30,
  },
  {
    name: "Пилатес",
    calories: 140,
    minutes: 30,
  },
  {
    name: "Скакалка",
    calories: 390,
    minutes: 30,
  },
  {
    name: "Махи⠀гирей",
    calories: 606,
    minutes: 30,
  },
  {
    name: "Лыжи",
    calories: 360,
    minutes: 30,
  },
  {
    name: "Плавание⠀вольный",
    calories: 293,
    minutes: 30,
  },
  {
    name: "Плавание⠀брасс",
    calories: 183,
    minutes: 30,
  },
  {
    name: "Плавание⠀на⠀спине",
    calories: 163,
    minutes: 30,
  },
  {
    name: "Джакузи",
    calories: 35,
    minutes: 30,
  },
  {
    name: "Массаж",
    calories: 120,
    minutes: 30,
  },
  {
    name: "Приседания",
    calories: 140,
    minutes: 30,
  },
  {
    name: "Уборка",
    calories: 94,
    minutes: 30,
  },
  {
    name: "Глажка",
    calories: 61,
    minutes: 30,
  },
  {
    name: "Игра⠀с⠀животными",
    calories: 85,
    minutes: 30,
  },
  {
    name: "Мытье⠀полов⠀и⠀окон",
    calories: 105,
    minutes: 30,
  },
  {
    name: "Мытье⠀посуды",
    calories: 62,
    minutes: 30,
  },
  {
    name: "Подъем⠀тяжестей⠀по⠀лестнице",
    calories: 306,
    minutes: 30,
  },
  {
    name: "Готовка",
    calories: 92,
    minutes: 30,
  },
  {
    name: "Сидение",
    calories: 28,
    minutes: 30,
  },
  {
    name: "Сон",
    calories: 23,
    minutes: 30,
  },
  {
    name: "Чтение",
    calories: 42,
    minutes: 30,
  },
  {
    name: "Копание",
    calories: 184,
    minutes: 30,
  },
  {
    name: "Распил",
    calories: 177,
    minutes: 30,
  },
  {
    name: "Посадка",
    calories: 165,
    minutes: 30,
  },
  {
    name: "Прополка",
    calories: 170,
    minutes: 30,
  },
  {
    name: "Кошение",
    calories: 254,
    minutes: 30,
  },
  {
    name: "Рубка⠀дров",
    calories: 223,
    minutes: 30,
  },
  {
    name: "Уборка⠀снега",
    calories: 222,
    minutes: 30,
  },
  {
    name: "Уборка⠀листьев",
    calories: 147,
    minutes: 30,
  },
  {
    name: "Покраска",
    calories: 176,
    minutes: 30,
  },
  {
    name: "Ремонт⠀автомобиля",
    calories: 94,
    minutes: 30,
  },
  {
    name: "Лежание",
    calories: 39,
    minutes: 30,
  },
  {
    name: "Медитация",
    calories: 35,
    minutes: 30,
  },
  {
    name: "Интенсивная⠀умственная",
    calories: 140,
    minutes: 30,
  },
  {
    name: "Шахматы",
    calories: 140,
    minutes: 30,
  },
  {
    name: "Боулинг",
    calories: 126,
    minutes: 30,
  },
  {
    name: "Бильярд",
    calories: 88,
    minutes: 30,
  },
  {
    name: "Скалолазание",
    calories: 385,
    minutes: 30,
  },
  {
    name: "Бадминтон",
    calories: 126,
    minutes: 30,
  },
  {
    name: "Батут",
    calories: 123,
    minutes: 30,
  },
  {
    name: "Баскетбол",
    calories: 280,
    minutes: 30,
  },
  {
    name: "Коньки",
    calories: 273,
    minutes: 30,
  },
  {
    name: "Бокс⠀груша",
    calories: 210,
    minutes: 30,
  },
  {
    name: "Бокс",
    calories: 315,
    minutes: 30,
  },
  {
    name: "Волейбол",
    calories: 126,
    minutes: 30,
  },
  {
    name: "Гандбол",
    calories: 242,
    minutes: 30,
  },
  {
    name: "Дайвинг",
    calories: 179,
    minutes: 30,
  },
  {
    name: "Дальтаплан",
    calories: 123,
    minutes: 30,
  },
  {
    name: "Дзюдо⠀каратэ",
    calories: 350,
    minutes: 30,
  },
  {
    name: "езда⠀на⠀лошади",
    calories: 126,
    minutes: 30,
  },
  {
    name: "ролики",
    calories: 420,
    minutes: 30,
  },
  {
    name: "Медленная⠀ходьба",
    calories: 94,
    minutes: 30,
  },
  {
    name: "Метание⠀ножей",
    calories: 115,
    minutes: 30,
  },
  {
    name: "Пинг-понг",
    calories: 140,
    minutes: 30,
  },
  {
    name: "стрельба⠀из⠀лука",
    calories: 123,
    minutes: 30,
  },
  {
    name: "Фехтование",
    calories: 326,
    minutes: 30,
  },
  {
    name: "Футбол",
    calories: 224,
    minutes: 30,
  },
  {
    name: "Хоккей",
    calories: 280,
    minutes: 30,
  },
]