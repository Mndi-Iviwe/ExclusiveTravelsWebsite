import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

function AboutUs() {

    return(
        <>
            <div style={{
            background: "linear-gradient(135deg, #f8f9fa 60%, #e9ecef 40%)",
            minHeight: "100vh",}}
            >
            

                <div className="bg-brand text-center custom-padding ">
                    <h1><span className="text-white">About Exclusive Travels</span></h1>
                    <div className=''>
                        <p class="fs-5 squeeze-text text-center py-2"><span className="text-white">Welcome to the home of Leisure and Travel. We are experts in Travel Management Services and Organized Tours.</span></p>
                    </div>
                </div>
            

            <div className="d-flex flex-md-row align-items-center justify-content-between bg-light custom-padding px-2">

                {/* Left side: text + button */}
                <div className="text-md-start px-5">
                        <p ><span className="text-rgb-15-52-96">Our Story</span></p>
                        <p ><span className="text-rgb-55-65-81">Exclusive Travels is a Level 01 BBBEE company registered with the Department of Trade and Industry in the Republic of South Africa. The company conforms to all the Trade and tax Laws of South Africa and its trade partners. Exclusive Travels is One Hundred Percent owned and managed by a young black woman from a previously disadvantaged background.</span></p>
                        <p ><span className="text-rgb-55-65-81">The core strength of this company comes from the Manager's vast knowledge of the Travel and Tourism Industry. After working for a period of 05 years for a Travel Agency in Cape town, Miss Mpho Mphadzha took a brave decision to move back to Gauteng and apply the skills and knowledge she had gathered from working as a Manager for all those years. In 2021 Exclusive Travels was born. The company holds a strong client base and 03 permanent staff members.</span></p>
                    <button className="btn btn-lg px-2 py-2 fw-bold bg-brand">
                        Contact Us
                    </button>
                </div>

                {/* Right side: image */}
                <div className="w-50">
                    <img src="images/mpho-m-1-12.png" className="" alt="mpho-m-1" />
                </div>
            

            </div>
                    
                
            
            
            
            <div className="text-center custom-padding bg-grey">
                <h2 className="text-14"><span className="text-rgb-15-52-96">Our Values</span></h2>
            
                <div className="container">
                        <div className="row gap-4">
                            <div className="col card border-2 square-card px-0 pt-4 squeeze-text">
                            <p className="text-16"><span className="text-rgb-15-52-96">Excellence</span></p>
                            <p className="text-17"><span className="text-rgb-75-85-99">We strive for excellence in every aspect of our service, ensuring that our clients receive the best possible travel experiences.</span></p>
                            </div>
                    
                        <div className="col card border-2 square-card px-0 pt-4 squeeze-text">
                            <p className="text-19"><span className="text-rgb-15-52-96">Integrity</span></p>
                            <p className="text-20"><span className="text-rgb-75-85-99">We conduct our business with the highest level of integrity and transparency, building trust with our clients and partners.</span></p>
                        </div>

                        <div className="col card border-2 square-card px-0 pt-4 squeeze-text">
                            <p className="text-22"><span className="text-rgb-15-52-96">Customer Focus</span></p>
                            <p className="text-23"><span className="text-rgb-75-85-99">Our clients are at the heart of everything we do. We tailor our services to meet their unique needs and expectations.</span></p>
                        </div>

                    </div>
                </div>
                
            </div>
            
            

           
            <div className="text-center justify-content-center custom-padding bg-special">

                <h3 className="text-25"><span className="text-rgb-15-52-96">Ready to Experience Our Service?</span></h3>
            
            
                <p className="fs-5 squeeze-text py-4"><span className="text-rgb-55-65-81">Let us help you plan your next adventure with our expert travel management services.</span></p>
            
            
                <Nav className='gap-2 justify-content-center py-3'>
                    <Nav.Link href="/Packages" className="btn btn-primary btn-lg px-3 rounded-3 fw-bold text-black"
                    style={{ backgroundColor: "#ffff", border: "2px solid #0F3460"}}
                    >
                    Explore Our Packages
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="/ContactUs" className="btn btn-primary btn-lg px-3 rounded-3 fw-semibold text-white"
                    style={{ backgroundColor: "#0F3460" }}>
                    Get in Touch
                    </Nav.Link>
                </Nav>
            </div>

            </div>
        </>
    )
}

export default AboutUs