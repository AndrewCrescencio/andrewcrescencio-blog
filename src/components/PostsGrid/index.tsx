import { PostCard, PostCardProps } from '../PostCard';
import { Container, Grid, NotFound } from './styles';

export type PostsGridProps = {
  posts?: PostCardProps[];
};

export const PostsGrid = ({ posts = [] }: PostsGridProps) => {
  return (
    <Container>
      {posts.length === 0 && (
        <NotFound>Nenhum post encontrado aqui =(</NotFound>
      )}

      <Grid>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard key={`post-card-${post.id}`} {...post} />
          ))}
      </Grid>
    </Container>
  );
};
