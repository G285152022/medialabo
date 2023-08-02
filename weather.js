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
let w = ['緯度', '経度', '天気', '最低気温', '最高気温', '湿度', '風速', '風向', '都市名'];
let d = data.coord.lon;
let d1 = data.coord.lat;
let d2 = data.weather[0].description;
let d3 = data.main.temp_min;
let d4 = data.main.temp_max;
let d5 = data.main.humidity;
let d6 = data.wind.speed;
let d7 = data.wind.deg;
let d8 = data.name;
let array = [d, d1, d2, d3, d4, d5, d6, d7, d8];
for(let n of w){
  let li2 = document.createElement('li');
  li2.textContent = (n + ': ' + n);
  ul2.insertAdjacentElement('beforeend', li2);
}


