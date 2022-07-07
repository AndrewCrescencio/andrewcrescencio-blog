import { PostProps } from '@components/Post';
import { TPostTag } from './post-tag';

export type TPostStrapi = PostProps & {
  tags: TPostTag[];
  slug: string;
  allowComments: boolean;
};
