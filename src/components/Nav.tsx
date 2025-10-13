"use client";

import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navLinks from "@/defs/hrefs/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Nav = () => {
    const pathName = usePathname();

    return (
        <header className="sticky top-0 z-50">
            <Disclosure
                as="nav"
                className="bg-zinc-900/30 backdrop-blur-md backdrop-saturate-150 shadow-lg"
            >
                {({ open, close }) => (
                    <>
                        <div className="mx-auto max-w-8xl px-4 md:px-6 lg:px-10">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center flex-shrink-0 gap-2">
                                    <Link
                                        href="/"
                                        aria-label="Newron.ai Home"
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            className="block h-8 w-auto"
                                            src="/newron-logo.svg"
                                            width={30}
                                            height={30}
                                            alt="Newron.ai - logo"
                                        />
                                        <span className="font-semibold text-indigo-400 text-lg block md:hidden">
                                            Newron.ai
                                        </span>
                                    </Link>
                                </div>

                                <div className="hidden sm:flex items-center gap-8">
                                    <div className="flex items-center space-x-6">
                                        {navLinks.center.map((link) => (
                                            <Link
                                                key={link.id || link.href}
                                                href={link.href}
                                                aria-label={link.displayText}
                                                className={clsx(
                                                    "inline-flex items-center text-white hover:text-neutral-300 px-1 pt-1 text-sm font-medium transition-colors border-b-2 border-transparent",
                                                    {
                                                        "border-indigo-500 text-gray-100": pathName === link.href,
                                                    }
                                                )}
                                            >
                                                {link.displayText}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {navLinks.c2a.map((link) => (
                                            <Link href={link.href} key={link.id} aria-label={link.displayText}
                                                  className={clsx(
                                                      "relative inline-flex items-center gap-x-1.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-md",
                                                      {
                                                          "btn-secondary": link.primary,
                                                          "btn-primary hidden lg:block": !link.primary,
                                                      }
                                                  )}>
                                                    {link.icon}
                                                    {link.displayText}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center sm:hidden">
                                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-1 text-gray-100 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                                        ) : (
                                            <Bars2Icon className="block h-8 w-8" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className="sm:hidden bg-zinc-900/50 backdrop-blur-sm">
                            <div className="space-y-1 pb-3 pt-2">
                                {navLinks.center.map((link) => (
                                    <Link
                                        key={link.id || link.href}
                                        href={link.href}
                                        aria-label={link.displayText}
                                        onClick={() => close()} // close menu automatically
                                        className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-gray-100 transition-colors"
                                    >
                                        {link.displayText}
                                    </Link>
                                ))}
                            </div>

                            <div className="border-t border-gray-700 pb-4 pt-4">
                                <div className="px-4 flex flex-col gap-2">
                                    {navLinks.c2a.map((link) => (
                                        <Link
                                            href={link.href}
                                            key={link.href}
                                            aria-label={link.displayText}
                                            onClick={() => close()} // close menu automatically
                                        >
                                            <button
                                                type="button"
                                                className={clsx(
                                                    "w-full relative inline-flex items-center justify-center gap-x-1.5 rounded-sm px-3 py-2 text-sm font-semibold text-white shadow-sm",
                                                    {
                                                        "btn-primary": link.primary,
                                                        "btn-secondary": !link.primary,
                                                    }
                                                )}
                                            >
                                                {link.icon}
                                                {link.displayText}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </header>
    );
};

export default Nav;
