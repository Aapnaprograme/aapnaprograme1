// --- 1. Search Functionality ---
function searchFunction() {
    // Search input se text uthayenge
    const input = document.getElementById('courseSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.course-card');

    cards.forEach(card => {
        // Card ke title aur category dono ko check karenge
        const title = card.querySelector('h3').innerText.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        if (title.includes(input) || category.includes(input)) {
            card.style.display = "block"; // Match hone par dikhao
        } else {
            card.style.display = "none";  // Match na hone par chhupa do
        }
    });
}

// --- 2. Category Filter Functionality ---
function filterCategory(category) {
    const cards = document.querySelectorAll('.course-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Pehle saare buttons se 'active' class hatao aur click wale pe add karo
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(category)) {
            btn.classList.add('active');
        }
        if (category === 'all' && btn.innerText.toLowerCase().includes('all')) {
            btn.classList.add('active');
        }
    });

    // Cards hide ya show karne ka logic
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = "block";
        } else {
            // Agar card ki data-category button ki category se match hai
            if (card.getAttribute('data-category') === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

// --- 3. Smooth Scroll (Optional but Good) ---
// Jab "Start Learning" button pe click ho toh smoothly niche jaye
document.querySelector('.btn').addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if(targetId.startsWith('#')) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});