import React from 'react';
import Slider from '../../Components/HomeComponent/Slider';

const HomePage = () => {
  return (
    <div className="body-content" id="top-banner-and-menu">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 homebanner-holder">
            <Slider />
            <div className="info-boxes wow fadeInUp">
              <div className="info-boxes-inner">
                <div className="row">
                  <div className="col-md-6 col-sm-4 col-lg-4">
                    <div className="info-box">
                      <div className="row">
                        <div className="col-xs-12">
                          <h4 className="info-box-heading green">money back</h4>
                        </div>
                      </div>
                      <h6 className="text">30 Days Money Back Guarantee</h6>
                    </div>
                  </div>
                  <div className="hidden-md col-sm-4 col-lg-4">
                    <div className="info-box">
                      <div className="row">
                        <div className="col-xs-12">
                          <h4 className="info-box-heading green">free shipping</h4>
                        </div>
                      </div>
                      <h6 className="text">
                        Shipping on orders over <i className="fa fa-rupee"></i> 99
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-4 col-lg-4">
                    <div className="info-box">
                      <div className="row">
                        <div className="col-xs-12">
                          <h4 className="info-box-heading green">Special Sale</h4>
                        </div>
                      </div>
                      <h6 className="text">
                        Extra <i className="fa fa-rupee"></i> 5 off on all items
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="product-tabs-slider" className="scroll-tabs outer-top-vs wow fadeInUp">
                  <div className="more-info-tab clearfix ">
                    <h3 className="new-product-title pull-left">
                      <span style={{ fontSize: '25px', color: '#1379a9' }}>Covid-19 Essentials </span>
                      <br />
                      <span style={{ fontSize: '14px', color: '#000' }}>Sanitizers, Masks &amp; Thermometers</span>
                    </h3>
                  </div>
                  <div className="tab-content outer-top-xs">
                    <div className="tab-pane in active" id="all">
                      <div className="product-slider">
                        <div className="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="6">
                          <div className="item item-carousel">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img src="/assets/images/p1.jpg" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name">
                                    <a href="#">Aiqura AD801 Forehead Infra Red Thermometer</a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="description"></div>
                                  <div className="product-price">
                                    <span className="price">
                                      <i className="fa fa-rupee"></i> 3799
                                    </span>
                                    <span className="price-before-discount">
                                      <i className="fa fa-rupee"></i> 4800
                                    </span>
                                  </div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart">
                                          <i className="fa fa-shopping-cart"></i>
                                        </button>
                                        <button className="btn btn-primary cart-btn" type="button">
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        <a data-toggle="tooltip" className="add-to-cart" href="#" title="Wishlist">
                                          <i className="icon fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li className="lnk">
                                        <a data-toggle="tooltip" className="add-to-cart" href="#" title="Compare">
                                          <i className="fa fa-signal" aria-hidden="true"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item item-carousel">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img src="/assets/images/p2.jpg" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name">
                                    <a href="#">Stericlean-M Instant Hand Sanitizer Gel Rose Fragrance</a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="description"></div>
                                  <div className="product-price">
                                    <span className="price">
                                      <i className="fa fa-rupee"></i> 250
                                    </span>
                                    <span className="price-before-discount">
                                      <i className="fa fa-rupee"></i> 300
                                    </span>
                                  </div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                          <i className="fa fa-shopping-cart"></i>
                                        </button>
                                        <button className="btn btn-primary cart-btn" type="button">
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        <a className="add-to-cart" href="#" title="Wishlist">
                                          <i className="icon fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li className="lnk">
                                        <a className="add-to-cart" href="#" title="Compare">
                                          <i className="fa fa-signal" aria-hidden="true"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item item-carousel">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img src="/assets/images/p3.jpg" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name">
                                    <a href="#">Dr Morepen 3 Ply Face Mask</a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="description"></div>
                                  <div className="product-price">
                                    <span className="price">
                                      <i className="fa fa-rupee"></i> 500
                                    </span>
                                    <span className="price-before-discount">
                                      <i className="fa fa-rupee"></i> 550
                                    </span>
                                  </div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                          <i className="fa fa-shopping-cart"></i>
                                        </button>
                                        <button className="btn btn-primary cart-btn" type="button">
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        <a className="add-to-cart" href="#" title="Wishlist">
                                          <i className="icon fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li className="lnk">
                                        <a className="add-to-cart" href="#" title="Compare">
                                          <i className="fa fa-signal" aria-hidden="true"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item item-carousel">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img src="/assets/images/p4.jpg" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name">
                                    <a href="#">1mg Flexi-Tip Digital Thermometer</a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="description"></div>
                                  <div className="product-price">
                                    <span className="price">
                                      <i className="fa fa-rupee"></i> 224
                                    </span>
                                    <span className="price-before-discount">
                                      <i className="fa fa-rupee"></i> 300
                                    </span>
                                  </div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                          <i className="fa fa-shopping-cart"></i>
                                        </button>
                                        <button className="btn btn-primary cart-btn" type="button">
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        <a className="add-to-cart" href="#" title="Wishlist">
                                          <i className="icon fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li className="lnk">
                                        <a className="add-to-cart" href="#" title="Compare">
                                          <i className="fa fa-signal" aria-hidden="true"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item item-carousel">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img src="/assets/images/p5.jpg" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name">
                                    <a href="#">VLCC Natural Science Advanced Hand Sanitizer</a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="description"></div>
                                  <div className="product-price">
                                    <span className="price">
                                      <i className="fa fa-rupee"></i> 250
                                    </span>
                                    <span className="price-before-discount">
                                      <i className="fa fa-rupee"></i> 300
                                    </span>
                                  </div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                          <i className="fa fa-shopping-cart"></i>
                                        </button>
                                        <button className="btn btn-primary cart-btn" type="button">
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        <a className="add-to-cart" href="#" title="Wishlist">
                                          <i className="icon fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li className="lnk">
                                        <a className="add-to-cart" href="#" title="Compare">
                                          <i className="fa fa-signal" aria-hidden="true"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item item-carousel">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img src="/assets/images/p6.jpg" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name">
                                    <a href="#">Dominion Care Face Shield Splash Protection 300 micron</a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="description"></div>
                                  <div className="product-price">
                                    <span className="price">
                                      <i className="fa fa-rupee"></i> 195
                                    </span>
                                    <span className="price-before-discount">
                                      <i className="fa fa-rupee"></i> 195
                                    </span>
                                  </div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                          <i className="fa fa-shopping-cart"></i>
                                        </button>
                                        <button className="btn btn-primary cart-btn" type="button">
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        <a className="add-to-cart" href="#" title="Wishlist">
                                          <i className="icon fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li className="lnk">
                                        <a className="add-to-cart" href="#" title="Compare">
                                          <i className="fa fa-signal" aria-hidden="true"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item item-carousel">
                            <div className="products">
                              <div className="product">
                                <div className="product-image">
                                  <div className="image">
                                    <a href="#">
                                      <img src="/assets/images/p7.jpg" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="product-info text-left">
                                  <h3 className="name">
                                    <a href="#">Landwind IRT-KSA001 Infra Red Forehead Thermometer for Baby & Adult</a>
                                  </h3>
                                  <div className="rating rateit-small"></div>
                                  <div className="description"></div>
                                  <div className="product-price">
                                    <span className="price">
                                      <i className="fa fa-rupee"></i> 4399
                                    </span>
                                    <span className="price-before-discount">
                                      <i className="fa fa-rupee"></i> 4599
                                    </span>
                                  </div>
                                </div>
                                <div className="cart clearfix animate-effect">
                                  <div className="action">
                                    <ul className="list-unstyled">
                                      <li className="add-cart-button btn-group">
                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                          <i className="fa fa-shopping-cart"></i>
                                        </button>
                                        <button className="btn btn-primary cart-btn" type="button">
                                          Add to cart
                                        </button>
                                      </li>
                                      <li className="lnk wishlist">
                                        <a className="add-to-cart" href="#" title="Wishlist">
                                          <i className="icon fa fa-heart"></i>
                                        </a>
                                      </li>
                                      <li className="lnk">
                                        <a className="add-to-cart" href="#" title="Compare">
                                          <i className="fa fa-signal" aria-hidden="true"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wide-banners wow fadeInUp outer-bottom-xs">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="wide-banner cnt-strip">
                    <div className="image">
                      <img className="img-responsive" src="/assets/images/home-banner1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="wide-banner cnt-strip">
                    <div className="image">
                      <img className="img-responsive" src="/assets/images/home-banner2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Pathology Tests | Upto 80% off</h3>
              <div className="owl-carousel home2-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ paddingTop: '10px' }}>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">Kidney Function Test</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">Corona Virus Test </a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">Complete Blood Count</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">Thyroid Stimulating Hormone</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">Anti Cardiolipin IgM Antibody</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">Diabetes Screening</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Featured Brands</h3>
              <div className="owl-carousel home3-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ paddingTop: '10px' }}>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/b1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Organic India</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/b2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Mamaearth</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/b3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Accu-Chek</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/b4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Dabur</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/b5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Himalaya Wellness & Healthcare</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/b6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Durex</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/b7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">AS-IT-IS</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Nutritional Drinks</h3>
              <div className="owl-carousel home2-owl-carousel custom-carousel owl-theme outer-top-xs">
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Complan Nutrition and Health Drink Refill Royale Chocolate</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 266
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Complan Nutrition and Health Drink Refill Royale Chocolate</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 266
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">PediaSure Powder Vanilla delight</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 284
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 320
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Protinex Powder Tasty Chocolate</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 333
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 375
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Horlicks Health and Nutrition Drink Refill Pack classNameic Malt</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 218
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 250
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">PediaSure Refill Pack Vanilla delight</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 491
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 530
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Complan Nutrition and Health Drink Refill Creamy classNameic</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 233
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Daily Essentials</h3>
              <div className="owl-carousel home4-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ paddingTop: '10px' }}>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Multivitamins</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Oral Care</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Family Nutrition</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Test Strips & Lancets</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Bath Essentials</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Adult Diapers</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Feminine Hygiene</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/de7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Feminine Hygiene</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Bath & Body Care</h3>
              <div className="owl-carousel home2-owl-carousel custom-carousel owl-theme outer-top-xs">
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/bb1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Kozicare Skin Whitening Soap</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 266
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/bb2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Dabur Almond Shampoo</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 266
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/bb3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Kozicare Skin Whitening Cream</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 284
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 320
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/bb4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Dabur Almond Hair Oil</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 333
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 375
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/bb5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Cetaphil Gentle Skin Cleanser- For All Skin Types</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 218
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 250
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/bb6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Sri Sri Tattva Brahmi Bhringaraj Taila</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 491
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 530
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/bb7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Veet 5 in 1 Skin Benefits Hair Removal Cream Normal</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 233
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Categories To Explore</h3>
              <div className="owl-carousel home3-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ paddingTop: '10px' }}>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/b1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Hair Oils</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/b2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Mamaearth</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/b3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Accu-Chek</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/b4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Dabur</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/b5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Himalaya Wellness & Healthcare</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/b6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Durex</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/b7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">AS-IT-IS</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Shop by Health Concern</h3>
              <div className="owl-carousel home3-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ paddingTop: '10px' }}>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/hc1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Cardiac Care</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/hc2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Kidney Care</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/hc3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Liver Care</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/hc4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Stomach Care</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/hc5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Mental Wellness</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/hc6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Eye Care</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/hc7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Piles, Fissures and Fistula</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Radiology Tests | Upto 80% off</h3>
              <div className="owl-carousel home2-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ paddingTop: '10px' }}>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">Micturating Cysto-Urethrogram (MCU)</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">USG Whole Abdomen</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">USG Fibroscan (Strain Elastography Liver)</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">X - Ray Chest PA View</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">MRI Lumbosacral Spine</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product bor ">
                      <div className="product-info text-center">
                        <h2 className="name">
                          <a href="#">MRI Brain With Contrast</a>
                        </h2>
                        <p>Renal Function Test (RFT)</p>
                        <p>Provided By 13 Labs</p>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 450.99
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 800
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Popular Categories</h3>
              <div className="owl-carousel home3-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ paddingTop: '10px' }}>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/pc1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Ayurveda</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/pc2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Vitamins & Supplements</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/pc3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Homeopathy</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/pc4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Protein Supplements</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/pc5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Elderly Care</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/pc6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Sexual Wellness</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img className="rad" src="/assets/images/pc7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-center">
                        <h3 className="name">
                          <a href="#">Healthcare Devices</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="wide-banners wow fadeInUp outer-bottom-xs">
              <div className="row">
                <div className="col-md-12">
                  <div className="wide-banner cnt-strip">
                    <div className="image">
                      <img className="img-responsive" src="/assets/images/home-banner.jpg" alt="" />
                    </div>
                    <div className="strip strip-text"></div>
                    <div className="new-label">
                      <div className="text">NEW</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="section latest-blog outer-bottom-vs wow fadeInUp">
              <h3 className="section-title">Ayurveda</h3>
              <div className="blog-slider-container outer-top-xs">
                <div className="owl-carousel blog-slider custom-carousel">
                  <div className="item">
                    <div className="blog-post">
                      <div className="blog-post-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/post1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="blog-post-info text-left">
                        <h3 className="name">
                          <a href="#">Aloe vera</a>
                        </h3>
                        <span className="info">By Medicana &nbsp;|&nbsp; 21 March 2020</span>
                        <p className="text">Aloe vera is a cactus-like succulent plant with a clear healing gel in the leaves. T...</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="blog-post">
                      <div className="blog-post-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/post2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="blog-post-info text-left">
                        <h3 className="name">
                          <a href="#">Stevia</a>
                        </h3>
                        <span className="info">By Medicana &nbsp;|&nbsp; 21 March 2020 </span>
                        <p className="text">Stevia is a small perennial shrub that has been used for centuries as a sweetener. It...</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="blog-post">
                      <div className="blog-post-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/post3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="blog-post-info text-left">
                        <h3 className="name">
                          <a href="#">Harad</a>
                        </h3>
                        <span className="info">By Medicana &nbsp;|&nbsp; 21 March 2020</span>
                        <p className="text">Aloe vera is a cactus-like succulent plant with a clear healing gel in the leaves. T...</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="blog-post">
                      <div className="blog-post-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/post4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="blog-post-info text-left">
                        <h3 className="name">
                          <a href="#">Multani mitti</a>
                        </h3>
                        <span className="info">By Medicana &nbsp;|&nbsp; 21 March 2020</span>
                        <p className="text">Aloe vera is a cactus-like succulent plant with a clear healing gel in the leaves. T...</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="blog-post">
                      <div className="blog-post-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/post2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="blog-post-info text-left">
                        <h3 className="name">
                          <a href="#">Stevia</a>
                        </h3>
                        <span className="info">By Medicana &nbsp;|&nbsp; 21 March 2020 </span>
                        <p className="text">Stevia is a small perennial shrub that has been used for centuries as a sweetener. It...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section featured-product wow fadeInUp">
              <h3 className="section-title">Trending Products</h3>
              <div className="owl-carousel home2-owl-carousel custom-carousel owl-theme outer-top-xs">
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Complan Nutrition and Health Drink Refill Royale Chocolate</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 266
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Complan Nutrition and Health Drink Refill Royale Chocolate</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 266
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">PediaSure Powder Vanilla delight</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 284
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 320
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Protinex Powder Tasty Chocolate</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 333
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 375
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Horlicks Health and Nutrition Drink Refill Pack classNameic Malt</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 218
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 250
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">PediaSure Refill Pack Vanilla delight</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 491
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 530
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item item-carousel">
                  <div className="products">
                    <div className="product">
                      <div className="product-image">
                        <div className="image">
                          <a href="#">
                            <img src="/assets/images/ns7.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="product-info text-left">
                        <h3 className="name">
                          <a href="#">Complan Nutrition and Health Drink Refill Creamy classNameic</a>
                        </h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price">
                          <span className="price">
                            <i className="fa fa-rupee"></i> 233
                          </span>
                          <span className="price-before-discount">
                            <i className="fa fa-rupee"></i> 300
                          </span>
                        </div>
                      </div>
                      <div className="cart clearfix animate-effect">
                        <div className="action">
                          <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                              <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                <i className="fa fa-shopping-cart"></i>
                              </button>
                              <button className="btn btn-primary cart-btn" type="button">
                                Add to cart
                              </button>
                            </li>
                            <li className="lnk wishlist">
                              <a className="add-to-cart" href="#" title="Wishlist">
                                <i className="icon fa fa-heart"></i>
                              </a>
                            </li>
                            <li className="lnk">
                              <a className="add-to-cart" href="#" title="Compare">
                                <i className="fa fa-signal" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="info-boxes wow fadeInUp">
          <div className="info-boxes-inner">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12 dem">
                <h1 className="text-center">INDIA’S LARGEST HEALTHCARE PLATFORM</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-4 col-lg-4">
                <div className="info-box">
                  <div className="row">
                    <div className="col-xs-12">
                      <h1 className="info-box-heading green">150M+</h1>
                    </div>
                  </div>
                  <h2 className="text">Visitors</h2>
                </div>
              </div>
              <div className="hidden-md col-sm-4 col-lg-4">
                <div className="info-box">
                  <div className="row">
                    <div className="col-xs-12">
                      <h1 className="info-box-heading green">25M+</h1>
                    </div>
                  </div>
                  <h2 className="text">Orders Delivered</h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-4 col-lg-4">
                <div className="info-box">
                  <div className="row">
                    <div className="col-xs-12">
                      <h1 className="info-box-heading green">1000+</h1>
                    </div>
                  </div>
                  <h2 className="text">Cities</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-boxes-inner">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 dem">
              <h1 className="text-center">Stay Healthy with Medicana: Your Favourite Online Pharmacy and Healthcare Platform</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox info-box">
                <div className="service-icon">
                  <i className="fa fa-shield"></i>
                </div>
                <h3 className="title">Reliable</h3>
                <p className="description">All products displayed on Medicana are procured from verified and licensed pharmacies. All labs listed on the platform are accredited</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <i className="fa fa-lock"></i>
                </div>
                <h3 className="title">Secure</h3>
                <p className="description">Medicana uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="serviceBox">
                <div className="service-icon">
                  <i className="fa fa-google-wallet"></i>
                </div>
                <h3 className="title">Affordable</h3>
                <p className="description">Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wide-banners wow fadeInUp outer-bottom-xs">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="wide-banner cnt-strip">
                <div className="image">
                  <img className="img-responsive" src="/assets/images/home-banner1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="wide-banner cnt-strip">
                <div className="image">
                  <img className="img-responsive" src="/assets/images/home-banner2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default { component: HomePage };
