import React from 'react';

const Headers = () => {
  return (
    <header className="header-style-1">
      <div className="top-bar animate-dropdown">
        <div className="container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    Lab Tests <i style={{ color: '#fded01' }} className="fa fa-spinner fa-spin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Ask Doctor <span className="bc">FREE</span>
                  </a>
                </li>
                <li>
                  <a href="#">AYURVEDA</a>
                </li>
                <li>
                  <a href="#">Need Help?</a>
                </li>
                <li>
                  <a href="#">
                    <b>QUICK BUY! Save 15%</b>
                  </a>
                </li>
                <a href="#" className="btn btn-primary">
                  <i className="fa fa-bolt inner-right-vs"></i> Upload
                </a>
                <li>
                  <a href="#">
                    <i className="icon fa fa-shopping-cart"></i>My Cart
                  </a>
                </li>
                <li>
                  <a href="signin.php">
                    <i className="icon fa fa-sign-in "></i> Sign Up
                  </a>
                </li>
                <li>
                  <a href="signin.php">
                    <i className="icon fa fa-lock"></i> Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="cnt-block"></div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
              <div className="logo">
                <a href="index.php">
                  <img src="/assets/images/logo.png" alt="Medicana" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
              <div className="search-area">
                <form>
                  <div className="control-group" style={{ display: 'flex' }}>
                    <ul className="categories-filter animate-dropdown">
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                          Categories <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li className="menu-header">- Coronavirus Prevention</li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex="-1" href="#">
                              - Protein Supplements
                            </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex="-1" href="#">
                              - Blood Glucose Monitors
                            </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex="-1" href="#">
                              - Test Strips & Lancets
                            </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex="-1" href="#">
                              - Accu-Chek
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <input className="search-field" placeholder="Search here..." />
                    <a className="search-button" href="#"></a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-8 col-sm-12 col-md-2 animate-dropdown top-cart-row">
              <div className="dropdown dropdown-cart">
                <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                  <div className="items-cart-inner">
                    <div className="basket">
                      <i className="glyphicon glyphicon-shopping-cart"></i>
                    </div>
                    <div className="basket-item-count">
                      <span className="count">1</span>
                    </div>
                    <div className="total-price-basket">
                      <span className="lbl">cart -</span>
                      <span className="total-price">
                        <span className="sign">
                          <i className="fa fa-rupee"></i>
                        </span>
                        <span className="value">600.00</span>
                      </span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="cart-item product-summary">
                      <div className="row">
                        <div className="col-xs-4">
                          <div className="image">
                            <a href="#">
                              <img src="/assets/images/c1.png" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <h3 className="name">
                            <a href="#">Aiqura AD801 Forehead Infra</a>
                          </h3>
                          <div className="price">
                            <i className="fa fa-rupee"></i> 4299
                          </div>
                        </div>
                        <div className="col-xs-1 action">
                          <a href="#">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <hr />
                    <div className="clearfix cart-total">
                      <div className="pull-right">
                        <span className="text">Sub Total :</span>
                        <span className="price">
                          <i className="fa fa-rupee"></i> 4299
                        </span>
                      </div>
                      <div className="clearfix"></div>
                      <a href="cart.php" className="btn btn-upper btn-primary btn-block m-t-20">
                        Checkout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav animate-dropdown">
        <div className="container">
          <div className="yamm navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
              </button>
            </div>
            <div className="nav-bg-className">
              <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                <div className="nav-outer">
                  <ul className="nav navbar-nav">
                    <li className="active dropdown yamm mega-menu">
                      <a href="#" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">
                        All Medicines
                      </a>
                      <ul className="dropdown-menu container">
                        <li>
                          <div className="yamm-content ">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                <h2 className="title">All Medicines</h2>
                                <ul className="links">
                                  <li>
                                    <a href="product.php"> All Medicines</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                        Coronavirus Prevention
                      </a>
                      <ul className="dropdown-menu pages">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-menu">
                                <ul className="links">
                                  <li>
                                    <a href="#"> Boost Your Immunity</a>
                                  </li>
                                  <li>
                                    <a href="#"> Sanitizers & Handwash Products</a>
                                  </li>
                                  <li>
                                    <a href="#"> Masks</a>
                                  </li>
                                  <li>
                                    <a href="#"> Thermometer</a>
                                  </li>
                                  <li>
                                    <a href="#"> Disinfectants</a>
                                  </li>
                                  <li>
                                    <a href="#"> Chyawanprash</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                        Featured
                      </a>
                      <ul className="dropdown-menu pages">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-menu">
                                <ul className="links">
                                  <li>
                                    <a href="#"> Medicana Health Products</a>
                                  </li>
                                  <li>
                                    <a href="#"> Explore Something New</a>
                                  </li>
                                  <li>
                                    <a href="#"> Top Brands</a>
                                  </li>
                                  <li>
                                    <a href="#"> Organic India</a>
                                  </li>
                                  <li>
                                    <a href="#"> Accu-Chek</a>
                                  </li>
                                  <li>
                                    <a href="#"> Himalaya Products</a>
                                  </li>
                                  <li>
                                    <a href="#"> OneTouch</a>
                                  </li>
                                  <li>
                                    <a href="#"> Abbott Nutrition</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown mega-menu">
                      <a href="#" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">
                        Fitness & Supplements
                      </a>
                      <ul className="dropdown-menu container">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                <h5 className="title">Protein Supplements</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Whey Protein</a>
                                  </li>
                                  <li>
                                    <a href="#"> Mass Gainers</a>
                                  </li>
                                  <li>
                                    <a href="#"> Workout Essential</a>
                                  </li>
                                  <li>
                                    <a href="#"> Fat Burners</a>
                                  </li>
                                </ul>
                                <br />
                                <h5 className="title">Immunity Boosters</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Chyawanprasha</a>
                                  </li>
                                  <li>
                                    <a href="#"> Vitamin C</a>
                                  </li>
                                  <li>
                                    <a href="#"> Herbal Teas</a>
                                  </li>
                                  <li>
                                    <a href="#"> Antioxidant Supplements</a>
                                  </li>
                                  <li>
                                    <a href="#"> Ayurvedic Supplements</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                <h5 className="title">Health Food & Drinks</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Green Tea & Herbal Tea</a>
                                  </li>
                                  <li>
                                    <a href="#"> Superfoods</a>
                                  </li>
                                  <li>
                                    <a href="#"> Herbal Juice</a>
                                  </li>
                                  <li>
                                    <a href="#"> Apple Cider Vinegar</a>
                                  </li>
                                  <li>
                                    <a href="#"> Seeds</a>
                                  </li>
                                  <li>
                                    <a href="#"> Healthy Snacks</a>
                                  </li>
                                </ul>
                                <br />
                                <h5 className="title">Vita. & Supplements</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Multivitamins</a>
                                  </li>
                                  <li>
                                    <a href="#"> Vitamins A-Z</a>
                                  </li>
                                  <li>
                                    <a href="#"> Calcium & Minerals</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                <h5 className="title">Family Nutrition</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> For Adults</a>
                                  </li>
                                  <li>
                                    <a href="#"> For Children</a>
                                  </li>
                                  <li>
                                    <a href="#"> For Women</a>
                                  </li>
                                </ul>
                                <br />
                                <h5 className="title">Specialty Supplements</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Green Supplements</a>
                                  </li>
                                  <li>
                                    <a href="#"> Beauty Supplements</a>
                                  </li>
                                  <li>
                                    <a href="#"> Probiotics</a>
                                  </li>
                                  <li>
                                    <a href="#"> Glucosamine</a>
                                  </li>
                                  <li>
                                    <a href="#"> Collagen</a>
                                  </li>
                                  <li>
                                    <a href="#"> Antioxidants</a>
                                  </li>
                                  <li>
                                    <a href="#"> Biotin</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                <h5 className="title">Amino Acids</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Arginine</a>
                                  </li>
                                  <li>
                                    <a href="#"> BCAA</a>
                                  </li>
                                  <li>
                                    <a href="#"> Glutathione</a>
                                  </li>
                                  <li>
                                    <a href="#"> Carnitine</a>
                                  </li>
                                  <li>
                                    <a href="#"> Glutamine</a>
                                  </li>
                                  <li>
                                    <a href="#"> Creatine</a>
                                  </li>
                                </ul>
                                <br />
                                <h5 className="title">Omega & Fish Oil</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Fish Oil</a>
                                  </li>
                                  <li>
                                    <a href="#"> Cod Liver Oil</a>
                                  </li>
                                  <li>
                                    <a href="#"> Flax Seed Oil</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner">
                                <a href="#">
                                  <img alt="" src="/assets/images/banner-side.jpg" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                        Diabetes
                      </a>
                      <ul className="dropdown-menu pages">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-md-6  col-menu">
                                <h5 className="title">Devices</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Blood Glucose Monitors</a>
                                  </li>
                                  <li>
                                    <a href="#"> Test Strips & Lancets</a>
                                  </li>
                                  <li>
                                    <a href="#"> Syringes & Pens</a>
                                  </li>
                                </ul>
                                <br />
                                <h5 className="title">Diabetic Medicines</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Vitamins, Minerals & Antioxidants</a>
                                  </li>
                                  <li>
                                    <a href="#"> Homeopathy Medicines</a>
                                  </li>
                                  <li>
                                    <a href="#"> Ayurvedic Medicines</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-md-6  col-menu">
                                <h5 className="title">Sugar Substitutes</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Diabetic Diet</a>
                                  </li>
                                  <li>
                                    <a href="#"> Juices & Vinegars</a>
                                  </li>
                                  <li>
                                    <a href="#"> Superfoods</a>
                                  </li>
                                  <li>
                                    <a href="#"> Diabetic Foot Health</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                        Healthcare Devices
                      </a>
                      <ul className="dropdown-menu pages">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-md-6  col-menu">
                                <h5 className="title">Masks (N95, Surgical and more)</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> N95 Masks</a>
                                  </li>
                                  <li>
                                    <a href="#"> Anti Pollution Masks</a>
                                  </li>
                                </ul>
                                <br />
                                <h5 className="title">Supports & Braces</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Neck & Shoulder Support</a>
                                  </li>
                                  <li>
                                    <a href="#"> Knee & Leg Support</a>
                                  </li>
                                  <li>
                                    <a href="#"> Back & Abdomen Support</a>
                                  </li>
                                  <li>
                                    <a href="#"> Ankle & Foot Support</a>
                                  </li>
                                  <li>
                                    <a href="#"> Hand & Wrist Braces</a>
                                  </li>
                                  <li>
                                    <a href="#"> Arm & Elbow Support</a>
                                  </li>
                                  <li>
                                    <a href="#"> Cervical Pillows</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-xs-12 col-md-6  col-menu">
                                <h5 className="title">Daily Living Aids</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Hearing Aid Devices</a>
                                  </li>
                                  <li>
                                    <a href="#"> Mosquito Repellents</a>
                                  </li>
                                  <li>
                                    <a href="#"> Mobility Equipments</a>
                                  </li>
                                </ul>
                                <br />
                                <h5 className="title">Doctor's Corner</h5>
                                <ul className="links">
                                  <li>
                                    <a href="#"> Stethoscopes</a>
                                  </li>
                                  <li>
                                    <a href="#"> Tapes & Bandages</a>
                                  </li>
                                  <li>
                                    <a href="#"> Clinical Diagnostic Equipments</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                        Personal Care
                      </a>
                      <ul className="dropdown-menu pages">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-menu">
                                <ul className="links">
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                  <li>
                                    <a href="#">Category</a>
                                  </li>
                                  <li>
                                    <a href="#">Detail</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown hidden-sm">
                      <a href="#">Health Conditions</a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
