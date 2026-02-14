// Sample cart data (you can change this)
let cart = [
    {
        name: "Burger",
        qty: 2,
        price: 120,
        image: "https://via.placeholder.com/80"
    },
    {
        name: "Pizza",
        qty: 1,
        price: 250,
        image: "https://via.placeholder.com/80"
    }
];

let cartItems = document.getElementById("cart-items");
let total = 0;

cart.forEach(item => {
    let row = document.createElement("div");

    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.marginBottom = "15px";
    row.style.borderBottom = "1px solid #ccc";
    row.style.paddingBottom = "10px";

    let itemTotal = item.price * item.qty;

    row.innerHTML = `
        <img src="${item.image}" width="80" height="80" style="margin-right:15px;">
        <div>
            <p><b>${item.name}</b></p>
            <p>Qty: ${item.qty}</p>
            <p>Price: ₹${itemTotal}</p>
        </div>
    `;

    total += itemTotal;
    cartItems.appendChild(row);
});

let totalDiv = document.createElement("h3");
totalDiv.textContent = "Total Price: ₹" + total;
cartItems.appendChild(totalDiv);