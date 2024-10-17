import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { footerLinks } from "@/app/api/data";

const Footer: FC = () => {
  return (
    <footer className="pt-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-16 border-b border-border">
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <Logo />
            <div className="mt-6">
              <p className="text-14 font-light text-muted mb-6">
                You can relay on our amazing features list and also our customer services will be great experience.
              </p>
              <p className="text-14 font-light text-muted mb-0">
                our amazing features list and also our customer services is great.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <div className="lg:pl-10">
              <div className="flex items-start mb-8 gap-4">
                <Image
                  src="/images/icons/icon-pin.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <h5 className="text-14 text-midnight_text mb-4">
                    Endeavor Head Office
                  </h5>
                  <p className="text-14 text-muted">
                    134, Cornish Building, Some Near by area, New York, USA - 34556
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8 gap-4">
                <Image
                  src="/images/icons/icon-phone.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <Link href="#" className="text-14 text-midnight_text mb-0">
                    1 (888) 123 4567
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/icons/icon-mail.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <div className="">
                  <Link href="#" className="text-14 text-midnight_text mb-0">
                    info@endeavor.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h4 className="text-16 text-midnight_text mb-4">
              Services we Offer
            </h4>
            <ul className="pl-5">
              {footerLinks.slice(0, 5).map((item, index) => (
                <li key={index} className="mb-5">
                  <Link href="#" className="text-14 relative text-muted hover:text-primary hover:before:border-primary before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:top-1 before:-left-5 before:rotate-45">
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <ul className="pl-5 lg:mt-10 md:mt-0 sm:mt-10 ">
              {footerLinks.slice(5, 10).map((item, index) => (
                <li key={index} className="mb-5">
                  <Link href="#" className="text-14 relative text-muted hover:text-primary hover:before:border-primary before:content-[''] before:absolute before:w-2 before:h-2 before:border-t-2 before:border-r-2 before:top-1 before:-left-5 before:rotate-45">
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;