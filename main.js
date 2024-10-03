async function cat_func() {
    let obj;

    try {
        const res = await fetch('http://localhost:8081/api/categories');
        obj = await res.json();
        console.log(obj);
        
        const cat_id = document.getElementById("cat-container");
        for (let i = 0; i < obj.length; i++) {
            const cat_cont = `
                <div class="category" onclick="showSection('${obj[i].name}')">
                    <img src="${obj[i].imgURL}" alt="img" class="cat-img">
                    <p id="cat-${i + 1}">${obj[i].name}</p>
                </div>`;
            cat_id.innerHTML += cat_cont;
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

async function prd_sec_func() {
    let obj;

    try {
        const res = await fetch('http://localhost:8081/api/products');
        obj = await res.json();
        console.log(obj);
        
        const num_list = new Map();
        for (let i = 0; i < obj.length; i++) {
            num_list.set(`${obj[i]['category'].name}`, 0);
        }
        for (let i = 0; i < obj.length; i++) {
            let count = num_list.get(`${obj[i]['category'].name}`);
            count += 1;
            num_list.set(`${obj[i]['category'].name}`, count);
        }
        console.log(num_list);
        console.log(num_list.size);
        
        const key_list = num_list.keys();
        for (let i = 0; i < num_list.size; i++) {
            const curr_key = key_list.next().value;
            const prd_cont = `
                <section id="${curr_key}" class="hidden">
                    <div class="sec-head-cont">
                        <h2 class="sec-head">${curr_key}</h2>
                        <button class="sec-button" onclick="showSection('categories')">Back to Categories</button>
                    </div>
                    <div class="product-container"></div>
                </section>`;
            const body_elem = document.getElementById("bod");
            body_elem.innerHTML += prd_cont;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function prod_func() {
    let obj;

    try {
        const res = await fetch('http://localhost:8081/api/products');
        obj = await res.json();
        console.log(obj);
        
        for (let i = 0; i < obj.length; i++) {
            console.log(obj[i]['category'].name);
            const content = `
                <div class="product" id="product-${i + 1}" onclick='showProductDetails("${obj[i]['name']}")'>
                    <img class="prd-img" src="${obj[i]['image_url']}" alt="img">
                    <p>${obj[i]['name']}</p>
                    <p>$${obj[i]['price']}</p>
                </div>`;
            const elem = document.getElementById(obj[i]['category'].name).querySelector('.product-container');
            elem.innerHTML += content;

            const det_cont = `
                <section id="${obj[i]['name']}-details" class="hidden">
                    <div class="sec-head-cont">
                        <h2>${obj[i]['name']} Details</h2>
                    </div>
                    <div class="product-details">
                        <img class="det-img" src="${obj[i]['image_url']}" alt="img">
                        <div class="details">
                            <p>Price: $${obj[i]['price']}</p>
                            <p>Stock: ${obj[i]['stock']}</p>
                            <p>Description: ${obj[i]['description']}</p>
                            <button class="add-to-cart">Add to Cart</button>
                            <button class="buy-now">Buy Now</button>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <button class="sec-button" onclick="showSection('${obj[i]['category'].name}')">Back to ${obj[i]['category'].name}</button>
                    </div>
                </section>`;
            const body_elem = document.getElementById("bod");
            body_elem.innerHTML += det_cont;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the functions to initialize the categories and products
cat_func();
prd_sec_func();
prod_func();
