import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

interface EventProps {
  title?: string;
  detail?: string;
  category?: string;
  location?: string;
  eventdate?: string;
  duration?: string;
  type?: string;
  entrants?: string;
}

const EventDetails: FC<EventProps> = ({
  title,
  detail,
  category,
  location,
  eventdate,
  duration,
  type,
  entrants,
}) => {
  const formattedDate = eventdate
    ? format(new Date(eventdate), "MMM dd, yyyy")
    : "Date not available";
  return (
    <section className="sm:mt-28 pt-28 sm:pb-28 pb-12">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="lg:col-span-9 col-span-12">
            <h2 className="text-30 font-medium text-darktext">{title}</h2>
            <p className="text-muted text-16 my-8">{detail}</p>
            <Link
              href="#"
              className="text-white bg-gradient-to-r from-error to-warning px-7 py-5 hover:from-transparent hover:to-transparent border border-transparent hover:border-error hover:text-error rounded"
            >
              sign up
            </Link>
          </div>
          <div className="lg:col-span-3 md:col-span-5 sm:col-span-6 col-span-12 lg:mt-0 mt-8">
            <h4 className="text-darktext text-18 font-medium mb-6">Info</h4>
            <div className="pb-6 border-b border-border mb-6">
              <table>
                <tr className="">
                  <td>
                    <h5 className="text-muted text-16 pb-4">Category:</h5>
                  </td>
                  <td>
                    <p className="text-muted text-16 pb-4 pl-4">{category}</p>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <h5 className="text-muted text-16 pb-4">Location:</h5>
                  </td>
                  <td>
                    <p className="text-muted text-16 pb-4 pl-4">{location}</p>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <h5 className="text-muted text-16 pb-4">Date:</h5>
                  </td>
                  <td>
                    <p className="text-muted text-16 pb-4 pl-4">
                      {formattedDate}
                    </p>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <h5 className="text-muted text-16 pb-4">Duration:</h5>
                  </td>
                  <td>
                    <p className="text-muted text-16 pb-4 pl-4">{duration}</p>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <h5 className="text-muted text-16 pb-4">Type:</h5>
                  </td>
                  <td>
                    <p className="text-muted text-16 pb-4 pl-4">{type}</p>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <h5 className="text-muted text-16 pb-4">Entrants:</h5>
                  </td>
                  <td>
                    <p className="text-muted text-16 pb-4 pl-4">{entrants}</p>
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-18 font-medium text-darktext">Share</h5>
              <div className="flex items-center gap-4">
                <Link href="#">
                  <Image
                    src="/images/icons/icon-facebook.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/icon-instagram.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/icon-linkedin.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/icon-twitter.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
