import React from 'react';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ReactLenis } from "lenis/react";

export type MainLayoutProps = {
    children: React.ReactNode;
    announcement?: React.ReactNode;
    nav?: React.ReactNode;
};

const MainLayout = ({ children, announcement, nav = <Nav /> }: MainLayoutProps) => {
    return (
        <ReactLenis
            root
        >
            <div className="bg-background">
                {announcement && <aside>{announcement}</aside>}
                {nav}
                <main>{children}</main>
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default MainLayout;
