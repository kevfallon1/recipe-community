package com.example.recipecommunityjavaserver.controllers;

import com.example.recipecommunityjavaserver.models.Recipe;
import com.example.recipecommunityjavaserver.services.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RecipeController {

  @Autowired
  RecipeService service;

  @GetMapping("/api/recipes/{name}")
  public List<Recipe> findRecipesByName(@PathVariable("name") String name) {
    return service.findRecipesByName(name);
  }

  @GetMapping("/api/recipes/{recipeId}")
  public Recipe findRecipeById(@PathVariable("recipeId") Integer recipeId) {
    return service.findRecipeById(recipeId);
  }

  @GetMapping("/api/recipes")
  public List<Recipe> findRandomRecipes() {
    return service.findRandomRecipes();
  }

  @GetMapping("/api/recipes/{limit}")
  public List<Recipe> findRandomRecipes(@PathVariable("limit") Integer limit) {
    return service.findRandomRecipes(limit);
  }

}
