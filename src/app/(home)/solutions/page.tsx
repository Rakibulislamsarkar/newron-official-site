import React from 'react';
import VideoPDSolution from "@/components/VideoPDSolution";
import SolutionsHero from "@/components/SolutionsHero";
import CrediflowSolution from "@/components/CrediflowSolution";
import SolutionIntro from "@/components/SolutionIntro";
import SolutionSummary from "@/components/SolutionSummary";

const Page = () => {
    return (
        <div className={'space-y-30'}>
            <SolutionsHero/>
            <SolutionIntro/>
            <CrediflowSolution/>
            <VideoPDSolution/>
            <SolutionSummary />
        </div>
    );
};

export default Page;
