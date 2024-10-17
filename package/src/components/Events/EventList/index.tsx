import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Eventdata } from "@/app/api/data";
import { format } from "date-fns";

const EventList = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {Eventdata.map((item, index) => (
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
              <h4 className="text-18 font-medium mb-6 group-hover:text-primary">
                {item.title}
              </h4>
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

export default EventList;
