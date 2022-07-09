import { PostTemplateProps } from '.';
import { data } from '../../services/data-mock.json';

export default {
  settings: data.setting,
  post: data.posts[0],
} as PostTemplateProps;
