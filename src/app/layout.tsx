import React from "react";
import type { Metadata } from 'next';
import clsx from "clsx";
import localFont from 'next/font/local';

import './globals.css';
// import {Analytics} from '@vercel/analytics/react';

const openAISans = localFont({
    src: '../fonts/OpenAISans-Regular.ttf',
    weight: '400',
    style: 'normal',
    variable: '--font-openai',
    display: 'swap',
});

import projectDefs from '@/defs/projectDefs';

export const metadata: Metadata = {
    title: projectDefs.defaultTitle,
    description: projectDefs.defaultMetaDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={openAISans.variable}>
        <head>
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#000" />

            <meta name="google-site-verification" content="Gm5EUmPUByhIysamk6GLRD-cvbZ-p_otAqv1qOkXc4w" />
            <meta name="facebook-domain-verification" content="qwr7p796231j3lwiiwgclkbtyqhjf6" />

            <meta property="og:title" content={`Newron.AI - ${projectDefs.defaultOgTitle}`} />
            <meta property="og:url" content="https://www.newron.ai" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={projectDefs.defaultOgDescription} />
            <meta property="og:image" content="https://newron.ai/newron-banner.png" />
            <title></title>
        </head>
        <body className={clsx(openAISans.className, "text-zinc-200 font-light")}>
        {children}
        {/*<Analytics/>*/}
        </body>
        </html>
    );
}
