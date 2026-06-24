// Q1変数
//   変数 nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。
// 　私のニックネームはごっしーです。年齢は28歳です。

let nickname = 'Oshima Misa';
let age = '29';

console.log (`私のニックネームは${nickname}です。年齢は${age}歳です。`);

// 🟠ポイント
// console.logの後は()で囲む。
// ${nickname}周りにはスペースはいらない。
// バッククォートを使用する。

// Q2配列
// 　変数 languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、
// その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のように
// コンソールに出力してください。

// 私の好きな言語はJavaScriptです。次はPythonを勉強してみたいです。

let languages = [ 'JavaScript', 'PHP', 'Ruby', 'Python', 'Go' ];

console.log(`私の好きな言葉は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);


// Q3オブジェクト
// 下記の変数 user を使用し 26 をコンソールに出力してください。

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


// Q4配列×オブジェクト
// 下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。


let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q4
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

🟡直し Q. 要素の数が増えてもコード修正をせずに平均年齢が正しくコンソールに出力されるようにするには？
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length);

📝length➡️配列の要素の数を取得するもの　🟡配列名.length
要素を1つ増やし、console.log((playerList[0].age + playerList[1].age + playerList[2].age + playerList[3].age) / playerList.length);で実行、
平均年齢が正しくコンソールに出力されたのを確認済みです。


🟡再直し playerListの[○]を修正せずに済むようなコードに書き換える

let total = 0;

for (let i = 0; i < playerList.length; i++) {
  total += playerList[i].age;
}
console.log(total/playerList.length);

ポイント
⭕️playerList[i].age → playerList[1]のage、っていうイメージ
❌playerList.age[i]



// ポイント
// playerListは配列なので直接favoritesにアクセスすることができない。
// 配列の中のインデックス番号が何番目で、さらにその中の何番目の値を取り出したいのかを指定する。


// Q5 四則演算
// Q4 で定義した変数 playerList を使用し、
// John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。

// 🟠L64に記載


// Q6 関数
// ❶Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
// ❷変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。

❶
function sayHello(){
  console.log(`Hello`);
}

sayHello();

// ポイント
// 関数内で定義されている処理内容がconsole.logなので、実行の際に重ねてconsole.logする必要はない。

❷
const sayWorld = function(){
    console.log(`World`);
}

sayWorld();

// 🟠ポイント
// Sec.3　関数の定義方法に❷に関しての記載あり

// Q7　メソッド
// ❶ Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
// ❷ Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
// ※ いずれも Q3 で定義した変数 user を直接書き換えないこと →✅これできてるのか？

Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// -------------------------------------

user.birthday = '2000-09-27';
user.sayHello = function(){
    console.log('Hello!');
  };

console.log(user.age);
user.sayHello();

// 🟠ポイント
// Sec.3 オブジェクトに関数を持たせる に書き方の記載あり。

// Q8　引数
// ❶ 下記の空のオブジェクト calc を使用し、以下問題を解いてください。
//   Aー2つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
//   Bー2つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
//   Cー2つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
//   Dー2つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。

  ✅A
    let calc = {};

    calc.add = function(x, y){
      console.log(x + y);
    }

    calc.add(2, 5);
    // $calc->add(2,5);

    ✅B
    calc.subtract = function(x, y){
      console.log(x - y);
    }
    calc.subtract(15, 5);

    ✅C
    calc.multiply = function(x, y){
      console.log(x * y);
    }
    calc.multiply(7, 7);

    ✅D
    calc.divide = function(x, y){
      console.log(x / y);
    }
    calc.divide(25, 5);

    // 🟠ポイント
    // let calcで空のオブジェクトを作って、その中にキー(今回はメソッド)を追加した上で、
    // そのメソッドをconsole.logで呼び出す。
    // そして例：7になるように実行してください、は7になる数字で試してみてください、っていう意味


    // Q9 2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数 remainder を定義し、
    // 5 と 3 を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。

    // ➡️ 5 を 3 で割った余りは 2 です。

      function remainder(x,y){
      let divide = (x % y);
      return divide;
      }
    
    let result = remainder(5,3);
    console.log(`${5}を${3}で割った余りは${result}です。`);

    // Q10 スコープ
    // 下記の console.log(x); においてコンソールに 1 が出力されることはなく、
    // x is not defined（変数 x が定義されていない）というエラーが出力されます。
    // その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。
    // ➡️ スコープ、参照
      
    ここから
    function foo() {
      let x = 1;
      }
    console.log(x);
    ここまで

    // 🟡解答
    // JavaScriptでは、関数の中で定義した変数はその定義された関数の中でしか参照ができない。
    // 今回の場合、function foo内で定義しているxは、function foo内でしか参照できないにも関わらず、
    // その関数外から参照しコンソール出力しようとしている。
    // そのため定義されていないxを呼び出すことはできず、x is not definedというエラーが出力されている。





    // 🌟🌟 Sec.６ 応用編 🌟🌟
    // Q1　標準組み込みオブジェクト
    // 標準組み込みオブジェクト Math を使用し、0 ~ 9 のランダムな整数をコンソールに出力してください。

    let random = Math.random();
    // console.log('random =>', random);

    let trash = random * 10;
    // console.log('trash =>', trash);

    let round = Math.floor(trash);
    // console.log('round =>', round);

    // let answer = floor;
    console.log('ランダムな整数 =>', floor);

    上記がやりたい内容を順番に書いたもの
    下記が上記の文章を一文にまとめたもの
    Q2解答🟠console.log('ランダムな整数 =>', Math.floor(Math.random() * 10));


    Q2　コールバック関数
    関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。
    Hello World!

    setTimeout( 実行したい処理（関数）, 待ち時間（ミリ秒） );
    1秒 = 1000
    3秒 = 3000
    0.5秒 = 500

    // setTimeout(console.log('Hello World'), 3000);

    // function setTimeout(callback){
    //   console.log('Hello World!');
    //   callback();
    // }

    setTimeout(function(){
      console.log('Hello World!');
    }, 3000);


    Q3 if
    変数 num に 任意の数値を代入し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

    条件
    num が 0 より大きければnum is greater than 0
    num が 0 より小さければnum is less than 0
    num が 0 であればnum is 0

  🟠解答

  let num = 0;
  if(num > 0){
    console.log('num is greater than 0');
    }
    
  if(num < 0){
      console.log('num is less than 0');
      }

  if(num === 0){
      console.log('num is 0');
  }

  
  🟡直し else ifを使用してより簡潔にしてみる

let num = 0;

if(num > 0){
  console.log('num is greater than 0');
}else if(num < 0){
    console.log('num is less than 0');
}else{
    console.log('num is 0');
}


Q4 for
変数 numbers に空の配列を代入した後、0 ~ 99 までの数字を変数 numbers に全て追加し、
値が追加された状態の変数 numbers をコンソールに出力してください。

let numbers = [];

for(let i=0; i <= 99; i++){
    console.log(i)
    numbers.push(i);
};

🟡直し 数字の出力ではなく、配列ごと出力をさせる

let numbers = [];

for(let i=0; i <= 99; i++){
    numbers.push(i);
};
    console.log(numbers);


Q5 for × if

以下の変数 mixed から 要素を一つずつ取り出し、
下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

let mixed = [4, '2', 5, '8', '9', 0, 1];

Number であり偶数の時は even
Number であり奇数の時は odd
Number 以外の時は not number


🟠回答
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i of mixed){
    if(typeof i !== 'number'){
        console.log('not number');
    }else if(i % 2 === 0){
        console.log('even');
    }else{
        console.log('odd');
    }
    }







