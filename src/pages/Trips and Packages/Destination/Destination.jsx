import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Destination(){

    return(
        <>
            <section className="banner-info bg-container3 p-3">
                <h2 className='max-grav'><span>(REGION) Luxury Getaway</span></h2>
            </section>

            <section className="Destination-info py-3 px-2">
                <div className='d-flex gap-4 justify-content-between'>
                    <Tabs
                    defaultActiveKey="destination-details"
                    className="mb-3"
                    fill
                    justify
                    >
                        <Tab eventKey="home" title="Overview">
                            Tab content for Overview
                        </Tab>
                        <Tab eventKey="Itinerary" title="Itinerary">
                            Tab content for Itenirary
                        </Tab>
                        <Tab eventKey="trip-info" title="Includes/Excludes">
                            Tab content for Contact
                        </Tab>
                    </Tabs>
                    <div className='confirm-book box-simple'>
                        <h2>Book This Package</h2>

                        <div>
                            <h4>R<span>12,000</span></h4>
                            <p>/per person</p>
                        </div>

                        <div>
                            <p>Travel Date</p>
                            <input type="date" name="" id="" />
                        </div>

                        <div>
                            <p>Number Of Travelers</p>
                            <input type="number" name="" id="" />
                        </div>

                        <hr />

                        <div>   
                            <p>base price</p>
                            <p>R<span>0,00</span></p>
                        </div> 

                        <div>
                            <p>Taxes & Fees</p>
                            <p>R<span>0,00</span></p>
                        </div>

                        <hr />

                        <div>
                                <p><span>Total:</span></p>
                                <p>R<span>0,00</span></p>
                            <div>
                                    Purchase Booking
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Destination;