import { PostProps } from '.';
import { data } from '../../services/data-mock.json';

const { title, excerpt, cover, content, author, categories, createdAt } =
  data.posts[0];

export default {
  title,
  excerpt,
  cover,
  content,
  author,
  categories,
  createdAt,
} as PostProps;
