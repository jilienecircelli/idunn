import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <Container className='footer-card'>
                    <Row>
                        <Col sm={8}></Col>
                        <Col sm={4}>Idunn SMP</Col>
                    </Row>
                    <Row>
                        <Col sm={8}></Col>
                        <Col sm={4}>Site Created by:</Col>
                    </Row>
                    <Row>
                        <Col sm={8}></Col>
                        <Col sm={4}>fireliliesX</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer