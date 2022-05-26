import {
    animate
} from "./helpers";
export const modal = () => {
    const modal = document.querySelector('.modal__services');
    const btn = document.querySelector('.modal-services');
    const closeBtn = document.querySelector('.close__btn');

    const closeModal = () => {
        modal.style.display = 'none';
    };
    const openModal = () => {
        modal.style.display = 'block';
    };
    btn.addEventListener('click', e => {
        e.preventDefault();
        openModal();
    });
    closeBtn.addEventListener('click', closeModal);
};