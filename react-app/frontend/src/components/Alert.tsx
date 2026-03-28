import { ReactNode } from "react";

interface Props {
  children: ReactNode; //allows to pass HTML into state.
  onClose: () => void; //allows a function to be added. In this case to close or make invisible the alert compnenet
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
