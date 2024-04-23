import React from "react";
import OwlCarousel from 'react-owl-carousel';

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import  carousel_1  from "../assets/img/carousel-1.jpg";
import  carousel_2  from "../assets/img/carousel-2.jpg";
import  carousel_3  from "../assets/img/carousel-3.jpg";
import  about_1  from "../assets/img/about-1.jpg";
import  about_2  from "../assets/img/about-2.jpg";
import  feature  from "../assets/img/feature.jpg";

import  team_1  from "../assets/img/team-1.jpg";
import  team_2  from "../assets/img/team-2.jpg";
import  team_3  from "../assets/img/team-3.jpg";
import  team_4  from "../assets/img/team-4.jpg";

import  testimonial_1  from "../assets/img/testimonial-1.jpg";
import  testimonial_2  from "../assets/img/testimonial-2.jpg";
import  testimonial_3  from "../assets/img/testimonial-3.jpg";


const Home = () => {
    return(
        <div className="Home-pages-content-main-wraper">
        
        <Header />
        <div className="container-fluid header bg-primary p-0 mb-5">
            <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
                <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
                    <div className="row g-4">
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1" data-toggle="counter-up">123</h2>
                                <p className="text-light mb-0">Expert Doctors</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1" data-toggle="counter-up">1234</h2>
                                <p className="text-light mb-0">Medical Stuff</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1" data-toggle="counter-up">12345</h2>
                                <p className="text-light mb-0">Total Patients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <OwlCarousel
                className="owl-carousel header-carousel"
                    autoplay={false}
                    animateOut="fadeOutLeft"
                    items={1}
                    dots
                    loop
                    nav
                    navText={[
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                    ]}
            >
               <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src={carousel_1} alt="" />
                            <div className="owl-carousel-text">
                                <h1 className="display-1 text-white mb-0">Cardiology</h1>
                            </div>
                        </div>
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src={carousel_2} alt="" />
                            <div className="owl-carousel-text">
                                <h1 className="display-1 text-white mb-0">Neurology</h1>
                            </div>
                        </div>
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid" src={carousel_3} alt="" />
                            <div className="owl-carousel-text">
                                <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                            </div>
                        </div>
            </OwlCarousel>
                </div>
            </div>
        </div>
       

        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column">
                        <img className="img-fluid rounded w-75 align-self-end" src={about_1} alt=""/>
                        <img className="img-fluid rounded w-50 bg-white pt-3 pe-3 about_2-image" src={about_2} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                    <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="/">Read More</a>
                </div>
            </div>
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


    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <p className="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
                        <h1 className="text-white mb-4">Why Choose Us</h1>
                        <p className="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light feature-section-icon-height">
                                        <i className="fa fa-user-md text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Experience</p>
                                        <h5 className="text-white mb-0">Doctors</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light feature-section-icon-height">
                                        <i className="fa fa-check text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Quality</p>
                                        <h5 className="text-white mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light feature-section-icon-height">
                                        <i className="fa fa-comment-medical text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Positive</p>
                                        <h5 className="text-white mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light feature-section-icon-height">
                                        <i className="fa fa-headphones text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">24 Hours</p>
                                        <h5 className="text-white mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn feature-section-container" data-wow-delay="0.5s">
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src={feature}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp rr-custom-container" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
            <h1>Our Experience Doctors</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={team_1} alt="" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary">Department</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={team_2} alt=""/>
                    </div>
                    <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary">Department</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={team_3} alt=""/>
                    </div>
                    <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary">Department</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={team_4} alt=""/>
                    </div>
                    <div className="team-text bg-light text-center p-4">
                        <h5>Doctor Name</h5>
                        <p className="text-primary">Department</p>
                        <div className="team-social text-center">
                            <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
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
  <Footer/>
      </div>        
    )
}
export default Home; 