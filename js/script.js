{

  function toggleMenu(visible) {
    document.querySelector('.sidenav').classList.toggle('show', visible);
  }

  document.querySelector('.mobile-menu').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked!');
    toggleMenu();
  });

  document.querySelector('form').addEventListener('submit', function(event) {
  let isFormValidate = true;
  console.log(isFormValidate);

  const emailAddressInput = event.target.querySelector('input[name="email_address"]')
  if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailAddressInput))) {
    isFormValidate = false;
    console.log(isFormValidate);
    emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Wrong email address';
  }

  return !isFormValidate ? event.preventDefault() : true;
})

}
