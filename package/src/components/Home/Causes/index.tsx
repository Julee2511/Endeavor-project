"use client"
import { CauseData } from "@/app/api/data";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Causes = () => {
    const settings = {
        autoplay: false,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                },
            },
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
                <h2 className="text-center text-30 font-medium mb-3">
                    Causes where need your help
                </h2>
                <p className="text-16 text-muted text-center">
                    You can relay on our amazing features list and also our customer services will<br className="lg:block hidden" /> be great experience for you without doubt and in no-time
                </p>
                <div className="mt-20">
                    <Slider {...settings}>
                        {CauseData.slice(0, 3).map((item, index) => (
                            <Link href={`/cause/${item.slug}`} key={index} className="px-4">
                                <div className="bg-white group">
                                    <div className="overflow-hidden ">
                                        <Image
                                            src={item.image}
                                            alt="image"
                                            width={350}
                                            height={250}
                                            className="w-full h-auto group-hover:scale-110 duration-300"
                                        />
                                    </div>
                                    <div className="px-8 pt-8 pb-6 shadow-cause-shadow">
                                        <h4 className="text-18 font-bold group-hover:text-primary mb-4">
                                            {item.title}
                                        </h4>
                                        <p className="text-muted text-16 pb-8 border-b-2 border-border relative after:content-[''] after:absolute after:w-70% after:h-0.5 after:-bottom-0.5 after:left-0 after:bg-gradient-to-r after:from-primary after:to-secondary">
                                            {item.text}
                                        </p>
                                        <div className="flex gap-4 mt-4">
                                            <div className="pr-4 border-r-2">
                                                <h4 className="uppercase text-muted text-xs mb-1">
                                                    raised
                                                </h4>
                                                <h5 className="text-24 ">
                                                    {item.raised}
                                                </h5>
                                            </div>
                                            <div className="">
                                                <h4 className="uppercase text-muted text-xs mb-1">
                                                    goal
                                                </h4>
                                                <h5 className="text-24 ">
                                                    {item.goal}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Causes;