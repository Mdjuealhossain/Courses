"use client";
import React from "react";
import Link from "next/link";

import Blog from "@/widgets/blog";
import BlogBanner from "@/widgets/blogBanner";
import DetailsContactForm from "@/widgets/DetailsContactForm";
import HyperlinkTable from "@/widgets/HyperlinkTable";
import MiddleBlog from "@/widgets/MiddleBlog";
import { RootSection, Section } from "@/components/Section";
import { blogDetails } from "@/app/staticData/blog";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import CommentsSection from "@/widgets/CommentsSection";

const BlogDetails = () => {
    const handleComments = (comments) => {
        const modifcomm = {
            id: blogDetails.comments.length + 1,
            name: comments.name,
            img: "/assets/images/recentblog.webp",
            alt: "user",
            time: "Spetember 15, 2022 AT 07:12 PM",
            comment: comments.comment,
            reply: [],
        };
        blogDetails.comments.push(modifcomm);
    };

    const handleReply = (reply) => {
        console.log("id", blogDetails.comments[reply.id].reply);
        const modifcomm = {
            id: reply.id + 1,
            name: "user name",
            img: "/assets/images/recentblog.webp",
            alt: "user",
            time: "Spetember 15, 2022 AT 07:12 PM",
            comment: reply.comment,
        };
        blogDetails.comments[reply.id].reply.push(modifcomm);

        console.log("dsjfbsdjhvbfhvbfhvbvhfb", reply.id);
    };

    return (
        <RootSection>
            <Section id="blogbanner">
                <div className=" container mx-auto px-4 max-w-2xl w-full">
                    <BlogBanner title={blogDetails.title} expertist={blogDetails.expertist} img={blogDetails.img} alt={blogDetails.alt} catagory={blogDetails.catagory} publish={blogDetails.publish} />
                </div>
            </Section>
            <Section id="allDetails" bgColor="bg-white">
                <div className=" flex container flex-col md:flex-row mx-auto px-4 max-w-2xl md:py-100 py-12w-full gap-6">
                    <div className="md:w-1/4 w-full h-full md:sticky md:top-16">
                        <HyperlinkTable HyperlinkTableData={blogDetails.HyperlinkTableData} />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <MiddleBlog tableData={blogDetails.tableData} />
                    </div>
                    <div className="md:w-1/4 w-full h-full md:sticky md:top-8 hidden md:inline">
                        <DetailsContactForm tags={blogDetails.tags} />
                    </div>
                </div>
            </Section>
            <Section id="comments" bgColor="bg-secondary_bg">
                <div className="  container mx-auto md:px-4 max-w-xl w-full md:py-100 py-12">
                    <CommentsSection handleComments={handleComments} handleReply={handleReply} comments={blogDetails.comments} />
                </div>
            </Section>
            <Section id="articals">
                <div className="  container mx-auto px-4 max-w-2xl md:py-0 py-12 w-full">
                    <ScrollAnimatedSection>
                        <h2 className="text-H2 text-center md:text-start font-bold mb-6">Related Articles</h2>
                    </ScrollAnimatedSection>
                    <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link href="/blog/slug">
                            <Blog img="/assets/images/blog.jpeg" catagory="software development" date="Oct 24, 2024" title="The Importance of Software Development Consulting for Every Business" />
                        </Link>
                        <Link href="/blog/slug">
                            <Blog img="/assets/images/blog.jpeg" catagory="software development" date="Oct 24, 2024" title="The Importance of Software DevelopmentF" />
                        </Link>
                        <Link href="/blog/slug">
                            <Blog img="/assets/images/blog.jpeg" catagory="software development" date="Oct 24, 2024" title="The Importance of Software Development Consulting for Every Business" />
                        </Link>
                    </div>
                </div>
            </Section>
            <Section id="topics" bgColor="bg-white">
                <div className="  container mx-auto px-4 max-w-2xl md:py-100 py-12 w-full">
                    <ScrollAnimatedSection>
                        <h2 className="text-H2 font-bold mb-6 text-center">Explor More Topic </h2>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection delay={100}>
                        <p className=" text-secondary md:mb-16 mb-6 text-center ">Ready to brush up on something new? We have got more to read right this way.</p>
                    </ScrollAnimatedSection>
                    <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
                        {blogDetails.topic.map((topi) => (
                            <Link key={topi.id} href="#" className=" px-30px py-5 bg-secondary_bg hover-bg-left-to-right">
                                <h5 className=" text-H5 font-medium hover-content">{topi.text}</h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </RootSection>
    );
};

export default BlogDetails;
