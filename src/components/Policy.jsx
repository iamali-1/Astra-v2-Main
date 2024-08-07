// PrivacyPolicy.jsx

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen mt-10 text-lg">
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg ">
        <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>

        <p className="mb-4 ">
          Astra Analytica LLC ("Astra Analytica," "we," "us," or "our") is
          committed to protecting the privacy of our users. This Privacy Policy
          explains how we collect, use, and disclose your personal information
          when you use our website, astra-analytica.com, and the services we
          provide through the website (the "Services").
        </p>

        <h2 className="text-2xl text-center font-bold mb-4 mt-8 ">
          Information We Collect
        </h2>
        <p className="mb-2 mt-2 text-lg">
          We collect thmb-4 mt-4e following types of information from you:
        </p>
        <p>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>
              {" "}
              <span className="font-bold">Personal Information:</span> This
              includes your name, email address, phone number, and mailing
              address. We collect this information when you create an account,
              contact us, or otherwise provide it to us.
            </li>
            <li>
              <span className="font-bold">Usage Information:</span> This
              includes information about how you use our website and Services,
              such as the pages you visit, the links you click, and the search
              terms you use. We collect this information automatically through
              the use of cookies and other technologies.
            </li>
            <li>
              <span className="font-bold">Device Information:</span> This
              includes information about the device you use to access our
              website and Services, such as your IP address, device type, and
              operating system. We collect this information automatically
              through the use of cookies and other technologies.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl text-center font-bold mb-4 mt-8">
          How We Use Your Information
        </h2>
        <p className="mb-2 mt-2">We use your information to:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Provide and improve our Services.</li>
          <li>Communicate with you about your account and our Services.</li>
          <li>
            Send you marketing communications, such as newsletters and
            promotions.
          </li>
          <li>Protect the security of our website and Services.</li>
          <li>Comply with our legal obligations.</li>
        </ul>

        <h2 className="text-2xl text-center font-bold mb-4 mt-8">
          Disclosure of Your Information
        </h2>
        <p className="mb-4">
          We may disclose your information to third-party service providers who
          help us operate our website and Services. These service providers are
          only authorized to use your information for the purposes of providing
          services to us.
        </p>

        <p className="mb-4">
          We may also disclose your information if we believe that it is
          reasonably necessary to do so in order to comply with law, enforce our
          Terms of Service, or protect the rights, property, or safety of
          ourselves or others.
        </p>

        <h2 className="text-2xl text-center font-bold mb-4 mt-8">
          Your Choices
        </h2>
        <p>
          You can control the cookies that we use on our website by visiting our
          Cookies Policy.
          <br />
          You can unsubscribe from our marketing communications by clicking on
          the "unsubscribe" link in any email that we send you.
        </p>

        <h2 className="text-2xl text-center font-bold mb-4 mt-8">
          Data Security
        </h2>
        <p>
          We take reasonable security measures to protect your information from
          unauthorized access, disclosure, alteration, or destruction. These
          measures include physical, technical, and administrative safeguards.
        </p>

        <h2 className="text-2xl text-center font-bold mb-4 mt-8">
          Children's Privacy
        </h2>
        <p>
          Our website and Services are not intended for children under the age
          of 13. We do not knowingly collect personal information from children
          under the age of 13. If you are a parent or guardian and you believe
          that your child has provided us with personal information, please
          contact us at contact@astra-analytica.com
        </p>

        <h3 className="text-xl text-center font-bold mb-4 mt-8">
          Changes to Our Privacy Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time. If we make any
          material changes, we will notify you by email or by posting a notice
          on our website.
        </p>

        <h3 className="text-xl text-center font-bold mb-4 mt-8">Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <span className="font-bold">contact@astra-analytica.com</span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
