package com.example.recipecommunityjavaserver.controllers;

import com.example.recipecommunityjavaserver.models.User;
import com.example.recipecommunityjavaserver.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

public class UserSessionController {
  List<User> users = new ArrayList<User>();
  @Autowired
  UserService service;

  @GetMapping("/api/register/{username}/{password}")
  public User register(
          @PathVariable("username") String username,
          @PathVariable("password") String password,
          HttpSession session) {
    User user = new User();
    user.setPassword(password);
    user.setUsername(username);
    session.setAttribute("currentUser", user);
    users.add(user);
    return user;
  }

  @GetMapping("/api/profile")
  public User profile(HttpSession session) {
    User currentUser = (User)
            session.getAttribute("currentUser");
    return currentUser;
  }

  @GetMapping("/api/logout")
  public void logout
          (HttpSession session) {
    session.invalidate();
  }

  @GetMapping("/api/login/{username}/{password}")
  public User login(
          @PathVariable("username") String username,
          @PathVariable("password") String password,
          HttpSession session) {
    for (User user : users) {
      if (user.getUsername().equals(username)
              && user.getPassword().equals(password)) {
        session.setAttribute("currentUser", user);
        return user;
      }
    }
    return null;
  }

  @GetMapping("/api/{username}/shopping-list")
  public User findShoppingList(@PathVariable("username") String username, HttpSession session) {
    User currentUser = (User)
            session.getAttribute("currentUser");
    if (!currentUser.getUsername().isEmpty()) {
      return service.findShoppingList(currentUser.getUsername());
    };
    return null;
  }

  @PostMapping("/api/{username}/shopping-list/{item}")
  public Integer findShoppingList(@PathVariable("username") String username,
                               @PathVariable("item") String item,HttpSession session) {
    User currentUser = (User)
            session.getAttribute("currentUser");
    if (!currentUser.getUsername().isEmpty()) {
      return service.addToShoppingList(currentUser.getUsername(), item);
    }
  return -1;
  }

}
