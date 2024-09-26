package com.ecommerce.service.impl;

import lombok.AllArgsConstructor;
import com.ecommerce.entity.Product;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.service.ProductService;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service("ProductService")
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

	 @Autowired
	 private ProductRepository productRepository;

	 @Autowired
	    private CategoryRepository categoryRepository;


	    @Override
	    public Product createProduct(Product product) {
	        return productRepository.save(product);
	    }
	    
	    @Override
	    public Product getProductById(Long product_id) {
	        Optional<Product> optionalProduct = productRepository.findById(product_id);
	        return optionalProduct.get();
	    }
	    
	    @Override
	    public List<Product> getAllProducts() {
	        return productRepository.findAll();
	    }
	    
	    @Override
	    public Product updateProduct(Product product) {
	        Product existingProduct = productRepository.findById(((Product) product).getProduct_id()).get();
	        existingProduct.setName(product.getName());
	        existingProduct.setPrice(product.getPrice());
	        Product updatedProduct = productRepository.save(existingProduct);
	        return updatedProduct;
	    }
	    
	    @Override
	    public void deleteProduct(Long product_id) {
	        productRepository.deleteById(product_id);
	    }
}
