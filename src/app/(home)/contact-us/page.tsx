import React from "react";
import type {Metadata} from "next";
import ContactUsContent from "@/components/ContactUsContent";

export const metadata:Metadata = {
    title: "Contact Us",
    description: "Contact us for any queries,feedback or demo. We would love to hear from you.",
}
const Contact = () => {

    return (
        <>
            <ContactUsContent />
        </>
    );
};

export default Contact;