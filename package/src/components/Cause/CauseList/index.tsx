import Link from "next/link";
import { CauseData } from "@/app/api/data";
import Image from "next/image";

const CauseList = () => {
    return (
        <section className="py-28">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {CauseData.map((item, index) => (
                        <Link href={`/cause/${item.slug}`} key={index}>
                            <div className="bg-white group h-full flex flex-col">
                                <div className="overflow-hidden flex-1">
                                    <Image
                                        src={item.image}
                                        alt="image"
                                        width={350}
                                        height={250}
                                        className="w-full h-auto group-hover:scale-110 duration-300"
                                    />
                                </div>
                                <div className="px-8 pt-8 pb-6 shadow-cause-shadow flex-1 flex flex-col justify-between">
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
                </div>
            </div>
        </section>
    )
}

export default CauseList;