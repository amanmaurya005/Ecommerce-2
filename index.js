const section=document.querySelector("section")

async function fetchDataFromURL(url) {
    const response=await fetch(url);
    const result=await response.json();
    return result;
}

const api="https://ecommerce-api-8ga2.onrender.com/api/product"
window.addEventListener("load",async()=>{
    const data = await fetchDataFromURL(api);
    console.log(data);

    data.forEach((products) => {

        const parent=document.createElement("div");
        parent.classList.add("product");

        const anchor=document.createElement("a");
        anchor.href="singleProduct.html?id="+ products._id;

        const image=document.createElement("img");
        image.src=products.url;
        
        anchor.append(image);

        const name=document.createElement("h3");
        name.textContent=products.name;

        const brand=document.createElement("p");
        brand.textContent=products.brand;

        const price=document.createElement("h4");
        price.textContent="price : "+products.price;

        const category=document.createElement("h3")
        category.textContent=products.category;

        parent.append(anchor,name,brand,price,category)
        section.append(parent)

    });
})