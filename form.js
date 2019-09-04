
const modalControls = (() => {
   //this function opens modal btn
   const openModal = () => {
    modal.classList.remove('hide-modal');
};
//this function closes modal btn
const closeModal = () => {
    modal.classList.add('hide-modal');
    email.value = '';
    name.value = '';
    title.value = '';
    message.value = '';
    };

//assigns function when action is triggered
const openModalBtn = document.querySelector('.contact-modal-open-btn').addEventListener('click', openModal);
    const closeModalBtn = document.querySelector('#close-btn');
    closeModalBtn.addEventListener('click', closeModal);
    const modal = document.querySelector('#modal-with-form'); 
    const name = document.querySelector('#name'); 
    const email = document.querySelector('#email'); 
    const title = document.querySelector('#title');
    const message = document.querySelector('#message'); 
})();