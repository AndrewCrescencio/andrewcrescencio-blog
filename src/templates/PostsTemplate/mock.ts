import { PostsTemplateProps } from '.';
import { data } from '../../services/data-mock.json';

export default {
  settings: data.setting,
  posts: data.posts,
} as PostsTemplateProps;
