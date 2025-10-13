"use client";

import React, {useState} from "react";
import {ArrowPathIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import {CheckCircleIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import {toast} from "sonner";

const NewsletterSection = () => {
    const [emailInput, setEmailInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);

    // useEffect(() => {
    //     const storedEmail = localStorage.getItem("subscribed-email");
    //     if (storedEmail) {
    //         setEmailInput(storedEmail);
    //         setIsSubscribed(true);
    //     }
    // }, []);

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = emailInput.trim().toLowerCase();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setIsInvalidEmail(true);
            toast.error("Invalid email address", {
                description: "Please enter a valid email address to subscribe.",
                duration: 4000,
            });
            return;
        }

        setIsInvalidEmail(false);
        setIsSending(true);

        try {
            const res = await fetch("/api/v1/newsletter", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email}),
            });

            const result = await res.json();

            if (res.status === 200) {
                if (result.message === "Already subscribed.") {
                    toast.info("Already subscribed", {
                        description: "This email is already on our newsletter list.",
                        duration: 5000,
                    });
                } else {
                    toast.success("Successfully subscribed!", {
                        description: "Thank you for joining our newsletter. Stay tuned for updates!",
                        duration: 6000,
                    });
                }

                setIsSubscribed(true);
                localStorage.setItem("subscribed-email", email);
                setEmailInput("");
            } else {
                toast.error("Subscription failed", {
                    description: result.message || "Unable to subscribe. Please try again later.",
                    duration: 5000,
                });
            }
        } catch (err) {
            console.error(err);
            toast.error("Network error", {
                description: "Unable to connect. Please check your internet connection.",
                duration: 5000,
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <aside className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
            <div className="bg-gradient-to-br from-purple-600 to-[#182fff99] rounded-3xl">
                <div className="min-h-[400px] flex flex-col gap-4 justify-center items-center text-center py-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium max-w-3xs sm:max-w-full">
                        Shape the future of AI
                    </h2>

                    <form
                        className="mt-4 flex flex-col gap-2 md:flex-row px-6 justify-center items-stretch w-full max-w-md sm:max-w-lg"
                        onSubmit={handleSubscribe}
                    >
                        <div className="relative rounded-sm shadow-sm h-full flex-grow">
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 items-center pl-4 hidden sm:flex">
                                <EnvelopeIcon className="h-5 w-5 text-gray-400"/>
                            </div>
                            <input
                                type="email"
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                disabled={isSubscribed || isSending}
                                placeholder={isSubscribed ? "You're subscribed! 🎉" : "you@example.com"}
                                className="block w-full rounded-full border-0 py-3 pl-5 sm:pl-12 text-gray-100 bg-zinc-800 bg-opacity-50 ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending || isSubscribed}
                            className={clsx(
                                "flex items-center justify-center gap-2 btn-secondary w-auto shrink-0 px-4 py-0.5 text-xs sm:text-sm font-medium rounded-r-sm transition-all duration-200",
                                {"opacity-70 cursor-not-allowed": isSending || isSubscribed}
                            )}
                        >
                            {isSending ? (
                                <>
                                    <ArrowPathIcon className="h-4 w-4 animate-spin text-white"/>
                                    <span>Loading...</span>
                                </>
                            ) : isSubscribed ? (
                                <>
                                    <span>Subscribed</span>
                                    <CheckCircleIcon className="h-4 w-4 fill-[#6544F4]"/>
                                </>
                            ) : (
                                <span>Subscribe</span>
                            )}
                        </button>
                    </form>

                    {isInvalidEmail && (
                        <div className="text-sm text-center mt-2">
                            <span className="text-orange-500">Invalid email. Enter a valid one.</span>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default NewsletterSection;