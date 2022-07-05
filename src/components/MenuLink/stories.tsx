import { Story, Meta } from '@storybook/react/types-6-0';

import { MenuLink, MenuLinkProps } from './index';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Basic: Story<MenuLinkProps> = (args) => {
  return (
    <div style={{ maxWidth: '320px' }}>
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
