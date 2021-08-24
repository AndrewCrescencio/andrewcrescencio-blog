import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  id,
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  content,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          title={title}
          excerpt={excerpt}
          id={id}
          cover={cover}
          createdAt={createdAt}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
