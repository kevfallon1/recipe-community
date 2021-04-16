import React, {useEffect, useState} from 'react'
import {useParams, Link} from "react-router-dom";
import UserService from "../services/user-service"
import Post from "./post";

const Profile = () => {
  const {userId} = useParams()
  const [profileUser, setProfileUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)


  useEffect(() => {
    console.log(userId)
    if(userId) {
      UserService.getUserById(userId)
        .then(user => setProfileUser(user))
    }
    UserService.getCurrentUser()
      .then(currentUser => setLoggedInUser(currentUser[0]))
    },[])


  const followUser = () => {

    if(loggedInUser.following.includes(userId)) {
      return alert("You are already following this user")
    }
    if(loggedInUser._id == userId) {
      return alert("You cannot follow yourself")
    }

    profileUser.followers.push(loggedInUser._id)
    UserService.updateUser(userId, profileUser)
      .then(user => setProfileUser(user))
    loggedInUser.following.push(userId)
    UserService.updateUser(loggedInUser._id, loggedInUser)
      .then(user => setLoggedInUser(user))
  }

  const unfollowUser = () => {
    if(!loggedInUser.following.includes(userId)) {
      return alert("You must be following this user to unfollow")
    }

    const newFollowers = profileUser.followers.filter(followerId =>
        followerId != loggedInUser._id)
    profileUser.followers = newFollowers
    UserService.updateUser(userId, profileUser)
    .then(user => setProfileUser(user))

    const newFollowing = loggedInUser.following.filter(followingId =>
      followingId != userId)
    loggedInUser.following = newFollowing
    UserService.updateUser(loggedInUser._id, loggedInUser)
    .then(user => setLoggedInUser(user))
  }

  console.log(profileUser)
  return (
      <div className="container">
        <br/>
        <div>
          <h1>{profileUser
            && profileUser.followers
            && profileUser.username}</h1>
        </div>

        <div className="row justify-content-between">
          <div className="row">
            <h3>
              <Link to={`/profile/${userId}/followers`}>
              <span className="followers-badge badge badge-secondary badge-lg">
                Followers: {profileUser && profileUser.followers.length}
              </span>
              </Link>
            </h3>
            <h3>
              <Link to={`/profile/${userId}/following`}>
              <span className="badge badge-secondary">
                Following: {profileUser && profileUser.following.length}
              </span>
              </Link>
            </h3>
          </div>
          <div>
            {
              loggedInUser && profileUser && loggedInUser._id !== userId &&
              !loggedInUser.following.includes(userId) &&
              <button onClick={followUser}
                  className="btn btn-primary">Follow</button>

            }
            {
              loggedInUser && profileUser && loggedInUser._id !== userId &&
              loggedInUser.following.includes(userId) &&
              <button onClick={unfollowUser}
                      className="btn btn-danger">Unfollow</button>
            }
          </div>

        </div>
        <h3></h3>
        <hr/>
        {
          profileUser && profileUser.posts &&
          profileUser.posts.map(post =>
              <Post post={post}/>
          )
        }

      </div>
  )
}

export default Profile
