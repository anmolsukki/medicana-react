import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer color-bg">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">Contact Us</h4>
              </div>
              <div className="module-body">
                <ul className="toggle-footer">
                  <li className="media">
                    <div className="pull-left">
                      <span className="icon fa-stack fa-lg">
                        <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <p>
                        West Boring Canal Rd, Anandpuri, <br />
                        Patna, Bihar
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left">
                      <span className="icon fa-stack fa-lg">
                        <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <span>
                        <a href="tel:+91 7631888888"> + (91) 7631888888</a>
                      </span>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left">
                      <span className="icon fa-stack fa-lg">
                        <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <span>
                        <a href="mailto:info@medicana.co.in">info@medicana.co.in</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="module-heading">
                <h4 className="module-title">Know Us</h4>
              </div>
              <div className="module-body">
                <ul className="list-unstyled">
                  <li className="first">
                    <a href="#"> About Us</a>
                  </li>
                  <li className="first">
                    <a href="#"> Contact Us</a>
                  </li>
                  <li className="first">
                    <a href="#"> Press Coverage</a>
                  </li>
                  <li className="first">
                    <a href="#"> Business Partnership</a>
                  </li>
                  <li className="first">
                    <a href="#"> Careers</a>
                  </li>
                  <li className="first">
                    <a href="#"> Sehat Ke Sathi</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="module-heading">
                <h4 className="module-title">Our Policies</h4>
              </div>
              <div className="module-body">
                <ul className="list-unstyled">
                  <li className="first">
                    <a href="#"> Privacy Policy</a>
                  </li>
                  <li className="first">
                    <a href="#"> Terms and Conditions </a>
                  </li>
                  <li className="first">
                    <a href="#"> Editorial Policy</a>
                  </li>
                  <li className="first">
                    <a href="#"> Return Policy</a>
                  </li>
                  <li className="first">
                    <a href="#"> IP Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <div className="module-heading">
                <h4 className="module-title">Our Services</h4>
              </div>
              <div className="module-body">
                <ul className="list-unstyled">
                  <li className="first">
                    <a href="#"> Order Medicines</a>
                  </li>
                  <li className="first">
                    <a href="#"> Book Lab Tests</a>
                  </li>
                  <li className="first">
                    <a href="#"> Consult a Doctor</a>
                  </li>
                  <li className="first">
                    <a href="#"> Ayurveda Articles</a>
                  </li>
                  <li className="first">
                    <a href="#"> Hindi Articles</a>
                  </li>
                  <li className="first">
                    <a href="#"> Diabetes Care Plan</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">Download App</h4>
              </div>
              <div className="">
                <img src="/assets/images/apps1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="container">
          <div className="col-xs-12 col-sm-7 no-padding social">
            <p className="sem">
              © 2020 Medicana. All rights reserved. | Developed By :
              <a href="https://www.samsoftech.in/" target="_blank">
                SAM Softech
              </a>
            </p>
          </div>
          <div className="col-xs-12 col-sm-2 no-padding social">
            <ul className="link">
              <li className="fb pull-left">
                <a target="_blank" rel="nofollow" href="#" title="Facebook"></a>
              </li>
              <li className="tw pull-left">
                <a target="_blank" rel="nofollow" href="#" title="Twitter"></a>
              </li>
              <li className="youtube pull-left">
                <a target="_blank" rel="nofollow" href="#" title="Youtube"></a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3 no-padding">
            <div className="clearfix payment-methods">
              <ul>
                <li>
                  <img src="/assets/images/1.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/2.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/3.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/4.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/5.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
