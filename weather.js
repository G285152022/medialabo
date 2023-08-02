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
let ken = 1;
li.textContent = '世界の天気(検索結果' + ken + '件)';
div.insertAdjacentElement('beforeend', ul);
ul.insertAdjacentElement('beforeend', li);
let ul2 = document.createElement('ul');
li.insertAdjacentElement('afterend', ul2);
let wd = [
  {name:'緯度', kd:31.2497, md:37.6156, yd:28.0436, pd:116.3972, td:139.6917, sd:103.8501, syd:151.2073, ld:-0.1257, pad:2.3486, rd:-42.5, nd:-74.006, losd:-118.2437},
  {name:'経度', kd:30.0626, md:55.7522, yd:-26.2023, pd:39.9075, td:35.6895, sd:1.2897, syd:-33.8679, ld:51.5085, pad:48.8534, rd:-22, nd:40.7143, losd:34.0522},
  {name:'天気', kd:'晴天', md:'厚い雲', yd:'雲', pd:'曇りがち', td:'曇りがち', sd:'曇りがち', syd:'小雨', ld:'曇りがち', pad:'霧', rd:'厚い雲', nd:'厚い雲', losd:'雲'},
  {name:'最低気温', kd:18.36, md:-9.19, yd:13.19, pd:9.94, td:9.25, sd:26.62, syd:21.31, ld:2.7, pad:0.85, rd:18.03, nd:3.25, losd:7.42},
  {name:'最高気温', kd:19.12, md:-5.98, yd:14.34, pd:9.94, td:13.77, sd:28.02, syd:24.23, ld:4.59, pad:2.86, rd:18.03, nd:7.75, losd:11.95},
  {name:'湿度', kd:34, md:74, yd:92, pd:14, td:21, sd:82, syd:93, ld:79, pad:89, rd:96, nd:71, losd:75},
  {name:'風速', kd:0, md:2.7, yd:1.34, pd:2.65, td:6.17, sd:2.57, syd:2.24, ld:3.6, pad:4.63, rd:1.21, nd:2.57, losd:1.54},
  {name:'風向', kd:0, md:272, yd:11, pd:197, td:130, sd:60, syd:179, ld:50, pad:10, rd:166, nd:100, losd:280},
  {name:'都市名', kd:'カイロ', md:'モスクワ', yd:'ヨハネスブルク', pd:'北京市', td:'東京', sd:'シンガポール', syd:'シドニー', ld:'ロンドン', pad:'パリ', rd:'リオデジャネイロ', nd:'ニューヨーク', losd:'ロサンゼルス'}
];

let u = document.querySelectorAll('ul#location');
for(let n of u){
  n.remove();
}


for(let n of wd){
  let lid = document.createElement('li');
  ul2.insertAdjacentElement('beforeend', lid);
  lid.textContent = (n.name + ': ' + n.pd);
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
  ken += 1;
  let t = document.querySelector('input[name="tenki"]');
  let tenki = t.value;
  for(let n of wd){
    let lid = document.createElement('li');
    if(tenki == wt[0].name || tenki == wt[0].d){
      lid.textContent = (n.name + ': ' + n.kd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[1].name || tenki == wt[1].d){
      lid.textContent = (n.name + ': ' + n.md);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[2].name || tenki == wt[2].d){
      lid.textContent = (n.name + ': ' + n.yd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[3].name || tenki == wt[3].d){
      lid.textContent = (n.name + ': ' + n.pd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[4].name || tenki == wt[4].d){
      lid.textContent = (n.name + ': ' + n.td);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[5].name || tenki == wt[5].d){
      lid.textContent = (n.name + ': ' + n.sd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[6].name || tenki == wt[6].d){
      lid.textContent = (n.name + ': ' + n.syd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[7].name || tenki == wt[7].d){
      lid.textContent = (n.name + ': ' + n.ld);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[8].name || tenki == wt[8].d){
      lid.textContent = (n.name + ': ' + n.pad);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[9].name || tenki == wt[9].d){
      lid.textContent = (n.name + ': ' + n.rd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else if(tenki == wt[10].name || tenki == wt[10].d){
      lid.textContent = (n.name + ': ' + n.nd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }else{
      lid.textContent = (n.name + ': ' + n.losd);
      li.textContent = '世界の天気(検索結果' + ken + '件)';
      ul2.insertAdjacentElement('beforeend', lid);
    }
  }
}

b.addEventListener('click', sendRequest);


function sendRequest() {
    let t = document.querySelector('input[name="tenki"]');
    let tenki = t.value;
    if(tenki == wt[0].d || tenki == wt[0].name){
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json';
      axios.get(url).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[1].d || tenki == wt[1].name){
      let urlm = 'https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json'; 
      axios.get(urlm).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[2].d || tenki == wt[2].name){
      let urly = 'https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json';
      axios.get(urly).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[3].d || tenki == wt[3].name){
      let urlp = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';
      axios.get(urlp).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[4].d || tenki == wt[4].name){
      let urlt = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json';
      axios.get(urlt).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[5].d || tenki == wt[5].name){
      let urls = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json';
      axios.get(urls).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[6].d || tenki == wt[6].name){
      let urlsy = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json';
      axios.get(urlsy).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[7].d || tenki == wt[7].name){
      let urllon = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';
      axios.get(urllon).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[8].d || tenki == wt[8].name){
      let urlpa = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json';
      axios.get(urlpa).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[9].d || tenki == wt[9].name){
      let urlr = 'https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json';
      axios.get(urlr).then(showResult).catch(showError).then(finish);
    }else if(tenki == wt[10].d || tenki == wt[10].name){
      let urln = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json';
      axios.get(urln).then(showResult).catch(showError).then(finish);
    }else{
      let urllos = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json';
      axios.get(urllos).then(showResult).catch(showError).then(finish);
    }


}

function showResult(resp) {
    let data = resp.data;

    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
}

function showError(err) {
    console.log(err);
}

function finish() {
    console.log('Ajax 通信が終わりました');
}

