import React from "react";
import { BsCodeSlash,BsTwitter,BsLinkedin,BsFacebook,BsInstagram,BsVoicemail } from "react-icons/bs";

const Footer = ({scrollToHeader}) => {
  return (
    <div className="HeaderFooterBg">
                {/* <div className="container FooterBox ">
          <div class="row FooterBoxForLg">
            <div class="col-sm text-center">
              <p className="FooterTextRow1">Start a Project</p>
            </div>
            <div class="col-sm text-center">
              <p>
                Interested in working together? We should queue up a time to
                chat. I’ll buy the coffee.
              </p>
            </div>
            <div class="col-sm text-center">
              <button className="ContactBthn ">Let's Do This</button>
            </div>
          </div>
        </div> */}
      <div className="fluid-container px-4 HeaderFooterBg">
        <div className="py-5 text-center">
        <a className="navbar-brand h-3 pb-3" onClick={() => scrollToHeader.current.scrollIntoView()}>
        <span>J</span>
        <span className="text-primary">K</span>
        <span style={{ color: "#ff3636" }}>O</span>
        <span>D</span>
        <span style={{ color: "#FFD041" }}>E</span>
      </a>
      <h4 className="HeroAboutMeText ">Living, learning, & leveling up<br/> one day at a time.</h4>
      <div className="FooterIconsMainBody py-5">
        <a className="FooterIconsA px-lg-3 px-2" href="https://twitter.com/Karthik_j19?t=xMgTd5WI1AoZrYaBqjfwpA&s=09" target="_blank" rel="noopener noreferrer"><span className="FooterIconsSpan"><BsTwitter className="FooterIconsI" /></span></a>
        <a className="FooterIconsA px-lg-3 px-2" href="https://www.linkedin.com/in/web-developer-karthik-j" target="_blank" rel="noopener noreferrer"><span className="FooterIconsSpan"><BsLinkedin className="FooterIconsI"  /></span></a>
        <a className="FooterIconsA px-lg-3 px-2" href="https://www.facebook.com/karthik.jayabalan.37" target="_blank" rel="noopener noreferrer"><span className="FooterIconsSpan"><BsFacebook className="FooterIconsI" /></span></a>
        <a className="FooterIconsA px-lg-3 px-2" href="https://www.instagram.com/karthik_j19/" target="_blank" rel="noopener noreferrer"><span className="FooterIconsSpan"><BsInstagram className="FooterIconsI" /></span></a>
        <a className="FooterIconsA px-lg-3 px-2" href="mailto:callmejkode@gmail.com" target="_blank" rel="noopener noreferrer"><span className="FooterIconsSpan"><BsVoicemail className="FooterIconsI" /></span></a>
</div>
      <p className="font-weight-bold mb-0">Handcarfted By &copy; J Karthik</p>
      <p><span style={{fontSize:"10px"}}>Made with </span><BsCodeSlash/> React</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
