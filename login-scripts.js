document.addEventListener('DOMContentLoaded', () => {
    // Dark Theme Toggle
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme and icon
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
            localStorage.setItem('theme', currentTheme);
        });
    }

    // Login Choice Buttons
    const customerLoginButton = document.getElementById('customerLoginButton');
    const sellerLoginButton = document.getElementById('sellerLoginButton');
    const customerLogin = document.getElementById('customerLogin');
    const sellerLogin = document.getElementById('sellerLogin');

    // Check if login choice buttons exist
    if (customerLoginButton && sellerLoginButton) {
        // Show Customer Login
        customerLoginButton.addEventListener('click', () => {
            customerLogin.classList.remove('hidden');
            sellerLogin.classList.add('hidden');
            console.log('Customer login form displayed.');
        });

        // Show Seller Login
        sellerLoginButton.addEventListener('click', () => {
            sellerLogin.classList.remove('hidden');
            customerLogin.classList.add('hidden');
            console.log('Seller login form displayed.');
        });
    } else {
        console.error('Login choice buttons not found.');
    }

    // Customer Login Form
    const customerLoginForm = document.getElementById('customerLoginForm');
    if (customerLoginForm) {
        customerLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('customerUsername').value.trim();
            const password = document.getElementById('customerPassword').value.trim();

            // Hardcoded customer credentials for demo purposes
            const customerCredentials = {
                username: 'customer',
                password: 'customerpass'
            };

            if (username === customerCredentials.username && password === customerCredentials.password) {
                console.log('Customer login successful.');
                window.location.href = 'customer-home.html'; // Redirect to customer home page
            } else {
                alert('Invalid customer credentials. Please try again.');
            }
        });
    } else {
        console.error('Customer login form not found.');
    }

    // Seller Login Form
    const sellerLoginForm = document.getElementById('sellerLoginForm');
    if (sellerLoginForm) {
        sellerLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('sellerUsername').value.trim();
            const password = document.getElementById('sellerPassword').value.trim();

            // Hardcoded seller credentials for demo purposes
            const sellerCredentials = {
                username: 'selleradmin',
                password: 'sellerpass'
            };

            if (username === sellerCredentials.username && password === sellerCredentials.password) {
                console.log('Seller login successful.');
                window.location.href = 'seller-home.html'; // Redirect to seller home page
            } else {
                alert('Invalid seller credentials. Please try again.');
            }
        });
    } else {
        console.error('Seller login form not found.');
    }
});
