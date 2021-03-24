import React from 'react';
import './Footer.css';
import logo from '../../Assets/Logo.jpg';
import pruthatekImage from '../../Assets/LogoSmall.jpg';


class Footer extends React.Component {
    render() {
        return (

            <div>
                {/* <!-- Footer --> */}
                <div className="panel" data-color="white">

                    <div className="footer">
                        <div className="row footer1 my-0 pt-1">

                            <div className=" col-md-3 col-sm-3  address-1 pb-0">
                                <div className="aero-logo-image">
                                    <img src={logo} className="aero-logo-footer" />
                                </div>

                            </div>

                            <div className=" col-md-4 col-sm-4  address pb-0">

                                <div className="aero-address">
                                    <span className="footer-address ml-md-4">Address</span>
                                    <div className='row justify-content-center'>
                                        <i className="fa fa-map-marker footer-icon mr-2 col-md-1 pt-1" style={{ padding: '0px' }}></i>
                                        <p className='col-md-10 mb-0' style={{ padding: '0px' }}>12/3 Magnet Corporate Park,<br /> <span>Thaltej,Ahmedabad,</span><br /> <span>Gujarat-380054</span></p>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <i className="fa fa-envelope footer-icon mr-2 col-md-1 pt-1" style={{ padding: '0px' }}></i>
                                        <p className='col-md-10 mb-0' style={{ padding: '0px' }}>aerofusionofficial@gmail.com</p>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <i className="fa fa-phone footer-icon mr-2 col-md-1 pt-1" style={{ padding: '0px' }}></i>
                                        <p className='col-md-10 mb-0' style={{ padding: '0px' }}>+91 84900 72538</p>
                                    </div>

                                </div>


                            </div>



                            <div className=" col-md-2 col-sm-2 footer-content pb-0">

                                <div className='mx-auto text-md-left' style={{ width: '50%' }}>
                                    <ul className="footer-links">
                                        <li className="footer-link"><a href="/product" className="footer-alink">Products</a></li>
                                        <li className="footer-link"><a href="/research" className="footer-alink">Research</a></li>
                                        <li className="footer-link"><a href="/news" className="footer-alink">News</a></li>
                                        <li className="footer-link"><a href="/faq" className="footer-alink">FAQs</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className=" col-md-3 col-sm-3  footer-content pb-0">


                                <ul className="footer-links">
                                    <li className="footer-link"><a href="/need-help" className="footer-alink">Need Help?</a></li>
                                    <li className="footer-link"><a href="/about" className="footer-alink">About</a></li>
                                    <li className="footer-link"><a href="/contact" className="footer-alink">Contact Us</a></li>

                                </ul>
                                <ul className="footer-links">

                                    <li className="footer-link">
                                        <div className="social-links">
                                            <a href="https://www.facebook.com/AerofusionOfficial-100746951786966" className="facebook" target="_blank"><i className="social fa fa-facebook"></i></a>

                                            <a href="https://www.instagram.com/aerofusionofficial/" className="instagram" target="_blank"><i className="social fa fa-instagram"></i></a>

                                            <a href="#" className="twitter" target="_blank"><i className="social fa fa-twitter"></i></a>

                                            <a href="https://www.linkedin.com/company/aerofusion/" className="linkedin" target="_blank"><i className="social fa fa-linkedin"></i></a>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- <div className="row help">
                                        
                                            <span className="footer-partner"><a href="" className="footer-blink">Be a partner in change <i className="partner fa fa-arrow-right"></i></a></span> 
                                        
                                </div> --> */}

                        <div className="subfooter row justify-content-around bg-info" style={{ width: '100%' }}>
                            <div className="copyright-main-sec col-md-4 pl-4 text-center">© 2020 Myntra. All Right Reserved.</div>
                            <div className="copyright-main-sec col-md-4 pl-4 text-center">Developed By <a href="https://pruthatek.com/"><img className='img-fluid pb-1 pl-1' src={pruthatekImage} style={{ width: '30%', height: '30px' }} /></a></div>
                            <div className="subfooter-links col-md-4 text-center pr-5">
                                <a href="#" className="footer-links">Privacy Policy</a> | <a href="#" className="footer-links">Terms & Conditions</a> | <a href="#" className="footer-links">Reviews</a>
                            </div >
                        </div>

                    </div>
                </div>
                {/* <!-- End of Footer --> */}
            </div>

        );
    }
}


export default Footer;