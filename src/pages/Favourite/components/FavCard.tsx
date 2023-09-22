import { useState } from "react";
import "./FavCard.scss";
import { BsHeartFill } from "react-icons/bs";
const FavCard = ({ item }: any) => {

  const [isFavorite, setIsFavorite] = useState<Boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite(isFavorite => !isFavorite);
  };

  return (
    // <div className="favourite_cards">
    <div className="favourite_card">
      <img
        className="card__image"
        src={item?.image_url}
        alt=""
      ></img>
      <div>
        {isFavorite ? <button id={item.recipe_id} className='fav-button' style={{ cursor: "pointer" }} onClick={toggleFavorite}><BsHeartFill className='fav-logo-card' /></button>
          : <button className='unfav-button' id={item.recipe_id} style={{ cursor: "pointer" }} onClick={toggleFavorite}><BsHeartFill className='unfav-logo-card' /></button>
        }
        <div className="card__content">

          <p>{item?.dish}</p>
        </div>
        <div className="recipe__info">
          <div className="text">Calories : {item?.calories}Kcal</div>
          <div className="vl"></div>
          <div className="text">Fats : {item?.fat}gms</div>

          <div className="text">Protein : {item?.protein}gms</div>
          <div className="vl"></div>
          <div className="text">Carbs : {item?.carbs}gms</div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default FavCard;
