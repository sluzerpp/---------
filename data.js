const squadData = [
  {
    id: 1,
    name: 'Отряд "Комарова"',
    articles: [
      { name: '«Отряд Комарова»: сколько солдат вермахта уничтожили самые первые советские партизаны', link: './articles/komarov.html' },
      { name: 'Корж Василий', link: './articles/korj.html' },
    ]
  },
  {
    id: 2,
    name: 'Отряд им. П. К. Пономаренко (Домбровский, А.И., Антонович, В.М., Зайцев, И.В.)',
    articles: [

    ]
  },
  {
    id: 3,
    name: 'Отряд им. К. Е. Ворошилова (Ширин, Ф.И., Некрашевич, И.А.)',
    articles: [

    ]
  },
  {
    id: 4,
    name: 'Отряд им. Г. И. Котовского (Баранов, Н.М.)',
    articles: [
      { name: 'Формирование и боевой путь интернационального партизанского отряда им. К. Е. Ворошилова. 1942–1943 гг', link: './articles/voroshilov.html' }
    ]
  }
]

const peopleData = [
  {
    id: 1,
    fio: 'Вечеребина Бронислава Исаковна',
    birthday: '1924 год',
    birthplace: 'д. Домановичи, Старобинский р-н, Минская область, БССР',
    nationality: 'Еврей',
    squad: 'Отряд "Комарова"',
    photo: 'https://partizany.by/upload/resize_cache/uf/e23/204_300_1/e233f6b9269ba499842a54a79dcb6295.jpg',
    post: 'Партизан',
    rewards: {
      current: [],  
      presentedFor: [
        'Медаль «Партизану Отечественной войны» I-й степени',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/f59/557_841_1/f594288ef741a9faa8a5beef19304deb.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/f59/557_841_1/f594288ef741a9faa8a5beef19304deb.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/629/557_841_1/629b6f56e4567a2bc9492c66e98a573f.jpg',
    ]
  },
  {
    id: 2,
    fio: 'Цыганков Иван Дмитриевич',
    birthday: '1911 год',
    birthplace: 'д. Михали, Городенский р-н, Витебская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд "Комарова"',
    photo: 'https://partizany.by/upload/resize_cache/uf/536/192_300_1/536d01a6b1136e828553582b7c430d10.jpg',
    post: 'Боец партизанского отряда',
    rewards: {
      current: [
        'Медаль «Партизану Отечественной войны» II-й степени',
      ],  
      presentedFor: []
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/ac4/557_841_1/ac4b7bf05c77234926bdb50171c1932c.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/30f/557_841_1/30fcff0c1a9b465c75514244e080d1aa.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/a72/557_841_1/a7215f539865cc17e9c62ad67a325aa1.jpg',
    ]
  },
  {
    id: 3,
    fio: 'Менкин Янкель Абрамович',
    birthday: '1920 год',
    birthplace: 'м. Старобин, Старобинский р-н, Минская область, БССР',
    nationality: 'Еврей',
    squad: 'Отряд "Комарова"',
    photo: 'https://partizany.by/upload/resize_cache/uf/1c2/447_300_1/1c2eb62173ae2833551d410ddd31cec7.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
        'Орден Отечественной войны I-й степени',
        'Медаль «Партизану Отечественной войны» II-й степени',
      ],  
      presentedFor: [
        'Орден «Знак Почета»',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/e55/557_841_1/e555b1b79bb9b65330a974a3112a994d.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/860/557_841_1/86085ba7a8abef7d7a2447dea2aa7691.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/d8a/557_841_1/d8ad98aba3e697d3c735f461eeeb069a.jpg',
    ]
  },
  {
    id: 4,
    fio: 'Алифанов Тихон Иванович',
    birthday: '1915 год',
    birthplace: 'ст. Боковская, Боковский р-н, Ростовская область, РСФСР',
    nationality: 'Русский',
    squad: 'Отряд "Комарова"',
    photo: 'https://partizany.by/upload/resize_cache/uf/2ea/219_300_1/2eadd28a577db8e286ec014fb4822374.jpeg',
    post: 'Командир взвода',
    rewards: {
      current: [
        'Медаль «Партизану Отечественной войны» II-й степени',
      ],  
      presentedFor: [
        'Орден Красной Звезды',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/038/557_841_1/03848b84a7628aacbfd61edb14495e6a.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/083/557_841_1/08359daffb6676bade50baf3094080a8.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/964/557_841_1/964138ba2e80b346c06eaaa80932bb91.jpg',
    ]
  },
  {
    id: 5,
    fio: 'Лисович Федор Иванович',
    birthday: '1916 год',
    birthplace: 'дер. Гуцевичи, Житковичский р-н, Полесская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд "Комарова"',
    photo: 'https://partizany.by/upload/resize_cache/uf/bc0/209_300_1/bc013f020c10e741f92593406f331001.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
        'Орден Красного Знамени',
        'Медаль «Партизану Отечественной войны» I-й степени',
        'Орден Отечественной войны I-й степени',
      ],  
      presentedFor: [
        'Орден Ленина',
        'Герой Советского Союза',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/bd5/557_841_1/bd51429371dc555684ecca2907822955.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/d13/557_841_1/d1357c6dbf0a5b7018a47ff6092a22e4.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/fdf/557_841_1/fdf0af66cdbbfbfc99f75a9894833b49.jpg',
    ]
  },
  {
    id: 6,
    fio: 'Рындин Иван Иванович',
    birthday: '1917 год',
    birthplace: 'с. Красноярка, Бугурусланский р-н, Чкаловская область, РСФСР',
    nationality: 'Русский',
    squad: 'Отряд "Комарова"',
    photo: 'https://partizany.by/upload/uf/879/879c4d5de2be0f2d95355f5755456edc.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
        'Орден Красного Знамени',
        'Медаль «Партизану Отечественной войны» I-й степени',
      ],  
      presentedFor: []
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/33b/557_841_1/33b51187380568d84b7afb3a05806d54.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/680/557_841_1/680d82acdb0862c99d34024a0422930c.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/af9/557_841_1/af955aaac5214ea8e703b6b29e3accb3.jpg',
    ]
  },
  {
    id: 7,
    fio: 'Федорович Куприян Федорович',
    birthday: '1914 год',
    birthplace: 'д. Гричиновичи, Ленинский р-н, Пинская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд им. П. К. Пономаренко (Домбровский, А.И., Антонович, В.М., Зайцев, И.В.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/cb0/288_300_1/cb08270a8be7f36738815ef1615a95d1.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
      ],  
      presentedFor: [
        'Медаль «Партизану Отечественной войны» I-й степени',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/19e/557_841_1/19ef3e322e0d1960ba78c262de4cc56f.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/c5b/557_841_1/c5b1fb953f8f9d4d414bd2b3debbc84b.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/feb/557_841_1/feb5cfa64239bf2c39b01a1ae169e3fb.jpg',
    ]
  },
  {
    id: 8,
    fio: 'Ерофеев Александр Александрович',
    birthday: '1919 год',
    birthplace: 'г. Лунинец БССР',
    nationality: 'Русский',
    squad: 'Отряд им. П. К. Пономаренко (Домбровский, А.И., Антонович, В.М., Зайцев, И.В.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/a82/350_300_1/a8219a9393d5bf3fa402ab7057c101c9.jpg',
    post: 'Оружейник / оружейный мастер',
    rewards: {
      current: [
      ],  
      presentedFor: [
        'Медаль «Партизану Отечественной войны» II-й степени',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/d9a/557_841_1/d9ad91b7ec69041e9de0e4f0ef9c6286.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/e6d/557_841_1/e6d71ddf34c0a2306fc8706131c0ccfa.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/481/557_841_1/4814112e8cee2fa8ecc1bc086737a967.jpg',
    ]
  },
  {
    id: 9,
    fio: 'Прокопович Василий Павлович',
    birthday: '1910 год',
    birthplace: 'д. Гричиновичи, Ленинский р-н, Пинская область, БССРР',
    nationality: 'Белорус',
    squad: 'Отряд им. П. К. Пономаренко (Домбровский, А.И., Антонович, В.М., Зайцев, И.В.)',
    photo: 'https://partizany.by/upload/uf/44f/44f5c81a2ea6f4e5d8ada35e61beb44b.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
      ],  
      presentedFor: [
        'Медаль «Партизану Отечественной войны» II-й степени',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/4d3/557_841_1/4d3e185a905fa74d95358df87888ea18.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/acd/557_841_1/acd232722ef71212ecfb4bf38c45ecd5.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/aa7/557_841_1/aa782618da841026530b7a380b06f40f.jpg',
    ]
  },
  {
    id: 10,
    fio: 'Корж Василий Захарович',
    birthday: '1899 год',
    birthplace: 'Хворостов, Ленинский р-н, Пинская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд "Комарова"',
    photo: 'https://partizany.by/upload/resize_cache/uf/a10/300_300_1/a1087ca243d4c1da1720b6947c06b2b7.jpg',
    post: 'Командир соединения партизанских бригад',
    rewards: {
      current: [
        'Орден Красного Знамени',
        'Орден Красной Звезды',
        'Орден Отечественной войны I-й степени',
        'Медаль «Партизану Отечественной войны» I-й степени'
      ],  
      presentedFor: [
        'Герой Советского Союза',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/f70/557_841_1/f70042cbb060a98a7e9c76562a01f820.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/78e/557_841_1/78ec240d71819906004611325d3673a6.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/91e/557_841_1/91ecd56d8ae85bcbaf71abe2e24561fb.jpg',
    ]
  },
  {
    id: 11,
    fio: 'Беляев Александр Федорович',
    birthday: '1919 год',
    birthplace: 'д. Смыково, Вологодской область, РСФСР',
    nationality: 'Русский',
    squad: 'Отряд им. К. Е. Ворошилова (Ширин, Ф.И., Некрашевич, И.А.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/70e/222_300_1/70e321d232141059595225ff00fdea5b.jpg',
    post: 'Командир отделения',
    rewards: {
      current: [
        'Медаль «Партизану Отечественной войны» I-й степени'
      ],  
      presentedFor: [
        'Орден Красной Звезды',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/473/557_841_1/473395377873f04674d1082b8ac3fbaa.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/3fa/557_841_1/3fa820c0da799c5fa4c178dd3a22ab57.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/c8f/557_841_1/c8f4e60603f9d9ea771a8f074c714917.jpg',
    ]
  },
  {
    id: 12,
    fio: 'Шкляревич Денис Иванович',
    birthday: '1908 год',
    birthplace: 'д. Брянчицы, Старобинский р-н, Минская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд им. К. Е. Ворошилова (Ширин, Ф.И., Некрашевич, И.А.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/117/187_300_1/117c06e65ffc42e8e9d39529430e6a7e.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
      ],  
      presentedFor: [
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/ba9/557_841_1/ba9a28fd62ef5896cb45a324995939b2.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/eea/557_841_1/eea811946743f6be392e72575e676d0b.jpg',
    ]
  },
  {
    id: 13,
    fio: 'Бобрик Гавриил Яковлевич',
    birthday: '1905 год',
    birthplace: 'д. Кнышевичи, Паричский р-н, Гомельская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд им. К. Е. Ворошилова (Ширин, Ф.И., Некрашевич, И.А.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/238/427_300_1/23866932f88c73bb8e5a67457ac01f32.jpg',
    post: 'Начальник особого отдела отряда',
    rewards: {
      current: [
        'Орден Красного Знамени',
        'Медаль «Партизану Отечественной войны» I-й степени',
      ],  
      presentedFor: [
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/8d0/557_841_1/8d06dc23d8a31ca55a5666b4a970f3f6.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/f32/557_841_1/f324371222832ef203eca71373f37142.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/c7e/557_841_1/c7e52aebfc421faf713c145186eca139.jpg',
    ]
  },
  {
    id: 14,
    fio: 'Попок Константин Федорович',
    birthday: '1909 год',
    birthplace: 'д .Далгое, Старобинский р-н, Минская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд им. К. Е. Ворошилова (Ширин, Ф.И., Некрашевич, И.А.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/4c5/204_300_1/4c5e2e928726e7269bd4951ea58f9fff.jpg',
    post: 'Политрук роты',
    rewards: {
      current: [
        'Орден Красной Звезды',
        'Орден Красного Знамени'
      ],  
      presentedFor: [
        'Медаль «Партизану Отечественной войны» I-й степени',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/d19/557_841_1/d19a8047f606bd134249a0c7cf64e626.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/8ea/557_841_1/8eaa3db354f90ea549fed1720a418283.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/50b/557_841_1/50b68f9eab353903dd8fc3f4da660a8c.jpg',
    ]
  },
  {
    id: 15,
    fio: 'Луд Владимир Денисович',
    birthday: '1925 год',
    birthplace: 'д. Цна, Лунинецкий р-н, Пинская область, БСС',
    nationality: 'Белорус',
    squad: 'Отряд им. Г. И. Котовского (Баранов, Н.М.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/bec/178_300_1/bec86ef9ed5dc25f857200dc3944dfd5.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
      ],  
      presentedFor: [
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/1e4/557_841_1/1e40bcf702ff357a086142cd0414ea48.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/194/557_841_1/194e9727cc1a982b1fa452c3c85a87d2.jpg',
    ]
  },
  {
    id: 16,
    fio: 'Козленко Николай Иванович',
    birthday: '1923 год',
    birthplace: 'д. Брянчицы, Старобинский р-н, Минская область, БССР',
    nationality: 'Белорус',
    squad: 'Отряд им. Г. И. Котовского (Баранов, Н.М.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/5f3/224_300_1/5f3df4572180e2ed73e159fa805905ff.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
      ],  
      presentedFor: [
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/616/557_841_1/6166834ae890edfe5f2c3ff87e975006.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/26b/557_841_1/26b02b6110dc3f37415c1cd542ca40fc.jpg',
    ]
  },
  {
    id: 17,
    fio: 'Мазыгин Георгий Тимофеевич',
    birthday: '1920 год',
    birthplace: 'село Тимяшево, Шенталинский р-н, Куйбышевская область, РСФСР',
    nationality: 'Мордвин',
    squad: 'Отряд им. Г. И. Котовского (Баранов, Н.М.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/1a3/187_300_1/1a32dcb5a9b3105416f3f45d0eb474e7.jpg',
    post: 'Боец партизанского отряда',
    rewards: {
      current: [
      ],
      presentedFor: [
        'Медаль «Партизану Отечественной войны» I-й степени',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/7a6/557_841_1/7a6524fec8782b003fe50b1d8ed742da.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/233/557_841_1/233a5e53c344aacd5d4d6c1dd7ee1058.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/065/557_841_1/06586341506df4e74060064546fc89bf.jpg',
    ]
  },
  {
    id: 18,
    fio: 'Писаревич Самуил Евсеевич',
    birthday: '1908 год',
    birthplace: 'м. Старобин, Старобинский р-н, Бобруйская область, БССР',
    nationality: 'Еврей',
    squad: 'Отряд им. Г. И. Котовского (Баранов, Н.М.)',
    photo: 'https://partizany.by/upload/resize_cache/uf/a2e/199_300_1/a2eca4411ad15b5c13245fd2166828bb.jpg',
    post: 'Рядовой / рядовой боец',
    rewards: {
      current: [
      ],  
      presentedFor: [
        'Медаль «Партизану Отечественной войны» I-й степени',
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/409/557_841_1/409b059e46d13d60830f2fecb461bac3.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/ac8/557_841_1/ac83d936c036c6d33251ff7499b1c473.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/f0d/557_841_1/f0d2877228505cc5304385263a60acf1.jpg',
    ]
  },
]
const vagichData = [
  {
    id: -1,
    fio: 'Вагичев Никита Александрович',
    birthday: '1941 год',
    birthplace: 'Казахстан, Нурлан Сабуров',
    nationality: 'Еврей',
    squad: 'ЧВК Редан',
    photo: 'https://i.ibb.co/gg1TnYh/photo-2023-04-11-15-26-26.jpg',
    post: 'Подстилка Путина',
    rewards: {
      current: [
        'Медаль за альтернативную гениальность',
      ],
      presentedFor: [
        'Орден Красного Очка'
      ]
    },
    imgs: [
      'https://partizany.by/upload/resize_cache/slam.image/uf/409/557_841_1/409b059e46d13d60830f2fecb461bac3.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/ac8/557_841_1/ac83d936c036c6d33251ff7499b1c473.jpg',
      'https://partizany.by/upload/resize_cache/slam.image/uf/f0d/557_841_1/f0d2877228505cc5304385263a60acf1.jpg',
    ]
  }
]