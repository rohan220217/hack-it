import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        otp: value.otp,
        next: navigate,
      })
    );
  };
  return (
    <main style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <div className={styles.form}>
        <div className={styles.mobile}>
          <label>Mobile:</label>
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
            <label>OTP:</label>
            <Input
              value={value2}
              setValue={setValue2}
              name="otp"
              // className={styles.sdfsdf}
              placeholder="Enter mobile number"
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
        {loginState.isLoginLoading || loginState.isVerifyUserLoading ? (
          <div>Loading...</div>
        ) : loginState.isMobVerified ? (
          <button type="submit" onClick={handleOtp}>
            Verify Otp
          </button>
        ) : (
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </main>
  );
}

export default LoginPage;
