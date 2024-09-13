import React from 'react'

function ContactForm() {
  return (
    <>
      <form>
        <div className="row">
            <div className="col-12">
                <div className="mb-3">
                    <label className="form-label">Your Name <span className="text-danger">*</span></label>
                    <div className="form-icon position-relative">
                        <i className="icons top-50 translate-middle-y uil uil-user"></i>
                        <input name="name" id="name2" type="text" className="form-control ps-5" placeholder="Name :" />
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="mb-3">
                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                    <div className="form-icon position-relative">
                        <i className="top-50 translate-middle-y uil uil-envelope align-middle icon-sm icons"></i>
                        <input name="email" id="email2" type="email" className="form-control ps-5" placeholder="Email :" />
                    </div>
                </div> 
            </div>{/*end col*/}

            <div className="col-12">
                <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <div className="form-icon position-relative">
                        <i className="top-50 translate-middle-y uil uil-book align-middle icon-sm icons"></i>
                        <input name="subject" id="subject2" className="form-control ps-5" placeholder="subject :" />
                    </div>
                </div>
            </div>{/*end col*/}

            <div className="col-12">
                <div className="mb-3">
                    <label className="form-label">Comments <span className="text-danger">*</span></label>
                    <div className="form-icon position-relative">
                        <i className="top-1 uil uil-message align-middle icon-sm icons" style={{top: "9px"}}></i>
                        <textarea name="comments" id="comments2" rows="4" className="form-control ps-5" placeholder="Message :"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="d-grid">
                    <button type="submit" id="submit2" name="send" className="btn btn-primary">Send Message</button>
                </div>
            </div>{/*end col*/}
        </div>{/*end row*/}
    </form>
    </>
  )
}

export default ContactForm