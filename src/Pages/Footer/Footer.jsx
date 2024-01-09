import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import facebook from '../../assets/face.png';
import twitter from '../../assets/twitter.png';
import { CiInstagram } from "react-icons/ci";
import PlayStore from '../../assets/PlayStore.png';
const Footer = () => {
  return (
    <>
   <Container>
    <Row className='mt-5'>
        {/* one */}
        <Col         lg={3} md={3} sm={6} className='mb-5'>
            <div className='f-colu'>
                <h6>Jadoo.</h6>
                <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
        </Col>
        {/* two */}

        <Col  lg={2} md={3} sm={6} className='mb-5'>
            <div className='sec-colu'>
                <ul>
                    <h5>Company</h5>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Mobile</li>
                </ul>
            </div>
        </Col>
        {/* there */}
        <Col  lg={2} md={3} sm={6} className='mb-5'>

        <div className='third-colu'>
                <ul>
                    <h5>Contact</h5>
                    <li>Help/FAQ</li>
                    <li>Press</li>
                    <li>Affilates</li>
                </ul>
            </div>
        </Col>
        {/* Four */}
        <Col  lg={2} md={3} sm={6} className='mb-5'>
        <div className='four-colu'>
                <ul>
                    <h5>More</h5>
                    <li>Airlinefees</li>
                    <li>Airline</li>
                    <li>Low fare tips</li>
                </ul>
            </div>
        </Col>
        {/* Five */}
        <Col  lg={3} md={3} sm={6} className='mb-5'>
            
            <div className='five-colu'>
                <div className='ico-parent'>
                <img src={facebook} alt="" />

                <CiInstagram  className='ins' />
                <img src={twitter} alt="" />
                </div>

                <div className='ourapp'>
                    <p>Discover our app</p>
                </div>

                      <div className='PlayStore'>
                          <img src={PlayStore} alt="" />
                          <img src={PlayStore} alt="" />
                      </div>


                </div> 
            </Col>
    </Row>
   </Container>
    </>
  )
}

export default Footer;