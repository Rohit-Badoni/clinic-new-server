import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';


import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import  header_page  from "../assets/img/header-page.jpg";
import  testimonial_1  from "../assets/img/testimonial-1.jpg";
import  testimonial_2  from "../assets/img/testimonial-2.jpg";
import  testimonial_3  from "../assets/img/testimonial-3.jpg";

const Service = () => {
    const myStyle = {
        backgroundImage:
            `url(${header_page})`,
    };
    return(
        <div className="service-pages-content-main-wraper">
            <Header />
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={myStyle}>
                    <div className="container py-5">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Service</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb text-uppercase mb-0">
                                <li className="breadcrumb-item">
                                <NavLink to="/" className="text-white" > Home </NavLink>
                                </li>
                                <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
                                <li className="breadcrumb-item text-primary active">Service</li>
                            </ol>
                        </nav>
                    </div>
                </div>


        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp rr-custom-container" data-wow-delay="0.1s" >
                <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                <h1>Health Care Solutions</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 custom-icon-style-rr" >
                            <i className="fa fa-heartbeat text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Cardiology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href="/"><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 custom-icon-style-rr">
                            <i className="fa fa-x-ray text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Pulmonary</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href="/"><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 custom-icon-style-rr" >
                            <i className="fa fa-brain text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Neurology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href="/"><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 custom-icon-style-rr" >
                            <i className="fa fa-wheelchair text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Orthopedics</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href="/"><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 custom-icon-style-rr">
                            <i className="fa fa-tooth text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Dental Surgery</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href="/"><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4 custom-icon-style-rr">
                            <i className="fa fa-vials text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Laboratory</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href="/"><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                        <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white feature-section-icon-height">
                                <i className="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Call Us Now</p>
                                <h5 className="mb-0">+012 345 6789</h5>
                            </div>
                        </div>
                        <div className="bg-light rounded d-flex align-items-center p-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white feature-section-icon-height">
                                <i className="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Mail Us Now</p>
                                <h5 className="mb-0">info@example.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control border-0 form-appointment-select" placeholder="Your Name" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control border-0 form-appointment-select" placeholder="Your Email" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control border-0 form-appointment-select" placeholder="Your Mobile" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select border-0 form-appointment-select">
                                            <option selected>Choose Doctor</option>
                                            <option value="1">Doctor 1</option>
                                            <option value="2">Doctor 2</option>
                                            <option value="3">Doctor 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div data-target-input="nearest">
                                            <input type="date"
                                                className="form-control border-0 datetimepicker-input form-appointment-select"
                                                placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div data-target-input="nearest">
                                            <input type="time"
                                                className="form-control border-0 datetimepicker-input form-appointment-select"
                                                placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control border-0" rows="5" placeholder="Describe your problem"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp rr-custom-container" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
            <h1>What Say Our Patients!</h1>
        </div>

        <OwlCarousel
            className="owl-carousel testimonial-carousel wow fadeInUp"
            autoplay={false}
            smartSpeed={1000}
            center
            dots={false}
            loop
            nav
            navText={[
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]}
            responsive={{
                0: {
                items: 1
                },
                768: {
                items: 2
                }
            }}
            >
            <div className="testimonial-item text-center">
                        <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4 testimonial-image" src={testimonial_1} alt=""/>
                        <div className="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 className="mb-1">Patient Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4 testimonial-image" src={testimonial_2} alt=""/>
                        <div className="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 className="mb-1">Patient Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4 testimonial-image" src={testimonial_3} alt=""/>
                        <div className="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 className="mb-1">Patient Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
            </OwlCarousel>
    </div>
  </div>
            <Footer />
        </div>
    )
} 
export default Service; 