import { useEffect, useState } from "react";
import styles from "./UpdateComplain.module.scss";
import Input from "../../widgets/Input/Input";
import {
  complainFormSingleValidation,
  updateComplainRuleSingleValidation,
} from "../../utils/validation";
import Select from "react-select";
import AppBar from "../../components/AppBar/AppBar";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Camera, CameraResultType } from "@capacitor/camera";
import {
  getSingleComplain,
  updateComplain,
  updateSingleComplain,
} from "../../store/Actions/postAction";
import { json, useNavigate, useParams } from "react-router-dom";
import { uploadFile } from "../../services/upload.services";
import Spinner from "../../components/Spinner/Spinner";

function UpdateComplain() {
  const postState = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const {  id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [value, setValue] = useState({
    officer_remarks: "",
    current_status: "",
    clear_photo: null,
  });

  const [errors, setErrors] = useState({
    officer_remarks: null,
    current_status: null,
    clear_photo: null,
  });

  const categoryOption = [
    { value: "PENDING", label: "PENDING" },
    { value: "IN_PROCESS", label: "IN_PROCESS" },
    { value: "CLOSED", label: "CLOSED" },
  ];

  const categoryChange = (selectedOption) => {
    setValue((prev) => {
      return { ...prev, current_status: selectedOption };
    });
  };

  const confirmPost = () => {
    let newValue = { ...value, current_status: value.current_status.value };
    console.log(newValue);
    dispatch(updateComplain({ value: newValue, id, navigate }));
  };

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    setIsLoading(true);
    uploadFile({ file: image.dataUrl })
      .then((data) => {
        setValue((prev) => ({
          ...prev,
          clear_photo: data.filePath,
        }));
      })
      .catch((err) => {
        // fileInputRef.current[index].value = null;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(value);

  return (
    <>
      <AppBar title="Update complain" />
      <div className={styles.form}>
        {value.clear_photo ? (
          <img
            src={`http://172.99.249.65:3200/${value.clear_photo}`}
            className={styles.image}
          />
        ) : isLoading ? (
          <div className={styles.loaderContainer}>
            <Spinner className={styles.loader} />
          </div>
        ) : (
          <div className={styles.upload} onClick={takePhoto}>
            Upload
          </div>
        )}

        <div className={styles.mobile}>
          <p>Remarks: </p>
          <Input
            value={value}
            setValue={setValue}
            name="officer_remarks"
            // type="textarea"
            // className={styles.sdfsdf}
            placeholder="Enter remarks"
            theme="PRIMARY"
            formErrors={errors}
            setFormErrors={setErrors}
            singleFieldValidation={updateComplainRuleSingleValidation}
          />
          <p className={styles.error}>
            {errors && errors["officer_remarks"]
              ? errors["officer_remarks"][0]
              : ""}
          </p>
        </div>
        <div className={styles.mobile}>
          <p>Status: </p>
          <Select
            value={value.current_status}
            onChange={categoryChange}
            options={categoryOption}
            placeholder="Update status"
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
        </div>

        <Button className={styles.submit} onClick={confirmPost}>
          Update
        </Button>
      </div>
    </>
  );
}

export default UpdateComplain;
