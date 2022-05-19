import React from "react";
import { Container } from "reactstrap";
import { ArrowRight, ThumbsUp, Box, FileText } from "react-feather";

class Main extends React.Component {
  render() {
    return (
      <div id="body">
        <div className="home-section1">
          <div className="bg" />
          <div className="content">
            <div className="row">
              <div className="col-sm-8">
                <div className="section-heading">
                  Out from behind the camera and into the furnace.
                </div>
                <div className="section-text1">
                  <p>
                    John do be welding
                  </p>
                </div>
                <div className="getting-started">
                  <a className="btn" href="/">
                    Welding with the homie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section2">
          <div className="content">
            <div className="row">
              <div className="col-lg-12">
                <div className="head-wrap">
                  <div className="section-heading">The Process</div>
                  <div className="section-text">
                    Definition of trust the process.
                  </div>
                </div>
                <div className="content-wrap">
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-img">
                        <a>
                          <ThumbsUp />
                        </a>
                      </div>
                      <div class="feature-text">
                        <h2>Projects</h2>
                        <p>
                          Current fabrication creations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-img">
                        <a>
                          <FileText />
                        </a>
                      </div>
                      <div class="feature-text">
                        <h2>Inquries</h2>
                        <p>
                          Send in an inquery to get a custom piece hand-crafted.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 float-left">
                    <div className="feature-wrap">
                      <div class="feature-img">
                        <a>
                          <Box />
                        </a>
                      </div>
                      <div class="feature-text">
                        <h2>Equipment</h2>
                        <p>Features which tools and equipment are used for each project.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
