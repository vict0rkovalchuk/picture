const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no');

  menu.addEventListener('click', e => {
    let target = e.target;
    if (target && target.tagName == 'LI') {
      markAll.forEach(mark => {
        mark.style.display = 'none';
        mark.classList.remove('animated', 'fadeIn');
      });

      no.style.display = 'none';
      no.classList.remove('animated', 'fadeIn');

      const markName = target.classList[0];
      const itemsToRender = wrapper.querySelectorAll(`.${markName}`);

      if (itemsToRender.length > 0) {
        itemsToRender.forEach(item => {
          item.style.display = 'block';
          item.classList.add('animated', 'fadeIn');
        });
      } else {
        no.style.display = 'block';
        no.classList.add('animated', 'fadeIn');
      }

      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

export default filter;
