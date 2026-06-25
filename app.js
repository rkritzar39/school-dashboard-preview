function showMessage(message) {
  alert(message)
}

const menuToggle = document.getElementById('menuToggle')
const topNav = document.getElementById('topNav')

if (menuToggle && topNav) {
  menuToggle.addEventListener('click', function () {
    topNav.classList.toggle('show')
  })
}
