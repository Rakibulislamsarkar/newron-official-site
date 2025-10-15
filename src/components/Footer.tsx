import React from 'react'
import navigationLinks from "@/defs/hrefs/navigationLinks";

const Footer = () => {
    return (
        <footer className="mt-12 bg-transparent border border-t-zinc-800 border-x-0 border-b-0 "
                aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-[1536px] px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-20">
                    <div className="space-y-8">
                        <div className={"space-y-8"}>
                            <div className={"text-2xl md:text-3xl lg:text-4xl max-w-lg font-medium"}>
                                NewronAI Technologies Pvt. Ltd.
                            </div>
                        </div>
                        <p className="text-base text-gray-400 max-w-xl">
                            Revolutionizing Enterprises with Cutting-Edge Data-driven Intelligence Solutions for
                            Informed Decision-making, Enhanced Productivity, and Sustainable Growth in the Digital Era.
                        </p>
                        <div className="flex space-x-6">
                            {navigationLinks.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-100">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-8 w-8" aria-hidden="true"/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-4">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-400">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigationLinks.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-400">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigationLinks.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-4">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-400">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigationLinks.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-400 ">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigationLinks.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-base leading-5 text-zinc-100">&copy; {new Date().getFullYear()} NewronAI
                        Technologies Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer