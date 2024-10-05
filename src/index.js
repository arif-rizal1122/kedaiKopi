feather.replace()
const searchButton = document.querySelector('#search-button')
const searchBox  = document.querySelector('#search-box')
const shoppingIcon = document.querySelector('#shopping-card')
const itemDetailButton = document.querySelectorAll('.item-detail-button')


const navbarNav = document.querySelector('.navbar-nav')
const searchForm = document.querySelector('.search-form') 
const shoppingCard = document.querySelector('.shopping-card')
const itemDetailModal = document.querySelector('#item-detail-modal')

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}
const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', function (e) {
    // jika diluar hamburger-menu
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }

    if (!shoppingCard.contains(e.target) && !shoppingIcon.contains(e.target)) {
         shoppingCard.classList.remove('active')
    }

})


// ketika id search-button nya diclick maka toggle/tambahkan kelas active didalamnya 
// ini agar aksi default nya tidak dijalankan  e.preventDefault() . agar tidak di secroll keatas
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active')
    searchBox.focus()
    e.preventDefault()
}


document.querySelector('#shopping-card').onclick = (e) => {
    shoppingCard.classList.toggle('active')
    e.preventDefault();
} 

itemDetailButton.forEach((btn) => {
   btn.onclick = (e) => {
   itemDetailModal.style.display = 'flex';
   e.preventDefault();
  } 
})





// click tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none'
    e.preventDefault()
}



window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none'
        e.preventDefault()
    }
}