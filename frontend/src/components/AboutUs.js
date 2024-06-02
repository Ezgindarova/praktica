import React from 'react'
import { Container, Row, Col, Image ,Card , Button} from 'react-bootstrap'
import {LinkContainer}  from 'react-router-bootstrap'
import about from '../images/about3.jpg';

function AboutUs() {

//

    return (
            <Row style = {{ backgroundColor: "brown", paddingTop : "4rem", }}>
            <Col  xs={6} md={4} xl={6} lg={6} style = {{ paddingTop : "3rem", }}>
                <Card style={{width : '85%' ,
                              height :'44rem' ,
                              textAlign:"center",  
                              marginLeft:"12%",
                              paddingTop: "3rem",
                              backgroundColor : "black",
                              color : "white",
                              borderRadius:"1%",
                            }}>
                    <Card.Body>
                        <Card.Title><p style={{fontSize:"33px",paddingTop: "3rem",}}>
                            About Us</p>
                        </Card.Title>
                        <Card.Text style = {{ fontSize : "160%", textAlign: "center", paddingTop: "3rem", fontFamily: "Trebuchet MS",}}>
                            <p>WSGI app with django and react<p></p>
                            The project was carried out by students of group 231-365:

                            - Yezgindarova Varvara Sergeevna
                            - Chibarchikov Artyom Ilnurovich
                            - Aminova Amira Ainurovna</p>
                        </Card.Text>
                        <Col >
                            <LinkContainer to='/contact' style={{position:"absolute" ,
                                                                right:"43%",
                                                                bottom:"5rem",
                                                                padding:"17px",
                                                                borderRadius:"5%",
                                                                backgroundColor: "CadetBlue",
                                                                fontSize: "90%",
                                                                fontFamily : "Helvetica  ",
                                                                color: "white",
                                                                }}>
                                <Button>Contact</Button>
                            </LinkContainer> 
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
            <Col  xs={6} md={4} xl={6} lg={6}>
                <Container fluid>
                    <Image src={about}fluid Link to='/store' style={{height:"50rem" ,
                                                                    width : '87%' ,
                                                                    marginRight:"10%",
                                                                    borderRadius:"1%",}}/>
                </Container>
            </Col>
        </Row>
    )
}

 export default AboutUs