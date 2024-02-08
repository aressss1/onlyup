const AboutSection = () => {
    return (
        <div className="md:px-12 px-4 py-20 flex flex-col gap-8 text-left" >
            <div className="text-sm font-normal opacity-80 uppercase " >
                About Us
            </div>
            <div className="flex leading-[1.2] lg:text-5xl md:text-3xl text-2xl lg:w-[57rem] md:w-[39rem]  text-black " >
                We&apos;re a London-based creative agency dedicated to transforming visions into artful reality, with over 200+ satisfied clients.
            </div>
            <div className="lg:text-2xl text-base lg:w-[47rem] md:w-[29rem]  " >
                At our creative agency, we specialize in turning your unique ideas into captivating visual realities. With a passion for innovation, we bring your concepts to life, crafting designs that not only meet but exceed your expectations
            </div>
        </div>
    );
}

export default AboutSection;