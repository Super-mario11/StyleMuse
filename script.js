/* ========================================
   STYLEMUSE - JavaScript Functionality
   ======================================== */

// ========================================
// Product Data (with localStorage persistence)
// ========================================
const productsDataDefault = [
    // Skincare
    {
        id: 1,
        title: "Hyaluronic Acid Serum",
        category: "skincare",
        price: 24.99,
        originalPrice: 39.99,
        description: "Hydrating serum with hyaluronic acid for plump, radiant skin",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 342,
        badge: "Editor's Pick",
        affiliate: "https://amazon.com/s?k=hyaluronic+acid+serum"
    },
    {
        id: 2,
        title: "Retinol Night Cream",
        category: "skincare",
        price: 32.99,
        originalPrice: 49.99,
        description: "Anti-aging retinol cream for smoother, younger-looking skin",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 289,
        badge: "Best Seller",
        affiliate: "https://amazon.com/s?k=retinol+night+cream"
    },
    {
        id: 3,
        title: "Vitamin C Brightening Serum",
        category: "skincare",
        price: 28.50,
        originalPrice: 45.00,
        description: "Brightens and evens out skin tone with pure vitamin C",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.9,
        reviews: 512,
        badge: "Trending",
        affiliate: "https://amazon.com/s?k=vitamin+c+serum"
    },
    {
        id: 4,
        title: "Luxury Face Moisturizer",
        category: "skincare",
        price: 36.99,
        originalPrice: 59.99,
        description: "Lightweight, non-greasy moisturizer with botanical extracts",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 198,
        badge: "New",
        affiliate: "https://amazon.com/s?k=face+moisturizer"
    },

    // Makeup
    {
        id: 5,
        title: "Liquid Foundation",
        category: "makeup",
        price: 29.99,
        originalPrice: 48.00,
        description: "Full coverage liquid foundation with natural finish",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 423,
        badge: "Best Seller",
        affiliate: "https://amazon.com/s?k=liquid+foundation"
    },
    {
        id: 6,
        title: "Luxury Lipstick Set",
        category: "makeup",
        price: 34.99,
        originalPrice: 55.00,
        description: "Set of 4 long-lasting, creamy lipsticks in popular shades",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 267,
        badge: "Trending",
        affiliate: "https://amazon.com/s?k=lipstick+set"
    },
    {
        id: 7,
        title: "Eyeshadow Palette Pro",
        category: "makeup",
        price: 38.99,
        originalPrice: 65.00,
        description: "20-shade professional eyeshadow palette with rich pigments",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.9,
        reviews: 356,
        badge: "Editor's Pick",
        affiliate: "https://amazon.com/s?k=eyeshadow+palette"
    },
    {
        id: 8,
        title: "Mascara Volumizer",
        category: "makeup",
        price: 19.99,
        originalPrice: 32.00,
        description: "Volumizing mascara that creates dramatic, curled lashes",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 501,
        badge: "Best Seller",
        affiliate: "https://amazon.com/s?k=mascara"
    },

    // Haircare
    {
        id: 9,
        title: "Argan Oil Hair Serum",
        category: "haircare",
        price: 16.99,
        originalPrice: 28.00,
        description: "Lightweight argan oil for smooth, shiny hair",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 234,
        badge: "Trending",
        affiliate: "https://amazon.com/s?k=argan+oil+hair"
    },
    {
        id: 10,
        title: "Keratin Shampoo & Conditioner",
        category: "haircare",
        price: 22.99,
        originalPrice: 38.00,
        description: "Strengthening duo with keratin for healthy, strong hair",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 445,
        badge: "Best Seller",
        affiliate: "https://amazon.com/s?k=keratin+shampoo"
    },
    {
        id: 11,
        title: "Deep Conditioning Hair Mask",
        category: "haircare",
        price: 18.99,
        originalPrice: 32.00,
        description: "Intensive moisture treatment for dry, damaged hair",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.9,
        reviews: 312,
        badge: "Editor's Pick",
        affiliate: "https://amazon.com/s?k=hair+mask"
    },
    {
        id: 12,
        title: "Hair Growth Shampoo",
        category: "haircare",
        price: 24.99,
        originalPrice: 42.00,
        description: "Promotes hair growth and prevents hair loss",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 156,
        badge: "New",
        affiliate: "https://amazon.com/s?k=hair+growth+shampoo"
    },

    // Fashion
    {
        id: 13,
        title: "Premium Silk Blouse",
        category: "women-fashion",
        price: 49.99,
        originalPrice: 89.99,
        description: "Luxurious silk blouse in multiple colors, perfect for any occasion",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 234,
        badge: "Best Seller",
        affiliate: "https://amazon.com/s?k=silk+blouse"
    },
    {
        id: 14,
        title: "Elegant Maxi Dress",
        category: "women-fashion",
        price: 59.99,
        originalPrice: 99.99,
        description: "Flowing maxi dress perfect for evening wear and special events",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop",
        rating: 4.9,
        reviews: 378,
        badge: "Trending",
        affiliate: "https://amazon.com/s?k=maxi+dress"
    },
    {
        id: 15,
        title: "Classic White T-Shirt",
        category: "women-fashion",
        price: 24.99,
        originalPrice: 42.00,
        description: "Essential white t-shirt made from organic cotton blend",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 512,
        badge: "Best Seller",
        affiliate: "https://amazon.com/s?k=white+tshirt"
    },
    {
        id: 16,
        title: "Fitted Blazer",
        category: "women-fashion",
        price: 64.99,
        originalPrice: 109.99,
        description: "Structured blazer for professional and casual styling",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 289,
        badge: "Editor's Pick",
        affiliate: "https://amazon.com/s?k=blazer"
    },

    // Accessories
    {
        id: 17,
        title: "Gold Layered Necklace",
        category: "accessories",
        price: 29.99,
        originalPrice: 49.99,
        description: "Delicate gold-plated layered necklace set with pendants",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 245,
        badge: "Trending",
        affiliate: "https://amazon.com/s?k=gold+necklace"
    },
    {
        id: 18,
        title: "Leather Crossbody Bag",
        category: "accessories",
        price: 69.99,
        originalPrice: 119.99,
        description: "Chic leather crossbody bag in multiple colors, perfect daily bag",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop",
        rating: 4.9,
        reviews: 421,
        badge: "Best Seller",
        affiliate: "https://amazon.com/s?k=leather+crossbody+bag"
    },
    {
        id: 19,
        title: "Pearl Stud Earrings",
        category: "accessories",
        price: 19.99,
        originalPrice: 34.99,
        description: "Classic pearl studs with 925 sterling silver settings",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 367,
        badge: "Editor's Pick",
        affiliate: "https://amazon.com/s?k=pearl+earrings"
    },
    {
        id: 20,
        title: "Designer Sunglasses",
        category: "accessories",
        price: 79.99,
        originalPrice: 139.99,
        description: "UV protective sunglasses with polarized lenses and stylish frame",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
        rating: 4.8,
        reviews: 198,
        badge: "New",
        affiliate: "https://amazon.com/s?k=designer+sunglasses"
    }
];

let productsData = (localStorage.getItem('stylemuse_products'))
    ? JSON.parse(localStorage.getItem('stylemuse_products'))
    : JSON.parse(JSON.stringify(productsDataDefault));

function saveProducts() {
    try {
        localStorage.setItem('stylemuse_products', JSON.stringify(productsData));
    } catch (e) {
        console.error('Failed to save products to localStorage', e);
    }
}

function replaceProducts(newArr) {
    productsData = newArr;
    saveProducts();
}

window.getProducts = () => productsData;
window.saveProducts = saveProducts;
window.replaceProducts = replaceProducts;

let displayedCount = 8; // Initial number of products to display
let currentCategory = 'all';

// ========================================
// Initialize App
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    // Initialize theme
    initTheme();
    
    // Render initial products
    renderProducts(currentCategory);
    
    // Setup event listeners
    setupEventListeners();
    
    // Add smooth scroll behavior
    setupSmoothScroll();
}

// ========================================
// Theme Toggle (Light/Dark Mode)
// ========================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('themeToggle').querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ========================================
// Render Products
// ========================================
function renderProducts(category = 'all') {
    const container = document.getElementById('productsGrid');
    
    // Filter products by category
    const filtered = category === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === category);
    
    // Get products to display based on current displayedCount
    const toDisplay = filtered.slice(0, displayedCount);
    
    // Generate HTML
    const html = toDisplay.map(product => createProductCard(product)).join('');
    container.innerHTML = html;
    
    // Hide "Load More" button if all products are displayed
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (toDisplay.length >= filtered.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <span class="product-badge">${product.badge}</span>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="stars">${getStarRating(product.rating)}</span>
                    <span>(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">
                    <span class="original">₹${product.originalPrice.toFixed(2)}</span>
                    ₹${product.price.toFixed(2)}
                </div>
                <a href="${product.affiliate}" target="_blank" rel="noopener noreferrer" class="product-btn">
                    Buy on Amazon
                </a>
            </div>
        </div>
    `;
}

function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    
    return stars;
}

// ========================================
// Setup Event Listeners
// ========================================
function setupEventListeners() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.dataset.filter;
            displayedCount = 8; // Reset count when changing category
            renderProducts(currentCategory);
        });
    });
    
    // Category cards (for clicking on categories)
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            // Update filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-filter="${category}"]`).classList.add('active');
            
            currentCategory = category;
            displayedCount = 8;
            renderProducts(currentCategory);
            
            // Scroll to products section
            document.getElementById('beauty').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Load More button
    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        displayedCount += 8;
        renderProducts(currentCategory);
    });
    
    // Carousel controls
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const carousel = document.getElementById('trendingCarousel');
    
    if (prevBtn && nextBtn && carousel) {
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -280, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 280, behavior: 'smooth' });
        });
    }
    
    // Trending carousel population
    renderTrendingProducts();
    
    // Newsletter form
    document.getElementById('newsletterForm').addEventListener('submit', handleNewsletterSubmit);
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
}

// ========================================
// Trending Products Carousel
// ========================================
function renderTrendingProducts() {
    const carousel = document.getElementById('trendingCarousel');
    
    // Get trending products (best sellers with high ratings)
    const trending = productsData
        .filter(p => p.badge === 'Best Seller' || p.badge === 'Trending')
        .slice(0, 10);
    
    const html = trending.map(product => {
        return `
            <div class="carousel-product">
                ${createProductCard(product)}
            </div>
        `;
    }).join('');
    
    carousel.innerHTML = html;
}

// ========================================
// Form Handlers
// ========================================
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Show success message
    const originalBtn = form.querySelector('button');
    const originalText = originalBtn.textContent;
    originalBtn.textContent = '✓ Subscribed!';
    originalBtn.disabled = true;
    
    // Reset after 2 seconds
    setTimeout(() => {
        form.reset();
        originalBtn.textContent = originalText;
        originalBtn.disabled = false;
    }, 2000);
    
    console.log('Newsletter subscription:', email);
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Show success message
    const originalBtn = form.querySelector('button');
    const originalText = originalBtn.textContent;
    originalBtn.textContent = '✓ Message Sent!';
    originalBtn.disabled = true;
    
    // Reset after 2 seconds
    setTimeout(() => {
        form.reset();
        originalBtn.textContent = originalText;
        originalBtn.disabled = false;
    }, 2000);
    
    console.log('Contact form submission:', Object.fromEntries(formData));
}

// ========================================
// Smooth Scroll Setup
// ========================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
            }
        });
    });
}

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards when they're rendered
function observeNewElements() {
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}

// Observe initially and after rendering
document.addEventListener('DOMContentLoaded', observeNewElements);

// Re-observe after products are rendered
const originalRender = renderProducts;
window.renderProducts = function(...args) {
    originalRender.apply(this, args);
    setTimeout(observeNewElements, 0);
};

// ========================================
// Navbar Sticky Effect
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ========================================
// Preload Images
// ========================================
function preloadImages() {
    productsData.forEach(product => {
        const img = new Image();
        img.src = product.image;
    });
}

preloadImages();

// ========================================
// Analytics Helper
// ========================================
function trackAffiliateClick(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        console.log('Affiliate click tracked:', {
            productId: product.id,
            title: product.title,
            timestamp: new Date().toISOString()
        });
    }
}

// Add click tracking to affiliate links
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-btn')) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            const productId = productCard.dataset.id;
            trackAffiliateClick(productId);
        }
    }
});

console.log('StyleMuse app initialized successfully! 🌸');
