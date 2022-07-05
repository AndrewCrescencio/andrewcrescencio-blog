import { Story, Meta } from '@storybook/react/types-6-0';

import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg:
      'https://res.cloudinary.com/peetaxd/image/upload/v1651461914/medium_perfil_ca2a7ba48c.jpg',
    link: 'http://localhost',
    newTab: false,
  },
} as Meta;

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
