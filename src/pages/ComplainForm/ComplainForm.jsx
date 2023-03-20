import { useEffect, useState } from "react";
import styles from "./ComplainForm.module.scss";
import Input from "../../widgets/Input/Input";
import { complainFormSingleValidation } from "../../utils/validation";
import Select from "react-select";

function ComplainForm() {
  const [value, setValue] = useState({
    caption: "",
    category: "",
    tags: [],
  });

  const [errors, setErrors] = useState({
    caption: null,
    category: null,
    tags: null,
  });

  const onOptionChangeHandler = (event) => {
    setValue((prev) => ({ ...prev, category: event.target.value }));
  };

  const levelOptions = [
    { value: "Dirty", label: "Dirty" },
    { value: "Unavoidable", label: "Unavoidable" },
    { value: "Muddy", label: "Muddy" },
    { value: "Unknown", label: "Unknown" },
  ];

  const levelChange = (selectedOption) => {
    setValue((prev) => {
      return { ...prev, tags: selectedOption.map((x) => x.value) };
    });
  };

  console.log(value);
  return (
    <>
      <h2>Complain form</h2>
      <div className={styles.form}>
        <div className={styles.mobile}>
          <label>Caption:</label>
          <Input
            value={value}
            setValue={setValue}
            name="caption"
            // type="textarea"
            // className={styles.sdfsdf}
            placeholder="Enter caption"
            theme="PRIMARY"
            formErrors={errors}
            setFormErrors={setErrors}
            singleFieldValidation={complainFormSingleValidation}
          />
          <p className={styles.error}>
            {errors && errors["caption"] ? errors["caption"][0] : ""}
          </p>
        </div>

        <div className={styles.name}>
          <label>Category:</label>
          <select name="category" onChange={onOptionChangeHandler}>
            {" "}
            <option disabled selected>
              Please choose one option
            </option>
            <option value="garbage">Garbage</option>
            <option value="pothole">PotHole</option>
            <option value="sewage">Sewage</option>
            <option value="water">Water Accomodation</option>
          </select>

          <p className={styles.error}>
            {errors && errors["category"] ? errors["category"][0] : ""}
          </p>
        </div>
        <div className={styles.name}>
          <label>Tags:</label>
          <Select
            // defaultValue={value.defaultLevel}
            isMulti
            onChange={levelChange}
            options={levelOptions}
            placeholder="Select your level"
            className={styles.collegeField}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "1px solid #e5fdbe",
                borderRadius: "15px",
                fontSize: "1.3rem",
                fontWeight: "400",
              }),
              menu: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "1.4rem",
              }),
            }}
          />

          <p className={styles.error}>
            {errors && errors["tags"] ? errors["tags"][0] : ""}
          </p>
        </div>
      </div>

      <button className={styles.submit}>Post</button>
    </>
  );
}

export default ComplainForm;
