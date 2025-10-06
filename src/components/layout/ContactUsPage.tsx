'use client'

import React, {useCallback, useState} from 'react';
import clsx from "clsx";
import {CheckCircleIcon} from "@heroicons/react/20/solid";

const ContactUsPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    const recaptchaRef = React.useRef<any>(null);

    const onVerify = useCallback((token: string | null) => {
        setToken(token);
    }, []);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!token) {
            alert("Please verify that you are not a robot.");
            return;
        }

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const usp = new URLSearchParams(window.location.search);
        const cta_used = usp.get("cta");

        try {
            setIsSubmitting(true);
            const res = await fetch('/api/v1/contact-us', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
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
        <section className="py-10 sm:py-24">
            {/* container ensures nice readable width */}
            <div className="container mx-auto max-w-3xl px-4">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                        Let&apos;s work together
                    </h2>
                    <p className="mt-2 text-sm text-zinc-400">
                        Reach out to us for any inquiries, collaborations, or feedback
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-16 space-y-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="fname" className="block text-sm leading-6 ">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    required
                                    placeholder="Name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-sm border-0 py-3 pl-3 text-gray-100 bg-opacity-50 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lname" className="block text-sm leading-6 ">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    required
                                    placeholder="Surname"
                                    autoComplete="family-name"
                                    className="block w-full sm:w-72 rounded-sm border-0 py-3 pl-3 text-gray-100  bg-opacity-50 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm  leading-6 ">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="importantperson@example.com"
                                    autoComplete="email"
                                    className="block w-full rounded-sm border-0 py-3 pl-3 text-gray-100  bg-opacity-50 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <div className="flex justify-between text-sm leading-6">
                                <label htmlFor="company" className="block text-sm  leading-6 ">
                                    Company
                                </label>
                                <p id="company-description" className="text-gray-400">Optional</p>
                            </div>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Example LLC"
                                    autoComplete="organization"
                                    className="block w-full rounded-sm border-0 py-3 pl-3 text-gray-100  bg-opacity-50 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <div className="flex justify-between text-sm leading-6">
                                <label htmlFor="phone" className="block  ">
                                    Phone
                                </label>
                                <p id="phone-description" className="text-gray-400">Optional</p>
                            </div>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="+1 123-456-789"
                                    autoComplete="tel"
                                    aria-describedby="phone-description"
                                    className="block w-full rounded-sm border-0 py-3 pl-3 text-gray-100  bg-opacity-50 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <div className="flex justify-between text-sm leading-6">
                                <label htmlFor="message" className="block text-sm  leading-6 ">
                                    How can we help you?
                                </label>
                                <p id="message-description" className="text-gray-400">Max 500 characters</p>
                            </div>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Need a custom LLM to better understand my organisation"
                                    aria-describedby="message-description"
                                    className="block w-full h-52 rounded-sm border-0 py-3 pl-3 text-gray-100  bg-opacity-50 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={clsx(
                            "btn-primary flex h-12 items-center justify-center gap-2 font-medium",
                            {"animate-bounce": isSubmitting}
                        )}
                    >
                        Submit
                        {isSubmitted && <CheckCircleIcon className="h-4 w-4 fill-white"/>}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUsPage;
