export interface Post {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  authorId: number | null;
  category?: {
    id: number;
    name: string;
  };
  author?: {
    id: number;
    email: string;
  } | null;
}
