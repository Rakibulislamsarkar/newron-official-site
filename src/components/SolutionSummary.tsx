import React from 'react';

const SolutionSummary = () => {
    return (
        <div className="flex flex-col space-y-8 mx-auto max-w-8xl px-4 md:px-6 lg:px-10">
            <div className={'space-y-2'}>
                <h3 className="text-2xl md:text-3xl font-medium">
                    Trusted Across Financial Institutions
                </h3>
                <p className="text-zinc-400 max-w-2xl">
                    From large banks to specialized lenders, Crediflow adapts to your unique lending requirements
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                <div className="border border-blue-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                    <h4 className="text-lg font-medium mb-2">Commercial Lending</h4>
                    <p className="text-zinc-400 text-sm">
                        Streamline business loan processing with automated financial analysis and risk assessment
                    </p>
                </div>
                <div className="border border-blue-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                    <h4 className="text-lg font-medium mb-2">Retail Banking</h4>
                    <p className="text-zinc-400 text-sm">
                        Process personal loans, mortgages, and credit applications with speed and precision
                    </p>
                </div>
                <div className="border border-blue-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                    <h4 className="text-lg font-medium mb-2">NBFCs</h4>
                    <p className="text-zinc-400 text-sm">
                        Scale operations efficiently with automated compliance and document verification
                    </p>
                </div>
                <div className="border border-blue-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                    <h4 className="text-lg font-medium mb-2">Microfinance</h4>
                    <p className="text-zinc-400 text-sm">
                        Handle high-volume applications with fast turnaround and risk management
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SolutionSummary;