import './Testimonials.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row,Col } from 'react-bootstrap';
import imgslider from '../../assets/img-slider.png';
const Testimonials = () => {
  return (
    <>
  
  <Carousel data-bs-theme="dark" className=' tes-carou-parent'>
      <Carousel.Item>
        <Container >

        <Row className='mt-5'>

        <Col lg={6} md={6} sm={6}>

            <div className='text-heading-carou'>
                <p>Testimonials</p>
                <h1>What people say  <br />about Us.</h1>
            </div>
        </Col>

        {/* two img text column */}
        <Col  lg={6} md={6} sm={6}>
            <div className='img-text'>
                <div className='img-slider'>
                  <img src={imgslider} alt="" />
                </div>

                <div className='box-white col-lg-12 col-md-12 col-sm-12'>
                    <div className='box-white-para'>
                    <p>“On the Windows talking painted pasture yet its express parties use. 
                        Sure last upon he same as knew next. Of believed or diverted no.”</p>
                    </div>
                    <div className='box-white-names'>
                      <h6>Mike taylor</h6>
                      <p>Lahore, Pakistan</p>
                    </div>
                </div>

            </div>
        </Col>
        </Row>
        </Container>
      
      </Carousel.Item>

      <Carousel.Item>
      <Container >

<Row className='mt-5'>

<Col lg={6} md={6} sm={6}>

    <div className='text-heading-carou'>
        <p>Testimonials</p>
        <h1>What people say  <br />about Us.</h1>
    </div>
</Col>

{/* two img text column */}
<Col  lg={6} md={6} sm={6}>
    <div className='img-text'>
        <div className='img-slider'>
          <img src={imgslider} alt="" />
        </div>

        <div className='box-white col-lg-12 col-md-12 col-sm-12'>
            <div className='box-white-para'>
            <p>“On the Windows talking painted pasture yet its express parties use. 
                Sure last upon he same as knew next. Of believed or diverted no.”</p>
            </div>
            <div className='box-white-names'>
              <h6>Mike taylor</h6>
              <p>Lahore, Pakistan</p>
            </div>
        </div>

    </div>
</Col>
</Row>
</Container>
      </Carousel.Item>
        
        {/* there */}
      <Carousel.Item>
      <Container >

<Row className='mt-5'>

<Col lg={6} md={6} sm={6}>

    <div className='text-heading-carou'>
        <p>Testimonials</p>
        <h1>What people say  <br />about Us.</h1>
    </div>
</Col>

{/* two img text column */}
<Col  lg={6} md={6} sm={6}>
    <div className='img-text'>
        <div className='img-slider'>
          <img src={imgslider} alt="" />
        </div>

        <div className='box-white col-lg-12 col-md-12 col-sm-12'>
            <div className='box-white-para'>
            <p>“On the Windows talking painted pasture yet its express parties use. 
                Sure last upon he same as knew next. Of believed or diverted no.”</p>
            </div>
            <div className='box-white-names'>
              <h6>Mike taylor</h6>
              <p>Lahore, Pakistan</p>
            </div>
        </div>

    </div>
</Col>
</Row>
</Container>
      </Carousel.Item>

    </Carousel>

    </>
  )
  }


export default Testimonials;