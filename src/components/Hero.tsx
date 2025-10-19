import HeroTagline from "./ui/HeroTagline";
import DottedBadge from "./ui/DottedBadge";
import PrimaryButton from "./ui/PrimaryButton";
import Badge from "./ui/Badge";
import Image from "next/image";
import { Sparkles, Users, TrendingUp, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[1280px] w-full overflow-hidden flex justify-center">
            <section className="absolute inset-0 z-0 ">
                <span className="block absolute bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-3xl h-35 w-35 rounded-full top-16 -left-0 -translate-x-1/2 animate-pulse"></span>
                <span className="block absolute bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-3xl h-35 w-35 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></span>
                <span className="block absolute bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-3xl h-35 w-35 rounded-full bottom-0 right-0 translate-x-1/2 animate-pulse"></span>
            </section>

            <section className="relative z-10 top-35 flex flex-col items-center px-6">
                <DottedBadge icon={<Sparkles color="#919AE8" size={15} />} >AI-Powered Analysis</DottedBadge>
                <HeroTagline />
                <p className=" text-slate-500 dark:text-slate-400 text-[17px] leading-relaxed text-center mt-5">
                    <span className="block">Perfect for job seekers improving their resumes and businesses streamlining hiring.</span>
                </p>

                <PrimaryButton className="h-14 w-full mt-5 text-[18px] rounded-xl">Get Started</PrimaryButton>
                <button className="h-14 w-full mt-5 text-[18px] font-medium rounded-xl border-2 border-gray-600/10 dark:active:border-blue-400/10 active:border-0 active:bg-gray-600/10 active:text-gray-600 dark:active:bg-blue-400/10 dark:active:text-gray-300 active:scale-95 transition-all duration-200 ease-in-out">Screen Applicants</button>
                
                <Image
                    src="/ResumeResult.png"
                    alt="Hero Image"
                    height={800}
                    width={600} 
                />

                <Badge 
                icon={<Users className="h-6 w-6 text-[#364153] dark:text-white" />} 
                title="Free"
                description="Free Analysis"
                className="bg-gradient-to-r from-green-500 to-emerald-500"
                />

                <Badge 
                icon={<TrendingUp className="h-6 w-6 text-[#364153] dark:text-white" />} 
                title="40%"
                description="Avg. Improvement"
                className="bg-gradient-to-r from-blue-500 to-cyan-500"
                />

                <Badge 
                icon={<Star className="h-6 w-6 text-[#364153] dark:text-white" />} 
                title="Free"
                description="Free Analysis"
                className="bg-gradient-to-r from-yellow-500 to-orange-500"
                />
            </section>
        </section>
    );
}