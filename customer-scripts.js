document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    // Toggle theme and icon
    themeToggleBtn?.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', currentTheme);
    });

    // Initialize the product list
    if (document.getElementById("productListSection")) {
        fetchProducts();
        applyFilters();

        // Attach event listeners for filters
        document.getElementById("search-bar")?.addEventListener("input", applyFilters);
        document.getElementById("filter-category")?.addEventListener("change", applyFilters);
        document.getElementById("filter-price")?.addEventListener("change", applyFilters);
    }

    // JavaScript to handle active nav button
    const navButtons = document.querySelectorAll('#navButtons .nav-button');
    const activeNavId = localStorage.getItem('activeNavId');
    if (activeNavId) {
        const activeNav = document.getElementById(activeNavId);
        if (activeNav) {
            activeNav.classList.add('active');
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            localStorage.setItem('activeNavId', this.id);
        });
    });

});



// Fetch products from localStorage
function fetchProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    window.originalProducts = products; // Store original products globally for filtering
    window.filteredProducts = [...products]; // Copy products for filtering
    applyFilters();
}

// Apply filters and render product list
function applyFilters() {
    const searchQuery = document.getElementById("search-bar")?.value.toLowerCase() || "";
    const categoryFilterValue = document.getElementById("filter-category")?.value || "all";
    const priceFilterValue = document.getElementById("filter-price")?.value || "none";

    window.filteredProducts = window.originalProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        const matchesCategory = categoryFilterValue === "all" || product.category === categoryFilterValue;
        return matchesSearch && matchesCategory;
    });

    if (priceFilterValue === "low-to-high") {
        window.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilterValue === "high-to-low") {
        window.filteredProducts.sort((a, b) => b.price - a.price);
    }

    renderProductList();
}

// Render product list in grid layout
function renderProductList() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    window.filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="buy-btn">Buy Now</button>
        `;
        productList.appendChild(productCard);
    });
}
