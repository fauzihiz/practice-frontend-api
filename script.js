// JavaScript for fetching data and handling DOM updates

// Base URLs for fetching posts and products
const postsURL = "https://jsonplaceholder.typicode.com/posts";
const productsURL = "https://fakestoreapi.com/products"; // Example for product data

// Function to fetch and display posts
async function fetchPosts() {
    try {
        const response = await fetch(postsURL);
        const posts = await response.json();

        const postsContainer = document.getElementById("posts-container");

        // Loop through each post and create HTML elements
        posts.slice(0, 5).forEach((post, index) => {
            const postElement = document.createElement("div");
            postElement.className = "post";
            postElement.innerHTML = `
                <div class="post-title">${post.title}</div>
                <p>${post.body}</p>
                <div class="likes-comments">
                    <span>👍 ${Math.floor(Math.random() * 100)} Likes</span>
                    <span>💬 ${Math.floor(Math.random() * 50)} Comments</span>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Function to fetch and display products
async function fetchProducts() {
    try {
        const response = await fetch(productsURL);
        const products = await response.json();

        const productsContainer = document.getElementById("products-container");

        // Loop through each product and create HTML elements
        products.slice(0, 5).forEach((product) => {
            const productElement = document.createElement("div");
            productElement.className = "product";
            productElement.innerHTML = `
                <div class="product-title">${product.title}</div>
                <p>$${product.price}</p>
                <img src="${product.image}" alt="${product.title}" width="100">
            `;
            productsContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Call the functions to load data
fetchPosts();
fetchProducts();
