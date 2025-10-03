import React from 'react';
import Hero from "@/components/Hero";
import LogoCarousel from '@/components/LogoCarousel';
import GenerativeAIUseCase from '@/components/GenerativeAIUseCase';
import Divider from '@/components/Divider';
import ComputerVisionUseCase from "@/components/ComputerVisionUseCase";
import SectionWrapper from "@/components/background/SectionWrapper";
import Software3UseCase from "@/components/Software3UseCase";
import NvidiaCard from '@/components/NvidiaCard';

const Page = () => {
    return (
        <div className="space-y-24">
            <Hero/>
            <LogoCarousel/>
            <GenerativeAIUseCase/>
            <Divider/>
            <SectionWrapper sectionName={"compVision"}>
                <ComputerVisionUseCase/>
            </SectionWrapper>
            <Divider/>
            <SectionWrapper sectionName={"software3"}>
                <Software3UseCase/>
            </SectionWrapper>
            <NvidiaCard/>
        </div>
    );
};

export default Page;