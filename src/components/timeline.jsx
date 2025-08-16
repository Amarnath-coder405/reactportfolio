import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>from a Lorem Ipsum passage <span>2019-2023</span></h2>
                        <p>it over 2000 years old. Richard McClintock, a Latin professor at 
                          Hampden-Sydney College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                          the cites of the word in classical literature, discovered the undoubtable
                          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                          Bonorum et Malorum".</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>from a Lorem Ipsum passage<span>2007-2009</span></h2>
                        <p>it over 2000 years old. Richard McClintock, a Latin professor at 
                          Hampden-Sydney College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                          the cites of the word in classical literature, discovered the undoubtable
                          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                          Bonorum et Malorum".</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>a Lorem Ipsum passage, and going <span>1997-2007</span></h2>
                        <p>it over 2000 years old. Richard McClintock, a Latin professor at 
                          Hampden-Sydney College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                          the cites of the word in classical literature, discovered the undoubtable
                          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                          Bonorum et Malorum".</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
