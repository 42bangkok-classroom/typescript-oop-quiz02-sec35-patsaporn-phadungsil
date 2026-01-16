import axios from "axios";

type Post = {
  id: number;
  title: string;
};

export async function getEdgePosts(): Promise<Post[]> {
  try {
    const res = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = res.data;

    if (posts.length === 0) return [];

    if (posts.length === 1) {
      const {id,title} posts[0];
      return [{id,title},
        {id,tile}];
  }
  const frist = posts[0];
}
  const last = posts[posts.length - 1];
  return [{id,title},
    {id,tile}];
  }
