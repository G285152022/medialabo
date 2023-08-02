// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="seisu"]');
  let yoso = i.value;
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;
  let y = document.querySelector('span#answer');
  y.textContent = yoso;
  let r = document.querySelector('p#result');

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  if(kaisu < 4){
    if(kotae == yoso){
      r.textContent = '正解です. おめでとう！';
      kaisu += 1;
    }
    else if(kaisu == 3){
      r.textContent = ('まちがい. 残念でした答えは' + kotae + 'です.');
      kaisu += 1;
    }
    else if(kotae != yoso && kotae > yoso){
      r.textContent = 'まちがい.答えはもっと大きいですよ';
      kaisu += 1;
    }
    else{
      r.textContent = 'まちがい.答えはもっと小さいですよ';
      kaisu += 1;
    }
  }else{
    r.textContent = ('答えは' + kotae + 'でした. すでにゲームは終わっています');
    kaisu += 1;
  }
}
