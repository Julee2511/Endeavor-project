import { Eventdata } from "@/app/api/data";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { format } from "date-fns";

const FutureEvents = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <h2 className="text-30 font-medium">Upcoming Events Near You</h2>
          <p className="text-16 text-muted mx-auto lg:max-w-60%">
            You can relay on our amazing features list and also our customer
            services will be great experience for you without doubt and in
            no-time
          </p>
        </div>
        <div className="mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {Eventdata.slice(0, 3).map((item, index) => (
            <Link key={index} href={`/events/${item.slug}`} className="group">
              <div className="relative overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt="image"
                  width={350}
                  height={200}
                  className="w-full h-auto group-hover:scale-110 duration-300"
                />
                <div className="px-3 py-2 bg-gradient-to-r from-primary to-secondary absolute z-1 top-3 right-3 rounded">
                  <p className="text-white text-14 mb-0 text-center">
                    <span className="block ">
                      {format(new Date(item.date), "MMM")}
                    </span>
                    <span className="block text-24">
                      {format(new Date(item.date), "dd")}
                    </span>
                  </p>
                </div>
              </div>
              <h4 className="text-18 font-medium mb-6">{item.title}</h4>
              <p className="text-muted text-16 mb-6">{item.text}</p>
              <h5 className="text-error hover:text-warning text-16 font-medium flex gap-3 items-center w-fit">
                Learn More
                <span>
                  <Icon
                    icon="solar:arrow-right-linear"
                    width="20"
                    height="20"
                  />
                </span>
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureEvents;
