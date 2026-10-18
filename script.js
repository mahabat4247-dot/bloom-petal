/**
 * Bloom & Petal - Interactive Website Functionality
 * Written in beginner-friendly JavaScript with detailed comments.
 */

// Wait for the DOM (Document Object Model) to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Category Filtering Functionality
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bouquetCards = document.querySelectorAll('.bouquet-grid .card');

    // Attach click listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const selectedCategory = button.getAttribute('data-category');

            // Show/Hide bouquet cards according to selected category
            bouquetCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* ==========================================================================
       2. Simple Shopping Cart State & Notification
       ========================================================================== */
    let cartItemCount = 0;
    const cartCountElement = document.getElementById('cartCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const bouquetName = button.getAttribute('data-name');
            const bouquetPrice = button.getAttribute('data-price');

            cartItemCount += 1;
            cartCountElement.textContent = cartItemCount;

            // Visual feedback on button click
            const originalText = button.textContent;
            button.textContent = '✓ Added!';
            button.style.backgroundColor = '#2e5a44';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 1200);

            console.log(`Added to cart: ${bouquetName} ($${bouquetPrice})`);
        });
    });

    /* ==========================================================================
       3. Contact Form Submission Handling
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent default form page refresh
            event.preventDefault();

            const nameInput = document.getElementById('name').value;

            // Display success message
            formSuccessMessage.textContent = `Thank you, ${nameInput}! Your message has been received. We will get back to you shortly.`;
            formSuccessMessage.style.display = 'block';

            // Reset form fields
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formSuccessMessage.style.display = 'none';
            }, 5000);
        });
    }
});
