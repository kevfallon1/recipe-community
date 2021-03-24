package com.example.recipecommunityjavaserver.services;

import com.example.recipecommunityjavaserver.models.Recipe;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;

@Service
public class RecipeService {
  private List<Recipe> recipeList = new ArrayList<Recipe>();


  public List<Recipe> findRecipesByName(String name) {
    List<Recipe> ws = new ArrayList<Recipe>();
    for (Recipe s : recipeList) {
      if (s.getName().equals(name)) {
        ws.add(s);
      }
    }
    return ws;
  }

  public Recipe findRecipeById(Integer recipeId) {
    for (Recipe s : recipeList) {
      if (s.getRecipeId().equals(recipeId)) {
        return s;
      }
    }
    return null;
  }


  public List<Recipe> findRandomRecipes(Integer limit) {
    List<Recipe> ws = new ArrayList<Recipe>();
    Random random = new Random();
    Integer counter = 0;
    while (counter < limit) {
      if (!recipeList.isEmpty()) {
        ws.add(recipeList.get(random.nextInt(recipeList.size())));
      }
      counter += 1;
    }
    return ws;
  }

  public List<Recipe> findRandomRecipes() {
    List<Recipe> ws = new ArrayList<Recipe>();
    Random random = new Random();
    Integer counter = 0;
    while (counter < 20) {
      if (!recipeList.isEmpty()) {
        ws.add(recipeList.get(random.nextInt(recipeList.size())));
      }
      counter += 1;
    }
    return ws;
  }


}
