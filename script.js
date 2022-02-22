{
  const sidebar = document.querySelector('.sidebar');
  const navbarToggler = document.querySelector('.navbar-toggler');

  navbarToggler.addEventListener('click', () => {
    document.body.classList.toggle('sidebar--hide');
  })
}
