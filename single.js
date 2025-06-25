const section = document.querySelector("section");


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


async function fetchAndShowProduct(id) {
    try {
        const response = await fetch("https://ecommerce-api-8ga2.onrender.com/api/product");
        const data = await response.json();

        console.log(data);
        
    
        const product = data.find(item => item._id == id);

        if (!product) {
            section.innerHTML = "<h2>Product not found!</h2>";
            return;
        }

        const rating=product.ratings
        console.log(rating);

         const star = document.createElement("h5");
         const comment=document.createElement("p");
        rating.map((rating) => {
        star.textContent = "★".repeat(rating.star) + "☆".repeat(5 - rating.star);
        comment.textContent="Review : "+rating.comment;
    });
        

        const parent=document.createElement("div");
        parent.classList.add("product")

        const img = document.createElement("img");
        img.src = product.url;

        const title = document.createElement("h2");
        title.textContent = product.name;

        const brand = document.createElement("p");
        brand.textContent = "Brand: " + product.brand;

        const price = document.createElement("h4");
        price.textContent = "Price: $" + product.price;



        const desc = document.createElement("p");
        desc.textContent = "Description: " + (product.description || "No description available");

        parent.append(img, title, brand, price, desc,star,comment);
        section.append(parent)

    } catch (err) {
        console.error("Failed to fetch product:", err);
        section.innerHTML = "<h2>Error loading product</h2>";
    }
}

fetchAndShowProduct(productId);





