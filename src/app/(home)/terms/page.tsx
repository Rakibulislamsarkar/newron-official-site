import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Software 2.0 is a new paradigm of software development that uses machine learning models to write code."
}
const TermsOfService = () => {
    return (
        <div className="bg-zinc-800/30 backdrop-blur-md border border-zinc-700/50 rounded-lg shadow-xl p-10 mt-12">
            <h1 className="text-zinc-100 text-4xl font-semibold mb-4">Terms of Service</h1>
            <p className="text-zinc-400 text-sm">Last Updated: July 10, 2023</p>
            <p className="mt-10 text-zinc-400">Welcome to Newron.ai. Please read these Terms of Service
                (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the Newron.ai website
                (the &quot;Service&quot;) operated by Newron.ai (&quot;us&quot;, &quot;we&quot;,
                or &quot;our&quot;).</p>
            <p className="text-zinc-400">Your access to and use of the Service is conditioned on your acceptance of and
                compliance with these Terms. These Terms apply to all visitors, users and others who access or use the
                Service.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">1. Services</h2>
            <p className="text-zinc-400">Newron.ai provides a range of services including but not limited to:</p>
            <ul className="list-disc list-inside text-zinc-400">
                <li>Generative AI and custom Fine-tuned Large Language Models (LLMs) for different use cases.</li>
                <li>Edge deployed computer vision models.</li>
                <li>On-premises deployed AI Model delivery.</li>
                <li>AI data analysis using LLMs.</li>
                <li>Tailored Software 2.0 and 3.0.</li>
            </ul>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">2. Acceptance of Terms</h2>
            <p className="text-zinc-400">By accessing and/or using the Service, you agree to be bound by these Terms. If
                you disagree with any part of the terms then you may not access the Service.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">3. Changes to Terms</h2>
            <p className="text-zinc-400">We reserve the right, at our sole discretion, to modify or replace these Terms
                at any time. If a revision is material we will try to provide at least 30 days&apos; notice prior to any
                new terms taking effect. What constitutes a material change will be determined at our sole
                discretion.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">4. Intellectual Property</h2>
            <p className="text-zinc-400">All content, trademarks, service marks, trade names, logos, and intellectual
                property (collectively &quot;Content&quot;) displayed on the Service are proprietary to us and/or third
                parties and are protected by copyright and other intellectual property laws.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">5. User Conduct</h2>
            <p className="text-zinc-400">You agree not to use the Service in any way that is unlawful, or harms us, our
                service providers, our suppliers, your end users, or any other person.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">6. Privacy Policy</h2>
            <p className="text-zinc-400">Our Privacy Policy, which describes how we collect and use your personal
                information, is incorporated into these Terms. By using our Service, you agree to the collection, use,
                and sharing of your information in accordance with our Privacy Policy.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">7. Limitation of Liability</h2>
            <p className="text-zinc-400">In no event shall Newron.ai, nor its directors, employees, partners, agents,
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct
                or content of any third party on the Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
                contract, tort (including negligence) or any other legal theory, whether or not we have been informed of
                the possibility of such damage, and even if a remedy set forth herein is found to have failed of its
                essential purpose.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">8. Governing Law</h2>
            <p className="text-zinc-400">These Terms shall be governed and construed in accordance with the laws of
                India, without regard to its conflict of law provisions.</p>
            <h2 className="text-zinc-100 text-xl mt-4 mb-2 font-semibold">9. Contact Us</h2>
            <p className="text-zinc-400">If you have any questions about these Terms, please contact us at
                support@newron.ai.</p>
            <p className="text-zinc-400">By continuing to access or use our Service after those revisions become
                effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop
                using the Service.</p>
        </div>
    );
};

export default TermsOfService;