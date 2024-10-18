import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-cover text-white md:pt-40 md:pb-28 py-20 bg-no-repeat bg-hero-bg lg:mt-40 sm:mt-44 mt-20">
      <div className="container mx-auto lg:max-w-screen-xl px-4 grid grid-cols-12">
        <div className="bg-white dark:bg-darklight rounded-md p-10 lg:col-span-5 md:col-span-7 sm:col-span-10 col-span-12">
          <div className="flex justify-between mb-6">
            <div className="px-4 py-2 bg-midnight_text rounded">
              <p className="uppercase text-white text-xs font-semibold">
                Featured
              </p>
            </div>
            <p className="text-muted text-xs font-medium">193 days left</p>
          </div>
          <h3 className="text-midnight_text text-18 font-bold mb-6">
            Give small help to african moms who struggle
          </h3>
          <p className="text-muted text-16 mb-5">
            Fusce sollicitudin porta augue non porta. Vivamus ullamcorper
            tristique nisi, in mattis elit porta vitae.
          </p>
          <div className="grid grid-cols-2 border-t border-border mb-5">
            <div className="col-span-1 border-r border-border px-5 py-4">
              <p className="text-xs text-muted mb-1 ">raised</p>
              <h4 className="text-24 text-secondary">$65,360</h4>
            </div>
            <div className="col-span-1 px-5 py-4">
              <p className="text-xs text-muted mb-1 uppercase">goal</p>
              <h4 className="text-24 text-midnight_text">$124,500</h4>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="#"
              className="text-white bg-gradient-to-r from-error to-warning px-7 py-5 hover:from-white hover:to-white border border-transparent hover:border-error hover:text-error rounded"
            >
              Donate now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
