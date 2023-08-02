let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let div = document.querySelector('div#result');
let ul = document.createElement('ul');
let li = document.createElement('li');
li.textContent = '世界の天気(検索結果1件)';
div.insertAdjacentElement('beforeend', ul);
ul.insertAdjacentElement('beforeend', li);
let ul2 = document.createElement('ul');
li.insertAdjacentElement('afterend', ul2);
let w = [
  {name:'緯度', d:116.3972},
  {name:'経度', d:39.9075},
  {name:'天気', d:'曇りがち'},
  {name:'最低気温', d:9.94},
  {name:'最高気温', d:9.94},
  {name:'湿度', d:14},
  {name:'風速', d:2.65},
  {name:'風向', d:197},
  {name:'都市名', d:'北京市'}
];

for(let n of w){
  let li2 = document.createElement('li');
  li2.textContent = (n.name + ': ' + n.d);
  ul2.insertAdjacentElement('beforeend', li2);
}

let wt = [
  {name:'カイロ',d:360630},
  {name:'モスクワ',d:524901},
  {name:'ヨハネスブルク',d:993800},
  {name:'北京',d:1816670},
  {name:'東京',d:1850147},
  {name:'シンガポール',d:1880252},
  {name:'シドニー',d:2147714},
  {name:'ロンドン',d:2643743},
  {name:'パリ',d:2968815},
  {name:'リオデジャネイロ',d:3451189},
  {name:'ニューヨーク',d:5128581},
  {name:'ロサンゼルス',d:5368361},
];

let b = document.querySelector('#print');
b.addEventListener('click', hantei);
function hantei() {
  let t = document.querySelector('input[name="tenki"]');
  let tenki = t.value;
  for(let n of wt){
    if(tenki == n.d || tenki == n.name){
      console.log(n.name);
    }
  }




}
