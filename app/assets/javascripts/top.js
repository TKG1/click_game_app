document.addEventListener('DOMContentLoaded', () => {
  const x = document.querySelector('#js-click');
  let image = document.querySelector('#js-image');
  let count = 0;

  x.addEventListener('click', () => {
    count += 1;
    
    if((count % 2) == 0) {
      image.src = '/assets/top.jpg'
    } else {
      image.src = '/assets/down.jpg'
    }
  });
});