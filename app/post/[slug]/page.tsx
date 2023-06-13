import { notFound } from "next/navigation";
import { getMDXComponent } from "next-contentlayer/hooks";
import { TestRSC } from "@/components/test-rsc";
import { TestRSCWithClient } from "@/components/test-rsc-with-client";
import { allPosts } from "contentlayer/generated";

export const revalidate = 30;

export const generateStaticParams = () =>
	allPosts.map(({ _raw: { flattenedPath } }) => ({
		slug: flattenedPath,
	}));

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
				<h2>Paweł Błaszczyk{Math.random()}</h2>
			</div>
			<div className="prose">
				<MDXContent components={{ TestRSC, TestRSCWithClient }} />
			</div>
		</article>
	);
};

export default PostPage;
