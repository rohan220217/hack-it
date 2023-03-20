import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  loginUserRequested,
  verifyOtpUserRequested,
} from "../../store/Actions/loginAction";
import {
  loginMobNoSingleFieldValidation,
  loginOtpSingleFieldValidation,
} from "../../utils/validation";
import Input from "../../widgets/Input/Input";
import styles from "./LoginPage.module.scss";
import AppIcon from "../../assets/Sarathi.png"

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginState = useSelector((state) => state.profileReducer);

  const [value, setValue] = useState({
    mobno: "",
  });
  const [value2, setValue2] = useState({
    otp: "",
  });

  const [errors, setErrors] = useState({
    mobno: null,
  });
  const [errors2, setErrors2] = useState({
    otp: null,
  });

  const handleLogin = () => {
    dispatch(loginUserRequested({ mobile: value.mobno }));
  };

  const handleOtp = () => {
    dispatch(
      verifyOtpUserRequested({
        mobile: value.mobno,
        otp: value2.otp,
        next: navigate,
      })
    );
  };
  return (
    <main className={styles.body}>
      <div className={styles.form}>
        <img src={AppIcon} alt="App icon" className={styles.appicon}/>
        <h1>Login</h1>
        <div className={styles.mobile}>
          <Input
            value={value}
            setValue={setValue}
            name="mobno"
            type="number"
            // className={styles.sdfsdf}
            placeholder="Enter mobile number"
            theme="PRIMARY"
            formErrors={errors}
            setFormErrors={setErrors}
            singleFieldValidation={loginMobNoSingleFieldValidation}
          />
          <p className={styles.error}>
            {errors && errors["mobno"] ? errors["mobno"][0] : ""}
          </p>
        </div>

        {loginState.isMobVerified && (
          <div className={styles.mobile}>
            <Input
              value={value2}
              setValue={setValue2}
              name="otp"
              // className={styles.sdfsdf}
              placeholder="Enter the otp"
              theme="PRIMARY"
              formErrors={errors2}
              setFormErrors={setErrors2}
              singleFieldValidation={loginOtpSingleFieldValidation}
            />
            <p className={styles.error}>
              {errors2 && errors2["otp"] ? errors2["otp"][0] : ""}
            </p>
          </div>
        )}
        {loginState.isMobVerified ? (
          <Button loading={loginState.isVerifyUserLoading} onClick={handleOtp}>
            Verify Otp
          </Button>
        ) : (
          <Button loading={loginState.isLoginLoading} onClick={handleLogin}>
            Login
          </Button>
        )}
      </div>
    </main>
  );
}

export default LoginPage;
