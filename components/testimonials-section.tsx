import Image from "next/image";

const TestimonialsSection = () => {
    const reviews = [
        {
            review: "OnlyUp Agency is the go-to for turning dreams into visual masterpieces. Their team's skill and dedication shine through every project. Exceptional creativity, exceptional results! ",
            clientName: "Mark Harris",
            clientRole: "CEO & Founder",
            clientCompanyName: "VisionCraft Co.",
            clientImage: "/c-1.jpg"
        },
        {
            review: "OnlyUp Agency – where creativity meets perfection. They brought our concept to life in ways we hadn't imagined. Professional, innovative, and truly outstanding!",
            clientName: "Ryan Foster",
            clientRole: "Founder",
            clientCompanyName: "DreamBuilders Inc.",
            clientImage: "/c-2.jpg"
        },
    ]

    return (
        <div className="flex flex-col gap-8 md:px-12 px-4 py-20 " >
            <div className="text-sm font-normal opacity-80 uppercase " >
                Testimonials
            </div>
            <div className=" lg:px-[14rem] md:px-16 py-10 flex lg:flex-row flex-col gap-6 " >
                {reviews.map((review) => (
                    <div key={review.clientName} className="bg-white rounded-xl md:p-12 p-6 " >
                        <p className="text-2xl opacity-70  " >
                            &quot; {review.review} &quot;
                        </p>
                        <div className="lg:mt-10 mt-14 flex" >
                            <Image
                                className="md:w-[4.5rem] md:h-[4.5rem] h-16 w-16 rounded-full object-cover"
                                alt={review.clientName}
                                src={review.clientImage}
                            />
                            <div className="flex flex-col text-sm gap-1 pl-8 my-auto" >
                                <div>{review.clientName}</div>
                                <div>{review.clientCompanyName}</div>
                                <div>{review.clientRole}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialsSection;