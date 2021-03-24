package com.example.recipecommunityjavaserver.models;

import java.util.List;

public class User {
  private String username;
  private String password;
  private List<String> shoppingList;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<String> getShoppingList() {
    return shoppingList;
  }

  public void setShoppingList(List<String> shoppingList) {
    this.shoppingList = shoppingList;
  }
}
