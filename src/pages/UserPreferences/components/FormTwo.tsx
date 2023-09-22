import { LuWheat } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./FormTwo.scss";
import {  useRef, useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { GiChickenOven, } from "react-icons/gi";
import { BsEggFried } from "react-icons/bs";
import { Select, notification } from "antd";

const FormTwo = ({ setStepper, setPreferences, preferences }: any) => {
  const [validate, setValidate] = useState(false);
  const radioCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const genderInputRefs = useRef<Array<HTMLDivElement | null>>([]);
  const cuisineOptions = [
    {
      label: "North Indian",
      value: "North Indian",
    },
    {
      label: "South Indian",
      value: "South Indian",
    },
    {
      label: "Punjabi",
      value: "Punjabi",
    },
    {
      label: "Bengali",
      value: "Bengali",
    },
    {
      label: "Italian",
      value: "Italian",
    },
    {
      label: "Maharashtrian",
      value: "Maharashtrian",
    },
    {
      label: "Gujarati",
      value: "Gujarati",
    },
  ];

  const foodIntoleranceOptions = [
    {
      label: "Lactose Intolerance",
      value: "Lactose Intolerance",
    },
    {
      label: "Nut Allergy",
      value: "Nut Allergy",
    },
    {
      label: "Gluten Sensitivity",
      value: "Gluten Sensitivity",
    },
    {
      label: "Soy Intolerance",
      value: "Soy Intolerance",
    },
    {
      label: "Shellfish Allergy",
      value: "Shellfish Allergy",
    },
    {
      label: "Egg Intolerance",
      value: "Egg Intolerance",
    },
    {
      label: "Histamine Intolerance",
      value: "Histamine Intolerance",
    },
    {
      label: "Fructose Malabsorption",
      value: "Fructose Malabsorption",
    },
  ];

  const appendUniqueValues = (arr: any, value: any) => [
    ...new Set([...arr, ...value]),
  ];

  const handleAllergies = (value: any): void => {
    if (value.length === 0) setPreferences({ ...preferences, allergies: [] });
    else {
      const arr = preferences.allergies;
      setPreferences({
        ...preferences,
        allergies: [...appendUniqueValues(arr, value)],
      });
    }
  };

  const handleCuisine = (value: any): void => {
    if (value.length === 0)
      setPreferences({ ...preferences, cuisine_type: [] });
    else {
      const arr = preferences.cuisine_type;
      setPreferences({
        ...preferences,
        cuisine_type: [...appendUniqueValues(arr, value)],
      });
    }
  };

  function handleRadio(index: number): void {
    radioCardRefs.current.forEach((item) => item?.classList.remove("active"));
    genderInputRefs.current.forEach((item) => item?.classList.remove("active"));
    radioCardRefs.current[index]?.classList.toggle("active");
    genderInputRefs.current[index]?.classList.toggle("active");
    setPreferences({
      ...preferences,
      diet_type: radioCardRefs.current[index]?.id,
    });
  }

  const handleNumberOfMeals = (e: any) => {
    setPreferences({ ...preferences, no_meals: Number(e.target.value) });
  };

  const handleValidation = () => {
    if (preferences.diet_type == null) {
        console.log("diet type");
        
      notification.error({ message: <p>Diet Type Cannot be empty</p> });
      setValidate(false);
    } else if (preferences.no_meals == null) {
        console.log("diet type");
      notification.error({ message: <p>Number of meals cannot be empty</p> });
      setValidate(false);
    } else if (preferences.no_meals < 3 || preferences.no_meals > 5) {
        console.log("diet type");
      notification.error({ message: <p>Number of meals cannot be less than 3 or greater than 5</p> });
      setValidate(false);
    } else if (preferences.cuisine_type.length===0) {
        console.log("diet type");
      notification.error({ message: <p>Cuisine Type cannot be empty</p> });
      setValidate(false);
    } 
    else {
      setValidate(true);
    }
  };

  function handleNext(): void {
    handleValidation();
    if (validate === true) setStepper((prev: any) => prev + 1);
  }

  return (
    <>
      <div className="formTwo">
        <div className="dieTypeContainer">
          <h3 className="containerTitle">Diet Type</h3>
          <div className="radioDivContainer">
            {["Vegetarian", "Non-Vegetarian", "Eggetarian"].map(
              (gender, index) => (
                <div
                  id={gender}
                  key={index}
                  onClick={() => handleRadio(index)}
                  ref={(el) => (radioCardRefs.current[index] = el)}
                  className="radioCard"
                >
                  <div
                    id={gender}
                    className="genderInput"
                    ref={(el) => (genderInputRefs.current[index] = el)}
                  >
                    <i>
                      <PiCheckBold />
                    </i>
                  </div>
                  {gender === "Vegetarian" && (
                    <i id={gender}>
                      <LuWheat />
                    </i>
                  )}
                  {gender === "Non-Vegetarian" && (
                    <i id={gender}>
                      <GiChickenOven />
                    </i>
                  )}
                  {gender === "Eggetarian" && (
                    <i id={gender}>
                      <BsEggFried />
                    </i>
                  )}
                  <p id={gender} className="genderType">
                    {gender}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="ageContainer">
          <h3 className="containerTitle">Meals per Day</h3>
          <div className="inputLabelContainer">
            <input
              onChange={handleNumberOfMeals}
              className="textInput"
              max={5}
              min={3}
              type="number"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="cuisineTypeContainer">
          <h3 className="containerTitle">Cuisine Type</h3>
          <Select
            className="selectInput"
            mode="multiple"
            allowClear
            style={{ width: "100%", outline: "none", border: "none" }}
            placeholder="Please select"
            onChange={handleCuisine}
            // bordered={false}
            size={"large"}
            dropdownStyle={{
              background: "whitesmoke",
              border: "1px solid #acc741",
            }}
            popupMatchSelectWidth
            options={cuisineOptions}
          />
        </div>

        <div className="foodTolerances">
          <h3 className="containerTitle">Food Tolerances</h3>
          <div className="lastRow">
            <Select
              className="selectInput"
              mode="multiple"
              allowClear
              style={{ width: "100%", outline: "none", border: "none" }}
              placeholder="Please select"
              onChange={handleAllergies}
              // bordered={false}
              size="large"
              dropdownStyle={{
                background: "whitesmoke",
                border: "1px solid #acc741",
              }}
              popupMatchSelectWidth
              options={foodIntoleranceOptions}
            />

            <div className="buttonGroup">
              <div
                onClick={() => {
                  setStepper((prev: any) => prev - 1);
                }}
                className="navButton"
              >
                <p className="btnText">Back</p>
                <i className="btnIcon">
                  <FaChevronLeft />
                </i>
              </div>
              <div onClick={handleNext} className="navButton">
                <p className="btnText">Next</p>
                <i className="btnIcon">
                  <FaChevronRight />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTwo;
