import { useEffect, useState } from "react";
import styles from "./ComplainForm.module.scss";
import Input from "../../widgets/Input/Input";
import { complainFormSingleValidation } from "../../utils/validation";
import Select from "react-select";
import AppBar from "../../components/AppBar/AppBar";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleComplain,
  updateSingleComplain,
} from "../../store/Actions/postAction";
import { json, useNavigate, useParams } from "react-router-dom";

function ComplainForm() {
  const postState = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const { groupId, id } = useParams();
  const navigate = useNavigate();

  console.log("postState", postState.currentSinglePostDetail);
  const [value, setValue] = useState({
    caption: "",
    category: "",
    tags: [],
    ip_address: "192.168.1.1",
  });

  const [errors, setErrors] = useState({
    caption: null,
    category: null,
    tags: null,
  });

  const tagsOption = [
    { value: "Dirty", label: "Dirty" },
    { value: "Unavoidable", label: "Unavoidable" },
    { value: "Muddy", label: "Muddy" },
    { value: "Unknown", label: "Unknown" },
  ];

  const categoryOption = [
    { value: "garbage", label: "garbage" },
    { value: "pothole", label: "pothole" },
    { value: "sewage", label: "sewage" },
    { value: "water", label: "water" },
    { value: "none", label: "none" },
  ];

  const tagChange = (selectedOption) => {
    setValue((prev) => {
      return { ...prev, tags: selectedOption.map((x) => x.value) };
    });
  };
  const categoryChange = (selectedOption) => {
    setValue((prev) => {
      return { ...prev, category: selectedOption };
    });
  };

  const confirmPost = () => {
    let newValue = { ...value, category: value?.category?.value || null };
    console.log(newValue);
    dispatch(updateSingleComplain({ value: newValue, id, navigate }));
  };

  useEffect(() => {
    dispatch(getSingleComplain({ id, setValue }));
  }, []);

  console.log("value", value);

  return (
    <>
      <AppBar title="Complain form" />
      <div className={styles.form}>
        {postState.currentSinglePostDetail?.contents?.length && (
          <img
            src={`http://172.99.249.65:3200/${postState.currentSinglePostDetail?.contents?.[0]}`}
            alt="captured by camera"
            width="100%"
          />
        )}
        <div className={styles.mobile}>
          <p>Caption: </p>
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
          <p>Category: </p>
          <Select
            value={value.category}
            onChange={categoryChange}
            options={categoryOption}
            placeholder="Select your category"
            className={styles.collegeField}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#fafafa",
                border: "1px solid #dbdbdb",
                borderRadius: "3px",

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
            {errors && errors["category"] ? errors["category"][0] : ""}
          </p>
        </div>
        <div className={styles.name}>
          <p>Tags: </p>
          {/* <Select
            defaultValue={value.tags}
            isMulti
            onChange={tagChange}
            options={tagsOption}
            placeholder="Select your tags"
            className={styles.collegeField}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#fafafa",
                border: "1px solid #dbdbdb",
                borderRadius: "3px",

                fontSize: "1.3rem",
                fontWeight: "400",
              }),
              menu: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "1.4rem",
              }),
            }}
          /> */}
          <p>
            {postState?.currentSinglePostDetail?.tags
              ? postState?.currentSinglePostDetail?.tags
                  .map((t) => `#${t}`)
                  .join(" ")
              : null}
          </p>

          <p className={styles.error}>
            {errors && errors["tags"] ? errors["tags"][0] : ""}
          </p>
        </div>
        <Button
          className={styles.submit}
          loading={postState.updateSinglePostLoading}
          onClick={confirmPost}
        >
          Post
        </Button>
      </div>
    </>
  );
}

export default ComplainForm;
