package com.ecommerce.controller;

import lombok.AllArgsConstructor;
import com.ecommerce.entity.Product;
import com.ecommerce.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@AllArgsConstructor
@CrossOrigin
@RequestMapping("api/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	// build create Product REST API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        Product savedProduct = productService.createProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }
    
    // build get product by id REST API
    // http://localhost:8081/api/products/1
    @GetMapping("{product_id}")
    public ResponseEntity<Product> getproductById(@PathVariable("product_id") Long product_id){
        Product product = productService.getProductById(product_id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    
    // Build Get All Products REST API
    // http://localhost:8081/api/products
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    
    // Build Update Product REST API
    @PutMapping("{product_id}")
    // http://localhost:8081/api/products/1
    public ResponseEntity<Product> updateProduct(@PathVariable("product_id") Long product_id,
                                           @RequestBody Product product){
        product.setProduct_id(product_id);
        Product updatedProduct = productService.updateProduct(product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }
    

    // Build Delete Product REST API
    @DeleteMapping("{product_id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("product_id") Long product_id){
        productService.deleteProduct(product_id);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }
    
}
