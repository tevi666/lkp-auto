import {
    animate
} from "./helpers";
export const modal = () => {
    document.addEventListener('DOMContentLoaded', onDomReady);

    function onDomReady() {
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
            e.stopPropagation();
            openModal();
        });
        modal.addEventListener('click', e => {
            e.stopPropagation();
        });
        document.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);
    }
};