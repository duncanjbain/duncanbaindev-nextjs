import { getAllFrontMatters } from '../../lib/getMdx';

export const BlogIndex = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <p key={post.slug}>{post.title}</p>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllFrontMatters();
  return {
    props: {
      posts,
    },
  };
};

export default BlogIndex;
