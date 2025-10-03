import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Newron is committed to protecting your privacy. This Privacy Policy describes how Newron collects, uses, and shares your personal information when you use our website and services.",
}
const PrivacyPolicy = () => {
    return (
        <div className="bg-zinc-800/30 backdrop-blur-md border border-zinc-700/50 rounded-lg shadow-xl p-10 mt-12">
            <h1 className="text-zinc-100 text-4xl font-semibold mb-4">Privacy Policy</h1>
            <p className="text-zinc-400 mb-2 text-sm">Last Updated: July 10, 2023</p>
            <p className="text-zinc-400 mb-2 mt-10">This Privacy Policy describes how Newron.ai
                (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) collects, uses, and shares your personal
                information when you use our website and services (collectively, &quot;Services&quot;). By using our
                Services, you agree to the processing of your information as described in this Privacy Policy.</p>

            <h2 className="text-zinc-100 text-xl font-semibold mt-4 mb-2 ">1. Information We Collect</h2>
            <p className="text-zinc-400 mb-2">1.1 Personal Information: We collect personal information that you provide
                to us, such as your name, email address, phone number, and payment information.</p>
            <p className="text-zinc-400 mb-2">1.2 Usage Data: We collect information about how you use our Services,
                including the time, frequency, and duration of your activities.</p>
            <p className="text-zinc-400 mb-2">1.3 Device Information: We collect information about the device you use to
                access our Services, including your IP address, browser type, and operating system.</p>

            <h2 className="text-zinc-100 text-xl font-semibold mt-4 mb-2 ">2. How We Use Your Information</h2>
            <p className="text-zinc-400 mb-2">We use your information for various purposes, such as to:</p>
            <p className="text-zinc-400 mb-2">2.1 Provide, maintain, and improve our Services.</p>
            <p className="text-zinc-400 mb-2">2.2 Process transactions and send related information, including
                confirmations and invoices.</p>
            <p className="text-zinc-400 mb-2">2.3 Send you technical notices, updates, and support messages.</p>
            <p className="text-zinc-400 mb-2">2.4 Respond to your comments, questions, and requests, and provide
                customer service.</p>
            <p className="text-zinc-400 mb-2">2.5 Monitor and analyze trends, usage, and activities in connection with
                our Services.</p>

            <h2 className="text-zinc-100 text-xl font-semibold mt-4 mb-2 ">3. Sharing of Information</h2>
            <p className="text-zinc-400 mb-2">We may share your information as follows:</p>
            <p className="text-zinc-400 mb-2">3.1 With vendors, consultants, and other service providers who need access
                to such information to carry out work on our behalf.</p>
            <p className="text-zinc-400 mb-2">3.2 In response to a request for information if we believe disclosure is
                in accordance with, or required by, any applicable law, regulation, or legal process.</p>
            <p className="text-zinc-400 mb-2">3.3 If we believe your actions are inconsistent with our user agreements
                or policies, or to protect the rights, property, and safety of Newron.ai or others.</p>

            <h2 className="text-zinc-100 text-xl font-semibold mt-4 mb-2 ">4. Security</h2>
            <p className="text-zinc-400 mb-2">We take reasonable measures to help protect your information from loss,
                theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>

            <h2 className="text-zinc-100 text-xl font-semibold mt-4 mb-2 ">5. International Data Transfers</h2>
            <p className="text-zinc-400 mb-2">We may transfer your information to, and process it in, countries other
                than the country in which you are resident. These countries may have data protection laws that are
                different from the laws of your country.</p>

            <h2 className="text-zinc-100 text-xl font-semibold mt-4 mb-2 ">6. Your Rights</h2>
            <p className="text-zinc-400 mb-2">Depending on your location, you may have certain rights under local law
                with respect to your personal information, including the right to request access to, correct, amend,
                delete, or limit the use of your personal information.</p>

            <h2 className="text-zinc-100 text-xl font-semibold mt-4 mb-2 ">7. Changes to this Privacy Policy</h2>
            <p className="text-zinc-400 mb-2">We may change this Privacy Policy from time to time. If we make changes,
                we will notify you by revising the date at the top of the policy and, in some cases, we may provide you
                with additional notice.</p>

            <p className="text-zinc-400 mb-2">By continuing to access or use our Services after those changes become
                effective, you agree to be bound by the revised Privacy Policy. If you do not agree to the new Privacy
                Policy, please stop using the Services.</p>
            <p className="text-zinc-400 mb-2">If you have any questions about this Privacy Policy, please contact us at:
                privacy@newron.ai.</p>
        </div>
    );
};

export default PrivacyPolicy;