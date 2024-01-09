import './Nb.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo1 from '../../assets/Logo1.png';
const Nb = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-none  nb-parent ">
      <Container>
        <Navbar.Brand href="#home">
           <div className='nav-img-1'>
            <img src={Logo1} alt="" />
           </div>
            
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-merge">
            <Nav.Link href="#Desitnations">Desitnations</Nav.Link>
            <Nav.Link href="#Hotels">Hotels</Nav.Link>
            <Nav.Link href="#Flights">Flights</Nav.Link>
            <Nav.Link href="#Bookings">Bookings</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Sign up">Sign up</Nav.Link>
           

           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Nb