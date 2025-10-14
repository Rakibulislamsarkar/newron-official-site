import React from 'react';
import Hero from "@/components/Hero";
import LogoCarousel from '@/components/LogoCarousel';
import GenerativeAIUseCase from '@/components/GenerativeAIUseCase';
import ProductHighlight from "@/components/ProductHighlight";
import SectionWrapper from "@/components/background/SectionWrapper";
import FAQs from "@/components/FAQs";
import ComputerVisionUseCase from "@/components/ComputerVisionUseCase";
import Software3UseCase from "@/components/Software3UseCase";

const Page = () => {
    return (
        <div className="space-y-30">
           <div className={'section-gradient'}>
               <Hero/>
           </div>
            <LogoCarousel/>
            <ProductHighlight/>
            <GenerativeAIUseCase/>
            <SectionWrapper sectionName={"compVision"} className={'mt-10'}>
                <ComputerVisionUseCase/>
            </SectionWrapper>
            <SectionWrapper sectionName={"software3"}>
                <Software3UseCase/>
            </SectionWrapper>
            <FAQs/>
        </div>
    );
};

export default Page;