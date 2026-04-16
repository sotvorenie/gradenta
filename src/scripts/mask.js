import Inputmask from 'inputmask';

// Если Inputmask пришел как объект с полем default
const Masker = Inputmask.default || Inputmask;

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input-tel');
    inputs.forEach(input => {
        new Masker({ // Добавь new, если это класс
            mask: "+7 (999) 999-99-99",
            showMaskOnHover: false
        }).mask(input);
    });
});