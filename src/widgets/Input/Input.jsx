/* eslint-disable no-console */
import THEMES from "./themes";

import styles from "./Input.module.scss";
import { useCallback } from "react";
import { debounce } from "../../utils/debunce";

const Input = ({
  type,
  value,
  setValue,
  name,
  width = "100%",
  height = "40px",
  className,
  containerClassName,
  small,
  theme = "GREY",
  formErrors,
  setFormErrors,
  option = null,
  singleFieldValidation,
  ...rest
}) => {
  const debounceSingleFieldValidation = useCallback(
    debounce(({ name, value }) => {
      const { isValid, errors } = singleFieldValidation({ key: name, value });
      let tmperror = { ...formErrors };
      if (isValid) tmperror = { ...tmperror, [name]: null };
      else tmperror = { ...tmperror, [name]: errors[name] };
      setFormErrors(tmperror);
    }, 1000),
    [formErrors]
  );

  const onChange = (e) => {
    setValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    debounceSingleFieldValidation({
      name: e.target.name,
      value: e.target.value,
    });
  };
  switch (type) {
    case "number":
      return (
        <span
          style={{ width, height }}
          className={`${styles.kaInputContainer} ${styles[THEMES[theme]]}`}
        >
          <input
            type="tel"
            placeholder="7374-091-655"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            value={value[name]}
            onChange={onChange}
            name={name}
            className={`${styles.kaInput} ${styles[THEMES[theme]]} ${
              className ?? ""
            }`}
            {...rest}
          />
        </span>
      );
    case "textarea":
      return (
        <span
          style={{ width, height }}
          className={`${styles.kaInputContainer} ${styles[THEMES[theme]]}`}
        >
          <textarea
            value={value[name]}
            onChange={onChange}
            name={name}
            className={`${styles.kaInput} ${styles[THEMES[theme]]} ${
              className ?? ""
            }`}
            {...rest}
          />
        </span>
      );

    case "date":
      return (
        <span
          style={{ width, height }}
          className={`${styles.kaInputContainer} ${styles[THEMES[theme]]}`}
        >
          <input
            type="date"
            value={value[name]}
            onChange={onChange}
            name={name}
            className={`${styles.kaInput} ${styles[THEMES[theme]]} ${
              className ?? ""
            }`}
            {...rest}
          />
        </span>
      );
    default:
      return (
        <div
          style={{ width, height }}
          className={`${styles.kaInputContainer} ${containerClassName ?? ""} ${
            styles[THEMES[theme]]
          }`}
        >
          <input
            value={value[name]}
            onChange={onChange}
            name={name}
            type={type}
            className={`${styles.kaInput} ${styles[THEMES[theme]]} ${
              className ?? ""
            } ${small && styles.small}`}
            {...rest}
          />
        </div>
      );
  }
};

export default Input;
