fetch("alimobi-production.up.railway.app")
.then(res => res.json())
.then(data => {
    let container = document.getElementById("products");

    data.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <b>${p.price} сомонӣ</b>
            </div>
        `;
    });
});
