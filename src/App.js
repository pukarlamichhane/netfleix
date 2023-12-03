import React from 'react';
import './App.css';
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <>
      <div className="main">
        <nav>
          <span><img width="53" src={logo} alt="" /></span>
          <div>
            <button className="btn">English</button>
            <button className="btn btn-red-sm">Sign In</button>
          </div>
        </nav>
        <div className="box"></div>
        <div className="hero">
          <span>Enjoy big movies, hit series and more from ₹ 149.</span>
          <span>Join today. Cancel anytime.</span>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className="hero-buttons">
            <input type="text" placeholder="Email Address" />
            <button className="btn btn-red">Get Started &gt;</button>
          </div>
        </div>

        <div className="separation"></div>
      </div>

      <section className="first">
        <div>
          <span>Enjoy on your TV</span>
          <span>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
        </div>

        <div className="secImg">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay loop muted></video>
        </div>
      </section>
      <div className="separation"></div>

      <section className="first second">
        <div className="secImg">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        </div>
        <div>
          <span>Download your shows to watch offline</span>
          <span>Save your favourites easily and always have something to watch.</span>
        </div>
      </section>

      <div className="separation"></div>
      <section className="first third">
        <div>
          <span>Watch everywhere</span>
          <span>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
        </div>

        <div className="secImg">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
          <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoplay loop muted></video>
        </div>
      </section>
      <div className="separation"></div>


      <section className="first second">
        <div className="secImg">
          <img src="https://occ-0-2849-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
        </div>
        <div>
          <span>Create profiles for kids</span>
          <span>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
        </div>
      </section>

      <div className="separation"></div>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faqbox">
          <span>What is NetFlix</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox">
          <span>How much does Netflix cost?</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox">
          <span>What can I watch on Netflix?</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="faqbox">
          <span>Where can I watch?</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>
      <div className="separation"></div>

      <footer>
        <div className="questions">
          Questions? Call 000-800-919-1694
        </div>
        <div className="footer">
          <div className="footer-item">
            <a href="faq">Investor Relations</a>
            <a href="faq">Jobs</a>
            <a href="faq">Ways to Watch</a>
            <a href="faq">Terms of Use</a>
          </div>

          <div className="footer-item">
            <a href="faq">Help Centre</a>
            <a href="faq">Account</a>
            <a href="faq">Speed Test</a>
            <a href="faq">Legal Notices</a>
          </div>
          <div className="footer-item">
            <a href="faq">Media Centre</a>
            <a href="faq">Privacy</a>
            <a href="faq">Cookie Preferences</a>
            <a href="faq">Corporate</a>
          </div>

          <div className="footer-item">
            <a href="faq">Contact Us</a>
            <a href="faq">Speed Test</a>
            <a href="faq">Legal Notices</a>
            <a href="faq">Only on Netflix</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
