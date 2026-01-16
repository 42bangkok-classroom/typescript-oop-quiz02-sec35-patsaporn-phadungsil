import axios from "axios";

type Post = {
  id: number;
  title: string;
};

type Comment = {
  postId: number;
  id: number;
};

type ResultPost = {
  postId: number;
  title: string;
  totalComments: number;
};

export async function mapPostWithCommentCount(): Promise<ResultPost[]> {
  try {
    const [postRes, commentRes] = await Promise.all([
      axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts"),
      axios.get<Comment[]>("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const posts = postRes.data;
    const comments = commentRes.data;

    if (posts.length === 0) return [];

    return posts.map((post) => {
      const totalComments = comments.filter(
        (c) => c.postId === post.id
      ).length;

      return {
        postId: post.id,
        title: post.title,
        totalComments,
      };
    });
  } catch (error) {
    throw error;
  }
}
