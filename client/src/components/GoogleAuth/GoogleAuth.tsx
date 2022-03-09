import React, { FC } from "react";
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from "react-google-login";
import GoogleButton from "../UI/GoogleButton";

interface props {}

const GoogleAuth: FC<props> = (props) => {
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
            clientId="800517765083-fna1h08tal5cb2dgvfkb16f73ars9j8o.apps.googleusercontent.com"
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
