import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Camera, CameraResultType } from "@capacitor/camera";
import {
  editProfileAllRule,
  editProfileSingleRule,
} from "../../../../utils/validation";
import styles from "./EditProfile.module.scss";
import Input from "../../../../widgets/Input/Input";
import { useDispatch } from "react-redux";
import { changeUserDataRequest } from "../../../../store/Actions/userAction";
import Select from "react-select";
import Button from "../../../../components/Button/Button";
import { uploadFile } from "../../../../services/upload.services";
import Spinner from "../../../../components/Spinner/Spinner";

function EditProfile({ showEditModal, handleCloseModal, userDetail }) {
  const dispatch = useDispatch();
  const [tempImage, setTempImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    gender: "",
    photo: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    gender: null,
    photo: null,
  });

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      name: userDetail?.name ?? "",
      gender: userDetail?.gender ?? "",
    }));
  }, [JSON.stringify(userDetail)]);

  const handleUpdate = () => {
    const { isValid, error } = editProfileAllRule(value);
    if (!isValid) {
      console.log(error);
    } else {
      dispatch(
        changeUserDataRequest({
          value,
          handleCloseModal,
        })
      );
    }
    setErrors(error);
  };

  const takePhoto = async () => {
    console.log("Launch function");
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
          photo: data.filePath,
        }));
      })
      .catch((err) => {
        // fileInputRef.current[index].value = null;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const genderChange = (selectedOption) => {
    setValue((prev) => {
      return { ...prev, gender: selectedOption.value };
    });
  };

  const genderOption = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
    { label: "Non Binary", value: "NF" },
  ];

  console.log(value, tempImage);
  return (
    <ReactModal isOpen={showEditModal} contentLabel="Minimal Modal Example">
      {value.photo ? (
        <img
          src={`http://172.99.249.65:3200/${value.photo}`}
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

      <div className={styles.name}>
        <label>Name:</label>
        <Input
          value={value}
          setValue={setValue}
          name="name"
          placeholder="Enter your name"
          theme="PRIMARY"
          formErrors={errors}
          setFormErrors={setErrors}
          singleFieldValidation={editProfileSingleRule}
        />
        <p className={styles.error}>
          {errors && errors["name"] ? errors["name"][0] : ""}
        </p>
      </div>
      <div className={styles.name}>
        <label>Gender:</label>
        <Select
          defaultValue={value.category}
          onChange={genderChange}
          options={genderOption}
          placeholder="Select your gender"
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
          {errors && errors["gender"] ? errors["gender"][0] : ""}
        </p>
      </div>

      <div className={styles.buttons}>
        <Button onClick={handleCloseModal} className={styles.backButton}>
          Cancel
        </Button>
        <Button onClick={handleUpdate}>Update User</Button>
      </div>
    </ReactModal>
  );
}

export default EditProfile;
