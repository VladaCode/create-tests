import ('./pages/index.css')
document.addEventListener('DOMContentLoaded', () => {
    const signupModal = document.getElementById('signupModal');
    const loginModal = document.getElementById('loginModal');
    const openSignupModalButtons = document.querySelectorAll('#signupBtn'); // Все кнопки с id signupBtn
    const openLoginModalButton = document.getElementById('loginBtn');
    const closeModalButtons = document.querySelectorAll('.close');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    // Открытие модального окна при клике на кнопки с id="signupBtn"
    openSignupModalButtons.forEach(button => {
        button.onclick = function() {
            signupModal.style.display = 'block';
        };
    });

    // Открытие модального окна при клике на кнопку "Login"
    if (openLoginModalButton) {
        openLoginModalButton.onclick = function() {
            loginModal.style.display = 'block';
        };
    }

    // Закрытие модальных окон
    closeModalButtons.forEach(button => {
        button.onclick = function() {
            signupModal.style.display = 'none';
            loginModal.style.display = 'none';
        };
    });

    // Закрытие модальных окон при клике вне их
    window.onclick = function(event) {
        if (event.target === signupModal) {
            signupModal.style.display = 'none';
        } else if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    };

    // Обработка отправки формы регистрации
    if (signupForm) {
        signupForm.onsubmit = function(event) {
            event.preventDefault(); 
            window.location.href = 'tests.html'; 
        };
    }

    // Обработка отправки формы логина
    if (loginForm) {
        loginForm.onsubmit = function(event) {
            event.preventDefault(); 
            window.location.href = 'tests.html'; 
        };
    }
});

