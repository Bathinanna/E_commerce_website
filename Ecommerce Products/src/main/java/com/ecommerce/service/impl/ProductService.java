package com.ecommerce.service;

import com.ecommerce.entity.Product;
import com.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ProductService {
 
	Product createProduct(Product product);

    Product getProductById(Long product_id);

    List<Product> getAllProducts();

    Product updateProduct(Product product);

    void deleteProduct(Long product_id);
}
