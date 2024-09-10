import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "../Component/Modal.css"
import { useLocation, useNavigate } from 'react-router-dom';
const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");


    // handle tab change 
    const handleTabchange =(tobid) =>{
      setActiveTab(tobid)
    }
    const handleshow = () => setShow(true);
    const handleclose = () => setShow(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const handleOrderConfirm = () =>{
      alert("Your Order is placed successfully!")
      localStorage.removeItem("cart");
      navigate(from, {replace: true})

    }
  return (
    <div className='modalCard'>
      <Button variant='primary' className='py-2' onClick={handleshow}> proceed to Checkout</Button>

      <Modal 
      show={show} 
      onHide={handleclose}
      animation={false}
      className='modal fade'
      centered
      >
        <div className='modal-dialog'>
          <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                  <ul className='nav nav-tabs ' id='myTab' role='tablist'>
                    <li className='nav-item' role='presention'>
                      <a className={`nav-link ${activeTab ==="vise" ? "active" : ""}`}

                      id='visa-tab'
                      data-toggle="tab"
                      role='tab'
                      aria-controls='visa'
                      aria-selected={activeTab === "visa"}
                      onClick={()=>handleTabchange("visa")}  
                    href="#visa"><img src="/All/visacard.png" alt="img" width="80" /></a></li>
                         <li className='nav-item' role='presention'>
                      <a className={`nav-link ${activeTab ==="paypal" ? "active" : ""}`}

                      id='paypal-tab'
                      data-toggle="tab"
                      role='tab'
                      aria-controls='visa'
                      aria-selected={activeTab === "paypal"}
                      onClick={()=>handleTabchange("paypal")}  
                    href="#paypal"><img src="/All/image.png" alt="img" width="80" /></a></li>
                  </ul>

                  {/* content  */}

                  <div className='tab-content' id='myTabcontent'>
                    {/* visa content     */}
                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`} n                                                   
                    id='visa'
                    role='tab-panel'
                    aria-labelledby='visa-tab'>
                      
                      {/* visa tab content  */}
                      <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>Credit card</h5>
                          <div className='form mt-3'>
                            <div className="inputbox">
                              <input type="text" name="name" id="name" className='form-control' required />
                              <span>Cardholder Name</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" name="Number" id="Number" min="1" max="999" className='form-control'
                               required />
                              <span>Card Number</span> <i className='fa fa-eye'></i>
                            </div>
                            <div className="flex flex-row">
                            <div className="inputbox">
                              <input type="text" name="name" id="name" min="1" max="999" className='form-control'
                               required />
                              <span>Expiration Date</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" name="name" id="name" min="1" max="999" className='form-control'
                               required />
                              <span>CVV</span>
                            </div>
                            </div>
                            <div className='px-5 pay'>
                              <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order</button>
                            </div>
                       
                          </div>
                        </div>
                      </div>
                    </div>
                   {/* visa paypal  */}
                
                       
                          {/* </div>   <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                     id='paypal'
                     role='tab-panel'
                     aria-labelledby='paypal-tab'
                   >
                   </div>
                   <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>Paypal Acount Info</h5>
                          <div className='form mt-3'>
                            <div className="inputbox">
                              <input type="text" name="name" id="name" className='form-control' required />
                              <span>Enter your email</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" name="Number" id="Number" min="1" max="999" className='form-control'
                               required />
                              <span>Your Name</span> 
                            </div>
                            <div className="inputbox">
                              <input type="text" name="name" id="name" min="1" max="999" className='form-control'
                               required />
                              <span>Extra info</span>
                            </div>
                            <div className="inputbox">
                              <input type="text" 
                              name="name" 
                              id="name" 
                              min="1" 
                              max="999" 
                              className='form-control'
                               required />
                              <span></span>
                            </div>
                            <div className='px-5 pay'>
                              <button className='btn btn-success btn-block'  onClick={handleOrderConfirm}>Add Paypal</button>
                            </div>
                        </div>
                      </div>
 */}
                  </div>

                  {/* payment  */}
                  <p className=' mt-1 px-4 p-disclaimer'> Payment Disclaimer: <em> In no event shall payment or partial payment by owner for any material or service </em></p>
              </div>
            </div>
          </div>
        </div>

      </Modal>
    </div>
  )

}

export default CheckOutPage
