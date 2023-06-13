import { allPosts } from "contentlayer/generated";

const HomePage = async () => {
	const data = (await (
		await fetch("https://csrng.net/csrng/csrng.php?min=0&max=100", { next: { revalidate: 30 } })
	).json()) as Array<{ random: number }>;

	return (
		<>
			<p>Test {data[0]?.random}</p>
			<div>
				{allPosts.map(post => (
					<h1 key={post._id}>{post.title}</h1>
				))}
			</div>
		</>
	);
};

export default HomePage;
