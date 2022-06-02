import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import UserForm from "../../Forms/UserForm";

const UserModal = ({ handleModal, addHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={handleModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <UserForm onSubmit={handleModal} addHandler={addHandler} />,
        document.getElementById("userForm-root")
      )}
    </>
  );
};

UserModal.propTypes = {
  handleModal: PropTypes.func,
  addHandler: PropTypes.func,
};

export default UserModal;
