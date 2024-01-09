import './NextTrip.css';
import { Container, Row, Col } from 'react-bootstrap';
import nexttrip1 from '../../assets/nexttrip1.png';
import nexttrip2 from '../../assets/nexttrip2.png';
import nexttrip3 from '../../assets/nexttrip3.png';
import { BiSolidLeaf } from "react-icons/bi";
import girl from '../../assets/girl.png';
import { FaRegMap } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import whiteimg from '../../assets/white-img.png';
import line from '../../assets/line-h.png';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
const NextTrip = () => {
  return (
    <>
   <Container>
    <Row className='mt-5'>
        <Col  lg={6} md={12} sm={12}>
            <div className='next-trip-parent'>
                  <div className='next-trip-text'>
                        <p>Easy and Fast</p>
                        <h2>Book your next trip in 3 easy steps</h2>
                  </div>
                      {/* icons-text */}
                  <div className='icons-text'>
                    <img src={nexttrip1} alt="" />

                    <p> <span>Choose Destination</span><br />
                    Lorem ipsum dolor sit amet, consectetur  
                    adipiscing elit. Urna, tortor tempus. 
                     </p>
                  </div>

                 {/* two icons-text */}
                 <div className='icons-text'>
                    <img src={nexttrip2} alt="" />

                    <p> <span>Reach Airport on
                        <br /> Selected Date</span><br />
                    Lorem ipsum dolor sit amet, consectetur  
                    adipiscing elit. Urna, tortor tempus. 
                     </p>
                  </div>



                {/* there icons-text */}
                <div className='icons-text'>
                    <img src={nexttrip3} alt="" />

                    <p> <span>Make Payment</span><br />
                    Lorem ipsum dolor sit amet, consectetur  
                    adipiscing elit. Urna, tortor tempus. 
                     </p>
                  </div>

            </div>
        </Col>
        <Col  lg={6} md={12} sm={12} > 
                  <div className='card-nextparent'>
                   <img src={girl} alt="" />
                      <div className='card-next-text'>
                        <h6>Trip To Greece</h6>
                        <p> 14-29 June | by Robbin joseph</p>
                      </div>

                   <div className='svg-parent'>
                    <button> <BiSolidLeaf /></button>
                    <button> <FaRegMap/></button>
                    <button><IoIosSend /></button>
                   </div>
                    
                        <div className='card-white'>
                            <div className='card-white-img-text'>
                            <img src={whiteimg} alt="" />
                            <p>Ongoing</p>
                            </div>

                            <div className='trip-rome'>
                             <h6> Trip to rome</h6>
                             <p> <span>40% </span> completed</p>
                             <img src={line} alt="" />
                            </div>
                            
                           


                        </div>

                        <div className='people'>
                           
                           <p>   <span> <HiOutlineBuildingOffice2 /></span> 24 people going</p>
                           <span> <CiHeart/></span>
                            </div>

                  </div>
                


        </Col>
    </Row>
   </Container>
    </>
  )
}

export default NextTrip;