import { allPosts } from "contentlayer/generated";

const HomePage = () => (
	<div>
		{allPosts.map(post => (
			<h1 key={post._id}>{post.title}</h1>
		))}
	</div>
);

export default HomePage;
