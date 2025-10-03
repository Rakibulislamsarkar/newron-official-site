import React from 'react';
import VideoPDSolution from "@/components/VideoPDSolution";
import Divider from "@/components/Divider";
import SolutionsHero from "@/components/SolutionsHero";
import CrediflowSolution from "@/components/CrediflowSolution";
import CommunityContribution from "@/components/CommunityContribution";
import SolutionIntro from "@/components/SolutionIntro";

const Page = () => {
    return (
        <div className={'space-y-24'}>
            <SolutionsHero/>
            <SolutionIntro />
            <CrediflowSolution/>
            <VideoPDSolution/>
        </div>
    );
};

export default Page;
