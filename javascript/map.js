googleMap = null;
markers = [];
markersEnabled = true;

goodsMode = true;

documentsPane = $('#documentsPane');
borderPane = $('#borderPane');

documentsPane.hide()
borderPane.hide();

coordinates = [
{lat: 53.76170183, lng: 28.28979492},
{lat: 53.76170183, lng: 28.38979492},
{lat: 53.76170183, lng: 28.48979492}
]

RU_FIN = "Российско-финляндский участок границы";
RU_UA = "Российско-украинский участок границы";
RU_MO = "Российско-монгольский участок границы";
RU_NO = "Российско-норвежский участок границы";
RU_EE = "Российско-эстонский участок границы";
RU_LA = "Российско-латвийский участок границы";
RU_AB = "Российско-абхазский участок границы";
RU_AZ = "Российско-азербайджанский участок границы";
RU_GR = "Российско-грузинский участок границы";
RU_PO = "Российско-польский участок границы ";
RU_LI = "Российско-литовский участок границы";

MDPCoordinates = {
    RU_FIN: [
        {name: "Светогорск", lat: 61.12346476, lng: 28.84184182},
        {name: "Торфяновка", lat: 60.596116, lng: 27.912501},
        {name: "Инари", lat: 63.30479856, lng: 31.00318193},
        {name: "Вяртсиля", lat: 62.16902, lng: 30.63488},
        {name: "Суоперя", lat: 65.79418, lng: 30.149689},
        {name: "Лотта", lat: 68.47599, lng: 28.47313},
        {name: "Салла", lat: 66.94388, lng: 29.03472},
        {name: "Люття", lat: 64.54558, lng: 29.99070}
    ],
    RU_UA: [
        {name: "Шебекино", lat: 50.351288, lng: 36.918182},
        {name: "Грайворон", lat: 50.43369368, lng: 35.59512913},
        {name: "Колотиловка", lat: 50.81373117, lng: 35.4190743},
        {name: "Логачевка", lat: 50.00005709, lng: 37.95173943},
        {name: "Ровеньки", lat: 49.79971591, lng: 38.95727009},
        {name: "Погар", lat: 52.36598307, lng: 33.32750916},
        {name: "Ломаковка", lat: 52.29131508, lng: 32.64342785},
        {name: "Бугаевка", lat: 49.6109324, lng: 39.71600533},
        {name: "Крупец", lat: 51.647294, lng: 34.136977},
        {name: "Теткино (Рыжовка)",  lat: 51.25700017, lng: 34.26340699},
        {name: "Новошахтинск", lat: 47.75006568, lng: 39.93336618},
        {name: "Донецк (Изварино)",  lat: 48.29300162, lng: 39.91362512},
        {name: "Матвеев Курган", lat: 47.68505128, lng: 38.67780805},
        {name: "Весело-Вознесенка", lat: 47.16138656, lng: 38.24496388},
        {name: "Новые Юрковичи", lat: 52.11486003, lng: 31.79571033}
    ],
    RU_MO: [
        {name: "Монды", lat: 51.6757329, lng: 100.9960805},
        {name: "Соловьевск", lat: 49.90436476, lng: 115.74609518},
        {name: "Верхний Ульхун", lat: 49.5843672, lng: 112.5400231},
        {name: "Хандагайты (Боршо)",  lat: 50.7277901, lng: 92.08643675},
        {name: "Цаган-толгой", lat: 49.95685272, lng: 95.6273067},
        {name: "Шара-Сур", lat: 50.509304, lng: 94.611275},
        {name: "Ташанта", lat: 49.71005057, lng: 89.20091629},
        {name: "Кяхта", lat: 50.33121717, lng: 106.47947073}
    ],
    RU_NO: [
        {name: "Борисоглебск", lat: 69.6500015, lng: 30.0833339}
    ],
    RU_EE: [
        {name: "Ивангород", lat: 59.3666648, lng: 28.2166671},
        {name: "Куничина Гора", lat: 59.866883, lng: 29.223633},
        {name: "Шумилкино", lat: 59.578851, lng: 29.223633}
    ],
    RU_LA: [
        {name: "Убылинка", lat: 56.916291, lng: 27.879421}
    ],
    RU_AB: [
        {name: "Адлер", lat: 43.4099966, lng: 39.9984481}
    ],
    RU_AZ: [
        {name: "Яраг-Казмаляр", lat: 41.6482085, lng: 48.3818364}
    ],
    RU_GR: [
        {name: "Верхний Ларс", lat: 42.767778, lng: 44.631667}
    ],
    RU_PO: [
        {name: "Багратионовск", lat: 54.386509, lng: 20.639656},
        {name: "Мамоново (Гроново)",  lat: 54.43988732, lng: 19.90416884},
        {name: "Мамоново (Гжехотки)",  lat: 54.4633331, lng: 19.9344444},
        {name: "Гусев", lat: 54.5922203, lng: 22.1997222}
    ],
    RU_LI: [
        {name: "Чернышевское", lat: 54.638836, lng: 22.732353},
        {name: "Советск", lat: 55.072917, lng: 21.879008}
    ]
}

RussiaThroughUkraine = {
    "UA_BY": {
        "AUTO": [
            {name: "Доманово", lat: 51.82051374, lng: 24.32378411},
            {name: "Сеньковка", lat: 52.10813938, lng: 31.77983165},
            {name: "Нови Яриловичи", lat: 52.0747122, lng: 30.96993864},
            {name: "Славутич", lat: 51.39927259, lng: 30.65793872},
            {name: "Виступовичи", lat: 51.62457104, lng: 29.08599257},
            {name: "Городище", lat: 51.820635, lng: 26.69007182},
            {name: "Дольск", lat: 51.93500495, lng: 25.54735422},
            {name: "Пулемець", lat: 51.55716919, lng: 23.64029288}
        ],
        "RAILWAY": [
            {name: "Неданчичи", lat: 51.51208112, lng: 30.63624501},
            {name: "Щорс", lat: 51.81408045, lng: 31.94396138},
            {name: "Горностаевка", lat: 52.0529655, lng: 31.15225911},
            {name: "Удрицк", lat: 51.74709322, lng: 26.75064683},
            {name: "Заболотье", lat: 51.62913331, lng: 24.25188482},
            {name: "Выступовичи", lat: 51.56499966, lng: 29.03754115}
        ]
    },
    'UA_RU': {
        "AUTO": [
            {name: "Просяное", lat: 49.60505065, lng: 39.70625281},
            {name: "Танюшевка", lat: 49.79907187, lng: 38.95771801},
            {name: "Плетеневка", lat: 50.34498799, lng: 36.91996872},
            {name: "Гоптовка", lat: 50.32335417, lng: 36.27253175},
            {name: "Великая Писаревка", lat: 50.42990068, lng: 35.58264613},
            {name: "Юнаковка", lat: 51.17024888, lng: 35.13185263},
            {name: "Катериновка", lat: 51.6484363, lng: 34.11660433},
            {name: "Бачевск", lat: 51.87478206, lng: 34.32353139},
            {name: "Гремяч", lat: 52.36545897, lng: 33.24466109},
            {name: "Сеньковка", lat: 52.10813938, lng: 31.77983165}
        ],
        "RAILWAY": [
            {name: "Лантратовка", lat: 49.92312886, lng: 38.29006791},
            {name: "Тополи", lat: 49.96066278, lng: 37.90967435},
            {name: "Казачья Лопань", lat: 50.33540841, lng: 36.19483888},
            {name: "Зернове", lat: 52.18355008, lng: 34.02217984}
        ],
    }
}

UkraineThroughRussia = {
    "UA_BY": {
        "AUTO": [
            {name: "Новая Гута", lat: 52.092636, lng :30.967605},
            {name: "Новая Рудня", lat: 51.634453, lng :29.077463},
            {name: "Мокраны", lat: 51.829481, lng :24.294348},
            {name: "Верхний Теребежов", lat: 51.825579, lng :26.700482},
            {name: "Александровка", lat: 51.436845, lng :29.490126},
            {name: "Мохро", lat: 51.937312, lng :25.55131}
        ],
        "RAILWAY": [
            {name: "Тереховка", lat: 52.20948698, lng :31.41803384},
            {name: "Горынь", lat: 51.8520039, lng :26.7832919},
            {name: "Словечно", lat: 51.6311379, lng :29.06689525}
        ]
    }
}


function initMap(){
    console.log("Initialising map");

    var BelarusCenter = {lat: 53.76170183, lng: 28.28979492};

    googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: BelarusCenter
    });

    showMarkers(coordinates);
}

function showMarkers(coordinates){
coordinates.forEach(function(el){
    console.log(el.lat);
    console.log(el.lng);

    var marker = new google.maps.Marker({
      position: el,
      map: googleMap,
      title: el.name
    });
    var infowindow = new google.maps.InfoWindow({
              content: el.name
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    markers.push(marker);
});
markersEnabled = true;
}

function clearMarkers(){
markers.forEach(function(elem){
    elem.setMap(null);
});
markers = [];
markersEnabled = false;
}

$('#goodsSelector').on('click', function(){
    goodsMode = true;
    documentsPane.hide()
    borderPane.show();
});


$('#documentsSelector').on('click', function(){
    goodsMode = false;
    documentsPane.show()
    borderPane.hide();
});


// $('#documentTransitSelection input').on('change', function() {
$('select#borderNameSelector').on('change', function() {
    var selectedBorder = $('select#borderNameSelector option:selected').val();
    console.log(selectedBorder);
    clearMarkers();
    showMarkers(MDPCoordinates[selectedBorder]);
});

$('#bordersBtnSelector').click(function(e){
    var from = $('#selectCountryFrom').val();
    var across = $('#selectCountryTo').val();
    var means = $('#selectMeans').val();

    if (from === across){
        return;
    }

    if (from === 'RU') {
        var countryCode = across + '_' + from;
        var markers = RussiaThroughUkraine[countryCode][means];
        Array.prototype.push.apply(markers, RussiaThroughUkraine['UA_BY'][means])
        clearMarkers();
        showMarkers(markers);
    } else if (from === 'UA') {
        var markers = UkraineThroughRussia['UA_BY'][means];
        clearMarkers();
        showMarkers(markers);
    }

});

$('select#borderNameSelector').selectpicker({
    style: 'btn-info',
    size: 4
});

$('#selectCountryFrom').selectpicker({
    style: 'btn-info',
    size: 4
});

$('#selectCountryTo').selectpicker({
    style: 'btn-info',
    size: 4
});

$('#selectMeans').selectpicker({
    style: 'btn-info',
    size: 4
});
