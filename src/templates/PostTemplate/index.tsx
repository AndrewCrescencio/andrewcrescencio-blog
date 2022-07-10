import { TPostStrapi } from '../../shared-types/post-strapi';
import { TSettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { TagsContainer } from './styles';
import { useEffect } from 'react';
export type PostTemplateProps = {
  settings: TSettingsStrapi;
  post: TPostStrapi;
};
const prism = require('prismjs');

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <TagsContainer>
        <PostTags tags={post.tags} />
      </TagsContainer>
    </BaseTemplate>
  );
};
