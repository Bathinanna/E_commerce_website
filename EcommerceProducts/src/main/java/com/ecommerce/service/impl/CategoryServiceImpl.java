package com.ecommerce.service.impl;

import lombok.AllArgsConstructor;
import com.ecommerce.entity.Category;
import com.ecommerce.entity.Product;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.service.CategoryService;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

	
	 @Autowired
	    private CategoryRepository categoryRepository;

	    public List<Category> getAllCategories() {
	        return categoryRepository.findAll();
	    }

	    public Category getCategoryById(Long category_id) {
	    	 Optional<Category> optionalCategory = categoryRepository.findById(category_id);
		        return optionalCategory.get();
	    }


	    public Category saveCategory(Category category) {
	        return categoryRepository.save(category);
	    }

	    public void deleteCategory(Long category_id) {
	        categoryRepository.deleteById(category_id);
	    }
}
