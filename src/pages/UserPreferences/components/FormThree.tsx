import "./FormThree.scss";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import ActivityLevelContainer from "./ActivityLevelContainer";
import EndGoalContainer from "./EndGoalContainer";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
} from "../../../redux/slices/userSlice";
import axios from "axios";
import { getDietMacrosUrl } from "../../../utils/apiUtil";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const FormThree = ({ setStepper, setPreferences, preferences }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user_id } = useAppSelector((state) => state.user);
  const [validate, setValidate] = useState(false);

  function handleValidation() {
    if (preferences.activity_level == null) {
      setValidate(false);
      notification.error({ message: <p>Preferences level cannot be empty</p> });
    }
    if (preferences.end_goal == null) {
      setValidate(false);
      notification.error({ message: <p>End Goal cannot be empty</p> });
    } else {
      setValidate(true);
    }
  }

  const fetchMacros = async () => {
    handleValidation();
    if (validate==true) {
      try {
        console.log(user_id);
        const response = await axios.put(`${getDietMacrosUrl}${user_id}`, preferences,{headers:{
          'Content-Type':'application/json'
        }});
        dispatch(fetchUserStart());
        
        if (response.status === 200 || response.status === 201) {
          console.log("User signed in successfully");
          console.log("Response data:", response.data);
          dispatch(fetchUserSuccess(response.data));
          navigate("/app/plans", { replace: true });
        }
      } catch (error: any) {
        console.log(error);
        dispatch(fetchUserFailure(error?.response?.data?.message));
        navigate("/app/preferences", { replace: true });
      }
    }
  };

  return (

    <div className="formThree" >
      <ActivityLevelContainer
        setPreferences={setPreferences}
        preferences={preferences}
      />
      <EndGoalContainer
        setPreferences={setPreferences}
        preferences={preferences}
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
        <div onClick={fetchMacros} className="navButton">
          <p className="btnText">Confirm</p>
          <i className="btnIcon">
            <FaChevronRight />
          </i>
        </div>
      </div>
    </div>
  );
};

export default FormThree;
