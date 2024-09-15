import React, { useState } from 'react';

function ContactForm() {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comments: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the state based on input name
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Form Data:', formData); // Log the form data to the console

    // You can also add additional logic here to send the form data to an API or backend server
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">
                Your Name <span className="text-danger">*</span>
              </label>
              <div className="form-icon position-relative">
                <i className="icons top-50 translate-middle-y uil uil-user"></i>
                <input
                  name="name"
                  id="name2"
                  type="text"
                  className="form-control ps-5"
                  placeholder="Name :"
                  value={formData.name} // Bind the state value to the input
                  onChange={handleChange} // Handle input change
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">
                Your Email <span className="text-danger">*</span>
              </label>
              <div className="form-icon position-relative">
                <i className="top-50 translate-middle-y uil uil-envelope align-middle icon-sm icons"></i>
                <input
                  name="email"
                  id="email2"
                  type="email"
                  className="form-control ps-5"
                  placeholder="Email :"
                  value={formData.email} // Bind the state value
                  onChange={handleChange} // Handle input change
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <div className="form-icon position-relative">
                <i className="top-50 translate-middle-y uil uil-book align-middle icon-sm icons"></i>
                <input
                  name="subject"
                  id="subject2"
                  className="form-control ps-5"
                  placeholder="Subject :"
                  value={formData.subject} // Bind the state value
                  onChange={handleChange} // Handle input change
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">
                Comments <span className="text-danger">*</span>
              </label>
              <div className="form-icon position-relative">
                <i
                  className="top-1 uil uil-message align-middle icon-sm icons"
                  style={{ top: '9px' }}
                ></i>
                <textarea
                  name="comments"
                  id="comments2"
                  rows="4"
                  className="form-control ps-5"
                  placeholder="Message :"
                  value={formData.comments} // Bind the state value
                  onChange={handleChange} // Handle input change
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-grid">
              <button type="submit" id="submit2" name="send" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
