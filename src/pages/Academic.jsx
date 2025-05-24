import {Card,Button} from 'react-bootstrap';
import '../Styles/Academic.css'
import { useState } from 'react';
import mmc from '../images/Academic/mary-matha-college-of-arts-and-science-theni.jpg'
import rvs from '../images/Academic/rvs-college-of-arts-science-coimbatore.jpg'
// import img from '../img/cards/image1.png'

function GroupExample() {


  return (<>
        <div id='academic'>
        <h1> <i class="fa-solid fa-academic"></i> academic</h1>
    <div id='cardGroup'>

      <Card>
        <Card.Img variant="top" src={mmc} />
        <Card.Body>
          <Card.Text>
              <h4>Bachelor of Computer Science (B.Sc)</h4>
              <h5>Mary Matha College of Arts and Science, Theni (2021 - 2024)</h5>
              <h5>Academic score :- <b>65%</b></h5>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={rvs} />
        <Card.Body>
          <Card.Text>
              <h4>Master of Computer Application (MCA)</h4>
              <h5>RVS College of Arts and Science, Coimbatore (2024 - going on)</h5>
               <h5>Academic score :- <b>91%</b></h5>
          </Card.Text>
        </Card.Body>
      </Card>


    </div>

    </div>
 </> );
}

export default GroupExample;