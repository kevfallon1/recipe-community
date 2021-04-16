import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import RecipeService from '../services/recipe-service'
import { Carousel, Typography } from 'antd'
const {Title} = Typography
const Home = () => {

  const [randomRecipes, setRandomRecipes] = useState([])
  useEffect(() => {
    RecipeService.findRandomRecipes()
      .then(response => {
        return setRandomRecipes(response.recipes)
      })
  }, [""])



  return (
      <Carousel autoplay>

        {
          randomRecipes.map(recipe => {
                return(
                    <div className="recipe-slider">
                      <div className="slider-img-title">
                        <Title style={{color: 'white'}} className="">Find your favorite recipes today!</Title>
                        <Link to={`/details/${recipe.id}`}>
                          <button className="btn btn-dark">Try this!</button>
                        </Link>
                        <p>{recipe.title}</p>
                      </div>

                      <img className="slider-image" src={recipe.image}
                           alt="Slide"/>

                    </div>)
              }
          )

        }

      </Carousel>
  )
}

export default Home