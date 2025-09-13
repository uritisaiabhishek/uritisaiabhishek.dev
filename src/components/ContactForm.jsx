import React, { useEffect } from 'react';

function ContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "241933496",
          formId: "03fc1ee1-5ed8-43b6-937b-7bba9b154e9a",
          target: "#hubspotForm",
          css:""
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="section section-on-footer" data-background="./images/backgrounds/bg-dots.png">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Contact Info</h2>
          </div>
          <div className="col-lg-8 mx-auto">
            <div className="bg-white rounded text-center p-5 shadow-down">
              <h4 className="mb-80">Contact Form</h4>
              <div id="hubspotForm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;