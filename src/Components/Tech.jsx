import Image from "next/image";
import tailwindImage from "../../public/images/tailwindcss-logotype.png";
import nextImage from "../../public/images/nextjslogo.png";
import reactImage from "../../public/images/react-logo.png";


function Techbox({text}){
    return(
        <div className="text-primary font-semibold text-xl p-3 border-2
             border-primary bg-white inline-block rounded-lg">
                <p>
                    {text}
                </p>
            </div>
    )
}

function Tech() {
    return ( 
        <div className="mt-10" id="tech">
            <p className="text-3xl text-primary text-center mb-5">
                Tech Stack
            </p>
            <div className="p-4 flex gap-5 items-center justify-center">
                <Techbox text="React"/>
                <Techbox text="Next.js"/>
                <Techbox text="Tailwindcss"/>

            </div>
        </div>
    );
}

export default Tech;