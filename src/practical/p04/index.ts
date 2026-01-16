import axios from "axios";

type Comment = {
  postId: number | null | undefined;
};

export async function countCommentsByPost(): Promise<Record<number, number>> {
  try {
    const res = await axios.get<Comment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const comments = res.data;

    if (comments.length === 0) return {};

    return comments.reduce<Record<number, number>>((acc, c) => {
      if (typeof c.postId === "number") {
        acc[c.postId] = (acc[c.postId] ?? 0) + 1;
      }
      return acc;
    }, {});
  } catch (error) {
    throw error;
  }
}
