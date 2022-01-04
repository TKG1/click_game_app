// ブラウザバックに対応
window.onbeforeunload = function() {
  // IE用。ここは空でOKです
};
window.onunload = function() {
  // IE以外用。ここは空でOKです
};

let popup = document.querySelector('.popup');
let button = document.querySelector('#js-click');
let image = document.querySelector('#js-image');
let counter = document.querySelector('strong');
let timer = document.querySelector('.js-timer')
let count = 0;
let clock = 1;

popup.addEventListener('click', () => {
  popup.style.display ="none";
// クリックイベント
  button.addEventListener('click', () => {
    count += 1;
    
    if((count % 2) == 0) {
      image.src = '/assets/down.jpg'
      counter.textContent = (count / 2);
      return 
    }
    image.src = '/assets/top.jpg'
  });
  
  // 1秒ごとに実行
  let every_second = setInterval(()=> {
    // 現在時刻
    // let time = new Date().toLocaleTimeString();

    // 秒数表示
    // let second = (new Date().getSeconds());

    // 秒数カウント
    timer.textContent = clock + '秒';
    clock += 1
  }, 1000);
  // 60秒後にタイマーを止める
  setTimeout(() => {
    clearInterval(every_second); 
    timer.textContent = "Time UP";
    window.location.assign('http://localhost:3000/results?count=' + Math.ceil(count/2) );
  }, 10000);
});
