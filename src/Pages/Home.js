import React, { useState } from "react";
import Header from "../Components/Header";
import "./styles.css";
import Footer from "../Components/Footer";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Header />

      <div>
        <div className="section1">
          <div className="col1">
            <h6>WELCOME TO CODESHAPER</h6>
            <h1>
              CONSULTING <br /> FOR EVERY <br /> BUSINESS
            </h1>
            <Button className="heroBtn">DISCOVER MORE</Button>
          </div>
          <div className="col2"></div>
        </div>

        <div className="section2">
          <div className="row1">
            <h2>REAL-WORLD EXPERIENCE</h2>
            <p className="subTxt">
              The best business consulting firm you can count on!
            </p>
          </div>

          <div className="row2">
            <div className="bitBucket">
              <div>
                <h6>WEALTH MANAGEMENT</h6>
                <p className="subTxt">READ MORE</p>
              </div>

              <div>
                <img
                  source={require("../images/bitbucket.png")}
                  alt="bitbucketImg"
                  className="bitImg"
                />
              </div>
            </div>
            <div className="bitBucket">
              <div>
                <h6>WEALTH MANAGEMENT</h6>
                <p className="subTxt">READ MORE</p>
              </div>

              <div>
                <img
                  source={require("../images/bitbucket.png")}
                  alt="bitbucketImg"
                  className="bitImg"
                />
              </div>
            </div>
            <div className="bitBucket">
              <div>
                <h6>WEALTH MANAGEMENT</h6>
                <p className="subTxt">READ MORE</p>
              </div>

              <div>
                <img
                  source={require("../images/bitbucket.png")}
                  alt="bitbucketImg"
                  className="bitImg"
                />
              </div>
            </div>
          </div>

          <div className="row3">
            <p className="meetTxt">MEET THE PARTNERS</p>
          </div>

          <div className="navigate">
            <FontAwesomeIcon icon={faArrowLeft} className="" />
            <div className="partners"></div>
            <div className="partners"></div>
            <div className="partners"></div>
            <div className="partners"></div>
            <div className="partners"></div>
            <FontAwesomeIcon icon={faArrowRight} className="" />
          </div>
        </div>

        <div className="section3">
          <div className="section3-1">
            {/* <video><source src={} type="video/mp4" /></video> */}
          </div>

          <div className="section3-2">
            <h2>WE'RE LEADING IN THE MARKET</h2>
            <p>
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              doloremagna aliqua lonm andhn.
            </p>

            <p className="experience">
              We have 35+ years of experience. We offer marketing and consulting
              services
            </p>

            <p>
              ☎️ Have any questions? Give us a call <br />{" "}
              <strong>+92 666 888 0000</strong>
            </p>
          </div>
        </div>

        <div className="section4">
          <h2>NEW CASE STUDIES</h2>
          <p className="subTxt">We help our clients renew their business</p>

          <div className="bizGrowth">
            <div className="growth">
              <div className="content">
                <FontAwesomeIcon icon={faCar} className="car" />
                <p className="subTxt2">THOUGHT LEADERSHIP</p>
                <h6>BUSINESS GROWTH</h6>
              </div>
            </div>
            <div className="growth">
              <div className="content">
                <FontAwesomeIcon icon={faCar} className="car" />
                <p className="subTxt2">THOUGHT LEADERSHIP</p>
                <h6>BUSINESS GROWTH</h6>
              </div>
            </div>
            <div className="growth">
              <div className="content">
                <FontAwesomeIcon icon={faCar} className="car" />
                <p className="subTxt2">THOUGHT LEADERSHIP</p>
                <h6>BUSINESS GROWTH</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="section5">
          <h2>
            MISSION IS TO PROTECT <br /> YOUR BUSINESS & <br /> MUCH MORE{" "}
          </h2>
          <Button className="heroBtn">DISCOVER MORE</Button>
        </div>

        <div className="section6">
          <h2>QUESTION ANSWERS</h2>
          <p className="subTxt">We help our clients renew their businesses</p>

          <div className="section6-lower">
            <div className="section6-1">
              <div className="accordion-container">
                <div
                  className={`accordion ${openAccordion === 1 ? "open" : ""}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(1)}
                  >
                    <p>
                      <strong>1.</strong> THINK AHEAD AND BOOST YOUR BUSINESS
                    </p>
                    <div className="accordion-icon">
                      {openAccordion === 1 ? "-" : "+"}
                    </div>
                  </div>
                  <div className="accordion-content">
                    There are many variations of passages the majority have
                    suffered alteration in some fo injected humour, or
                    randomised words believable.
                  </div>
                </div>

                <div
                  className={`accordion ${openAccordion === 2 ? "open" : ""}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(2)}
                  >
                    <p>
                      <strong>2.</strong>HOW CONSULTANCY EXPERTS WORK
                    </p>
                    <div className="accordion-icon">
                      {openAccordion === 2 ? "-" : "+"}
                    </div>
                  </div>
                  <div className="accordion-content">
                    There are many variations of passages the majority have
                    suffered alteration in some fo injected humour, or
                    randomised words believable.
                  </div>
                </div>

                <div
                  className={`accordion ${openAccordion === 3 ? "open" : ""}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(3)}
                  >
                    <p>
                      <strong>3.</strong>WHAT IS THE BEST ADVICE FOR GROWTH?
                    </p>
                    <div className="accordion-icon">
                      {openAccordion === 3 ? "-" : "+"}
                    </div>
                  </div>
                  <div className="accordion-content">
                    There are many variations of passages the majority have
                    suffered alteration in some fo injected humour, or
                    randomised words believable.
                  </div>
                </div>

                <div
                  className={`accordion ${openAccordion === 4 ? "open" : ""}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(4)}
                  >
                    <p>
                      <strong>4.</strong>HOW TO IMPROVE YOUR BUSINESS?
                    </p>
                    <div className="accordion-icon">
                      {openAccordion === 4 ? "-" : "+"}
                    </div>
                  </div>
                  <div className="accordion-content">
                    There are many variations of passages the majority have
                    suffered alteration in some fo injected humour, or
                    randomised words believable.
                  </div>
                </div>
              </div>
            </div>
            <div className="section6-2">
              <div className="invisible"></div>
              <div className="invisible">
                <div className="pre30lists">
                  <p>✅Nsectetur cing elit.</p>
                  <p>✅Suspe ndisse suscipit sagittis leo.</p>
                  <p>✅Entum estibulum dignissim posuere.</p>
                  <p>✅If you are going to use a passage</p>
                  <p>✅If you are going to use a passage test data.</p>
                </div>
                <div className="blue30">
                  <h2>30</h2>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section6-lower2">
            <div className="testimonial">
              <h2>WHAT THEY ARE TALKING ABOUT?</h2>
              <p className="subTxt">Trusted by more than 4,200 customers</p>

              <div className="arrows">
                <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </div>
            </div>
            <div className="customer">
              <p>
                Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum is simply free text
                dolor sit amet,consectetur notted adipisicing elit sed do
                eiusmod tempor
              </p>

              <p>
                <strong>TODD HIGGIS</strong>
              </p>

              <p className="subTxt">Customer</p>
            </div>
            <div className="customer">
              <p>
                Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.Lorem ipsum is simply free text
                dolor sit amet,consectetur notted adipisicing elit sed do
                eiusmod tempor
              </p>

              <p>
                <strong>TODD HIGGIS</strong>
              </p>

              <p className="subTxt">Customer</p>
            </div>
          </div>
        </div>

        <div className="section7">
          <div className="solution">
            <FontAwesomeIcon icon={faPeopleGroup} className="solutionAwesome" />
            <h2 className="solutionPeople">420</h2>
            <p className="subTxt2">CONSULTING SOLUTIONS</p>
          </div>

          <div className="solution">
            <FontAwesomeIcon icon={faPeopleGroup} className="solutionAwesome" />
            <h2 className="solutionPeople">420</h2>
            <p className="subTxt2">CONSULTING SOLUTIONS</p>
          </div>

          <div className="solution">
            <FontAwesomeIcon icon={faPeopleGroup} className="solutionAwesome" />
            <h2 className="solutionPeople">420</h2>
            <p className="subTxt2">CONSULTING SOLUTIONS</p>
          </div>

          <div className="solution">
            <FontAwesomeIcon icon={faPeopleGroup} className="solutionAwesome" />
            <h2 className="solutionPeople">420</h2>
            <p className="subTxt2">CONSULTING SOLUTIONS</p>
          </div>
        </div>

        <div className="section8">
          <div className="sub8">
            <div>
              <h6>HIGHEST SUCCESS RATES</h6>
              <p className="highRate">
                Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin,
                lorem is simply free text quis bibendum.
              </p>
            </div>

            <div>
              <h6>HIGHEST SUCCESS RATES</h6>
              <p className="highRate">
                Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin,
                lorem is simply free text quis bibendum.
              </p>
            </div>
          </div>

          <div className="sub8">
            <div>
              <p>
                There are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form injected
                humour or randomised words which don't look believable.
              </p>
            </div>

            <div>
              <p>
                <strong>-</strong> If you are going to use a passage
              </p>
              <p>
                <strong>-</strong> Lorem Ipsum you need to be sure
              </p>
              <p>
                <strong>-</strong> There isn't anything embarrassing
              </p>
              <p>
                <strong>-</strong> Hidden in the middle of text
              </p>
            </div>
          </div>
          <div className="sub8"></div>
        </div>

        <div className="firstOverlay">
          <div className="overlay">
            <div> 1️⃣</div>
            <div>
              <h6>GET PROFESSIONAL ADVICE</h6>
              <p className="subTxt3">
                There are many variations of available but the <br /> majority
                have suffered alteration.
              </p>
            </div>
          </div>
          <div className="overlay">
            <div> 2️⃣</div>
            <div>
              <h6>TRUSTED & PROFESSIONAL</h6>
              <p className="subTxt3">
                There are many variations of available but the <br /> majority
                have suffered alteration.
              </p>
            </div>
          </div>
        </div>

        <div className="secondOverlay">
          <div className="overlay1">
            <h6>BUSINESS GROWTH</h6>
          </div>
          <div className="overlay1">
            <h6>BUSINESS GROWTH</h6>
          </div>
          <div className="overlay1">
            <h6>BUSINESS GROWTH</h6>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
