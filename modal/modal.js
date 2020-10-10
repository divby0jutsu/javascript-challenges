const wrapper = document.querySelector(".wrapper");
const btnOpen = document.querySelector("#open-modal");

const createModal = () => {
  wrapper.insertAdjacentHTML('beforeend', '<div id="overlay" class="modal-overlay"><div id="modal" class="modal"><div class="modal__text">Cats are our overlords!</div><a href="#" id="close-modal" class="close">x</a></div></div>');
};


wrapper.addEventListener("click", e => {
  if (e.target && e.target.id == "overlay" || e.target && e.target.id == "close-modal") {
    const overlay = document.querySelector("#overlay");
    overlay.remove();
  }
});

btnOpen.addEventListener('click', createModal);

