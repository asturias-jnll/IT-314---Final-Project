document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // admin/seller credentials
        const adminCredentials = {
            username: 'selleradmin',
            password: 'sellerpass'
        };

        // customer credentials
        const customerCredentials = {
            username: 'customer',
            password: 'customerpass'
        };


        if (username === adminCredentials.username && password === adminCredentials.password) {
            window.location.href = 'seller-home.html'; // Redirect to seller home page
        } else if (username === customerCredentials.username && password === customerCredentials.password) {
            window.location.href = 'customer-home.html'; // Redirect to customer home page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
