/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* global Chart */
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

  //section toggle
  const sections = document.querySelector('.main').children;
  const navlinks = document.querySelectorAll('.navlist a');
  console.log(navlinks);

  function activatePage(pageId) {
    for (let section of sections) {
      section.classList.toggle('active', section.id == pageId);
    }
    for (let link of navlinks) {
      link.classList.toggle('active', link.getAttribute('href') == '#' + pageId);
    }
  }

  const idFromHash = window.location.hash.replace('#/', '');
  let pageMatchingHash = sections[0].id;
  for (let section of sections) {
    if (section.id == idFromHash) {
      pageMatchingHash = section.id;
      break;
    }
  }
  activatePage(pageMatchingHash);

  for (let link of navlinks) {
    link.addEventListener('click', function (event) {
      console.log(link);
      event.preventDefault();
      const clickedElement = this;
      console.log('clickedElemenr', clickedElement);
      const id = clickedElement.getAttribute('href').replace('#', '');
      console.log(id);
      activatePage(id);
      // change URL hash
      window.location.hash = '#/' + id;
    });
  }

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

  avatarMini.addEventListener('click', function () {
    openModal(loginModal);
  });


  //charts
  const ctx = document.getElementById('myChart').getContext('2d');

  const chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
      // 2
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      // 3
      datasets: [{
        // 4
        label: "Signups",
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: "FTD",
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: "Earned",
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      }]
    },
  });
}
