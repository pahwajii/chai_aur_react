import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userdata);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            setLoading(true);
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
                setLoading(false);
            }).catch(() => {
                navigate("/");
                setLoading(false);
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    if (loading) {
        return (
            <div className="py-12 px-6 lg:px-12 xl:px-16">
                <div className="animate-pulse space-y-8">
                    <div className="h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl"></div>
                    <div className="h-12 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl w-3/4"></div>
                    <div className="h-6 bg-gradient-to-r from-accent/20 to-muted/20 rounded-xl w-1/2"></div>
                    <div className="space-y-4">
                        <div className="h-6 bg-gradient-to-r from-muted/20 to-primary/20 rounded-xl"></div>
                        <div className="h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl w-5/6"></div>
                        <div className="h-6 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl w-4/6"></div>
                    </div>
                </div>
            </div>
        );
    }

    return post ? (
        <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
            <div className="max-w-5xl mx-auto">
                {/* Featured Image */}
                <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
                    {post.featuredImage ? (
                        <img
                            src={appwriteService.getFileUrl(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-[500px] object-cover"
                        />
                    ) : (
                        <div className="w-full h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                            <div className="text-8xl text-muted animate-pulse">📝</div>
                        </div>
                    )}

                    {/* Author Actions */}
                    {isAuthor && (
                        <div className="absolute top-8 right-8 flex gap-4">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button 
                                    bgColor="bg-accent hover:bg-secondary" 
                                    className="shadow-2xl hover:shadow-3xl transition-all duration-500 px-8 py-4 text-lg font-semibold rounded-2xl"
                                >
                                    ✏️ Edit
                                </Button>
                            </Link>
                            <Button 
                                bgColor="bg-red-500 hover:bg-red-600" 
                                onClick={deletePost}
                                className="shadow-2xl hover:shadow-3xl transition-all duration-500 px-8 py-4 text-lg font-semibold rounded-2xl"
                            >
                                🗑️ Delete
                            </Button>
                        </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-8 left-8">
                        <span className={`px-6 py-3 rounded-2xl text-lg font-semibold shadow-2xl backdrop-blur-sm ${
                            post.status === 'active' 
                                ? 'bg-green-100/90 text-green-700 border-2 border-green-200' 
                                : 'bg-red-100/90 text-red-700 border-2 border-red-200'
                        }`}>
                            {post.status === 'active' ? '✅ Published' : '⏸️ Draft'}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-muted/20">
                    <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        {post.title}
                    </h1>
                    
                    <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted rounded-full mb-12"></div>
                    
                    <div className="prose prose-xl max-w-none">
                        {post.content ? (
                            <div className="text-gray-700 leading-relaxed text-lg">
                                {parse(post.content)}
                            </div>
                        ) : (
                            <p className="text-secondary italic text-xl">No content available</p>
                        )}
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-12 text-center">
                    <Link to="/">
                        <Button 
                            bgColor="bg-secondary hover:bg-primary" 
                            className="shadow-2xl hover:shadow-3xl transition-all duration-500 px-10 py-4 text-xl font-semibold rounded-2xl"
                        >
                            ← Back to Stories
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    ) : null;
}