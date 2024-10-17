"use client";
import React from "react";
import { CauseData } from "@/app/api/data";
import { useParams } from "next/navigation";
import FormPart from "@/components/Cause/CauseDetails/formPart";
import TextPart from "@/components/Cause/CauseDetails/textPart";
import Volunteer from "@/components/SharedComponent/Volunteer";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react"

const Cause = () => {

    const { slug } = useParams();

    // Find the blog post by slug
    const item = CauseData.find((item) => item.slug === slug);
    if (!item) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <section className="pt-44 py-24 dark:bg-darkmode">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="grid grid-cols-12">
                        <div className="col-span-9">
                            <div className="w-51 h-25 rounded-lg overflow-hidden mb-8">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={870}
                                    height={750}
                                    className="w-full h-full"
                                />
                            </div>
                            <h1 className="text-40 font-semibold mb-8">
                                {item.title}
                            </h1>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="pr-4 border-r border-border">
                                    <p className="uppercase text-12 text-muted mb-1">
                                        raised
                                    </p>
                                    <h4 className="text-24 text-midnight_text ">
                                        {item.raised}
                                    </h4>
                                </div>
                                <div>
                                    <p className="uppercase text-12 text-muted mb-1">
                                        Goal
                                    </p>
                                    <h4 className="text-24 text-midnight_text ">
                                        {item.goal}
                                    </h4>
                                </div>
                            </div>
                            <div className="pb-8 mb-8 border-b border-border">
                                <div className="w-full bg-light_grey rounded-full h-4 overflow-hidden">
                                    <div className="w-60% bg-gradient-to-r from-primary to-secondary relative z-1 rounded-full h-full">
                                    </div>
                                </div>
                            </div>
                            <FormPart />
                            <TextPart />
                        </div>
                        <div className="col-span-3">
                            <h4 className="text-18 font-medium mb-6">
                                Search
                            </h4>
                            <div className="relative">
                                <input type="text" placeholder="Search ..." className="text-16 px-4 py-5 border border-border rounded-md w-full" />
                                <span className="text-muted absolute right-5 top-5">
                                    <Icon
                                        icon="tabler:search"
                                        width="30"
                                        height="30"
                                    />
                                </span>
                            </div>
                            <div className="mt-16">
                                <h4 className="text-18 font-medium mb-6">
                                    Categories
                                </h4>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <Link href="#" className="text-16 text-muted hover:text-primary">Chlidren</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-16 text-muted hover:text-primary">Development</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-16 text-muted hover:text-primary">Education</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-16 text-muted hover:text-primary">Environment</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-16 text-muted hover:text-primary">Healthcare</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-16 text-muted hover:text-primary">Programs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Volunteer />
        </>
    );
};

export default Cause;