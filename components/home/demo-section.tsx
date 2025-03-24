import { Pizza } from "lucide-react";

export default function DemoSection() {
    return (
        <section className="relative">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div></div>

                <div className="flex flex-col items-center justify-center space-y-4
                    text-center py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 border
                        border-gray-500/20 mb-4">
                    <Pizza className="w-6 h-6 text-emerald-500" />
                    </div>

                    <div className="text-center mb-16">
                    <h3 className="text-2xl max-w-2xl mx-auto px-4 sm:px-6 font-bold text-gray-900">
                        Watch how Sommaire transforms 
                        <span className="bg-linear-to-r from-blue-500 to-blue-700
                        bg-clip-text text-transparent"> this Nest.js course
                        PDF an easy-to-read</span>  and interactive experience.
                    </h3>
                    </div>

                    <div className="flex flex-col items-center justify-center px-2 sm:px-4
                        lg:px-6 ">
                        {/* Summary Viewer  */}
                    </div>
                </div>
            </div>
        </section>
    );
}