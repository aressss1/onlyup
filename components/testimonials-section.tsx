import Image from "next/image";

const TestimonialsSection = () => {
    const reviews = [
        {
            review: "I feel clearer not only on our aesthetic, but on my company's mission for having worked with Stay In Touch. ",
            clientName: "Micheal Jones",
            clientRole: "CEO & Founder",
            clientCompanyName: "Upright",
            clientImage: "/c-1.jpg"
        },
        {
            review: "I feel clearer not only on our aesthetic, but on my company's mission for having worked with Stay In Touch. ",
            clientName: "Abby Jones",
            clientRole: "Founder",
            clientCompanyName: "Star Foundation",
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
                            {review.review}
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