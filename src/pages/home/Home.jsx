import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/actions";

import { Container, Row, Col, Button } from "reactstrap";

export default function Home() {
    const user = useSelector((state) => state);
    const history = useHistory();
    const dispatch = useDispatch();

    const dataUser =
        user.google.profile !== undefined
            ? user.google
            : user.facebook.profile !== undefined && user.facebook;

    return (
        <Container>
            <Row>
                {dataUser.profile !== undefined && (
                    <Col>
                        <h1 style={{ textAlign: "center" }}>Ini adalah Home</h1>

                        <img src={dataUser.profile.imageUrl} alt="" />

                        <h3>Name : {dataUser.profile.name}</h3>

                        <h3>Email : {dataUser.profile.email}</h3>
                        <Col>
                            <Button onClick={() => dispatch(logout(history))}>
                                Logout
                            </Button>
                        </Col>
                    </Col>
                )}
            </Row>
        </Container>
    );
}
