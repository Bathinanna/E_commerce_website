package com.ecommerce.entity;

import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long category_id;

    @Column(nullable = false, unique = true)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String img_url;
   
    // Constructors, Getters, and Setters
    public Category() {}

    public Category(String name) {
        this.name = name;
    }

    public Long getId() {
        return category_id;
    }

    public void setId(Long category_id) {
        this.category_id = category_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getImgURL() {
        return img_url;
    }

    public void setImgURL(String img_url) {
        this.img_url = img_url;
    }

    
}
