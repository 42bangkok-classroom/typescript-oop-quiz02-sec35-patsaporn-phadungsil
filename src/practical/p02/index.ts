import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
};

type ResultPost = {
  id: number;
  title: string;
};

export async function getPostsByUser(userId: number): Promise<ResultPost[]> {
  try {
    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return res.data
      .filter((post) => post.userId === userId)
      .map(({ id, title }) => ({ id, title }));
  } catch (error) {
    throw error;
  }
}
