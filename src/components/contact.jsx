import React from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardFooter } from "reactstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger, faWhatsapp, faGooglePlus, faFacebook, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
function Contact() {
    return (
        <div className='my-4'>
            <Row>
                <Col md={3}>
                </Col>
                <Col md={8}>
                    <Card  >
                        <CardImg top width="60%" src="https://photos.google.com/u/0/search/_cAF1QipPTL8NAXoqnxPduIlgE8xOFh60a-9sfmcw_DINESH%20MANIKANTHA/photo/AF1QipPzPe8Y-QdFnzHXPOEJz3CUPJp9frrOynA3umIk" alt="Card image cap" />
                        <CardBody >
                            <CardTitle>
                                <h3>DineshManikantha</h3>
                            </CardTitle>
                            <CardSubtitle>
                                Front End Developer Intern <a href="www.digitebl.com"> @Digitebl</a>
                            </CardSubtitle>
                            <Row className='my-3'>
                                <Col>
                                    <a href="tel:+919133256568">
                                        <FontAwesomeIcon icon={faPhone} />  Call_Me
  </a>
                                </Col>
                                <Col>
                                    <a href='https://wa.link/tx4760'> <FontAwesomeIcon icon={faWhatsapp} />  Message  </a>
                                </Col>
                                <Col>
                                    <a href="mailto:dmanikanta.indian1@gmail.com">
                                        <FontAwesomeIcon icon={faGooglePlus} /> hi@dinesh.com
                        </a>


                                </Col>

                            </Row>

                        </CardBody>
                        <CardFooter>
                            <Row classID='contactfooter' dark className='my-3'>
                                <Col>

                                    <a href="https://m.me/dinesh.manikanta.90"><FontAwesomeIcon icon={faFacebookMessenger} />
                                    </a>
                                </Col>
                                <Col>
                                    <a href='https://www.linkedin.com/in/dineshmanikanta/'> <FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </Col>
                                <Col>
                                    <a href="https://www.instagram.com/thisisdineshmanikanta/?hl=en">
                                        <FontAwesomeIcon icon={faInstagram} />
                        </a>

 </Col>
                                <Col>
                                    <a href="https://www.facebook.com/dinesh.manikanta.90">
                                        <FontAwesomeIcon icon={faFacebook} />
                        </a>


                                </Col>

                            </Row>
                        </CardFooter>
                    </Card>

                </Col>
            </Row>
        </div>
    );
}
export default Contact;