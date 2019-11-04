{

  function toggleMenu(visible) {
    document.querySelector('.sidenav').classList.toggle('show', visible);
  }

  document.querySelector('.mobile-menu').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked!');
    toggleMenu();
  });

}
