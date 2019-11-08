{

  //mobile menu
  function toggleMenu(visible) {
    document.querySelector('.sidenav').classList.toggle('show', visible);
  }

  document.querySelector('.mobile-menu').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked!');
    toggleMenu();
  });

  //email check
  document.querySelector('form').addEventListener('submit', function (event) {
    let isFormValidate = true;
    console.log(isFormValidate);

    const emailAddressInput = event.target.querySelector('input[name="email_address"]');
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailAddressInput))) {
      isFormValidate = false;
      console.log(isFormValidate);
      emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Wrong email address';
    }

    return !isFormValidate ? event.preventDefault() : true;
  });


  //modal functions
  function closeModal() {
    document.getElementById('overlay').classList.remove('show');
  }

  document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });

  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function (modal) {
      modal.classList.remove('show');
    });
    document.querySelector('#overlay').classList.add('show');
    modal.classList.add('show');
  }

  const avatarMini = document.querySelector('.avatar--mini');
  const loginModal = document.querySelector('#loginModal');
  console.log(loginModal);

  avatarMini.addEventListener('click', function () {
    openModal(loginModal);
  });
}
