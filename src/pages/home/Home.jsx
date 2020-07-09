import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/actions";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";

const Center = styled.div`
    display: flex;
    justify-content: center;
`;

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
                        <Center>
                            <img src={dataUser.profile.imageUrl} alt="" />
                        </Center>

                        <h3 style={{ textAlign: "center" }}>
                            Name : {dataUser.profile.name}
                        </h3>

                        <h3 style={{ textAlign: "center" }}>
                            Email : {dataUser.profile.email}
                        </h3>
                        <Center>
                            <Button onClick={() => dispatch(logout(history))}>
                                Logout
                            </Button>
                        </Center>
                    </Col>
                )}
            </Row>
        </Container>
    );
}
