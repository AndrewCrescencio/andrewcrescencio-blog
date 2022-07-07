import { Story, Meta } from '@storybook/react/types-6-0';

import { PostTags, PostTagsProps } from '.';
import { mock } from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
} as Meta;

export const Basic: Story<PostTagsProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} />
    </div>
  );
};
