import React from "react";

function Footer() {
  return (
    <footer className="responsiveSiteFooter">
      <div className="responsiveSiteFooter__contents gr-container-fluid">
        <div className="gr-row">
          <div className="gr-col gr-col-md-8 gr-col-lg-6">
            <div className="gr-row">
              <div className="gr-col-md-3 gr-col-lg-4">
                <h3 className="responsiveSiteFooter__heading">Company</h3>
                <ul className="responsiveSiteFooter__linkList">
                  <li className="responsiveSiteFooter__linkListItem">
                    <a className="responsiveSiteFooter__link" href="/jobs">
                      Careers
                    </a>
                  </li>
                  <li className="responsiveSiteFooter__linkListItem">
                    <a className="responsiveSiteFooter__link" href="/about/terms">
                      Terms
                    </a>
                  </li>
                  <li className="responsiveSiteFooter__linkListItem">
                    <a
                      className="responsiveSiteFooter__link"
                      href="/help?action_type=help_web_footer"
                    >
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div className="gr-col-md-4 gr-col-lg-4">
                <h3 className="responsiveSiteFooter__heading">Work with us</h3>
                <ul className="responsiveSiteFooter__linkList">
                  <li className="responsiveSiteFooter__linkListItem">
                    <a
                      className="responsiveSiteFooter__link"
                      href="/author/program"
                    >
                      Authors
                    </a>
                  </li>
                  <li className="responsiveSiteFooter__linkListItem">
                    <a className="responsiveSiteFooter__link" href="/advertisers">
                      Advertise
                    </a>
                  </li>
                  <li className="responsiveSiteFooter__linkListItem">
                    <a
                      className="responsiveSiteFooter__link"
                      href="/news?content_type=author_blogs"
                    >
                      Authors &amp; ads blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
