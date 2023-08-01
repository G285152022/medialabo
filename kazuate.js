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
    let button = document.querySelector('button#print');
    let p = document.createElement('p');
    p.textContent = (kaisu + '回目の予想: ' + yoso);
    button.insertAdjacentElement('afterend', p);

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  console.log(kaisu + '回目の予想: ' + yoso);
  if(kaisu < 4){
    if(kotae == yoso){
      console.log('正解です. おめでとう！');
      kaisu += 1;
    }
    else if(kaisu == 3){
      console.log('まちがい. 残念でした答えは' + kotae + 'です.');
      kaisu += 1;
    }
    else if(kotae != yoso && kotae > yoso){
      console.log('まちがい.答えはもっと大きいですよ');
      kaisu += 1;
    }
    else{
      console.log('まちがい.答えはもっと小さいですよ');
      kaisu += 1;
    }
  }else{
    console.log('答えは' + kotae + 'でした. すでにゲームは終わっています');
    kaisu += 1;
  }
}
