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
            <div className=" px-[14rem] py-10 flex gap-6 " >
                {reviews.map((review) => (
                    <div key={review.clientName} className="bg-white rounded-xl p-12" >
                        <p className="text-2xl  " >
                            {review.review}
                        </p>
                        <div className="mt-6 flex" >
                            <Image
                                className="w-20 h-20 rounded-full object-cover"
                                alt={review.clientName}
                                src={review.clientImage}
                            />
                            <div className="flex flex-col gap-1 pl-8 my-auto" >
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