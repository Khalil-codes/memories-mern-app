import React, { FC } from "react";
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";
import GoogleButton from "../UI/GoogleButton";

interface props {}

const GoogleAuth: FC<props> = (props) => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
    const responseGoogleSuccess = async (
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ) => {
        let result: Object = {};
        let token: string = "";
        if ("profileObj" in response) {
            result = response.profileObj;
        }
        if ("tokenId" in response) {
            token = response.tokenId;
        }
        console.log(result, token?.slice(1, 15));
    };
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
