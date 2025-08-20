import React , {useEffect,useState}from 'react'
import appwriteService from '../appwrite/config'
import { PostCard } from '../components'

function Home() {
    const [posts,setPosts]= useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        setLoading(true)
        appwriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    },[])

    if (loading) {
        return (
            <div className="w-full py-12 px-6 lg:px-12 xl:px-16">
                <div className="flex flex-wrap justify-center">
                    <div className="p-2 w-full max-w-md">
                        <div className="animate-pulse space-y-6">
                            <div className="h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
                            <div className="h-6 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl w-3/4 mx-auto"></div>
                            <div className="h-6 bg-gradient-to-r from-accent/20 to-muted/20 rounded-xl w-1/2 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-12 px-6 lg:px-12 xl:px-16">
                <div className="flex flex-wrap justify-center">
                    <div className="p-2 w-full max-w-md">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-muted/20">
                            <div className="text-8xl mb-6 animate-bounce">🚀</div>
                            <h1 className="text-3xl font-bold text-primary mb-4 text-center">
                                Welcome to NebulaPress
                            </h1>
                            <p className="text-secondary mb-8 text-center text-lg">
                                Login to explore amazing stories and share your thoughts
                            </p>
                            <div className="w-24 h-2 bg-gradient-to-r from-accent to-muted mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className='w-full py-12 px-6 lg:px-12 xl:px-16'>
            <div className='mb-12 text-center'>
                <h1 className='text-5xl lg:text-6xl font-bold text-primary mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent'>Discover Stories</h1>
                <p className='text-xl lg:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed'>Explore amazing content from our community of creators</p>
                <div className='w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {posts.map((post, index) => (
                    <div 
                        key={post.$id} 
                        className='animate-fade-in'
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
