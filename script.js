let allProducts = [];

fetch("https://ТВОЙ-ДОМЕН.up.railway.app/api/products")
.then(res => res.json())
.then(data => {
    allProducts = data;
    displayProducts(allProducts);
});

function displayProducts(products) {
    let container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <b>${p.price} сомонӣ</b>
            </div>
        `;
    });
}

function searchProducts() {
    let value = document.getElementById("search").value.toLowerCase();

    let filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
}
