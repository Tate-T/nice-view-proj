(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-touch-open]"),
    closeModalBtn: document.querySelector("[data-touch-close]"),
    modal: document.querySelector("[data-touch]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();