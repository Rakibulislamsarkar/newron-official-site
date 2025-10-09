import React from 'react';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export type MainLayoutProps = {
    children: any,
    announcement?: any,
    nav?: any
}

const MainLayout = ({children, announcement, nav = <Nav/>}: MainLayoutProps) => {
    return (
        <div className={'bg-[#0A0A0A]'}>
            {
                announcement &&
                <aside>
                    {announcement}
                </aside>
            }
            {nav}
            <main className={" flex justify-center"}>
                {
                    children
                }
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;