"use client"
import { Reviews } from "@/app/api/data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings = {
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="py-28 bg-grey ">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <h2 className="text-30 font-medium mb-3 text-center">
                    Check what our Customers are Saying
                </h2>
                <p className="text-16 text-center text-muted lg:max-w-60% mx-auto">
                    You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time
                </p>
                <div className="mt-20">
                    <Slider {...settings}>
                        {Reviews.map((item, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-white pt-12 pb-6 pr-16 pl-10 rounded-md relative">
                                    <div className="absolute bg-gradient-to-r from-primary to-secondary py-2 pr-6 pl-24 top-11 left-0 flex">
                                        <div className="relative">
                                            <Image
                                                src={item.clientImg}
                                                alt={item.clientName}
                                                width={60}
                                                height={60}
                                                className="rounded-full absolute -top-4 -left-20"
                                            />
                                            <p className="text-white text-18 ">
                                                {item.clientName}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-18 text-muted mt-24">
                                        {item.review}
                                    </p>
                                    <h5 className="text-16 pt-7 mt-7 relative before:content-[''] before:absolute before:w-28 before:h-px before:bg-border before:top-0 before:left-0">
                                        {item.post}
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;