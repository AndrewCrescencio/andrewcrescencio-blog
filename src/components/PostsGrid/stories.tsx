import { Story, Meta } from '@storybook/react/types-6-0';

import { PostsGrid, PostsGridProps } from '.';
import { mock } from './mock';

export default {
  title: 'PostsGrid',
  component: PostsGrid,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostsGridProps>;

export const Basic: Story<PostsGridProps> = (args) => {
  return (
    <div>
      <PostsGrid {...args} />
    </div>
  );
};

export const NoPosts: Story<PostsGridProps> = () => {
  return (
    <div>
      <PostsGrid />
    </div>
  );
};
