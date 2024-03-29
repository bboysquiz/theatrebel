import imgNovels from '../assets/novels.png'
import imgFestivals from '../assets/festivals.png'
import imgLocation from '../assets/location.png'


export const categoriesArray = [
    {
        id: 1,
        img: imgNovels,
        alt: 'novels',
        title: 'Произведения',
        subtitle: 'И их тексты',
        description: 'Здесь вы можете посмотреть произведения',
        addInfo: "На фото 'Человек без имени'",
        route: '/Compositions',
    },
    {
        id: 2,
        img: imgFestivals,
        alt: 'festivals',
        title: 'Фестивали',
        subtitle: 'И гастрольные спектакли',
        description: 'Здесь вы можете посмотреть фестивали',
        link: 'Где билеты?',
        addInfo: "На фото 'Человек без имени'",
        route: '/Festivals',
    },
    {
        id: 3,
        img: imgLocation,
        alt: 'location',
        title: 'В моем городе',
        subtitle: 'Там где мы есть',
        description: 'Здесь вы можете посмотреть, что проходит в вашем городе',
        access: 'Раздел недоступен',
    }
]

// export const eventsArray = [
//     {
//         id: 1,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Чайка',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 2,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 3,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Старший сын',
//         autor: 'Александр Вампилов',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 4,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Хиты Бродвея',
//         autor: 'Александр Вампилов',
//         type: 'мьюзикл',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 5,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мадмуазель Фифи',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 6,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Я была в доме и ждала...',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 7,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Бешенные деньги',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 8,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 9,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Я была в доме и ждала...',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 10,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 11,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Бешенные деньги',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 12,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Мадмуазель Фифи',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     }
// ]


// export const catalogArray = [
//     {
//         id: 1,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Чайка',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 2,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 3,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Старший сын',
//         autor: 'Александр Вампилов',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 4,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Хиты Бродвея',
//         autor: 'Александр Вампилов',
//         type: 'мьюзикл',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 5,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мадмуазель Фифи',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 6,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Я была в доме и ждала...',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 7,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Бешенные деньги',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 8,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 9,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Я была в доме и ждала...',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 10,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 11,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Бешенные деньги',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 12,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Мадмуазель Фифи',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     }
// ]

// export const festivalsArray = [
//     {
//         id: 1,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Чайка',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 2,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 3,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Старший сын',
//         autor: 'Александр Вампилов',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 4,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Хиты Бродвея',
//         autor: 'Александр Вампилов',
//         type: 'мьюзикл',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 5,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мадмуазель Фифи',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 6,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Я была в доме и ждала...',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 7,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Бешенные деньги',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 8,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 9,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Я была в доме и ждала...',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 10,
//         img: imgNovels,
//         alt: 'event',
//         title: 'Мертвые души',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 11,
//         img: imgFestivals,
//         alt: 'event',
//         title: 'Бешенные деньги',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     },
//     {
//         id: 12,
//         img: imgLocation,
//         alt: 'event',
//         title: 'Мадмуазель Фифи',
//         autor: 'Лев Додин',
//         type: 'пьесса',
//         additive: 'на фото что-то',
//         location: 'Москва',
//         text: 'true'
//     }
// ]