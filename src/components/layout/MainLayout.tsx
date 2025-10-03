import React from 'react';
import BackgroundLayout from "@/components/background/BackgroundLayout";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export type MainLayoutProps = {
    children : any,
    announcement?: any,
    nav?: any
}

const MainLayout = ({children, announcement, nav = <Nav />} : MainLayoutProps) => {
    return (
        <div className={'bg-[#0A0A0A]'}>
            {
                announcement &&
                <aside>
                    {announcement}
                </aside>
            }
            {nav}
            <main className={"mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex justify-center"}>
                    {
                        children
                    }
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;