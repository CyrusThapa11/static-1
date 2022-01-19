const icons = document.querySelectorAll('.section-1-icons i');

const menu = document.querySelector('.menu').addEventListener('click', () => {
  // GIVES A NODE LIST !

  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change');
  });

  //  add new class via toggle method
});

let i = 1;

setInterval(() => {
  // remove the class from prev and add it to next element
  i++;
  const icon = document.querySelector('.section-1-icons .change');

  icon.classList.remove('change');
  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else icon.nextElementSibling.classList.add('change');
}, 2000);
