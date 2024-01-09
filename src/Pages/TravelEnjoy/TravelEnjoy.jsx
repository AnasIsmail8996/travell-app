import './TravelEnjoy.css';
import Nb from '../Nb/Nb';
import { Container, Row, Col } from 'react-bootstrap';
import Playbutton from '../../assets/Playbutton.png';
import aeroplane from '../../assets/aeroplane.png';
import Traveller from '../../assets/Traveller.png';
const TravelEnjoy = () => {
  return (
    <>
          <header style={{position:'relative'}}>
            <Nb/>
          </header>
            <Container>
              <Row className='mt-5'>
                <Col  lg={6} md={12} sm={12}>
                  <div className='tr-text-parent'>
                         
                         <div className='heding-text'>
                          <h6>Best Destinations around the world</h6>
                          <h1>Travel, enjoy and live a new and full life</h1>
                          <p>Built Wicket longer admire do barton vanity itself do in it.
                             Preferred to sportsmen it engrossed listening.
                             Park gate sell they west hard for the.</p>
                        
                         </div>

                        <div className='btn-parent'>
                          <button> Find out more</button>
                        <div className='img-play-btn'>
                          <img src={Playbutton} alt="" />
                          <button>Play Demo</button>
                        </div>
                        </div>
                  </div>

                </Col>
                {/* second column */}
                <Col  lg={6} md={12} sm={12}>
                  <div className='yallow-color-back'>
                  <div className='img-parent-'>
                    <div className='img-one'>
                    <img src={aeroplane} alt="" />
                    </div>
                    <div className='img-two'>
                    <img src={Traveller} alt="" />
                    </div>
                    <div className='img-there'>
                    <img src={aeroplane} alt="" />
                    </div>

                    </div>   
                  </div>
                 
                </Col>
              </Row>
            </Container>

    </>
  )
}

export default TravelEnjoy;