import React from "react";
import { Card, Col, Row, CardBody, CardHeader,  CardTitle } from "reactstrap";
function Home() {
    return (
        <div>
            <div className='mr-4 text-center'>

                <h2>DINESHMANIKANTA</h2>
                <h4>SOFTWARE ENGINEER</h4>

            </div>




            <div className='mr-4 bg-info mx-4' >
                <h3 className=''><u>Skills Specialised</u></h3>
                <Row>
                    <Col md={1} >   </Col>
                    <Col md={5} className='m-2'>
                    <Card>
                        <CardHeader>
                           <h4> Programming Languages</h4>
                        </CardHeader>
                        <CardBody>
                            Python
                        </CardBody>
                    </Card>
                    </Col>
                    <Col md={5} className='m-2'>
                    <Card>
                    <CardHeader>
                           <h4> Web Technologies</h4>
                        </CardHeader>
                        <CardBody>
                            Html, Css, JavaScript
                        </CardBody>
                    </Card>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col md={5 } className='m-2'>
                    <Card>
                        <CardHeader>
                            <h4>FramesWorks</h4>
                        </CardHeader>
                        <CardBody>
                            Bootstrap, Angular, React
                        </CardBody>
                    </Card>
                    </Col>

                    <Col md={5} className='m-2'>
                    <Card>
                        <CardHeader>
                            <h4>
                                DataBases
                            </h4>
                        </CardHeader>
                        <CardBody>
                            Sql
                        </CardBody>
                    </Card>
                    </Col>
                    <Col md={1}></Col>
                </Row>

            </div>

<div className='p-2'> </div>
            <div className='mr-4 bg-primary py-2 mx-4'>
                <h3 className=''><u>Projects Done</u></h3>
                <Card className='m-4'>
                        <CardHeader>
                            <h4>Making Website Responsive</h4>
                        </CardHeader>
                        <CardTitle>
                           <h5>Company - Digitebl</h5>
                        </CardTitle>
                        <CardBody><h6>
Working on making the website of the company responsive using Angular , Html and Bootstrap         </h6>               </CardBody>
                    </Card>
</div>
        </div>
    );
}
export default Home;