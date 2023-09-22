
import React, { useEffect, useState } from 'react'
import "./recipe.scss"
import { useLocation } from 'react-router-dom';
import { getRecipeDirectionsUrl, getRecipeUrl } from '../../utils/apiUtil';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { removeIsLoading, setIsLoading } from '../../redux/slices/userSlice';
import CustomLoader from '../GlobalComponents/CustomLoader/CustomLoader';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import useIsMobile from '../../hooks/useIsMobile';
import BackButton from '../GlobalComponents/BackButton/BackButton';


interface TableRowProps {
    type: string;
    value: number;
    percentage: number;
    unit: string;
}

const TableRow: React.FC<TableRowProps> = ({ type, value, percentage, unit }) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{value}{unit}</td>
            <td>{percentage}{unit}</td>
        </tr>
    );
};

const Recipe = () => {

    const location = useLocation();
    const state = location.state;
    const dispatch = useAppDispatch();
    const [initialData, setInitialData] = useState<any | null>(null);
    const recipes = useAppSelector(state => state.diet.recipes)
    const reduxRecipe = recipes.find((item: any) => item.recipe_id == state.recipe_id)
    const [recipeDirection, setRecipeDirection] = useState([])
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    console.log(reduxRecipe);

    const replaceButton = () => {
        setIsFavourite(!isFavourite);
    };

    const renderButton = () => {
        if (isFavourite) {
            return <button className='fav-button' onClick={replaceButton}><BsHeart className='fav-logo-recipe' /></button>;
        } else {
            return <button className='unfav-button' onClick={replaceButton}><BsHeartFill className='unfav-logo-recipe' /></button>;
        }
    };


    useEffect(() => {
        const uri = encodeURIComponent(state.uri)
        // console.log(getRecipeUrl(uri));

        const fetchRecipe = async () => {

            try {
                const res = await axios.get(`${getRecipeUrl(uri)}`);
                const data = res.data.hits[0].recipe;
                console.log(data);
                setInitialData(data);
            } catch (error) {

            }
        }

        const getDirections = async () => {
            console.log("called");

            try {
                const response = await axios.get(`${getRecipeDirectionsUrl}/${state.recipe_id}`)
                const recipeString = response.data.directions;
                const recipeArray = recipeString.split('\n')
                    .filter((step: any) => step.trim() !== '')
                    .map((step: any) => step.replace(/^\d+\.\s+/, ''));
                console.log(recipeArray);

                setRecipeDirection(recipeArray)

            } catch (error) {

            }
        }

        dispatch(setIsLoading())
        fetchRecipe();
        getDirections();
        dispatch(removeIsLoading())
    }, [dispatch])

    const imageUrl = reduxRecipe.image_url;
    const dishName = reduxRecipe.recipe_name;
    console.log(recipeDirection);

    const len = initialData?.ingredients.length;
    const isMobile = useIsMobile();
    console.log(initialData);
    

    return (
        <div style={{ paddingBottom: "3rem" }} className='recipe-page'>
            {isMobile?<BackButton/>:<></>}
            {initialData ? <>

                <div className='recipe-heading'>
                    <p className='primary-heading'>Hey there!</p>
                    <p className='secondary-heading'>YOUR RECIPE</p>
                </div>

                <div className='recipe-container'>
                    <div className='recipe-info'>
                        <div className='recipe-image-container'>
                            <img src={imageUrl} className='recipe-image' />
                        </div>
                        <div className='recipe-func'>
                            <div className='recipe-details'>
                                <p className='recipe-title'>{dishName}</p>
                                <div className="duration">
                                    <i><AiOutlineClockCircle className='clock-logo' /></i>
                                    <p className='recipe-time'>20 min</p>
                                </div>
                                <div className='recipe-tag'>
                                    <p className='calorie-info'>{"Calories (per serving):"} {Math.round(initialData.calories)} {"Kcal"} </p>
                                    <p style={{textTransform:"capitalize"}} className='calorie-info'>Tags:{initialData.cuisineType.map((item:any)=>" #"+item+" ")} {initialData.dietLabels.map((item:any)=>" #"+item+" ")}</p>
                                </div>
                            </div>
                            <div className='button-recipe'>
                                {renderButton()}
                            </div>
                        </div>
                    </div>

                    <div className="recipeInfo">
                        <div className="ingridientSection">
                            <h4 className='blockHeader'>List of Ingridients</h4>
                            <ul className="listContainer">
                                {initialData?.ingredients.map((item: any) => {
                                    return <li className='listItem'>{item?.text}</li>
                                })}
                            </ul>
                        </div>
                        <div className="nutrientSection">
                            <h4 className="blockHeader">Nutrition Facts</h4>
                            <h5 className='nutrientCal'>{"Calories (per serving):"} {Math.round(initialData.calories)} </h5>
                            <table className='custom-table'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Daily</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        initialData?.digest.slice(0, len - 1).map((item: any) => <TableRow type={item.label} value={Math.round(item.daily)} percentage={Math.round(item.total)} unit={item.unit} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='recipeDirection'>
                        <h4 className='blockHeader'>Directions</h4>
                        <div className="recipeDirectionList">
                            {recipeDirection.map((item, index) => {
                                return (
                                    <div key={index} className="directionItem">
                                        <h1>{index + 1}</h1>
                                        <p>
                                            {item}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </> : <CustomLoader />}

        </div>
    )
}

export default Recipe

