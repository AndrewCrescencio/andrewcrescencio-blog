import { Button, ButtonContainer, Container } from './styles';

import { TPostStrapi } from '../../shared-types/post-strapi';
import { TSettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { useEffect, useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../services/load-post';
import { PostsGrid } from '../../components/PostsGrid';

export type PostsTemplateProps = {
  settings: TSettingsStrapi;
  posts?: TPostStrapi[];
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
    setNoMorePosts(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [posts, variables]);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const start = stateVariables?.start ?? 0;
    const limit = stateVariables?.limit ?? 6;
    const newVariables = {
      ...stateVariables,
      start: start + limit,
      limit: limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <PostsGrid posts={statePosts} />

      {statePosts && statePosts.length ? (
        <ButtonContainer>
          <Button onClick={handleLoadMorePosts} disabled={buttonDisabled}>
            {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
          </Button>
        </ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};
