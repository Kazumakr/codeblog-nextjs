import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "../components/HighlightCode";
import { urlFor } from "../lib/api";

const serializers = {
	types: {
		code: ({ node: { language, code, filename } }) => {
			return (
				<HighlightCode language={language}>
					{code}
					<div className="code-filename">{filename}</div>
				</HighlightCode>
			);
		},
		image: ({ node: { asset, alt, position = "center" } }) => {
			let style = {};
			return (
				<div className={`blog-image blog-image-${position}`}>
					<img src={urlFor(asset.url).height(300).fit("max")} />
					<div className="image-alt">{alt}</div>
				</div>
			);
		},
	},
};
const BlogContent = ({ content }) => {
	return <BlockContent serializers={serializers} blocks={content} />;
};

export default BlogContent;
