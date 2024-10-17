import { helpdata } from "@/app/api/data";
import Image from 'next/image';

const Help = () => {
    return (
        <section className="py-28">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <div className="text-center">
                    <h2 className="text-30 mb-3 font-medium">
                        How can you help us?
                    </h2>
                    <p className="text-muted text-16">
                        You can relay on our amazing features list and also our customer services will<br className="lg:block hidden" /> be great experience for you without doubt and in no-time
                    </p>
                    <div className="mt-20 grid grid-cols-12 gap-8">
                        {helpdata.map((item, index) => (
                            <div key={index} className="md:col-span-4 sm:col-span-6 col-span-12 text-center flex flex-col gap-5 justify-center">
                                <div className="flex justify-center">
                                    <Image
                                        src={item.icon}
                                        alt="icon"
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <h4 className="text-18 font-medium">
                                    {item.title}
                                </h4>
                                <p className="text-muted text-16">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Help;