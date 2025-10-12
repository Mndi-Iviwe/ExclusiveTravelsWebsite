import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {

    return(
      <Navbar collapseOnSelect expand="lg" className="p-4 bg-white shadow-sm">
      <Container>
        <Navbar.Brand className='ms-1'><img src="images/rettina-1-210.png" class="rettina-1-210" alt="rettina-1" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-center'/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ps-5 me-auto">
            <CustomLink to='/Home'>Home</CustomLink>
            <CustomLink to='/Packages'>Destinations</CustomLink>
            <CustomLink to='/VisaApplication'>Visa Applications</CustomLink>
            <CustomLink to='/About'>About Us</CustomLink>
            <CustomLink to='/ContactUs'>Contact Us</CustomLink>
          </Nav>

          <Nav className='gap-2'>
            <CustomLink to='/Login'>
            <button className="btn btn-primary btn-lg px-4 rounded-3 text-black fs-5"
              style={{ backgroundColor: "#ffff", border: "2px solid #0F3460"}}>
              Login
            </button>
              
            </CustomLink>
            <CustomLink to="/Register">
              <button className="btn btn-primary btn-lg px-4 rounded-3 fs-5"
                  style={{ backgroundColor: "#0F3460" }}>
                Register
              </button>
            </CustomLink>
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