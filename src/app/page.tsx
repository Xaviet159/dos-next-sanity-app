import { client } from "@/sanity/lib/client"
import { POSTS_QUERY_DEF } from "@/sanity/lib/queries"
import type { Post } from "../../sanity.types"

export default async function HomePage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY_DEF)

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <p key={post._id}>{post.title}</p>
      ))}
    </div>
  )
}