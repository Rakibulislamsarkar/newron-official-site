import React from "react";
import type {Metadata} from "next";
import ContactUsPage from "@/components/layout/ContactUsPage";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact us for any queries,feedback or demo. We would love to hear from you.",
}
const Contact = () => {

    return (
        <>
            <ContactUsPage/>
        </>
    );
};

export default Contact;