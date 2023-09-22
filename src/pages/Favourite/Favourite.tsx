import axios from "axios";
import "./Favourite.scss";
import FavCard from "./components/FavCard";
import { useState, useEffect } from "react";
import { getFavUrl } from "../../utils/apiUtil";
import { useAppSelector } from "../../redux/store";
import { removeIsLoading, setIsLoading } from "../../redux/slices/userSlice";

type Props = {};

const Favourite = (_props: Props) => {
  const [favData, setFavData] = useState([]);
  const { user } = useAppSelector(state => state)


  useEffect(() => {
    const getfavdetail = async () => {
      const apiEndpoint = `${getFavUrl}${user.user_id}`;
      try {
        const response = await axios.get(apiEndpoint);
        const data = response.data;

        const uniqueObjectsArray = Object.values(
          data.reduce((uniqueMap: any, obj: any) => {
            uniqueMap[obj.dish] = obj;
            return uniqueMap;
          }, {})
        );

        setFavData(uniqueObjectsArray as any);
      } catch (error) {
        console.error(error);
      }
    };
    setIsLoading();
    getfavdetail();
    removeIsLoading()
  }, []);



  return (
    <div className="favourite-container">
      <div className="Fav-heading"><h1 className="fav-first">My Favourites</h1></div>

      <div className="favourite-box">
        <h1 className="fav-box-title">ALL YOUR FAVOURITES AT ONE PLACE</h1>
        <div className="favourite_cards">
          {favData.map((item: any, i) => {
            return <FavCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
