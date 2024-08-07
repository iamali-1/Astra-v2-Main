// TermsAndConditions.jsx

import React from "react";

const Terms = () => {
  return (
    <div className="container pt-16 min-h-screen mt-10 text-lg">
      <div className="container mx-auto my-8 p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Terms and Conditions For Astra Analytica</h1>


        <h1 className="text-2xl font-bold mb-4 text-center mt-8">Introduction</h1>

        <p>
        Welcome to astra-analytica.com (the "Site"). These Terms of Service (the "Terms") govern your use of the Site and the services provided by Astra Analytica LLC (the "Company"). Please read these Terms carefully before using the Site. By using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Site.

        </p>

        <h2 className="text-2xl font-bold text-center mt-8">Definitions</h2>
        <h4 className="mb-2 mt-2">In these Terms, the following terms have the following meanings:</h4>
        <ul className="list-disc list-inside">
          <li className="mb-3">
          <span className="font-bold">"Content"</span> means any text, data, images, audio, video, or other materials that you post, upload, or otherwise transmit through the Site.
          </li>
          <li className="mb-3">
          <span className="font-bold">"Services"</span> means the cloud computing and DevOps services provided by the Company through the Site.
          </li>
          <li className="mb-3">
          <span className="font-bold">"User"</span> means any individual or entity that accesses or uses the Site or the Services.
          </li>
        </ul>
        

        {/* ... (rest of the content) ... */}

        <h2 className="text-2xl font-bold text-center mt-8">User Conduct</h2>
        <h4 className="mb-2 mt-2" >
        You agree to use the Site and the Services in a responsible and lawful manner. You shall not:
        </h4>
        <ul className="list-disc list-inside">
          <li className="mb-3">
          Use the Site or the Services for any illegal or unauthorized purpose.
          </li>
          <li className="mb-3">
          Use the Site or the Services in any way that could damage, disable, overload, or impair the Site or the Services or interfere with any other party's use of the Site or the Services.
          </li>
          <li className="mb-3">
          Use the Site or the Services to transmit any material that is harassing, abusive, offensive, defamatory, obscene, or libelous.
          </li>
          <li className="mb-3">
          Use the Site or the Services to impersonate any other person or entity.
          </li>
          <li className="mb-3">
          Attempt to gain unauthorized access to the Site or the Services.
          </li>
        </ul>
        <p>
        The Company reserves the right, in its sole discretion, to terminate your access to the Site or the Services for any violation of these Terms.
        </p>
      </div>

<h2 className="text-2xl font-bold text-center mt-8">Intellectual Property</h2>
<p className="mb-2 mt-2">The Site and the Services are the property of the Company and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, display, perform, or create derivative works from the Site or the Services without the prior written consent of the Company.</p>

<h2 className="text-2xl font-bold text-center mt-8">Disclaimer of Warranties</h2>
<p className="mb-2 mt-2">THE SITE AND THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE COMPANY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO THE SITE OR THE SERVICES, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. THE COMPANY DOES NOT WARRANT THAT THE SITE OR THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.</p>

<h2 className="text-2xl font-bold text-center mt-8">Limitation of Liability</h2>
<p className="mb-2 mt-2">IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR THE SERVICES, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

<h2 className="text-2xl font-bold text-center mt-8">Indemnification</h2>
<p className="mb-2 mt-2">You agree to indemnify and hold harmless the Company, its affiliates, officers, directors, employees, agents, and representatives from and against any and all claims, liabilities, damages, losses, costs, expenses, and fees (including reasonable attorneys' fees) arising out of or in connection with your use of the Site or the Services or your violation of these Terms.</p>

<h2 className="text-2xl font-bold text-center mt-8">Governing Law</h2>
<p className="mb-2 mt-2">These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles.</p>

<h2 className="text-2xl font-bold text-center mt-8">Severability</h2>
<p className="mb-2 mt-2">If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck from these Terms and the remaining provisions shall remain in full force and effect.</p>

<h2 className="text-2xl font-bold text-center mt-8">Severability</h2>
<p className="mb-2 mt-2">These Terms constitute the entire agreement between you and the Company with respect to the Site and the Services and supersede all prior or contemporaneous communications, representations, or agreements, whether oral or written.</p>

<h2 className="text-2xl font-bold text-center mt-8">Waiver</h2>
<p className="mb-2 mt-2">No waiver of any provision of these Terms shall be effective unless in writing and signed by both you and the Company.</p>
    </div>
  );
};

export default Terms;
