import React, { FC } from "react";
import GoogleIcon from "../../assets/icons/google.svg";

type Props = {
    onClick: () => void;
    disabled: boolean | undefined;
};

const GoogleButton: FC<Props> = ({ onClick, disabled }) => {
    return (
        <div className="d-flex justify-content-center">
            <button
                onClick={onClick}
                disabled={disabled}
                className="google-signin-button">
                <img
                    src={GoogleIcon}
                    alt="google-icon"
                    width={30}
                    height={30}
                />
            </button>
        </div>
    );
};

export default GoogleButton;
