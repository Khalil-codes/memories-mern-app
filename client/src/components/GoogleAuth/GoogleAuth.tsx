import React, { FC } from "react";
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";
import { useDispatch } from "react-redux";
import { loginGoogleUser } from "../../redux/authSlice";
import { IGoogleUser } from "../../types";
import GoogleButton from "../UI/GoogleButton";

interface props {}

// Getting Client ID
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

const GoogleAuth: FC<props> = (props) => {
    const dispatch = useDispatch();

    // On Google Login Success
    const responseGoogleSuccess = async (
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        let result: IGoogleUser = {} as IGoogleUser;
        let token: string = "";
        if ("profileObj" in response) {
            result = response.profileObj;
            result._id = response.profileObj.googleId;
        }
        if ("tokenId" in response) {
            token = response.tokenId;
        }
        try {
            dispatch(loginGoogleUser({ result, token }));
        } catch (error: any) {
            console.log(error);
        }
    };

    // On Google Login Failure
    const responseGoogleFailure = async (response: any) => {
        console.log(response);
    };
    return (
        <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
                <GoogleButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                />
            )}
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
        />
    );
};

export default GoogleAuth;
