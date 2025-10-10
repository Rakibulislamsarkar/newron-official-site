"use client";

import React, {useEffect, useState} from 'react';
import {EnvelopeIcon} from "@heroicons/react/24/outline";
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";

const NewsletterSection = () => {

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isSendingData, setIsSending] = useState(false);
    const [isSendingFailed, setIsSendingFailed] = useState(false);
    const [subscribedEmail, setSubscribedEmail] = useState("");

    const handleSubscribe = async (e: any) => {
        e.preventDefault();

        const email = e.target['email'].value.trim();

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            setIsInvalidEmail(true);
            return;
        }
        setIsInvalidEmail(false);
        setIsSubscribed(false);

        try {
            setIsSending(true);
            const rawRes = await fetch('/api/v1/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    email: email
                })
            })
            setIsSending(false);

            if (!rawRes.ok) {
                setIsSendingFailed(true);
                return;
            }

            setIsSubscribed(true);
            localStorage.setItem("subscribed-email", email);
            // const res = await rawRes.json();

        } catch (e) {
            setIsSending(false);
            setIsSendingFailed(true);
        }

    }

    useEffect(() => {

        const subscribedEmail = localStorage.getItem("subscribed-email");
        const isSubscribed = !!subscribedEmail;

        if (isSubscribed) {
            setSubscribedEmail(subscribedEmail);
        }

        setIsSubscribed(isSubscribed);

    }, []);

    return (
        <aside className={"mx-auto max-w-8xl px-4 md:px-6 lg:px-10"}>
            <div className={'bg-gradient-to-br from-purple-600 to-[#182fff99] rounded-3xl'}>
                <div className={"min-h-[400px] flex flex-col gap-4 justify-center items-center text-center py-12"}>
                    <h2 className={"text-4xl md:text-5xl lg:text-6xl font-medium max-w-3xs sm:max-w-full"}>
                        Shape the future of AI
                    </h2>
                    <form
                        className={"mt-4 flex flex-col gap-2 md:flex-row px-6 justify-center items-stretch w-full max-w-md sm:max-w-lg "}
                        onSubmit={handleSubscribe}>
                        <div className="relative rounded-sm shadow-sm h-full flex-grow">
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 items-center pl-4 hidden sm:flex">
                                <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={subscribedEmail}
                                className="block w-full rounded-full border-0 py-3 pl-5 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 focus:border-none focus:outline-none sm:text-sm sm:leading-6 placeholder:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSendingData}
                            className={clsx(
                                "flex items-center justify-center gap-2 btn-secondary w-auto shrink-0 px-4 py-0.5 text-xs sm:text-sm font-medium rounded-r-sm",
                                { "animate-bounce": isSendingData }
                            )}
                        >
                            Subscribe
                            {isSubscribed && (
                                <>
                                    <CheckCircleIcon className="h-4 w-4 fill-white" />
                                </>
                            )}
                        </button>

                    </form>
                    {
                        isSendingFailed || isInvalidEmail &&
                        <div className={"text-sm text-center"}>
                            {
                                isSendingFailed ?
                                    <span className={"text-red-500"}>
                                    Failed to subscribe! Please try again later.
                                </span> : isInvalidEmail ? <span className={"text-orange-500"}>
                                    Invalid email entered! Please input correct one and try again!
                                </span> : ""
                            }
                        </div>
                    }
                </div>
            </div>
        </aside>
    );
};

export default NewsletterSection;