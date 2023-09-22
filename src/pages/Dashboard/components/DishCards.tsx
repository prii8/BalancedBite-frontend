import useIsMobile from "../../../hooks/useIsMobile";
import { useAppSelector } from "../../../redux/store";
import "./dishCards.scss";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";
import { postFavUrl, updateUserLog } from "../../../utils/apiUtil";
import { useEffect, useState } from "react";
import { BsCheck2, BsHeartFill } from "react-icons/bs";


const DishCards = ({ currentMacros, setCurrentMacros }: any) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const data = useAppSelector((state) => state.diet.recipes);
  const { user } = useAppSelector((state) => state);
  const { user_log } = useAppSelector((state) => state);
  const [recipeData, setRecipeData] = useState(data)
  const [isFavouriteDish, setIsFavouriteDish] = useState([true, true, true]);
  const [isRecipeAdded, setIsRecipeAdded] = useState([false, false, false])


  useEffect(() => {
    setRecipeData(data)
    setIsFavouriteDish([true, true, true]);
  }, [data])


  async function handleRecipeAdd(index: any): Promise<void> {
    const recipe = data[0]
    const meal_log_price = recipe.meal_type + "_expense";
    const obj = {
      calories_log: Math.ceil(user.calories / user.no_meals),
      carbs_log: Math.ceil(user.carbs / user.no_meals),
      proteins_log: Math.ceil(user.protien / user.no_meals),
      fats_log: Math.ceil(user.fats / user.no_meals),
      [meal_log_price]: recipe.price,
    };
    if (
      currentMacros.calories < user.calories &&
      currentMacros.carbs < user.carbs &&
      currentMacros.protien < user.protien &&
      currentMacros.fats < user.fats
    ) {
      try {
        console.log("started call");
        const response = await axios.put(`${updateUserLog}${user_log}`, obj);
        console.log("res data", response.data);
        setCurrentMacros({
          ...currentMacros,
          calories:
            currentMacros.calories + Math.ceil(user.calories / user.no_meals),
          carbs: currentMacros.carbs + Math.ceil(user.carbs / user.no_meals),
          protien:
            currentMacros.protien + Math.ceil(user.protien / user.no_meals),
          fats: currentMacros.fats + Math.ceil(user.fats / user.no_meals),
        });
        notification.success({ message: <p>Your food has been tracked</p> });
        const updatedCardStates = isRecipeAdded.map((state, i) => (i === index ? !state : state));
        setIsRecipeAdded(updatedCardStates)
      } catch (error: any) {
        notification.error({ message: error.response.message });
      }
    }
    else {
      notification.warning({ message: <p>Your daily quote of macros has exceeded</p> })
    }
  }



  const handleAddFavourite = async (index: number) => {

    try {
      const obj = {
        dish: data[index].recipe_name,
        calories: data[index].calories,
        "carbs": data[index].carbs,
        "protein": data[index].protein,
        "fat": data[index].fat,
        "image_url": data[index].image_url,
        "user_id": user.user_id
      }
      console.log("calling");

      const response = await axios.post(`${postFavUrl}`, obj)
      console.log(response.data);
      notification.success({ message: <p>Dish is added to your favourites</p> })
      const updatedCardStates = isFavouriteDish.map((state, i) => (i === index ? !state : state));
      console.log(updatedCardStates);
      setIsFavouriteDish(updatedCardStates)
    } catch (error: any) {
      notification.error({ message: error.response.message })
    }
  }

  const handleRemoveFavourite = () => {
    null
  }


  return (
    <div className="dishCards">
      {isMobile ? (
        <>
          {recipeData.map((item: any, index: number) => {
            return (<div key={index} className="dishCardMobile">

              {isFavouriteDish[index] ?
                <button id={item.recipe_id} className='fav-button' style={{ cursor: "pointer" }} onClick={() => { handleAddFavourite(index) }}><BsHeartFill className='fav-logo-card' /></button>

                : <button className='unfav-button' id={item.recipe_id} style={{ cursor: "pointer" }} onClick={() => { handleRemoveFavourite() }}><BsHeartFill className='unfav-logo-card' /></button>

              }
              <div className="dishCardImg">
                
                <img
                  src={item?.image_url}
                  alt="recipe"
                  className="mobileRecipeImage"
                  loading="lazy"
                />
              </div>
              <div className="dishCardContent">
                <h2 className="dishTitle">{item?.recipe_name}</h2>
                <div className="dishActions">
                  <p className="dishPrice">
                    Price{`(approx) Rs.${item?.price}`}
                  </p>
                  <div className="dishCardActionsContainer">
                    <button
                      className="dishCardViewButton"
                      onClick={() => {
                        navigate("/app/recipe", {
                          state: {
                            uri: item?.uri,
                            recipe_id: item.recipe_id,
                          },
                        });
                      }}
                    >
                      View Recipe
                    </button>

                    {isRecipeAdded[index] ? <button style={{background:"#acc741",fontSize:"1.25rem",cursor:"not-allowed"}} className="dishCardAddBtn"> <BsCheck2 /> </button> : <button

                      id={item?.recipe_id}

                      onClick={() => handleRecipeAdd(index)}

                      className="dishCardAddBtn"
                    >
                      +

                    </button>}

                  </div>
                </div>
              </div>
            </div>)
          })}
        </>
      ) : (
        <>
          {recipeData.map((item: any, index: number) => {

            return (<div key={index} className="dishCard">

              {isFavouriteDish[index] ? <button className='fav-button' style={{ cursor: "pointer" }} onClick={() => { handleAddFavourite(index) }}><BsHeartFill className='fav-logo-card' /></button>

                : <button className='unfav-button' style={{ cursor: "pointer" }} onClick={() => { handleRemoveFavourite() }}><BsHeartFill className='unfav-logo-card' /></button>

              }
              <img
                src={item?.image_url}
                alt="recipe image"
                className="recipeImage"
              />
              <div className="dishCardFirstRow">
                <div className="dishCardInfo">
                  <h2 className="dishTitle">{item?.recipe_name}</h2>
                  <p className="dishPrice">
                    Price{`(approx) Rs. ${item?.price}`}
                  </p>
                </div>
                <div className="dishCardAddBtnContainer">

                  {isRecipeAdded[index] ? <button  className="dishCardAddBtn" style={{background:"#acc741",fontSize:"1.25rem",cursor:"not-allowed"}}> <BsCheck2 /> </button> : <button

                    id={item?.recipe_id}

                    onClick={() => handleRecipeAdd(index)}

                    className="dishCardAddBtn"

                  >
                    +

                  </button>}

                 {isRecipeAdded[index]?null: <p>Add</p>}

                </div>
              </div>
              <button
                className="dishCardViewButton"
                onClick={() => {
                  navigate("/app/recipe", {
                    state: { uri: item?.uri, recipe_id: item?.recipe_id },
                  });
                }}
              >
                View Recipe
              </button>
            </div>)
          })}
        </>
      )}
    </div>
  );
};

export default DishCards;
