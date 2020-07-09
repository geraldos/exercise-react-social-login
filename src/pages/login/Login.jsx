import React from "react";
import { Google, Facebook } from "../../components";
import { Container, Row, Col } from "reactstrap";

function Login() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{ textAlign: "center" }}>Social-Login</h1>
                    <Col style={{ textAlign: "center", padding: 10 }}>
                        <Google />
                    </Col>
                    <Col style={{ textAlign: "center", padding: 10 }}>
                        <Facebook />
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
