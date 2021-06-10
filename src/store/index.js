import { createStore } from 'vuex'

export default createStore({
  state: {
    
    shop: [],
    count:0,
    number:0,

    users: [
      {name: "Maxsim", password: "123456"},
      {name: "Anna", password: "123456"},
      {name: "Diana", password: "123456"}
    ],
    
    products: [
      {name: '11.6" Ноутбук Acer TravelMate B1 TMB118-M-C0EA черный',
       img: 'acer.png',
       prise: '14000 руб.',
       img_slider: ['acer.png', 'acer2.png', 'acer3.png'],
       description: 'С ноутбуком Acer TravelMate B1 TMB118-M-C0EA любая дорога будет веселей и ярче. Ведь с ним не придется скучать. На 11.6-дюймовой диагонали дисплея типа TN+film с HD-разрешением 1366x768 пикселей вы сможете сполна наслаждаться мобильным просмотром видеотреков и фильмов. А матовое покрытие при этом минимизирует возможные блики. Производительный процессор N4120 линейки Celeron с 4 ядрами в активе и частотным диапазоном от 1.1 до 2.6 МГц позволит без проблем и задержек загружать самые разные по объему приложения. А стереодинамики позволят получать удовольствие от любимых аудиотреков.',
       category: 'desktop',
       id: 1,
       basket: false},
      {name: '15.6" Ноутбук Dell Inspiron 3583-8512 черный',
       img: 'dell.png',
       prise: '34000 руб.',
       img_slider: ['dell.png', 'dell2.png', 'dell3.png'],
       description: 'Ноутбук Dell Inspiron 3501-8182 подойдет для мобильных сотрудников, которым требуется тонкий, легкий и прочный ноутбук с передовыми средствами безопасности для повседневных задач. Наслаждайтесь увеличенной полезной площадью экрана за счет двусторонней узкой рамки, которая обеспечивает широкий обзор. Элегантный дисплей с узкой рамкой, разрешением Full HD и антибликовым покрытием обеспечивает четкое, яркое изображение, приятное для просмотра. Подключите телевизор или монитор через порт HDMI, скачивайте фотографии с помощью слота для карты SD и наслаждайтесь высокой скоростью передачи со всех ваших аксессуаров благодаря двум портам USB 3.2 Gen 1.',
       category: 'desktop',
       id: 2,
       basket: false},
      {name: '15.6" Ультрабук HP Pavilion 15-eg0006ur синий',
       img: 'hp.png',
       prise: '60000 руб.',
       img_slider: ['hp.png', 'hp2.png', 'hp3.png'],
       description: 'Этот ноутбук отличается компактными размерами и невероятной производительностью, что позволяет работать эффективнее и получать больше удовольствия от развлечений, сохраняя полную свободу передвижения. Получайте гораздо больше удовольствия от развлечений благодаря экрану с узкими рамками и аудиосистеме B&O.',
       category: 'desktop',
       id: 3,
       basket: false},
      {name: '5.4" Смартфон Apple iPhone 12 Mini 256 ГБ зеленый',
       img: 'iphone.png',
       prise: '84000 руб.',
       img_slider: ['iphone.png', 'iphone2.png', 'iphone3.png'],
       description: 'Это iPhone 12 mini. Мощные функции в небольшом корпусе с диагональю 5,4 дюйма. Невероятно яркий компактный дисплей Super Retina XDR. Передняя панель Ceramic Shield, с которой риск повреждений дисплея при падении в 4 раза ниже. Потрясающее качество снимков при слабом освещении благодаря Ночному режиму на всех камерах. Съёмка, монтаж и воспроизведение HDR-видео кинематографического качества в стандарте Dolby Vision. Мощный процессор A14 Bionic. И аксессуары MagSafe, которые мгновенно примагничиваются и обеспечивают более быструю беспроводную зарядку. Это миниатюрный смартфон с очень большим потенциалом.',
       category: 'phone',
       id: 4,
       basket: false},
      {name: '5.3" Смартфон Samsung Galaxy A01 Core 16 ГБ красный',
       img: 'samsung.png',
       prise: '5000 руб.',
       img_slider: ['samsung.png', 'samsung2.png', 'samsung3.png'],
       description: 'Смартфон Samsung Galaxy A01 Core сочетает эффектное цветовое исполнение, высокий уровень производительности и широкие функциональные возможности. Аппаратная платформа с процессором MediaTek и 1 ГБ оперативной памяти обеспечивают быструю работу приложений, веб-страниц, мультимедиа. Под хранение данных пользователя выделено 16 ГБ памяти.',
       category: 'phone',
       id: 5,
       basket: false},
      {name: '6.53" Смартфон Xiaomi Redmi 9C NFC 64 ГБ оранжевый',
       img: 'xiaomi.png',
       prise: '10000 руб.',
       img_slider: ['xiaomi.png', 'xiaomi2.png', '..xiaomi3.png'],
       description: 'Смартфон Xiaomi Redmi 9C NFC в привлекательном оранжевом корпусе из пластика порадует будущего владельца самым прогрессивным функционалом. IPS-экран модели при диагонали 6.53 дюйма обладает разрешением 1600x720 пикселей и способен отображать свыше 16 млн оттенков. Восьмиядерный процессор и 3 ГБ оперативной памяти позволяют модели быть колоссально быстродейственной и радовать своего владельца работой в десятках приложений одновременно. Модули Google Pay и NFC отвечают за возможность бесконтактной оплаты.',
       category: 'phone',
       id: 6,
       basket: false},
      {name: '10.4" Планшет Honor Pad V6 128 ГБ черный',
       img: 'honor.png',
       prise: '27000 руб.',
       img_slider: ['honor.png', 'honor2.png', 'honor3.png'],
       description: 'Планшет Honor Pad V6 выполнен в прочном корпусе с металлической задней панелью. На 10.4-дюймовом дисплее IPS с разрешением 2000x1200 пикселей отображается детализированное изображение с насыщенными цветами и глубокими оттенками. Аппаратная платформа во главе с процессором HiSilicon Kirin 985 обеспечивает высокий уровень производительности и скорости. Помогают ему в этом 6 ГБ оперативной памяти и графический ускоритель Mali-G77. Данная модель Honor Pad V6 предусматривает 128 ГБ памяти под размещение различного контента. Имеется слот для установки карты памяти. На тыловой панели размещен модуль 13-Мп камеры, а спереди установлена дополнительная камера 8 Мп для качественного общения по видеосвязи. Мощный аккумулятор на 7250 мА*ч способен обеспечить около 13 часов работы без подзарядки в режиме просмотра видео.',
       category: 'tab',
       id: 7,
       basket: false},
      {name: '10.8" Планшет Huawei Matepad Pro 256 ГБ 3G, LTE серый +стилус',
       img: 'huawei.png',
       prise: '48000 руб.',
       img_slider: ['huawei.png', 'huawei2.png', 'huawei3.png'],
       description: 'Планшет Huawei Matepad Pro создан для самых требовательных пользователей и творческих личностей. Он выполнен в тонком и надежном металлическом корпусе. В планшетном компьютере установлена 10.8-дюймовая матрица IPS с разрешающей способностью 2560x1600 пикселей, которая позволяет наслаждаться реалистичным изображением с качественной цветопередачей независимо от положения. Поддержка технологии мультитач гарантирует интуитивное управление касаниями и жестами с быстрой отзывчивостью. Также планшет позволяет воплощать различные идеи с помощью стилуса. Аппаратная начинка с процессором HiSilicon Kirin 990, графическим ядром Mali-G76 и 8 ГБ ОЗУ обеспечивает высокий уровень производительности и быстродействия даже при выполнении нескольких задач одновременно. На задней панели имеется камера с разрешением 13 Мп, а для общения по видеосвязи и селфи предусмотрена камера на 8 Мп. Huawei Matepad Pro оборудован модулем 3G и востребованными беспроводными коммуникациями. Аккумулятор емкостью 7250 мА*ч гарантирует до 40 часов работы в режиме разговора 3G.',
       category: 'tab',
       id: 8,
       basket: false},
      {name: '10.1" Планшет Lenovo TAB M10 HD TB-X306X 32 ГБ 3G, LTE серебристый',
       img: 'lenovo.png',
       prise: '27000 руб.',
       img_slider: ['lenovo.png', 'lenovo2.png', '..lenovo3.png'],
       description: 'Планшет Lenovo TAB M10 HD TB-X306X серебристого цвета имеет тонкий металлический корпус, устойчивый к образованию сколов, трещин и других повреждений. Модель проста в использовании и подходит для общения и выполнения рабочих задач. Емкостный мультитач-экран моментально реагирует на прикосновения. Устройство поддерживает высокоскоростной Wi-Fi и обеспечивает передачу данных между другими устройствами посредством Bluetooth версии 5.0.Планшет Lenovo TAB M10 HD TB-X306X оснащен мощным процессором с 8 ядрами, что позволяет загружать энергоемкие программы и приложения без потери производительности. Внутренняя память составляет 32 ГБ, в случае необходимости можно увеличить хранилище на 1 ТБ с помощью карты microCD. Для съемки видео или фото есть фронтальная и тыловая камеры. Мощный аккумулятор обеспечивает работу в течение 8 ч без перерыва.',
       category: 'tab',
       id: 9,
       basket: false},
      {name: 'Смарт-часы Fossil SPORT FTW6051',
       img: 'fossil.png',
       prise: '15000 руб.',
       img_slider: ['fossil.png', 'fossil2.png', 'fossil3.png'],
       description: 'Смарт-часы Fossil FTW6051 представлены в стильном корпусе с синим ремешком из силикона. Корпус со степенью защиты WR50 обладает водонепроницаемыми свойствами (5 Бар), а съемный ремешок легко регулируется по толщине запястья. Предусматривается наличие качественного цветного экрана AMOLED с сенсорной панелью. Устройство взаимодействует со смартфонами на основе iOS (12.0 и выше) или Android (6.0 и выше), уведомляя о входящих сообщениях и звонках, а также позволяя на расстоянии управлять MP3-плеером. Прибор оснащен тремя модулями беспроводной связи и набором полезных датчиков. Часы будут регулярно проводить мониторинг работы сердца, а также измерять ваш пульс, длительность и качество сна, потраченные за день калории. Также предусматривается наличие бесконтактной оплаты.',
       category: 'watch',
       id: 10,
       basket: false},
      {name: 'Смарт-часы Geozon Titanium',
       img: 'geozon.png',
       prise: '2000 руб.',
       img_slider: ['geozon.png', 'geozon2.png', 'geozon3.png'],
       description: 'Смарт-часы Geozon Titanium представлены в элегантном металлическом корпусе с пластиковыми вставками и эластичным регулируемым ремешком из силикона. Цветной ЖК-дисплей с круглым форм-фактором обладает фултач-сенсором, разрешением 240x240 dpi и диагональю 1.54”. Благодаря модулю Bluetooth прибор легко синхронизируется с мобильными устройствами на основе iOS или Android. Модель Geozon Titanium оснащена акселерометром, встроенной камерой на 0.3 Мп, слотами для SIM-карты и microSD-карты на 32 ГБ. Устройство постоянно измеряет уровень вашей активности, проводит мониторинг сна, позволяет настроить дату и время. Встроенный литий-ионный аккумулятор на 280 мА∙ч заряжается через microUSB-разъем, а его емкости хватает на 48 часов.',
       category: 'watch',
       id: 11,
       basket: false},
      {name: 'Смарт-часы Amazfit GTR 47mm Titanium',
       img: 'amaxfit.png',
       prise: '15000 руб.',
       img_slider: ['amaxfit.png', 'amaxfit2.png', 'amaxfit3.png'],
       description: 'Смарт-часы Amazfit GTR 47mm Titanium выполнены в корпусе из титанового сплава по стандарту IP68, что делает их устойчивыми к различным неблагоприятным воздействиям. Мягкий резиновый ремешок комфортно облегает запястье и адаптируется в зависимости от потребностей. В часах установлен сенсорный дисплей AMOLED диагональю 1.39 дюйма, который обеспечивает качественное изображение и интуитивное управление прикосновениями. Для защиты дисплея от повреждений предусмотрено износостойкое стекло Gorilla Glass 3. Смарт-часы Amazfit GTR 47mm Titanium получили коммуникации GPS и Bluetooth, а также широкий набор датчиков. Датчик BioTracker отвечает за расширенный мониторинг сердечного ритма при физической активности. Фирменное приложение Amazfit предоставляет возможность изменения дизайна циферблата, отслеживания параметров физической деятельности и выполнения ряда других настроек. Литий-полимерный аккумулятор емкостью 410 мА*ч гарантирует продолжительное время автономной работы смарт-часов. Зарядное устройство Pogo-Pin поставляется в комплекте.',
       category: 'watch',
       id: 12,
       basket: false}
    ]
  },
  mutations: {
    checkUser(state, user){
      for(let oneUser of state.users){
        if(oneUser === user){
          document.querySelector('.true').classList.toggle("unshow")
        } else{
          document.querySelector('.false').classList.toggle("unshow")
        }
      }
    },

    addToBasket(state, product){
      // if(state.shop.find(item => item.id === product.id)){
      //   product.quantity ++;
      //   product.prise = product.quantity * product.prise;
      // }else{
      //   state.shop.push(product);
      //   product.quantity = 1;
      // }
      state.shop.push(product);
      state.count ++;
      console.log(state.shop);
      console.log(state.count);
      
    },
  },
  getters: {
    getComputers(state){
      return state.products.filter(product => product.category == 'desktop')
    },
    getTabs(state){
      return state.products.filter(product => product.category == 'tab')
    },
    getPhones(state){
      return state.products.filter(product => product.category == 'phone')
    },
    getWatches(state){
      return state.products.filter(product => product.category == 'watch')
    },
    getCardById: state => (id) => {
      return state.products.filter(product => product.id == id)[0];
    },
    // getBasket(state){
    //   return state.products.filter(product => product.basket)
    // }
  }
})
