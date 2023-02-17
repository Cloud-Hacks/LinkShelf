import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Authentication.css";

const AuthComponent = ({ auth }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonGray, setButtonGray] = useState(true);
  const navigate = useNavigate();

  const buttonColour = () => {
    if (isSignIn) {
      email.length > 0 && password.length > 4
        ? setButtonGray(false)
        : setButtonGray(true);
    } else {
      if (name.length > 0 && email.length > 0 && password.length > 4)
        setButtonGray(false);
      else setButtonGray(true);
    }
  };

  return (
    <div class="content">
      <div
        class="gobackbutton"
        onClick={() => {
			navigate("/");
        }}
      >
        <svg
          class="icon6"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6061 17.8242C10.104 17.8242 9.69697 18.2312 9.69697 18.7333C9.69697 19.2354 10.104 19.6424 10.6061 19.6424H17.8788C19.0503 19.6424 20 18.6927 20 17.5212V2.9757C20 1.80419 19.0503 0.854492 17.8788 0.854492H10.6061C10.104 0.854492 9.69697 1.26151 9.69697 1.76358C9.69697 2.26566 10.104 2.67268 10.6061 2.67268L17.8788 2.67267C18.0461 2.67267 18.1818 2.80835 18.1818 2.9757L18.1818 17.5212C18.1818 17.6885 18.0461 17.8242 17.8788 17.8242H10.6061Z"
            fill="#B3B3B3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6401 13.1154C14.4769 13.1154 15.1552 12.437 15.1552 11.6002V8.88444C15.1552 8.04764 14.4769 7.36928 13.6401 7.36928L8.04907 7.36928C8.04116 7.28028 8.03288 7.1913 8.02424 7.10235L7.95875 6.42855C7.85883 5.40054 6.7672 4.78489 5.83577 5.23127C3.85489 6.18059 2.06164 7.47968 0.542249 9.06605L0.422007 9.1916C-0.140669 9.77908 -0.140669 10.7055 0.422006 11.293L0.542249 11.4186C2.06164 13.0049 3.85489 14.304 5.83577 15.2534C6.76719 15.6997 7.85883 15.0841 7.95875 14.0561L8.02424 13.3823C8.03288 13.2933 8.04116 13.2044 8.04907 13.1154H13.6401ZM7.20619 11.2972C6.88332 11.2972 6.59789 11.466 6.43646 11.7223C6.35785 11.8472 6.30865 11.9928 6.29886 12.1497C6.27687 12.5023 6.24878 12.8545 6.21458 13.2064L6.19558 13.402C4.93976 12.7548 3.77353 11.9488 2.72531 11.0047C2.45336 10.7597 2.18936 10.5055 1.93379 10.2423C3.17444 8.96467 4.61396 7.89775 6.19557 7.08267L6.21458 7.27824C6.24878 7.63009 6.27687 7.98238 6.29886 8.33497C6.32875 8.81414 6.72609 9.18747 7.20619 9.18747H13.3371V11.2972H7.20619Z"
            fill="#B3B3B3"
          />
        </svg>
      </div>
      <div class="auth-container">
        <div class="authheading">
          <div class="auth-title">{isSignIn ? "Sign in" : "Sign up"}</div>
          <div class="authinputs">
            {isSignIn ? (
              ""
            ) : (
              <input
                type="text"
                id="form3Example1c"
                class="email-input"
                placeholder="Your Name"
                onChange={(event) => {
                  const value = event.target.value;
                  setName(value);
                  buttonColour();
                }}
              />
            )}

            <input
              type="email"
              id="form3Example3c"
              class="email-input"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
                buttonColour();
              }}
            />
            <input
              type="password"
              id="form3Example4c"
              class="password-input"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
                buttonColour();
              }}
            />
          </div>
        </div>
        <div class="option-text">
          <span>
            <span class="option-text-span">Don’t have an account? </span>
            <span
              class="option-text-span2"
              onClick={() => {
                setIsSignIn(!isSignIn);
              }}
            >
              {" "}
              {isSignIn ? "Sign up" : "Sign in"}
            </span>
          </span>
        </div>
        <div
          class={buttonGray ? "authbutton-gray" : "authbutton"}
          onClick={() => {
            if (buttonGray) alert("Please fill all the details");
            else auth(name, email, password, isSignIn);
          }}
        >
          <div class="auth-action-text">{isSignIn ? "Sign in" : "Sign up"}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
