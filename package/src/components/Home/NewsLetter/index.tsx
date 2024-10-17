import Link from "next/link";
import { getAllPosts } from "@/utils/markdown";
import BlogCard from "./blogCard";

const Newsletter = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    return (
        <section className="py-28">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-44">
                    <div className="">
                        <div className="mb-8">
                            <p className="text-16 text-primary mb-3">
                                newsletter
                            </p>
                            <h2 className="text-30 font-medium mb-6">
                                Stay informed about new and upcoming causes
                            </h2>
                            <p className="text-16 text-muted">
                                It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <form>
                            <div className="mb-6">
                                <input type="text" placeholder="Your Name" className="w-full p-4 border border-border rounded" />
                            </div>
                            <div className="mb-6">
                                <input type="text" placeholder="Your Name" className="w-full p-4 border border-border rounded" />
                            </div>
                            <div className="flex justify-center mb-6">
                                <button type="submit" className="text-white uppercase bg-gradient-to-r from-error to-warning px-7 py-5 hover:from-white hover:to-white border border-transparent hover:border-error hover:text-error rounded w-full">
                                    Subscribe
                                </button>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <input type="checkbox" name="condition" id="condition" />
                                <label htmlFor="condition" className="text-16 text-muted">I am agree with the terms and conditions</label>
                            </div>
                        </form>
                    </div>
                    <div className="lg:mt-0 mt-8">
                        <div className="flex justify-between items-center border-b border-border pb-6 mb-10">
                            <h4 className="text-16 mb-0">
                                LATEST NEWS AT endeawor
                            </h4>
                            <Link href="#" className="text-error hover:text-warning text-16">
                                view all
                            </Link>
                        </div>
                        {posts.slice(0, 3).map((blog, i) => (
                            <div key={i} className="mb-10" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;