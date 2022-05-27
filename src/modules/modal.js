import {
    animate
} from "./helpers";
export const modal = () => {
    document.addEventListener('DOMContentLoaded', onDomReady);

    function onDomReady() {
        const modal = document.querySelector('.modal__services');
        const btn = document.querySelector('.modal-services');
        const closeBtn = document.querySelector('.close__btn');

        const modalAbout = document.querySelector('.about__modal');
        const btnAbout = document.querySelector('.about-btn');
        const closeBtnAbout = document.querySelector('.about__close');

        const closeModal = () => {
            modal.style.display = 'none';
        };
        const openModal = () => {
            modal.style.display = 'block';
        };

        const close = () => {
            modalAbout.style.display = 'none';
        };
        const open = () => {
            modalAbout.style.display = 'block';
        };

        btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            openModal();
        });

        modal.addEventListener('click', e => {
            e.stopPropagation();
        });

        btnAbout.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            open();
        });

        modalAbout.addEventListener('click', e => {
            e.stopPropagation();
        });

        document.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);

        document.addEventListener('click', close);
        closeBtnAbout.addEventListener('click', close);
    }
};