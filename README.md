# Bloom & Petal - Flower Shop Website 🌸

Welcome to **Bloom & Petal**, a beginner-friendly flower shop website created with HTML, CSS, and JavaScript. This repository is specifically structured as the baseline application for learning DevOps practices step by step.

---

## 📂 Project Structure

```text
bloom-petal/
├── index.html   # Main HTML structure and semantic markup
├── styles.css   # Modern, responsive styling and visual presentation
├── script.js   # Interactive behavior, filtering, cart counter, and form logic
└── README.md    # Overview and DevOps learning breakdown
```

---

## 🔍 Detailed File Explanations

### 1. `index.html`
* **Purpose:** Serves as the backbone of the application, rendering the web structure and layout.
* **Key Components:**
  * `<header class="navbar">`: Sticky navigation bar containing the logo, menu links, and live cart counter badge.
  * `<section id="home" class="hero">`: Welcoming banner introducing the store and call-to-action button.
  * `<div class="filter-buttons">`: Interactive category buttons (Roses, Tulips, Lilies, Mixed) to filter products.
  * `<section id="bouquets">`: Grid containing 6 flower bouquet cards, each displaying an image badge, title, description, price tag, and "Add to Cart" button.
  * `<section id="about">`: Store background story and eco-friendly highlights.
  * `<section id="contact">`: Store location, hours, phone/email, and an interactive contact form.
  * `<footer>`: Copyright and DevOps demonstration note.

### 2. `styles.css`
* **Purpose:** Provides styling, typography, colors, and responsive layouts across desktop and mobile devices.
* **Key Components:**
  * **CSS Custom Properties (`:root`):** Defines reusable color variables (`--primary-color`, `--secondary-color`) for consistent branding.
  * **Flexbox & CSS Grid Layouts:** Utilizes modern layout techniques (`grid-template-columns: repeat(...)`) for responsive card arrangements without requiring third-party frameworks.
  * **Transitions & Animations:** Smooth hover effects (`transform: translateY(-5px)`) for interactive buttons and cards.
  * **Media Queries (`@media`):** Ensures readability and responsive navigation on smaller screens.

### 3. `script.js`
* **Purpose:** Adds dynamic interactivity to the webpage without requiring full page reloads.
* **Key Features:**
  * **Category Filtering:** Listens for clicks on category buttons (`data-category`) and toggles card visibility (`card.style.display`).
  * **Shopping Cart Badge:** Tracks item count in memory and updates the UI badge when users click "Add to Cart".
  * **Contact Form Handling:** Intercepts form submission (`event.preventDefault()`), validates user input, displays a confirmation notification, and clears the form.

---

## 🚀 How to Run Locally

Since this is a simple static website, you do not need complex backend dependencies or build tools.

### Option 1: Double-click `index.html`
Open the file directly in any modern web browser (Chrome, Firefox, Edge, Safari).

### Option 2: Local HTTP Server (Recommended)
Run a lightweight HTTP server using Python:
```bash
python3 -m http.server 8000
```
Then open your browser and navigate to `http://localhost:8000`.

---

## 🛠️ DevOps Lab Next Steps

This repository serves as **Step 1 (Base Application)** in our DevOps Learning Lab sequence. Future enhancements planned step by step:

1. 🐳 **Dockerization:** Containerizing the app using Nginx base image.
2. 🔄 **CI/CD Pipeline:** GitHub Actions workflow for automated testing & deployment.
3. 🛡️ **Code Quality:** SonarQube integration for static code analysis.
4. 🔒 **Security Scanning:** Trivy container and vulnerability scanner.
