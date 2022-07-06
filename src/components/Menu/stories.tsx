import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu, MenuProps } from '.';

import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
      <Menu {...args} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.{' '}
      </p>

      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc. Curabitur tortor. Pellentesque nibh.{' '}
        <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam. In
        scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.{' '}
        <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula vel nunc
        egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
        luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.{' '}
      </p>

      <p>
        Mauris ipsum. <b>Aenean quam</b>. Nulla metus metus, ullamcorper vel,
        tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nam nec ante.{' '}
        <b>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</b>
        . Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam,
        a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
        Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
        Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
        magna luctus suscipit.{' '}
      </p>

      <p>
        Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
        vitae pharetra auctor, sem massa mattis sem, at interdum magna augue
        eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
        blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.{' '}
        <i>Fusce ac turpis quis ligula lacinia aliquet</i>. Morbi in ipsum sit
        amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
        egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices
        ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar
        ullamcorper.{' '}
      </p>

      <p>
        Nulla facilisi. Integer lacinia sollicitudin massa.{' '}
        <b>
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam
        </b>
        . Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.{' '}
        <i>Sed non quam</i>. Quisque nisl felis, venenatis tristique, dignissim
        in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla
        quam. Aenean laoreet. <b>Nulla facilisi</b>. Vestibulum nisi lectus,
        commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan
        porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci.
        Ut eu diam at pede suscipit sodales.{' '}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.{' '}
      </p>

      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc. Curabitur tortor. Pellentesque nibh.{' '}
        <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam. In
        scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.{' '}
        <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula vel nunc
        egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
        luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.{' '}
      </p>

      <p>
        Mauris ipsum. <b>Aenean quam</b>. Nulla metus metus, ullamcorper vel,
        tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nam nec ante.{' '}
        <b>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</b>
        . Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam,
        a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
        Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
        Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
        magna luctus suscipit.{' '}
      </p>

      <p>
        Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
        vitae pharetra auctor, sem massa mattis sem, at interdum magna augue
        eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
        blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.{' '}
        <i>Fusce ac turpis quis ligula lacinia aliquet</i>. Morbi in ipsum sit
        amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
        egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices
        ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar
        ullamcorper.{' '}
      </p>

      <p>
        Nulla facilisi. Integer lacinia sollicitudin massa.{' '}
        <b>
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam
        </b>
        . Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.{' '}
        <i>Sed non quam</i>. Quisque nisl felis, venenatis tristique, dignissim
        in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla
        quam. Aenean laoreet. <b>Nulla facilisi</b>. Vestibulum nisi lectus,
        commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan
        porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci.
        Ut eu diam at pede suscipit sodales.{' '}
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.{' '}
      </p>

      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc. Curabitur tortor. Pellentesque nibh.{' '}
        <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam. In
        scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.{' '}
        <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula vel nunc
        egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
        luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.{' '}
      </p>

      <p>
        Mauris ipsum. <b>Aenean quam</b>. Nulla metus metus, ullamcorper vel,
        tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nam nec ante.{' '}
        <b>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</b>
        . Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam,
        a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
        Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
        Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
        magna luctus suscipit.{' '}
      </p>

      <p>
        Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus
        vitae pharetra auctor, sem massa mattis sem, at interdum magna augue
        eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
        blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.{' '}
        <i>Fusce ac turpis quis ligula lacinia aliquet</i>. Morbi in ipsum sit
        amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel,
        egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices
        ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar
        ullamcorper.{' '}
      </p>

      <p>
        Nulla facilisi. Integer lacinia sollicitudin massa.{' '}
        <b>
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam
        </b>
        . Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi.{' '}
        <i>Sed non quam</i>. Quisque nisl felis, venenatis tristique, dignissim
        in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla
        quam. Aenean laoreet. <b>Nulla facilisi</b>. Vestibulum nisi lectus,
        commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan
        porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci.
        Ut eu diam at pede suscipit sodales.{' '}
      </p>
    </div>
  );
};
