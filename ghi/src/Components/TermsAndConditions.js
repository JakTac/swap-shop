import React from "react";
import { NavLink } from "react-router-dom";

function TermsandConditions() {
  return (
    <div className="termsconditions-container">
      &nbsp;&nbsp;&nbsp;
      <div className="col-md-12 text-left">
        &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-dark">
          <NavLink
            style={{ color: "white" }}
            className="nav-link"
            aria-current="page"
            to="/"
          >
            Back to Home Page
          </NavLink>
        </button>
        <div className="col-md-12 text-center">
          <h2 className="display-5 fw-bold" style={{ color: "black" }}>
            Terms and Conditions
          </h2>
          <h3>
            Welcome to SwapShop, an ecommerce platform where users can list
            items for sale and browse through a variety of goods and services.
            By accessing or using our website, you are agreeing to be bound by
            the following terms and conditions ("Terms of Service"). If you do
            not agree to these terms, please do not use our website.
          </h3>
          <h4>1. Eligibility</h4>
          <p>
            You must be at least 18 years of age to use our services. By using
            our services, you represent and warrant that you are at least 18
            years of age and that you have the legal capacity to enter into a
            contract.
          </p>
          <h4>2. Use of SwapShop</h4>
          <p>
            You agree to use SwapShop only for lawful purposes and in a way that
            does not infringe the rights of, restrict or inhibit anyone else's
            use and enjoyment of SwapShop. You may not use our website to send
            unsolicited commercial communications or to send or upload any
            material containing viruses, Trojan horses, worms, time-bombs,
            keystroke loggers, spyware, adware or any other harmful programs or
            similar computer code designed to adversely affect the operation of
            any computer software or hardware.
          </p>
          <h4>3. User Accounts</h4>
          <p>
            To access certain features of SwapShop, you may be required to
            create an account. You agree to provide accurate and complete
            information when creating your account, and to update your account
            information as necessary to keep it accurate and complete. You are
            responsible for maintaining the confidentiality of your account
            password, and you are responsible for all activities that occur
            under your account. You agree to notify us immediately of any
            unauthorized use of your account.
          </p>
          <h4>4. Listings and Requests</h4>
          <p>
            Our services allow users to list goods and services and request
            items for purchase. When listing or inquiring on our platform, you
            agree to the following: You will provide accurate information about
            the goods or services being sold or purchased You will comply with
            all applicable laws and regulations related to buying and selling
            You will not engage in any fraudulent or illegal activities You will
            resolve any disputes directly with the other party You will use our
            platform to purchase or sell only goods and services that are legal
            in the location where the transaction takes place You will not use
            our platform to purchase or sell any goods or services that are
            prohibited by our policies or that we determine, in our sole
            discretion, to be inappropriate.
          </p>
        </div>
      </div>
      <hr className="hr hr-blurry" />
    </div>
  );
}

export default TermsandConditions;
