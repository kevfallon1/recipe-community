import React, {useState, useEffect} from 'react'
import RecipeService from '../services/recipe-service'
import { Carousel, Typography } from 'antd'
const {Title} = Typography
const Home = () => {

  const [randomRecipes, setRandomRecipes] = useState([])
  useEffect(() => {
    RecipeService.findRandomRecipes()
      .then(response => {
        console.log(response.recipes)
        return setRandomRecipes(response.recipes)
      })
  }, [""])



  return (
      <Carousel>

        {
          randomRecipes.map(recipe => {
                console.log(recipe.image)
                return(
                    <div className="recipe-slider">
                      <div className="slider-img-title">
                        <Title style={{color: 'white'}} className="">Find your favorite recipes today!</Title>
                        <button className="btn btn-dark">Try this!</button>
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