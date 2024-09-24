async function cat_func() {
    let obj;
  
    const res = await fetch('http://localhost:8081/api/categories')
  
    obj = await res.json();
    console.log(obj);
    cat_id = document.getElementById("cat-container");
    for(i=0;i<obj.length;i++){

        cat_cont = `<div class="category" onclick="showSection('${obj[i].name}')">
        <img src="${obj[i].imgURL}" alt="img" class="cat-img">
        <p id="cat-${i+1}">${obj[i].name}</p>
      </div>`
        cat_id.innerHTML+=cat_cont;
        // document.getElementById(`cat-${i+1}`).innerHTML = obj[i].name;
    }
    
    

}
async function prd_sec_func() {
    let obj;
  
    const res = await fetch('http://localhost:8081/api/products')
  
    obj = await res.json();
    console.log(obj);
    num_list = new Map();
    for(i=0;i<obj.length;i++){
        num_list.set(`${obj[i]['category'].name}`,0)
    }
    for(i=0;i<obj.length;i++){
        count = num_list.get(`${obj[i]['category'].name}`);
        count+=1;
        num_list.set(`${obj[i]['category'].name}`,count);
    }
    console.log(num_list);
    console.log(num_list.size)
    key_list = num_list.keys()
    for(i=0;i<num_list.size;i++){
        curr_key = key_list.next().value;
        prd_cont = `<section id="${curr_key}" class="hidden">
        <div class="sec-head-cont">
        <h2 class="sec-head" class="sec-head">${curr_key}</h2>
        <button class="sec-button" onclick="showSection('categories')">Back to Categories</button>
        </div>
        <div class="product-container">
        
        </div>
    </section>`
    body_elem = document.getElementById("bod");
    body_elem.innerHTML+=prd_cont;
    }
    

}
async function prod_func() {
    let obj;
  
    const res = await fetch('http://localhost:8081/api/products')
  
    obj = await res.json();
    console.log(obj);
    for(i=0;i<obj.length;i++){
        console.log(obj[i]['category'].name);
        content = `<div class="product" id="product-${i+1}" onclick='showProductDetails("${obj[i]['name']}")'>
            <img class="prd-img" src="${obj[i]['image_url']}" alt="img">
            <p>${obj[i]['name']}</p>
            <p>$${obj[i]['price']}</p>
        </div>`
        elem = document.getElementById(obj[i]['category'].name).childNodes[3];
        elem.innerHTML += content;

       det_cont =  `<section id="${obj[i]['name']}-details" class="hidden">
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
    <div class="text-center mt-5" >
     <button class="sec-button" onclick="showSection('${obj[i]['category'].name}')">Back to ${obj[i]['category'].name}</button>
    </div>
  </section>`
    
  body_elem = document.getElementById("bod");
  body_elem.innerHTML+=det_cont;
    }

}

cat_func();
prd_sec_func();
prod_func();
