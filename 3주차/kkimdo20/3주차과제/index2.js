const items = document.querySelectorAll('.item');
document.body.addEventListener('click', (click) => {
  const targetlist = click.target.classList;
  if (targetlist.toString().includes('item')) {
    targetlist.toggle('open');
    items.forEach(function(some) {
      if (some !== click.target) {
        some.classList.remove('open');
      }
    });
    return;
  }
  items.forEach((some) => {
    some.classList.remove('open');
  })
});