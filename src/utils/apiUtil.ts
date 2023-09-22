// export const baseUrl="https://aifitness-backend-urtjok3rza-wl.a.run.app";
export const baseUrl="http://127.0.0.1:5000";

export const signInUrl=`${baseUrl}/signin`;
export const signUpUrl=`${baseUrl}/signup`;
export const getDietMacrosUrl=`${baseUrl}/user/langchain/`
export const getDietUrl=`${baseUrl}/Macrocreatediet/`;
export const getRecipeUrl=(uri: any)=>{
    return(`https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=f1edf67a&app_key=276a00b13e4315f42f02142b8cd28f41`)
 
}

export const getMeal=`${baseUrl}/`
export const getFavUrl=`${baseUrl}/user/fav/`;
export const postFavUrl=`${baseUrl}/fav`;
export const updateUserLog=`${baseUrl}/update_user_log/`
export const getRecipeDirectionsUrl=`${baseUrl}/recipe/`
const getAvg=`${baseUrl}/avg`;

export const getAvgCarbs=`${getAvg}/carbs/`;
export const getAvgCalories=`${getAvg}/calories/`;
export const getAvgProteins=`${getAvg}/proteins/`;
export const getAvgFats=`${getAvg}/fats/`;
export const getAvgWater=`${getAvg}/water_intake/`
export const getAvgExpense=`${getAvg}/expenditure/`
export const getChartData=`${baseUrl}/`
// {   "dish":"nam dish ka",
        // "calories":50;
        // "carbs":6;
        // "protein":2;
        // "fat":9;
        // "image_url":"heuhuwrgfugei";
        // "user_id"1;

// }
// yeah hai format post api ka
