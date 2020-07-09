import React, { useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import { getFacebook } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

export default function Facebook() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const handleResponse = (data) => {
        dispatch(getFacebook(data, history));
    };

    const handleError = (error) => {
        console.log(errors);
        setErrors({ error });
    };

    return (
        <FacebookProvider appId="2665147327063634">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <Button
                        color="primary"
                        onClick={handleClick}
                        style={{ padding: 10 }}
                    >
                        Login via Facebook
                        {loading && <span>Loading...</span>}
                    </Button>
                )}
            </Login>
        </FacebookProvider>
    );
}
