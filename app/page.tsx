import { allPosts } from "contentlayer/generated";

export const runtime = "experimental-edge";

const HomePage = () => (
	<div>
		{allPosts.map(post => (
			<h1 key={post._id}>{post.title}</h1>
		))}
	</div>
);

export default HomePage;
