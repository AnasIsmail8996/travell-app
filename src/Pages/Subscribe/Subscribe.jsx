import './Subscribe.css';
import { Container , Row, Col } from 'react-bootstrap';
const Subscribe = () => {
  return (
    <>
    <Container>
<Row>
<Col >
    <div className='Subscribe-back-color col-lg-12 col-md-12 col-sm-12 '>
       <Row>
        <Col  lg={12} md={12} sm={12}>
            <div className='subs-text'>
                <h1>Subscribe to get information, latest news and other
interesting offers about Cobham</h1>
            </div>
        </Col>
        <Col  lg={12} md={12} sm={12}>
            <div className='inp-btn'>
                <input type="text"  placeholder='Your Email' />
                 
                 <button>Subscribe</button>
            </div>
        </Col>
       </Row>
    </div>
</Col>
</Row>
    </Container>
    </>
  )
}

export default Subscribe;