import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {

    return(
                <Navbar collapseOnSelect expand="lg" className="p-4 bg-body-tertiary">
      <Container>
        <Navbar.Brand className='ms-1'><img src="images/rettina-1-210.png" class="rettina-1-210" alt="rettina-1" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-center'/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ps-5 me-auto">
            <CustomLink to='/Home'>Home</CustomLink>
            <CustomLink to='/Packages'>Destinations</CustomLink>
            <CustomLink to='VisaApplication'>Visa Applications</CustomLink>
            <CustomLink to='/About'>About Us</CustomLink>
            <CustomLink to='/ContactUs'>Contact Us</CustomLink>
            <CustomLink to='/Trip'>Trip</CustomLink>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}


//linking function - uses window  data to refernece to different links/pages
function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
             <Nav.Link><Link to={to} {...props} className='text-decoration-none text-reset'>
                {children}
             </Link></Nav.Link>
        </li>
    )
}