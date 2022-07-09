import { TPostStrapi } from '../../shared-types/post-strapi';
import { TSettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { TagsContainer } from './styles';
export type PostTemplateProps = {
  settings: TSettingsStrapi;
  post: TPostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <TagsContainer>
        <PostTags tags={post.tags} />
      </TagsContainer>
    </BaseTemplate>
  );
};
