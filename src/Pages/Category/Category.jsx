import './Category.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import aeroplane from '../../assets/aeroplane.png';
import weathere from '../../assets/weathere.png';
import customize from '../../assets/customize.png';
import mic from '../../assets/micc.png';
const Category = () => {
  return (
    <>
   <Container>
    <Row className='mt-5'>
        <Col lg={12} md={12} sm={12} >
       <div className='category'>
        <p>CATEGORY</p>
        <h2>We Offer Best Services</h2>
        </div>        
     </Col>
    </Row>

    <Row className='mt-5'>
        {/* Card One */}
    <Col  lg={3} md={6} sm={6} >
    <Card className='card-parent'>
          <div className='card-img-'>
            <img src={aeroplane} alt="" />
          </div>
      <Card.Body>
       <div className='tit-text'>
        <h5>Best Flights</h5>
        <p>Engrossed listening.
             Park gate sell they west hard for the.</p>
       </div>
        
      </Card.Body>
    </Card>

    </Col>
    {/* Card two */}
    <Col  lg={3} md={6} sm={6} >
    <Card className='card-parent'>
          <div className='card-img-two'>
            <img src={weathere} alt="" />
          </div>
      <Card.Body>
       <div className='tit-text-two'>
        <h5>Calculated Weather </h5>
        <p>Built Wicket longer admire do barton vanity itself do in it.</p>
       </div>
        
      </Card.Body>
    </Card>
    </Col>
    {/* there */}
    <Col  lg={3} md={6} sm={6} > 
    <Card className='card-parent'>
          <div className='card-img-there'>
            <img src={customize} alt="" />
          </div>
      <Card.Body>
       <div className='tit-text-there'>
        <h5>Customization </h5>
        <p>We deliver outsourced aviation services for military customers</p>
       </div>
        
      </Card.Body>
    </Card>
    
    </Col>
    <Col  lg={3} md={6} sm={6} >

    <Card className='card-parent'>
          <div className='card-img-four'>
            <img src={mic} alt="" />
          </div>
      <Card.Body>
       <div className='tit-text-four'>
        <h5>Local Events </h5>
        <p>We deliver outsourced aviation services for military customers</p>
       </div>
        
      </Card.Body>
    </Card>
    
    </Col>
    </Row>
   </Container>
    </>
  )
}

export default Category;