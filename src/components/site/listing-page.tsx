import { PostCard } from "@/components/cards/post-card";
import { SearchBar } from "@/components/site/search-bar";
import { getPublishedPosts } from "@/services/posts";
export async function ListingPage({ type, title, description }: { type: string; title: string; description: string }) { const posts = await getPublishedPosts(type); return <main className="section"><div className="mb-8"><h1 className="text-4xl font-bold">{title}</h1><p className="mt-3 max-w-2xl text-muted-foreground">{description}</p></div><SearchBar /><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div></main>; }
