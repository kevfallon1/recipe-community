package com.example.recipecommunityjavaserver.services;

import com.example.recipecommunityjavaserver.models.User;

import java.util.ArrayList;
import java.util.List;

public class UserService {
  List<User> users = new ArrayList<User>();

  public User findShoppingList(String username) {
    for (User u : users) {
      if (u.getUsername().equals(username)) {
        return u;
      }
    }
    return null;
  }

  public Integer addToShoppingList(String username, String item) {
    for (User u : users) {
      if (u.getUsername().equals(username)) {
        List<String> list = u.getShoppingList();
        list.add(item);
        u.setShoppingList(list);
        return 1;
      }
    }
    return -1;
  }
}
