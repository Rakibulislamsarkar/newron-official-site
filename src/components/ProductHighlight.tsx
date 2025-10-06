import React from 'react';
import GlassCard from "@/components/GlassCard";

const ProductHighlight = () => {
    return (
        <GlassCard
            className="min-h-[350px] sm:py-8 px-4 md:px-12 flex items-center justify-center backdrop-blur-md bg-white/10 rounded-2xl shadow-lg">
            <article className="sm:text-center flex flex-col items-center gap-6 justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
                    Delivering tailored LLM&apos;s which solve
                    real world problems
                </h2>
                <p className="max-w-3xl text-zinc-300 text-base">
                    Revolutionizing Enterprise Solutions with Tailored Language Models, Secure Deployments,
                    and Unparalleled Support for Solving Real-World Challenges in the AI-driven Era.
                </p>
            </article>
        </GlassCard>
    );
};

export default ProductHighlight;