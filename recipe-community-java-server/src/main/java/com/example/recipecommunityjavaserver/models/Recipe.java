package com.example.recipecommunityjavaserver.models;

import java.util.List;

public class Recipe {

  private String name;
  private Integer recipeId;
  private String cuisine;
  private String type;
  private String tags;
  private List<String> ingredients;
  private Integer number;
  private String externalRecipeURL;
  private String wine;
  private String username;


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getRecipeId() {
    return recipeId;
  }

  public void setRecipeId(Integer recipeId) {
    this.recipeId = recipeId;
  }

  public String getCuisine() {
    return cuisine;
  }

  public void setCuisine(String cuisine) {
    this.cuisine = cuisine;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getTags() {
    return tags;
  }

  public void setTags(String tags) {
    this.tags = tags;
  }

  public List<String> getIngredients() {
    return ingredients;
  }

  public void setIngredients(List<String> ingredients) {
    this.ingredients = ingredients;
  }

  public Integer getNumber() {
    return number;
  }

  public void setNumber(Integer number) {
    this.number = number;
  }

  public String getExternalRecipeURL() {
    return externalRecipeURL;
  }

  public void setExternalRecipeURL(String externalRecipeURL) {
    this.externalRecipeURL = externalRecipeURL;
  }

  public String getWine() {
    return wine;
  }

  public void setWine(String wine) {
    this.wine = wine;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public Recipe(String name, Integer recipeId, String cuisine, String type, String tags, List<String> ingredients, Integer number, String externalRecipeURL, String wine, String username) {
    this.name = name;
    this.recipeId = recipeId;
    this.cuisine = cuisine;
    this.type = type;
    this.tags = tags;
    this.ingredients = ingredients;
    this.number = number;
    this.externalRecipeURL = externalRecipeURL;
    this.wine = wine;
    this.username = username;
  }

}
