import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a target="_blank" href="https://github.com/AndrewCrescencio">Foi feito com ❤ por Andrew Crescencio</a></p>`,
  },
} as Meta;

export const Basic: Story<FooterProps> = (args) => {
  return (
    <div style={{ marginTop: '200px' }}>
      <Footer {...args} />
    </div>
  );
};
