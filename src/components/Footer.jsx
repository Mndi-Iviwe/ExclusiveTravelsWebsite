import './compstyle.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return(
        <footer className='bg-brand text-white py-5'>
            <div className="container">
                <div className="div row">
                    <div className="col">
                        
                        <img src="images/rettina-2-170.png" className="rettina-2-170" alt="rettina-2" />
                        <p className="text-171"><span className="text-rgb-209-213-219">Discover the world with Exclusive Travels. We provide luxury travel experiences and personalized service to create unforgettable memories.</span></p>
                        
                        <div className="col d-flex gap-3">
                            <img src="images/vector-173.svg" className="vector-173" alt="vector" />
                            <img src="images/insta-log1.png" className="w-1" alt="vector" />
                            <img src="images/vector-178.svg" className="vector-178" alt="vector" />
                        </div>
            

                    </div>
                    <div className="col">

                        <h3 className="text-179"><span className="text-white">Quick Links</span></h3>
                        <p className="text-180"><span className="text-rgb-209-213-219">Travel Packages</span></p>
                        <p className="text-181"><span className="text-rgb-209-213-219">Visa Applications</span></p>
                        <p className="text-182"><span className="text-rgb-209-213-219">About Us</span></p>
                        <p className="text-183"><span className="text-rgb-209-213-219">Contact Us</span></p>

                    </div>
                    <div className="col">

                        <h3 className="text-184"><span className="text-white">Top Destinations</span></h3>
                        <p className="text-185"><span className="text-rgb-209-213-219">Dubai</span></p>
                        <p className="text-186"><span className="text-rgb-209-213-219">Mauritius</span></p>
                        <p className="text-187"><span className="text-rgb-209-213-219">Zanzibar</span></p>
                        <p className="text-188"><span className="text-rgb-209-213-219">Bali</span></p>
                        <p className="text-189"><span className="text-rgb-209-213-219">Maldives</span></p>

                    </div>
                    <div className="col">

                    
                            <img src="images/vector-192.svg" className="vector-192" alt="vector" />
                        
                            <p className="text-194"><span className="text-rgb-209-213-219">123 Travel Street, Cape Town, South Africa</span></p>
                        
                        
                        
                        <img src="images/phone-icon.png" className="vector-196" alt="vector" />
                        
                        <p className="text-197"><span className="text-rgb-209-213-219">+27 12 345 6789</span></p>
                        

                        <img src="images/vector-199.svg" className="vector-199" alt="vector" />
                        <img src="images/vector-200.svg" className="vector-200" alt="vector" />
                        
                        <p className="text-201"><span className="text-rgb-209-213-219">info@exclusivetravels.co.za</span></p>
                        
                        <p className="text-203"><span className="text-rgb-156-163-175">©</span></p>
                        <p className="text-204"><span className="text-rgb-156-163-175">Privacy Policy</span></p>
                        <p className="text-205"><span className="text-rgb-156-163-175">Terms of Service</span></p>

                    </div>

                </div>
            </div>


        </footer>
    )
}