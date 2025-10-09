import React from 'react';
import CustomAccordion from "@/components/Accordion";

const accordionData = [
    {
        id: 1,
        title: "Flexible and Secure Deployment Options",
        content:
            "We prioritise your data security and privacy by providing a range of hosting options. Choose from private cloud, secure partnerships with trusted providers such as AWS, Oracle, and Google, or opt for Newron’s professionally managed models. Full control and utmost security - tailored to your needs."
    },
    {
        id: 2,
        title: "Tailored Models for Your Needs",
        content:
            "We offer a bespoke service to customise AI models based on your enterprise requirements. With a transparent process, we fine-tune the models to align perfectly with your data and specific needs, ensuring an optimised solution that delivers the best results."
    },
    {
        id: 3,
        title: "Superior Customer Support for Your Success",
        content:
            "Recognising the novelty of creating applications based on language models, we provide unrivalled customer support. Our dedicated support and development teams are available to collaborate closely with you as needed, ensuring a smooth and successful development process."
    },
    {
        id: 4,
        title: "Seamless Integration with Existing Systems",
        content:
            "Newron AI easily integrates with your existing software and workflows. Whether you’re using CRM tools, data analytics platforms, or cloud storage, our APIs and connectors ensure quick and reliable interoperability with minimal setup."
    },
    {
        id: 5,
        title: "Continuous Learning and Model Improvement",
        content:
            "Our models evolve with your business. We continuously refine and retrain models based on performance metrics and new data, ensuring your AI solutions remain accurate, relevant, and ahead of industry standards."
    },
    {
        id: 6,
        title: "Scalable Architecture for Enterprise Growth",
        content:
            "From startups to global enterprises, Newron’s infrastructure scales effortlessly with your organisation. You can start small and expand confidently, knowing the same high-performance AI backbone supports your growth at every stage."
    }
];


const FaQs = () => {
    return (
        <div className={'bg-background-secondary py-20 sm:py-40'}>
            <article className={"flex flex-col md:flex-row gap-8 md:gap-16 justify-between mx-auto max-w-8xl px-4 md:px-6 lg:px-10"}>
                <div className={'flex flex-col gap-8'}>
                    <h2 className={"text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground-secondary"}>
                        Custom LLM <br/>for each business
                    </h2>
                    <p className={" text-base max-w-xl text-foreground-accent"}>
                        Every business is unique — your LLM should be too. Our custom-tuned models deliver up to 85% more accuracy than general models.
                    </p>
                    <div className={"flex items-center flex-wrap gap-2 lg:gap-4 text-sm"}>
                        {["Retail", "Logistics", "Legal", "Healthcare", "Marketing",].map(text => {
                            return <div key={text}
                                        className={"px-6 py-3 md:px-8 text-foreground-secondary border border1 text-xs sm:text-sm border-neutral-600 rounded-full"}>
                                {text}
                            </div>
                        })}
                    </div>
                </div>
                <div className={'max-w-xl'}>
                    <CustomAccordion data={accordionData} defaultExpanded={1}/>
                </div>
            </article>
        </div>
    );
};

export default FaQs;