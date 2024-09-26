package com.ecommerce.controller;

import com.ecommerce.entity.Category;
import com.ecommerce.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    
    // Build Get All Categories REST API
    // http://localhost:8081/api/categories
    @GetMapping("")
    public List<Category> getAllCategory() {
       return categoryService.getAllCategories();
        
    }
    
    // Build Get Category by id REST API
    // http://localhost:8081/api/categories/{id}
    @GetMapping("{category_id}")
    public ResponseEntity<Category> getcategoryById(@PathVariable("category_id") Long category_id){
        Category category = categoryService.getCategoryById(category_id);
        return new ResponseEntity<Category>(category, HttpStatus.OK);
    }
        
}
