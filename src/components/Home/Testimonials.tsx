import { imgPrefix } from "../../utils/constants";

interface TestimonialCardProps {
    image: string;
    description: string;
    name: string;
    position: string;
}

export default function Testimonials() {
    return (
        <div
            id="testimonials-section"
            className="py-20 sm:py-0 sm:h-screen flex justify-center items-center"
        >
            <div className="w-[80%] sm:w-[70%] flex flex-col justify-center items-center gap-15">
                <h2 className="sm:text-2xl text-lg text-gray-550 font-fraunces font-bold text-center tracking-[0.5rem]">
                    {"CLIENT TESTIMONIALS"}
                </h2>
                <div className="flex flex-col gap-15 sm:grid sm:grid-cols-3 sm:gap-10">
                    <TestimonialCard
                        image="image-emily.jpg"
                        description="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                        name="Emily R."
                        position="Marketing Director"
                    />
                    <TestimonialCard
                        image="image-thomas.jpg"
                        description="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                        name="Thomas S."
                        position="Chief Operating Officer"
                    />
                    <TestimonialCard
                        image="image-jennie.jpg"
                        description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                        name="Jennie F."
                        position="Business Owner"
                    />
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({
    image,
    description,
    name,
    position,
}: TestimonialCardProps) {
    return (
        <div className="gap-7 sm:gap-15 flex flex-col justify-center items-center">
            <img
                src={`${imgPrefix}/${image}`}
                alt={name}
                className="rounded-full w-20 h-20 object-cover"
            />
            <p className="text-center text-gray-600 font-barlow font-medium text-base/8">
                {description}
            </p>
            <div className="flex flex-col justify-center items-center gap-1.5">
                <h3 className="text-gray-950 font-fraunces font-bold text-2xl">
                    {name}
                </h3>
                <p className="text-gray-400 font-barlow font-medium text-sm">
                    {position}
                </p>
            </div>
        </div>
    );
}
