const producten = document.querySelectorAll(".vlieger"); 
const sortSelect = document.getElementById("sortSelect");
const productContainer = document.querySelector(".vliegers"); 

function sortAndFilterProducts(order) {
    const productsArray = Array.from(producten);

    productsArray.forEach((product) => {
        const price = parseFloat(product.getAttribute("data-price").replace(',', '.')); 

        
        if (order === "LowToHigh" && (price < 0 || price > 35)) {
            product.style.display = "none";  
        } else if (order === "HighToLow" && (price < 36 || price > 55)) {
            product.style.display = "none";
        } else if (order === "high" && (price < 850 || price > 1600)) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });

    const visibleProducts = productsArray.filter(product => product.style.display !== "none");
    
    visibleProducts.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("data-price").replace(',', '.'));
        const priceB = parseFloat(b.getAttribute("data-price").replace(',', '.'));

        if (order === "LowToHigh") {
            return priceA - priceB;
        } else if (order === "HighToLow") {
            return priceB - priceA;
        } else {
            return 0;
        }
    });

    productContainer.innerHTML = "";
    visibleProducts.forEach(product => {
        productContainer.appendChild(product);
    });
}

sortSelect.addEventListener("change", (e) => {
    const sortOrder = e.target.value;
    sortAndFilterProducts(sortOrder);
});
