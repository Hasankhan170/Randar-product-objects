

const products = [
    {
        name: "Laptop Dell",
        price: 999.99,
        description: "Powerful laptop for all your computing needs."
    },
    {
        name: "Headphones",
        price: 79.99,
        description: "High-quality headphones for immersive audio experience."
    },
    {
        name: "Smartphone",
        price: 699.99,
        description: "Advanced smartphone with cutting-edge features."
    },
    {
        name: "ALL Tablet ",
        price: 449.99,
        description: "Portable tablet for  and productivity."
    },
    {
        name: "Smartwatch",
        price: 249.99,
        description: "Stay connected and track  with this smartwatch."
    },
    {
        name: "Gaming Console",
        price: 399.99,
        description: "Experience the thrill with this powerful console."
    },
    {
        name: "All Camera",
        price: 599.99,
        description: "Capture life's moments with stunning clarity and detail."
    },
    {
        name: "Wireless Speaker",
        price: 129.99,
        description: "Enjoy your favorite music wirelessly with this speaker."
    },
    {
        name: "External Hard Drive",
        price: 129.99,
        description: "Expand your storage and backup your files with ease."
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        description: "Navigate your computer with precision and comfort."
    },
    {
        name: "All Printer",
        price: 199.99,
        description: "Print documents and photos with exceptional quality."
    },
    {
        name: "Desk Lamp",
        price: 49.99,
        description: "Illuminate your workspace with adjustable brightness."
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        description: "Monitor your health and track your workouts."
    },
    {
        name: " Wirless Earbuds",
        price: 99.99,
        description: "Wireless earbuds for on-the-go audio enjoyment."
    },
    {
        name: "Portable Charger",
        price: 39.99,
        description: "Charge your devices anywhere, anytime."
    },
    {
        name: "USB Flash Drive",
        price: 19.99,
        description: "Store and transfer your files conveniently."
    },
    {
        name: "Monitor Screen",
        price: 299.99,
        description: "Upgrade your display for enhanced productivity."
    },
    {
        name: "Keyboard",
        price: 49.99,
        description: "Type comfortably with this reliable keyboard."
    },
    {
        name: "Computer",
        price: 9.99,
        description: "Enhance your mouse with this smooth pad."
    },
    {
        name: "Graphic Tablet",
        price: 199.99,
        description: "Express your creativity with this digital drawing tablet."
    },
    
];


const div = document.querySelector(".container");


function logProductDetails(index) {
    console.log(products[index]);
}


for(let i = 0; i < products.length; i++){
    const productDescription = `<p class="card-text animate__animated animate__bounceInDown">${products[i].description}</p>`;
    

    div.innerHTML += `
         <div class="row">
         <div class="col-md-3 p-3">
         <div class="card" style="width: 15rem; height : 250px; background-color:red; border-radius:10px;">
            <div class="card-body">
                <h3 class="card-title animate__animated animate__wobble unknow">NAME: ${products[i].name}</h3>
                <h4 class="card-subtitle mb-2 text-body-secondary animate__animated animate__backInLeft">$${products[i].price.toFixed(2)}</h4>
                ${productDescription}
               <button class="btn btn-dark" onclick="logProductDetails(${i})">Click Me</button>
            </div>
            
        </div>
      </div>
    </div>
    `;
}

















































