'use strict';
//we select an element using selector but the we store the result of the selection in this variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {

    //How to manipulate classes with JS?
    //we can add class that we want to remove by adding a coma
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };


//no curly brackets bcz it just one line of code
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// modal.classList.add('hidden');instead of doing this code to close we can make it shorter like the above one
// overlay.classList.add('hidden');


//keyboard event/global event
//we do not call the function here, we just define it
document.addEventListener('keydown', function(event){
console.log(event.key);

if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
