const btnReservation = document.querySelector('.btn-reservation');
const formBooking = document.querySelector('.booking-form');
const booking = document.querySelector('.block-booking');
const produit = document.querySelector('.produit');
const closeWindows = document.querySelector('#close');
const thanks = document.querySelector('.thanks')

console.log(btnReservation)

btnReservation.addEventListener('click', (e) => {
    produit.style.display = 'none';
    booking.style.display = 'block';
});

closeWindows.addEventListener('click', (e) => {
    produit.style.display = 'flex';
    booking.style.display = 'none';
})


formBooking.addEventListener('submit', (e) => {
    e.preventDefault();
    booking.style.display = 'none';
    thanks.style.display = 'block';
    setTimeout(() => {
        produit.style.display = 'flex'
        thanks.style.display = 'none';
    }, 2000);  
})
