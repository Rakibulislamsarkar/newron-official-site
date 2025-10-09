import React from 'react';
import Hero from "@/components/Hero";
import LogoCarousel from '@/components/LogoCarousel';
import GenerativeAIUseCase from '@/components/GenerativeAIUseCase';
import ProductHighlight from "@/components/ProductHighlight";
import FAQs from "@/components/FAQs";

const Page = () => {
    return (
        <div className="space-y-30">
            <Hero/>
            <LogoCarousel/>
            <ProductHighlight/>
            <GenerativeAIUseCase/>
            <FAQs/>
            {/*<Divider/>*/}
            {/*<SectionWrapper sectionName={"compVision"}>*/}
            {/*    <ComputerVisionUseCase/>*/}
            {/*</SectionWrapper>*/}
            {/*<Divider/>*/}
            {/*<SectionWrapper sectionName={"software3"}>*/}
            {/*    <Software3UseCase/>*/}
            {/*</SectionWrapper>*/}
            {/*<NvidiaCard/>*/}
        </div>
    );
};

export default Page;