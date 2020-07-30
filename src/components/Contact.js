import React from "react";

export default function Contacts() {
  return (
    <div className="mycontent form-page">
      <h1 className="form-header">Let's build great things together.</h1>
      <form>
        <div className="form-container">
          <div className="form-name-container form-input-style">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
          </div>
          <div className="form-email-container form-input-style">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="emasil" />
          </div>
          <div className="form-company-container form-input-style">
            <label htmlFor="company">Comapny (optional)</label>
            <input id="company" type="text" name="company" />
          </div>
          <div className="form-phone-container form-input-style">
            <label htmlFor="phone">Phone </label>
            <input id="phone" type="phone" name="name" />
          </div>
          <div className="form-textarea-container form-input-style">
            <label htmlFor="textarea">How can we help</label>
            <textarea id="textarea" rows="11"></textarea>
          </div>
          <div className="form-submit-container">
            <input type="submit" value="Connext with us" className="form-btn" />
            {/* <button className="form-btn">Connect with us</button> */}
          </div>
        </div>
      </form>
    </div>
  );
}
