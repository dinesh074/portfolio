import React from "react";
import { Col,Row,Card,CardBody,CardHeader,Table} from "reactstrap";

function About(){
    return(
        <div className='container'>
        <Row>
          <Col md={6} className='my-5'>
            <Card>
    <CardBody>
      <CardHeader>MY SELF</CardHeader>
    </CardBody>
    <img src='./assets/one(1).jpeg' alt='one'/>


            </Card>
          </Col>
          <Col md={6} className='my-3' >
          <div className='text-left ml-2'>
            <h5>
              Dineshmanikantha Budidha
            </h5>
            <p>
              Front end Developer Intern @Digitebl
            </p>
            <p>
              dmanikanta.indian1@gmail.com
            </p>
            <p >
    9133256568
            </p>
            <p className='btn btn-link'>
    <a href='https://www.linkedin.com/in/dineshmanikanta/'>Linkedin</a>  </p>
          </div>
          </Col>
        </Row>
    <div dark className= 'border  border-bottom-4 border-dark'></div>    <Objective/><Education/><Skills/><Strength/><Intern/><Project/><Hobbies/><Details/><Declare/><Ps/>
        </div>

      );
    }
    function Objective(){
      return(
    <Row className='my-4 '>
      <Col md={3}>
    <h4>    Career Objective
    </h4>
      </Col>
      <Col md={9}>
        <p>
          To Start My Career in  a Reputed organisation Where i can utilise my skills for My personel Growth and growth of the organisation
        </p>
      </Col>
    </Row>
      );
    }
    function Education(){
      return(
        <div className='my-3 '>
              <div className='border  border-bottom-4 border-dark'></div>

        <h4 className='my-4'>Education</h4>
    <Table responsive bordered>
    <thead>
      <tr>
       <th>Qualification</th>
       <th>University/Institute </th>
       <th>Year of Passing</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bachelors of Technology</td>
        <td>
          Godavari Institute of Engineering and Technology, Rajahmundry
        </td>

        <td>
          7.6
        </td>
      </tr>
      <tr>
        <td>
          Intermediate
        </td>
        <td>
          Mahendra Junior College , Pathapatnam
        </td>

        <td>
          95.6
        </td>
      </tr>
      <tr>
        <td>
          SSC
        </td>
        <td>
          ZPHS, TULAGAM
        </td>

        <td>9.2</td>
      </tr>
    </tbody>
    </Table>
    </div>
    );
    }
    function Skills(){
      return(
    <div className='my-4 center'>
      <div className=' border border-dark border-bottom-2 '></div>
      <h4 className='my-4'>Skills</h4>
      <Table responsive bordered>
        <tbody>
          <tr>
            <th> Programming Languages</th>
            <td>Python</td>
          </tr>
          <tr>
            <th>Web Technologies</th>
            <td>Html, Css, Javascript</td>
          </tr>
          <tr>
            <th> FrameWorks</th>
            <td>Angular, React, Bootstrap</td>
          </tr>
        </tbody>
      </Table>

    </div>
      );
    }
    function Strength(){
      return (
        <div className='my-4'>
            <div className=' border border-dark border-bottom-2 '></div>
            <h4 className='my-4'> Strengths</h4>

    <Table responsive bordered>
      <tbody>
      <tr>
        <th>
        Quick Learner

        </th>
        <th>
    Positive Thinker
        </th>
        <th>
    Smart Working
        </th>
        <th>
    Honest
        </th>
        <th>
    Colloboration Skills
        </th>
      </tr></tbody>
    </Table>


        </div>
      );
    }
    function Intern(){
      return(
        <div className='my-4'>
            <div className=' border border-dark border-bottom-2 '></div>
            <h4 className='my-4'> Internship</h4>
            <Table responsive bordered>
              <tbody>
                <tr>
                  <th>
                    Front End Developer Intern
                  </th>
                  <th>
                    Company-Digitebl
                  </th>
                </tr>
                <tr>
                  <td colSpan="2">
                  working on making the website of the company responsive and add new features to the website and add new features to the website.
                  </td>
                </tr>
                <tr>
                  <th colSpan='2'>
                    From 2-june-2020 to till date
                  </th>
                </tr>
              </tbody>
            </Table>

            </div>
      );
    }
    function Project(){
      return ( <div className='my-4'>
      <div className=' border border-dark border-bottom-2 '></div>
      <h4 className='my-4'> Projects</h4>
      <Table responsive bordered>
        <tbody>
          <tr>
            <th>
             Mini Project
            </th>
            <th>
    Wireless Doorbell using Rf Module        </th>
          </tr>
          <tr>
            <td colSpan="2">
            worked on making the connections of the module for the both transmitter and receiver which works by using radio frequency modules
            </td>
          </tr>

        </tbody>
      </Table>

      </div>

       );
    }
    function Hobbies(){
      return (
        <div className='my-4'>
            <div className=' border border-dark border-bottom-2 '></div>
            <h4 className='my-4'> Hobbies</h4>

    <Table responsive bordered>
      <tbody>
      <tr>
        <th>
    Watching Movies
        </th>
        <th>
    Travelling    </th>
        <th>
    Social Networking
        </th>

      </tr></tbody>
    </Table>


        </div>
      );
    }
    function Details(){
      return(
        <div className='my-4'>
            <div className=' border border-dark border-bottom-2 '></div>
            <h4 className='my-4'> Details</h4>
            <Table responsive>
              <tr>
                <th>
                  Father Name:
                </th>
                <td>
                  Sankara Rao
                </td>
              </tr>
              <tr>
                <th>
                  Date Of Birth:
                </th>
                <td>
                  27-05-2000
                </td>
              </tr>
              <tr>
                <th>
                  Languages Known
                </th>
                <td>
                  Telugu, English
                </td>
              </tr>
              <tr>
                <th>
                  Address:
                </th>
                <td>
                MainRoad, Moduguvalasa,Lnpeta,Srikakulam,AndhraPradesh, 532458.
                </td>
              </tr>
            </Table>
            </div>
      );
    }
    function Declare(){
      return(
        <div className='my-4'>
            <div className=' border border-dark border-bottom-2 '></div>
            <h4 className='my-4'> Declaration</h4>
            <p>I hereby declare that the above information furnished is true to the best of my knowledge and belief</p>
            </div>
      );

    }
    function Ps(){
      return(
        <div className='my-4'>
        <div className=' border border-dark border-bottom-2 '></div>
    <Table responsive>
      <tr>
        <th>
          Place
        </th>
        <th>
          Signature
        </th>
      </tr>
      <tr>
        <td>
          Srikakulam
        </td>
        <td>
          Dineshmanikantha
        </td>
      </tr>
      </Table>
      </div>  );
    }
export default About;