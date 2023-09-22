import { FormEvent, useEffect, useRef, useState } from 'react'
import "./register.scss"
import image1 from "../../assets/images/happy.svg"
import image2 from "../../assets/images/designing.svg"
import image3 from "../../assets/images/team.svg"
import logo from "../../assets/images/logo11.png"
import { useAppDispatch } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { fetchUserFailure, fetchUserStart, fetchUserSuccess } from '../../redux/slices/userSlice'

import axios from 'axios'

import { signInUrl, signUpUrl } from '../../utils/apiUtil'

import BackButton from '../GlobalComponents/BackButton/BackButton'

import { notification } from 'antd'

import useIsMobile from '../../hooks/useIsMobile'

import LandingPageNavBar from '../GlobalComponents/LandingPageNavBar/LandingPageNavBar'



const slides = [

  {

    imageUrl: image1,

    text: 'Start your Health Journey',

  },

  {

    imageUrl: image2,

    text: 'Customize them as you like',

  },

  {

    imageUrl: image3,

    text: 'Be a part of our community',

  },

];

const Register = () => {



  const [activeSlide, setActiveSlide] = useState(0);







  const [signIn, setSignIn] = useState({



    email: "",



    password: "",



  });







  const [signUp, setSignUp] = useState({



    username: "",



    email: "",



    password: "",



  });







  const [register, setRegister] = useState(false);



  //const [logIn, setLogIn] = useState(false);



  const [confirmPass, setConfirmPass] = useState("");







  const mainRef = useRef<any>(null);



  const dispatch = useAppDispatch();



  const navigate = useNavigate();







  const handleConfirmPassword = (e: any) => {



    setConfirmPass(e.target.value);



  };







  const moveSlider = (index: number) => {



    setActiveSlide(index);



  };







  function handleToggle() {



    mainRef.current.classList.toggle("sign-up-mode");



  }







  function handleRegisterValidate() {



    if (signUp.username === "") {



      setRegister(false);



      notification.error({ message: <p>Username cannot be empty</p> });



    }



    if (signUp.email === "") {



      setRegister(false);



      notification.error({ message: <p>Email cannot be empty</p> });



    }



    if (signUp.password === "") {



      setRegister(false);



      notification.error({ message: <p>Password cannot be empty</p> });



    }



    if (signUp.password.length < 6) {



      setRegister(false)



      notification.error({ message: <p>Password must be greater than 6 characters long</p> })



    }



    if (signUp.password !== confirmPass) {



      setRegister(false);



      notification.error({ message: <p>Passwords do not match</p> });



    }



    else {



      setRegister(true)



    }



  }







  async function handleSignIn(e: FormEvent<HTMLFormElement>): Promise<void> {



    e.preventDefault();



    e.stopPropagation();



    e.nativeEvent.stopImmediatePropagation();



    dispatch(fetchUserStart());







    try {



      const response = await axios.post(`${signInUrl}`, signIn);







      if (response.status === 200) {



        console.log("User signed in successfully");



        console.log("Response data:", response.data);



        dispatch(fetchUserSuccess(response.data));



        navigate("/app/target", { replace: true });



      }



    } catch (error: any) {



      dispatch(fetchUserFailure(error.response.data.message));



    }



  }







  async function handleRegister(e: FormEvent<HTMLFormElement>): Promise<void> {



    e.preventDefault();



    e.stopPropagation();



    e.nativeEvent.stopImmediatePropagation();



    handleRegisterValidate();



    if (register === true) {



      dispatch(fetchUserStart());



      try {

        console.log(signUp);
        const response = await axios.post(`${signUpUrl}`, signUp);

        if (response.status === 200 || response.status === 201) {
          console.log("User signed in successfully");
          console.log("Response data:", response.data);
          dispatch(fetchUserSuccess(response.data));
          navigate("/app/preferences", { replace: true });
        }
      } catch (error: any) {
        notification.error({ message: <p>{error.response.data.message}</p> });
        dispatch(fetchUserFailure(error.response.data.message));
      }
    }
  }
  const handleSignInForm = (e: any) => {
    const { name, value } = e.target;
    setSignIn((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUpForm = (e: any) => {
    const { name, value } = e.target;
    setSignUp((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide === 3 - 1) {
        setActiveSlide(0);
      } else {
        setActiveSlide((prevSlide) => prevSlide + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide, 3, 4000]);

  const isMobile = useIsMobile();
  return (

    <div ref={mainRef} style={{ position: "relative" }} className="main">

      {isMobile ? <BackButton /> : <LandingPageNavBar />}
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              onSubmit={(e) => handleSignIn(e)}
              className="inputForm sign-in-form"
            >

              <div className="logo">
                <img src={logo} alt="BalancedBite" />
                <h4>BalancedBite</h4>
              </div>

              <div className="heading">

                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>



                <span onClick={handleToggle} className="toggle">



                  {" "}



                  Sign up



                </span>



              </div>







              <div className="actual-form">



                <div className="input-wrap">



                  <input



                    name="email"



                    type="email"



                    className="input-field"



                    placeholder="Email"



                    required



                    onChange={(e) => handleSignInForm(e)}



                    value={signIn.email}



                  />



                </div>







                <div className="input-wrap">



                  <input



                    name="password"



                    type="password"



                    className="input-field"



                    placeholder="Password"



                    required



                    onChange={(e) => handleSignInForm(e)}



                    value={signIn.password}



                  />



                </div>







                <input type="submit" value="Sign In" className="sign-btn" />







                <p className="text-signin">



                  Forgotten your password?

                  <a href="#"> Get help Signing in</a>



                </p>



              </div>



            </form>







            <form



              onSubmit={(e) => handleRegister(e)}



              className="inputForm sign-up-form"



            >



              <div className="logo">



                <img src={logo} alt="BalancedBite" />



                <h4>BalancedBite</h4>



              </div>







              <div className="heading">



                <h2>Get Started</h2>



                <h6>Already have an account?</h6>



                <span onClick={handleToggle} className="toggle">



                  {" "}



                  Sign In



                </span>



              </div>







              <div className="actual-form">



                <div className="input-wrap">



                  <input



                    name="username"



                    type="text"



                    className="input-field"



                    required



                    placeholder="Full Name"



                    onChange={(e) => handleSignUpForm(e)}



                  />



                </div>







                <div className="input-wrap">



                  <input



                    name="email"



                    type="email"



                    className="input-field"



                    placeholder="Email"



                    required



                    onChange={(e) => handleSignUpForm(e)}



                    value={signUp.email}



                  />



                </div>







                <div className="input-wrap">



                  <input



                    name="password"



                    type="password"



                    className="input-field"



                    placeholder="Password"



                    required



                    onChange={(e) => handleSignUpForm(e)}



                    value={signUp.password}



                  />



                </div>







                <div className="input-wrap">



                  <input



                    type="password"



                    className="input-field"



                    placeholder="Confirm Password"



                    required



                    onChange={handleConfirmPassword}



                    value={confirmPass}



                  />



                </div>







                <input type="submit" value="Sign Up" className="sign-btn" />







                <p className="text-signin">



                  By signing up, I agree to the



                  <a href="#"> Terms of Services</a> and



                  <a href="#"> Privacy Policy</a>



                </p>



              </div>



            </form>



          </div>







          <div className="carousel">



            <div className="images-wrapper">



              {slides.map((slide, index) => (



                <img



                  key={index}



                  src={slide.imageUrl}



                  className={`image img-${index + 1} ${activeSlide === index ? "show" : ""



                    }`}



                  alt=""



                />



              ))}



            </div>







            <div className="text-slider">



              <div className="text-wrap">



                <div



                  className="text-group"



                  style={{ transform: `translateY(${-activeSlide * 2.2}rem)` }}



                >



                  {slides.map((slide, index) => (



                    <h2 key={index}>{slide.text}</h2>



                  ))}



                </div>



              </div>







              <div className="bullets">



                {slides.map((_, index) => (



                  <span



                    key={index}



                    className={`bullet ${activeSlide === index ? "active" : ""



                      }`}



                    onClick={() => moveSlider(index)}



                    data-value={index + 1}



                  ></span>



                ))}



              </div>



            </div>



          </div>



        </div>



      </div>



    </div >



  );



};







export default Register;