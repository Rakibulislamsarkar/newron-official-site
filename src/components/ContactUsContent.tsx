"use client";

import React, {useCallback, useState} from "react";
import clsx from "clsx";
import {CheckCircleIcon} from "@heroicons/react/20/solid";
// import ReCAPTCHA from "react-google-recaptcha";

const ContactUsContent = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const recaptchaRef = React.useRef<any>(null);

    const [token, setToken] = useState<string | null>(null);

    const onVerify = useCallback((token: string | null) => {
        setToken(token);
    }, []);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!token) {
            // Enable in case of invisible token
            // recaptchaToken = await recaptchaRef.current.executeAsync();
            alert("Please verify that you are not a robot.");
            return;
        }

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        const usp = new URLSearchParams(window.location.search);

        const cta_used = usp.get("cta");

        try {
            setIsSubmitting(true);
            const res = await fetch('/api/v1/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...data, cta_used, token}),
            });
            setIsSubmitting(false);
            if (res.ok) {
                setIsSubmitted(true);
            }

            alert("Thank you for contacting us. We will get back to you shortly.");
        } catch (e) {
            setIsSubmitting(false);
            setIsError(true);
        }
    };

    return (
        <>
            <div className="pb-6 pt-6 sm:pb-8 sm:pt-8">
                <div className="px-6 lg:px-8">
                    <div>
                        <div className={'flex flex-col justify-center items-center'}>
                            <h2 className="text-3xl font-semibold text-gray-100">Let&apos;s work together</h2>
                            <p className="mt-2 text-sm text-zinc-400">
                                Reach out to us for any inquiries, collaborations, or feedback
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-16">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="fname"
                                           className="block text-sm font-semibold leading-6 text-zinc-200">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            required={true}
                                            placeholder={"Name"}
                                            autoComplete="given-name"
                                            className="block w-full rounded-lg border-0 py-3 pl-3 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:border-none focus:outline-none sm:text-sm sm:leading-6 placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lname"
                                           className="block text-sm font-semibold leading-6 text-zinc-200">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="lname"
                                            placeholder={"Surname"}
                                            id="lname"
                                            required={true}
                                            autoComplete="family-name"
                                            className="block w-full rounded-lg border-0 py-3 pl-3 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:border-none focus:outline-none sm:text-sm sm:leading-6 placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email"
                                           className="block text-sm font-semibold leading-6 text-zinc-200">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            placeholder={"importantperson@example.com"}
                                            name="email"
                                            id="email"
                                            required={true}
                                            autoComplete="email"
                                            className="block w-full rounded-lg border-0 py-3 pl-3 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:border-none focus:outline-none sm:text-sm sm:leading-6 placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="company"
                                               className="block text-sm font-semibold leading-6 text-zinc-200">
                                            Company
                                        </label>
                                        <p id="company-description" className="text-gray-400">
                                            Optional
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder={"Example LLC"}
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full rounded-lg border-0 py-3 pl-3 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:border-none focus:outline-none sm:text-sm sm:leading-6 placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="phone" className="block font-semibold text-zinc-200">
                                            Phone
                                        </label>
                                        <p id="phone-description" className="text-gray-400">
                                            Optional
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            placeholder={"+1 123-456-789"}
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            className="block w-full rounded-lg border-0 py-3 pl-3 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:border-none focus:outline-none sm:text-sm sm:leading-6 placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="message"
                                               className="block text-sm font-semibold leading-6 text-zinc-200">
                                            How can we help you?
                                        </label>
                                        <p id="message-description" className="text-gray-400">
                                            Max 500 characters
                                        </p>
                                    </div>
                                    <div className="mt-2.5">
                      <textarea
                          placeholder={"Need a custom LLM to deeper understand my organisation"}
                          name="message"
                          id="message"
                          rows={4}
                          aria-describedby="message-description"
                          className="block w-full rounded-lg border-0 py-3 pl-3 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:border-none focus:outline-none sm:text-sm sm:leading-6 placeholder:text-sm"
                      />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-gray-900/10 pt-8">
                                {/*<ReCAPTCHA ref={recaptchaRef}*/}
                                {/*    // size={"invisible"}*/}
                                {/*           sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}*/}
                                {/*           onChange={onVerify} theme={"dark"} />*/}
                                <button type={"submit"} disabled={isSubmitting}
                                        className={clsx("flex h-12 items-center justify-center gap-2 btn-primary px-4 py-0.5 text-sm font-medium rounded-r-sm", {"animate-bounce": isSubmitting})}>
                                    Send Message
                                    {
                                        isSubmitted && <><CheckCircleIcon className={"h-4 w-4 fill-white"}/></>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsContent;