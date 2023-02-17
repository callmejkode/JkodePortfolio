import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsPhoneVibrate, BsVoicemail, BsPinMap } from "react-icons/bs";
import swal from "sweetalert";
import Fade from "react-reveal/Fade";

const Contact = ({ scroll }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); //prevent refresh

    emailjs
      .sendForm(
        "service_lct10tk",
        "template_cfmezld",
        form.current,
        "OFcsGOPWhvgUnTwjY"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal(
            "Thank you ;)",
            "Jkode is on your way, Stay tuned...",
            "success"
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          swal("Good job!", "You clicked the button!", "error");
          e.target.reset();
        }
      );
  };

  return (
    <div className="container-fluid AboutMeMainBody" ref={scroll}>
      <Fade bottom>
        <h2 className="display-3 HeaderLineOne fw-bloder pt-5 pb-lg-5">
          Contact Me
        </h2>
      </Fade>
      <div className="row row-custom">
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 p-lg-5 text-right mb-4 mb-md-0">
          <div className=" AboutMe ContactMeIconMainBodyMob ">
            <div
              className="pb-lg-5 ConatactMeIconContainerMob"
              data-animate="active"
            >
              <div className="icon pb-2">
                <i className="AboutMeIcons">
                  <BsPhoneVibrate />
                </i>
              </div>
              <div className="num"></div>
              <h4 className=" ConatactMeIconContainerMob">
                <a href="tel:+7550051928">+91 755 005 1928</a>
              </h4>
            </div>

            <div
              className="pb-lg-5 AboutMeIconContainerMob"
              data-animate="active"
            >
              <div className="icon pb-2">
                <i className="AboutMeIcons">
                  <BsVoicemail />
                </i>
              </div>
              <div className="num"></div>
              <h4 className=" ConatactMeIconContainerMob">
                <a href="mailto:callmejkode@gmail.com">CallmeJkode@gmail.com</a>
              </h4>
            </div>

            <div
              className="pb-lg-5 AboutMeIconContainerMob"
              data-animate="active"
            >
              <div className="icon pb-2">
                <i className="AboutMeIcons">
                  <BsPinMap />
                </i>
              </div>
              <div className="num"></div>
              <h4 className=" ConatactMeIconContainerMob">
                Adambakkam <br />
                Chennai{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 ContactMainBody VerticalLineCSS ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group pb-lg-4">
              <label htmlFor="colFormLabelSm" className="h4 font-weight-bold">
                Name
              </label>
              <input
                type="text"
                className="form-control ContactLableInput ContactInput"
                id="ContactFormName"
                name="user_name"
                placeholder="Enter your name..."
                required
              />
            </div>
            <div className="form-group pb-lg-4">
              <label htmlFor="colFormLabelSm" className="h4 font-weight-bold">
                Email
              </label>
              <input
                type="Email"
                className="form-control ContactLableInput ContactInput"
                id="formGroupExampleInput2"
                name="user_email"
                placeholder="Enter your email..."
                required
              />
            </div>
            <div className="form-group pb-lg-4">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="h4 font-weight-bold"
              >
                Message
              </label>
              <textarea
                name="message"
                className="form-control ContactLableInput ContactInput"
                id="exampleFormControlTextarea1"
                rows="8"
                placeholder="Let me know your thoughts..."
              ></textarea>
            </div>
            <input
              type="submit"
              className="ContactBthn ContactBtnMob"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              value="SEND"
            />
            {/* <input type="submit" value="Send" style={{border:'none', background:'none'}} className="BtnAnimation" ><span data-attr="Send">Send</span><span data-attr="Message">Message</span></input> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
