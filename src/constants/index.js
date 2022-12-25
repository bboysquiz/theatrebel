import imgNovels from '../assets/novels.png'
import imgFestivals from '../assets/festivals.png'
import imgLocation from '../assets/location.png'
import imgSearchingBegin from '../assets/searchingBegin.png'

export const categoriesArray = [
    {
        id: 1,
        img: imgNovels,
        alt: 'novels',
        title: 'Произведения',
        subtitle: 'И их тексты',
        description: 'Здесь описание, которое надо написать к разделу. Я пока не знаю что писать, а вы?',
        addInfo: "На фото 'Человек без имени'",
    },
    {
        id: 2,
        img: imgFestivals,
        alt: 'festivals',
        title: 'Фестивали',
        subtitle: 'И гастрольные спектакли',
        description: 'Здесь описание, которое надо написать к разделу. Я пока не знаю что писать, а вы?',
        link: 'Где билеты?',
        addInfo: "На фото 'Человек без имени'",
    },
    {
        id: 3,
        img: imgLocation,
        alt: 'location',
        title: 'В моем городе',
        subtitle: 'Там где мы есть',
        description: 'Здесь описание, которое надо написать к разделу. Я пока не знаю что писать, а вы?',
        access: 'Раздел недоступен',
    },
    {
        id: 4,
        img: imgSearchingBegin,
        alt: 'searching',
        title: 'Начать поиск',
        description: 'Более 10 различных фильтров и сортировок, о вау',
        button: 'Искать'
    }
]