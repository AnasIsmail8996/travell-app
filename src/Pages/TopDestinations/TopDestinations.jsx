import './TopDestinations.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import cardimgone from '../../assets/card-img-one.png';
import cardimgtwo from '../../assets/card-img-two.png';
import cardimgthere from '../../assets/card-img-there.png';
import { IoNavigateSharp } from "react-icons/io5";
const TopDestinations = () => {
  return (
    <>
    <Container>
      <Row className='mt-5'>
        <Col lg={12} md={12} sm={12}>
          <div className='dis-head-text'>
             <p>Top Selling</p>
             <h2>Top Destinations</h2>

          </div>
        </Col>
      </Row>


      <Row>
        <Col lg={4} md={6} sm={8} className='mt-5'>
        <Card className='des-card-prnt'>
         <div className='des-img'>
         <img src={cardimgone} alt="" />
         </div>
     
      <div className='names-place' >
        <div className='names-place-text'>
         <p>London, UK</p>
         <p>$4.2k</p>
        </div>

         <div className='daysTrip'>
        <p> <IoNavigateSharp/></p>
          <p>10 Days Trip</p>
         </div>
      </div>
       
    </Card>

        </Col>
        <Col lg={4} md={6} sm={8} className='mt-5' >
        <Card className='des-card-prnt'>
         <div className='des-img'>
         <img src={cardimgtwo} alt="" />
         </div>
     
      <div className='names-place' >
        <div className='names-place-text'>
         <p>Full Europe</p>
         <p>$15k</p>
        </div>

         <div className='daysTrip'>
        <p> <IoNavigateSharp/></p>
          <p>28 Days Trip</p>
         </div>
      </div>
       
    </Card>
        </Col>
        <Col lg={4} md={6} sm={8}  className='mt-5'>
        <Card className='des-card-prnt'>
         <div className='des-img'>
         <img src={cardimgthere} alt="" />
         </div>
     
      <div className='names-place' >
        <div className='names-place-text'>
         <p>Rome, Italty</p>
         <p>$5,42k</p>
        </div>

         <div className='daysTrip'>
        <p> <IoNavigateSharp/></p>
          <p>10 Days Trip</p>
         </div>
      </div>
       
    </Card>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default TopDestinations;