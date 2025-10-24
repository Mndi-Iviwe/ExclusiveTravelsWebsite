import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function VisaApplication() {

    return (
        <>

        <div className="bg-brand text-center custom-padding ">
                    <h1><span className="text-white">Visa Application Services</span></h1>
                    <div className=''>
                        <p className="fs-5 squeeze-text text-center py-2"><span className="text-white">Let us handle the complexities of visa applications for a smooth travel experience.</span></p>
                    </div>
        </div>

        <Tabs
            defaultActiveKey="visa-application-process"
            className="mb-3"
            fill
            justify
        >

      <Tab eventKey="visaapp" title="VISA Application" >
        <div className="py-4 lil-grey-text">
                <h4 className=""><span className="text-brand2">Our Visa Services</span></h4>
                <p className="text-13"><span className="">Exclusive Travels offers comprehensive visa application services to ensure a hassle-free travel experience. Our experienced team will guide you through the entire process, from documentation to submission.</span></p>
                
                <div className="d-flex">
                    <p className="text-18"><span className="notice-rec rounded-3 lil-grey-text">Please note that visa approval is at the discretion of the respective embassy or consulate. We assist with the application process but cannot guarantee approval.</span></p>
                </div>
                    
            
        </div>

<div className='types'>
        <h5 className="text-19"><span className="text-rgb-15-52-96">Visa Types:</span></h5>
        <div className="d-flex">

                <div className='box-simple'>
                    <p className="text-21"><span className="text-rgb-15-52-96">Tourist Visa</span></p>
                    <p className="text-22"><span className="text-rgb-75-85-99">For leisure travel, tourism, and visiting friends or family abroad.</span></p>
                    <div className="d-flex align-items-center gap-2">
                    <img src="images/clock-svg.svg" className="web-icon" alt="vector" />
                    <p className="text-26"><span className="text-rgb-75-85-99">5-7 working days</span></p>
                    </div>
                    
                    <p className="text-27"><span className="text-rgb-15-52-96">R750</span></p>
                </div>

                <div className="box-simple">
                    <p className="text-29"><span className="text-rgb-15-52-96">Business Visa</span></p>
                    <p className="text-30"><span className="text-rgb-75-85-99">For business meetings, conferences, and short-term work assignments.</span></p>
                    <div className="d-flex align-items-center gap-2">
                        <img src="images/clock-svg.svg" className="web-icon" alt="vector" />
                        <p className="text-34"><span className="text-rgb-75-85-99">7-10 working days</span></p>
                    </div>
                    
                    <p className="text-35"><span className="text-rgb-15-52-96">R1,200</span></p>
                </div>

                <div className="box-simple">
                    <p className="text-37"><span className="text-rgb-15-52-96">Study Visa</span></p>
                    <p className="text-38"><span className="text-rgb-75-85-99">For students planning to study at educational institutions abroad.</span></p>
                    <div className="d-flex align-items-center gap-2">
                        <img src="images/clock-svg.svg" className="web-icon" alt="vector" />
                        <p className="text-42"><span className="text-rgb-75-85-99">10-15 working days</span></p>
                    </div>
                    
                    <p className="text-43"><span className="text-rgb-15-52-96">R1,500</span></p>
                </div>

                <div className="box-simple">
                    <p className="text-45"><span className="text-rgb-15-52-96">Work Visa</span></p>
                    <p className="text-46"><span className="text-rgb-75-85-99">For those with job offers or employment contracts in foreign countries.</span></p>
                    <div className="d-flex align-items-center gap-2">
                        <img src="images/clock-svg.svg" className="web-icon" alt="vector" />
                        <p className="text-50"><span className="text-rgb-75-85-99">15-20 working days</span></p>
                    </div>
                    
                    <p className="text-51"><span className="text-rgb-15-52-96">R2,000</span></p>
                </div>
                
            </div>
</div>

            

            <div className="rectangle-52 custom-padding1">
                <div className='px-4 custom-padding1 lil-grey-text'>
                    <h4 className="text-brand2"><span className="text-rgb-15-52-96">Selected Visa:</span></h4>
                    <p className="text-54"><span className="text-rgb-55-65-81">For leisure travel, tourism, and visiting friends or family abroad.</span></p>

                    <div className='d-flex justify-content custom-padding1 gap-5'>
                        <div>
                            <h5 className="text-brand2"><span className="text-rgb-15-52-96">Required Documents</span></h5>
                            <p className="text-56"><span className="text-rgb-55-65-81">Valid passport (with at least 6 months validity)</span></p>
                            <p className="text-57"><span className="text-rgb-55-65-81">Recent passport-sized photographs</span></p>
                            <p className="text-58"><span className="text-rgb-55-65-81">Completed visa application form</span></p>
                            <p className="text-59"><span className="text-rgb-55-65-81">Proof of travel arrangements (flight itinerary)</span></p>
                            <p className="text-60"><span className="text-rgb-55-65-81">Proof of accommodation</span></p>
                        </div>
                        
                        <div>
                            <h5 className="text-brand2"><span className="text-rgb-15-52-96">Service Details</span></h5>
                            <p className="text-62"><span className="text-rgb-55-65-81">Processing Time:</span></p>
                            <p className="text-63"><span className="text-rgb-55-65-81">Service Fee:</span></p>
                            <p className="text-64"><span className="text-rgb-55-65-81">Embassy Fee:</span></p>
                            <p className="text-65"><span className="text-rgb-55-65-81">Express Processing:</span></p>
                        </div>
                        
                    </div>

                    <button className='btn-plain1'>
                        <p className="text-67"><span className="text-rgb-248-250-252">Apply for</span></p>
                    </button>
                </div>

                <div className='px-2 lil-grey-text'>
                    <h4 className="text-68"><span className="text-brand2">Frequently Asked Questions</span></h4>
                    <h5 className="text-69"><span className="text-brand2">How long does the visa application process take?</span></h5>
                    <p className="text-70"><span className="text-rgb-55-65-81">Processing times vary depending on the destination country and visa type. Generally, it takes between 5 to 20 working days, but may take longer in some cases.</span></p>
                    <h5 className="text-71"><span className="text-brand2">What happens if my visa is rejected?</span></h5>
                    <p className="text-72"><span className="text-rgb-55-65-81">If your visa is rejected, we'll guide you on the reason for rejection and assist with the reapplication process if possible. Please note that embassy fees are typically non-refundable in case of rejection.</span></p>
                    <h5 className="text-73"><span className="text-brand2">Do I need to visit your office in person?</span></h5>
                    <p className="text-74"><span className="text-rgb-55-65-81">In most cases, you can complete the entire process online. However, some visa applications require biometric data, which may necessitate a visit to our office or the respective embassy/visa center.</span></p>
                    <h5 className="text-75"><span className="text-brand2">Can you expedite my visa application?</span></h5>
                    <p className="text-76"><span className="text-rgb-55-65-81">Yes, we offer expedited processing services for urgent travel needs at an additional cost, subject to embassy availability.</span></p>
                    <button className='btn-plain1 py-2'><span className="text-white">Start Your Visa Application</span></button>
                </div>
            </div>

            <div className="bg-special text-center custom-padding1">
                <h3 className="text-80"><span className="text-brand2">Need Assistance?</span></h3>
                <p className="text-81"><span className="lil-grey-text">Our visa specialists are available to assist you with any questions regarding visa requirements, documentation, or application process.</span></p>
                <button>

                </button>
            </div>
            

      </Tab>
      <Tab eventKey="appform" title="Application Form">

        <div className='application-container box-simple lil-grey-text'>  
            <div className="rectangle-66">
                <h2 className="text-68"><span className="text-brand2">Application Form</span></h2>
                <p className="text-69"><span className="text-rgb-75-85-99">Please complete the form below and upload the required documents.</span></p>
            </div>
            
            <div className=''>
            <div className="rectangle-70">
                <h4 className="text-71"><span className="text-brand2">Personal Information</span></h4>
            </div>

            <div className="row">
                <div className="col">
                    <div>
                <p className="text-72"><span className="text-rgb-55-65-81">First Name *</span></p>
                <input type="text" name="" id="" />
            </div>
            
            

            <div className="rectangle-73">
                <p className="text-74"><span className="text-rgb-55-65-81">Last Name *</span></p>
                <input type="text" name="" id="" />
            </div>
            

            <div className="rectangle-75">
                <p className="text-76"><span className="text-rgb-55-65-81">Email *</span></p>
                <input type="email" name="" id="" />
            </div>
            

            <div className="rectangle-77">
                <p className="text-78"><span className="text-rgb-55-65-81">Phone Number *</span></p>
                <input type="text" name="" id="" />
            </div>
                </div>
                <div className="col">
                    <div className="rectangle-79">
                <p className="text-80"><span className="text-rgb-55-65-81">Nationality *</span></p>
                <input type="text" name="" id="" />
            </div>
            

            <div className="rectangle-81">
                <p className="text-82"><span className="text-rgb-55-65-81">Passport Number *</span></p>
                <input type="text" name="" id="" />
            </div>
            
            <div>
                <p className="text-84"><span className="text-rgb-55-65-81">Passport Expiry Date *</span></p>
                <input type="date" name="" id="" />
            </div>
                </div>
            </div>
  

            </div>
        </div>

        <div className="travel-info box-simple lil-grey-text">

        
                <div className="">
                    <h4 className="text-87"><span className="text-brand2">Travel Information</span></h4>
                    <p className="text-88"><span className="text-rgb-55-65-81">Destination Country *</span></p>
                    <select name="" id="">
                        <option value="">Paris</option>
                        <option value="">India</option>
                        <option value="">Dubai</option>
                    </select>

                    <div className="rectangle-89">
                        <p className="text-90"><span className="text-rgb-55-65-81">Purpose of Travel *</span></p>
                        <input type="text" id=''/>
                    </div>
                    
                    <div className="rectangle-91">
                        <p className="text-92"><span className="text-rgb-55-65-81">Travel Date *</span></p>
                        <input type="date" id=''/>
                    </div>
                    
                    <div className="rectangle-93">
                        <p className="text-94"><span className="text-rgb-55-65-81">Return Date *</span></p>
                        <input type="date" name="" id="" />
                    </div>
                    
                    <div className="rectangle-95">
                        <p className="text-96"><span className="text-rgb-55-65-81">Additional Information</span></p>
                        <input type="text" id=''/>
                    </div>
                    
                </div>
        </div>
        <div className="doc-upload box-simple">             
                <div className="lil-grey-text">
                    <h4 className="text-99"><span className="text-brand2">Document Upload</span></h4>
                    <p className="text-100"><span className="text-rgb-107-114-128">Please upload clear, high-resolution scans or photos of the required documents.</span></p>

                    <div className='d-flex justify-content-between'>
                        <p className="text-101"><span className="text-rgb-55-65-81">Passport Copy (Main Page) *</span></p>
                        <input type="file" accept='pdf' id='passport' multiple/>
                    </div>
                    
                    
                    <div className='d-flex justify-content-between'>
                        <p className="text-103"><span className="text-rgb-55-65-81">Passport-sized Photo * (max 2MB)</span></p>
                        <input type="file" accept='pdf' id='pass-photo' multiple/>
                    </div>
                    
                    
                    <div className='d-flex justify-content-between'>
                        <p className="text-105"><span className="text-rgb-55-65-81">Flight Itinerary (max 2MB)</span></p>
                        <input type="file" accept='pdf' id='flight-det' multiple/>
                    </div>
                    

                    <div className='d-flex justify-content-between'>
                        <p className="text-107"><span className="text-rgb-55-65-81">Accommodation Proof (max 5MB)</span></p>
                        <input type="file" accept='pdf' id='accomodation' multiple/>
                    </div>
   
                </div>    
            </div>

            <div className='py-3'>
                <div className="d-flex gap-2 align-items-center mt-4">
                        <input type="checkbox" id="affirm-info" name="affirm-info" value="yes" className='web-icon'></input>
                        <p className="text-110"><span className="text-rgb-75-85-99">I confirm that all information provided is accurate and complete. I understand that providing false information may result in the rejection of my visa application.</span></p>
                    </div>
                    

                    <div className='d-flex justify-content-between mt-4'>
                        <div className="rectangle-111">
                            <button className="btn-plain2"><span className="text-rgb-15-52-96">Back to Information</span></button>
                        </div>
                        <div>
                            <button className="btn-plain1"><span className="text-rgb-248-250-252">Submit Application</span></button>
                        </div>
                     </div>

            </div>
            
      </Tab>

    </Tabs>
    
            

            

 
            
        </>
    )
    
}

export default VisaApplication;

