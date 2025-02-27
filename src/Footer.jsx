import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
      <div>
        <section className="footerBlock">
          <article>
            <div>
              <div className="footmenu">
                <img
                  id="Logo"
                  src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
                  alt="Logo"
                />
              </div>
              <div className="footmenu1">
                <ul>
                  <li style={{ color: "rgb(71,70,70)" }}> COMPANY</li>
                  <li>About</li>
                  <li>JOBS</li>
                  <li>For the Record</li>
                </ul>
              </div>
              <div className="footmenu2">
                <ul>
                  <li style={{ color: "rgb(71,70,70)" }}>COMMUNITIES</li>
                  <li>For Artists</li>
                  <li>Developers</li>
                  <li>Advertising</li>
                  <li> Investors</li>
                  <li> Vendors</li>
                </ul>
              </div>

              <div className="footmenu3">
                <ul>
                  <li style={{ color: "rgb(71,70,70)" }}>USEFUL</li>
                  <li> LINKS</li>
                  <li>Support</li>
                  <li>Web Player</li>
                  <li>Free Mobile App</li>
                </ul>
              </div>

              <div className="sideBlock">
                <span>
                  <i
                    class="fab fa-instagram"
                    style={{
                      padding: "10px",
                      background: "#121212",
                      borderRadius: "25px",
                      marginRight: "10px",
                    }}
                  ></i>
                  <i
                    class="fab fa-twitter"
                    style={{
                      padding: "10px",
                      background: "#121212",
                      borderRadius: "25px",
                      marginRight: "10px",
                    }}
                  ></i>
                  <i
                    class="fab fa-facebook"
                    style={{
                      padding: "10px",
                      background: "#121212",
                      borderRadius: "25px",
                    }}
                  ></i>
                </span>
              </div>
{/* 
              <footer className="endBlock">
                <ul>
                  <li>Legal</li>
                  <li> Privacy</li>
                  <li> Center</li>
                  <li> Privacy</li>
                  <li> Policy</li>
                  <li> Cookies</li>
                  <li>About Ads</li>
                </ul>
              </footer> */}
              <footer>
                <ul className="end">
                  <li>
                    <i class="fas fa-globe-europe"></i>India(English)
                  </li>
                  <li>
                    <i class="far fa-copyright"></i>2021 Spotify AB
                  </li>
                </ul>
              </footer>
            </div>
          </article>
        </section>
      </div>
    );
};

export default Footer;
