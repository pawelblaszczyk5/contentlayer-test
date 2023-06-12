import { notFound } from "next/navigation";
import { getMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";

const PostPage = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find(post => post._raw.flattenedPath === params.slug);

	if (!post) notFound();

	const MDXContent = getMDXComponent(post.body.code);

	return (
		<article className="mx-auto max-w-prose py-8">
			<div className="mb-8 text-center">
				<time dateTime={post.date} className="mb-1 text-xs text-gray-600">
					{post.date}
				</time>
				<h1 className="text-3xl font-bold">{post.title}</h1>
			</div>
			<div className="prose">
				<MDXContent />
			</div>
		</article>
	);
};

export default PostPage;
