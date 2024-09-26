package com.ecommerce.service;

import com.ecommerce.entity.Category;
import com.ecommerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



public interface CategoryService {
   
	List<Category> getAllCategories();

	Category getCategoryById(Long category_id);

	Category saveCategory(Category category);

	void deleteCategory(Long category_id);
}
