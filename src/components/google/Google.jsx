import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGoogle } from "../../redux/actions";

function Google() {
    const history = useHistory();
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        dispatch(getGoogle(response, history));
    };
    return (
        <GoogleLogin
            clientId="659276998013-f8v1lg0s6dtu4a5t416bmojrkbnvc4jf.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
}

export default Google;
