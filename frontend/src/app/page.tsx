import { Mode } from "@/components/Mode";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-24 lg:py-32">
    <div className="container py-5 lg:py-10">
      <div className="max-w-2xl text-center mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Atm Simulator
          </h1>
        <div className="mt-5 max-w-3xl p-5">
          <p className="text-xl text-muted-foreground">
            A Python Internship project on ATM Simulator using 
            <span className="font-bold"> Next.js, FastAPI, Tailwind CSS, and ShadCN </span> 
            <span>for </span>
            <a className="text-blue-600 font-extrabold hover:text-slate-500" target="_blank" 
              href="https://www.linkedin.com/company/octanetservices" rel="noopener noreferrer">
               OctaNet Services Pvt Ltd .
            </a>
          </p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <Link href={"/dashboard"}>
              <Button size={"lg"} className="bg-green-500 hover:-translate-y-2">
                <p className="font-bold">Use ATM</p>
              </Button>
          </Link>
          <Link href={"/learnmore"}>
              <Button size={"lg"} variant={"outline"} className="hover:-translate-y-2" >
                <p className="font-bold">Learn more</p>
              </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
    
}
