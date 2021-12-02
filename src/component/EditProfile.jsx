import React, {useState} from "react";
import { useModal } from "react-hooks-use-modal";

const EditProfile = () => {
  const [Modal, open, close] = useModal();
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState({ first_name: "" });

  const onChangeHandler = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    const errors = {}
    if(userDetails.first_name.length === 0) errors.first_name = "first_name can't be empty";
    if(Object.keys(errors).length === 0) {
      // update profile
    } else {
      setError(errors);
    }
  };

  return (
    <div>
      <button onClick={open}>Edit Profile</button>
      <Modal>
        <form >
          <h5>Name</h5>
          <input type="text"
          value={userDetails.first_name}
          placeholder="Enter first name"
          onChange={onChangeHandler}
          />
          <h3>{error.first_name}</h3>
          <input type="text"
          value={userDetails.last_name}
          placeholder="Enter last name"
          onChange={onChangeHandler}
          />
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
        <button onClick={close}>x</button>
      </Modal>
    </div>
  );
};

export default EditProfile;
