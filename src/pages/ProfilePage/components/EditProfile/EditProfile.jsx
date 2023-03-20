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

function EditProfile({ showEditModal, handleCloseModal, userDetail }) {
  const dispatch = useDispatch();
  const [tempImage, setTempImage] = useState(null);
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

  const onOptionChangeHandler = (event) => {
    setValue((prev) => ({ ...prev, gender: event.target.value }));
  };

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
      resultType: CameraResultType.Base64,
    });
    console.log(image, image.base64String);
    setTempImage(image.webPath);
    setValue((prev) => ({ ...prev, photo: image.base64String }));
  };

  console.log(value, tempImage);
  return (
    <ReactModal isOpen={showEditModal} contentLabel="Minimal Modal Example">
      {value.photo   ? (
        <img
          src={`data:image/png;base64, ${value.photo}`}
          className={styles.image}
        />
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
        <select name="gender" onChange={onOptionChangeHandler}>
          {" "}
          <option disabled>Please choose one option</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Others</option>
        </select>

        <p className={styles.error}>
          {errors && errors["gender"] ? errors["gender"][0] : ""}
        </p>
      </div>

      <div className={styles.buttons}>
        <button onClick={handleUpdate}>Update User</button>
        <button onClick={handleCloseModal}>Cancel</button>
      </div>
    </ReactModal>
  );
}

export default EditProfile;
