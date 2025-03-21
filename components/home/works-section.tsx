"use client";
import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

type Steps = {
    icon: React.ReactNode;
    label: string;
    description: string;
};

const steps: Steps[] = [
    {
        icon: <FileText size={48} strokeWidth={1.5} />,
        label: "Upload PDF",
        description: "Simply upload your PDF, and we’ll handle the rest.",
    },
    {
        icon: <BrainCircuit size={48} strokeWidth={1.5} />,
        label: "AI Analysis",
        description: "Our AI extracts text, images, and key elements intelligently.",
    },
    {
        icon: <FileOutput size={48} strokeWidth={1.5} />,
        label: "Interactive Summary",
        description: "Get an interactive, reader-friendly version of your PDF.",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden bg-white text-gray-900 py-16 lg:py-24">
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-30 blur-3xl"
            >
                <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-100 to-cyan-50"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, \
                            80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, \
                            45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, \
                            76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-lg font-semibold text-teal-600 uppercase tracking-wider">
                    How It Works
                </h2>
                <h3 className="text-4xl font-bold max-w-2xl mx-auto leading-tight">
                    Transform PDFs into an interactive, easy-to-read experience
                </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
                {steps.map((step, idx) => (
                    <div className="relative flex items-stretch">
                        <StepItem key={idx} {...step} index={idx} />

                        {idx < steps.length -1 && (
                        <div className="absolute hidden md:block top-1/2 -right-4 transform -translate-y-1/2 z-10">
                            <MoveRight size={32} strokeWidth={1.5} className="text-emerald-400" />
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function StepItem({ icon, label, description, index }: Steps & { index: number }) {
    return (
        <motion.div
            className="group relative p-8 rounded-xl bg-white hover:border-teal-500 transition-all duration-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex flex-col items-center text-center gap-4">
                <div className="h-20 w-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 transition-all duration-300 group-hover:from-teal-200">
                    <div className="text-teal-500">{icon}</div>
                </div>

                <h4 className="text-xl font-semibold">{label}</h4>

                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}
