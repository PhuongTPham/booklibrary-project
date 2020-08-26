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
                    <a className="responsiveSiteFooter__link" href="/about/us">
                      About us
                    </a>
                  </li>
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
                    <a className="responsiveSiteFooter__link" href="/about/privacy">
                      Privacy
                    </a>
                  </li>
                  <li className="responsiveSiteFooter__linkListItem">
                    <a
                      className="responsiveSiteFooter__link"
                      href="https://help.goodreads.com/s/article/Goodreads-Interest-Based-Ads-Notice"
                    >
                      Interest Based Ads
                    </a>
                  </li>
                  <li className="responsiveSiteFooter__linkListItem">
                    <a className="responsiveSiteFooter__link" href="/adprefs">
                      Ad Preferences
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
                  <li className="responsiveSiteFooter__linkListItem">
                    <a className="responsiveSiteFooter__link" href="/api">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div className="gr-col-md-5 gr-col-lg-4">
                <h3 className="responsiveSiteFooter__heading">Connect</h3>
                <div className="responsiveSiteFooter__socialLinkWrapper">
                  <a
                    className="responsiveSiteFooter__socialLink"
                    href="https://www.facebook.com/ptpTOP/"
                  >
                    <img
                      alt="Goodreads on Facebook"
                      src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg"
                    />
                  </a>
                </div>
                <div className="responsiveSiteFooter__socialLinkWrapper">
                  <a
                    className="responsiveSiteFooter__socialLink"
                    href="https://www.instagram.com/goodreads/"
                  >
                    <img
                      alt="Goodreads on Instagram"
                      src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg"
                    />
                  </a>
                  <a
                    className="responsiveSiteFooter__socialLink"
                    href="https://www.linkedin.com/company/goodreads-com/"
                  >
                    <img
                      alt="Goodreads on LinkedIn"
                      src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
