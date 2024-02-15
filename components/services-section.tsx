import { ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            type: "UX Consultant"
        },
        {
            type: "Product Interface Design"
        },
        {
            type: "Branding"
        },
        {
            type: "Marketing Design"
        },
        {
            type: "Mockup Design"
        },

    ]

    return (
        <div id="services" className="flex flex-col text-left lg:gap-16 gap-12 py-12 md:px-12 px-4" >
            <div className="text-sm font-normal opacity-80 uppercase " >
                Services
            </div>
            <div className="flex flex-col lg:gap-14 gap-12" >
                {services.map((service) => (
                    <div key={service.type} className="group" >
                        <div
                            className="lg:text-6xl md:text-4xl text-xl text-black group-hover:text-[#ef4242] flex items-center gap-2" 
                        >
                            {service.type}
                            <ArrowUpRight
                                className=" group-hover:text-[#ef4242] opacity-0 group-hover:opacity-100 lg:w-20 lg:h-20 md:w-16 w-8 h-12 stroke-[1.5] " 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesSection;