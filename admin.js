/* Admin UI for managing products (CRUD) */
document.addEventListener('DOMContentLoaded', () => {
    initAdmin();
});

function initAdmin() {
    renderAdminList();

    const form = document.getElementById('productForm');
    form.addEventListener('submit', handleFormSubmit);

    document.getElementById('resetBtn').addEventListener('click', () => {
        resetForm();
    });

    // Mobile form toggle
    const toggleBtn = document.getElementById('toggleFormBtn');
    const adminForm = document.getElementById('adminForm');
    if (toggleBtn && adminForm) {
        toggleBtn.addEventListener('click', () => {
            const open = adminForm.classList.toggle('open');
            toggleBtn.setAttribute('aria-expanded', String(open));
            // scroll form into view when opened
            if (open) adminForm.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function renderAdminList() {
    const container = document.getElementById('adminList');
    const products = (window.getProducts && typeof window.getProducts === 'function') ? window.getProducts() : window.productsData || [];

    if (!products.length) {
        container.innerHTML = '<p>No products available.</p>';
        return;
    }

    const rows = products.map(p => adminRow(p)).join('');
    container.innerHTML = `
        <table class="admin-table">
            <thead><tr><th>ID</th><th>Title</th><th>Category</th><th>Price</th><th>Actions</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

function adminRow(p) {
    return `
        <tr data-id="${p.id}">
            <td>${p.id}</td>
            <td>${escapeHtml(p.title)}</td>
            <td>${escapeHtml(p.category)}</td>
            <td>₹${Number(p.price).toFixed(2)}</td>
            <td class="actions">
                <button class="btn btn-secondary edit-btn" data-id="${p.id}">Edit</button>
                <button class="btn delete-btn" data-id="${p.id}">Delete</button>
            </td>
        </tr>
    `;
}

// Delegate click events for edit/delete
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const id = Number(e.target.dataset.id);
        editProduct(id);
    }
    if (e.target.classList.contains('delete-btn')) {
        const id = Number(e.target.dataset.id);
        deleteProduct(id);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('productId').value;
    const product = readForm();

    const products = (window.getProducts && typeof window.getProducts === 'function') ? window.getProducts() : window.productsData || [];

    if (id) {
        // update
        const idx = products.findIndex(p => p.id === Number(id));
        if (idx > -1) {
            product.id = Number(id);
            products[idx] = product;
            notify('Product updated');
        }
    } else {
        // create
        const maxId = products.reduce((m, x) => Math.max(m, x.id || 0), 0);
        product.id = maxId + 1;
        products.push(product);
        notify('Product added');
    }

    if (window.replaceProducts) {
        window.replaceProducts(products);
    } else if (window.saveProducts) {
        // attempt to save in-place
        try { window.saveProducts(); } catch (e) { console.warn(e); }
    }

    renderAdminList();
    resetForm();
}

function editProduct(id) {
    const products = (window.getProducts && typeof window.getProducts === 'function') ? window.getProducts() : window.productsData || [];
    const p = products.find(x => x.id === id);
    if (!p) return;

    document.getElementById('productId').value = p.id;
    document.getElementById('title').value = p.title || '';
    document.getElementById('category').value = p.category || '';
    document.getElementById('price').value = p.price || '';
    document.getElementById('originalPrice').value = p.originalPrice || '';
    document.getElementById('description').value = p.description || '';
    document.getElementById('image').value = p.image || '';
    document.getElementById('rating').value = p.rating || '';
    document.getElementById('reviews').value = p.reviews || '';
    document.getElementById('badge').value = p.badge || '';
    document.getElementById('affiliate').value = p.affiliate || '';

    document.getElementById('formTitle').textContent = 'Edit Product';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProduct(id) {
    if (!confirm('Delete product ID ' + id + '?')) return;

    const products = (window.getProducts && typeof window.getProducts === 'function') ? window.getProducts() : window.productsData || [];
    const idx = products.findIndex(p => p.id === id);
    if (idx === -1) return;

    products.splice(idx, 1);

    if (window.replaceProducts) {
        window.replaceProducts(products);
    } else if (window.saveProducts) {
        try { window.saveProducts(); } catch (e) { console.warn(e); }
    }

    renderAdminList();
    notify('Product deleted');
}

function readForm() {
    return {
        title: document.getElementById('title').value.trim(),
        category: document.getElementById('category').value.trim(),
        price: Number(document.getElementById('price').value) || 0,
        originalPrice: Number(document.getElementById('originalPrice').value) || 0,
        description: document.getElementById('description').value.trim(),
        image: document.getElementById('image').value.trim() || 'https://via.placeholder.com/300',
        rating: Number(document.getElementById('rating').value) || 0,
        reviews: Number(document.getElementById('reviews').value) || 0,
        badge: document.getElementById('badge').value.trim() || '',
        affiliate: document.getElementById('affiliate').value.trim() || '#'
    };
}

function resetForm() {
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('formTitle').textContent = 'Add Product';
}

function notify(msg) {
    const el = document.getElementById('adminMessage');
    el.textContent = msg;
    el.style.opacity = 1;
    setTimeout(() => { el.style.opacity = 0; }, 2200);
}

function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, function (m) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[m]; });
}
