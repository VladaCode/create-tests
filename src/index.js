import './pages/index.css'; // добавьте импорт главного файла стилей   

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close');

    const toggleModal = () => {
        modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
    };

    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            toggleModal();
        }
    });
});