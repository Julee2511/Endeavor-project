import React from 'react';
import BlogCard from '@/components/SharedComponent/Blog/blogCard';
import { getAllPosts } from "@/utils/markdown";

const BlogList: React.FC = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

    return (
        <section className="flex flex-wrap justify-center py-24 dark:bg-darkmode" id="blog">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
                    {posts.map((blog, i) => (
                        <div key={i} className="w-full" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogList;