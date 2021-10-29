import { Row, Col, Media } from "react-bootstrap";

import PageLayout from "../components/PageLayout";
import CardItem from "../components/CardItem";

import { getAllBlogs } from "../lib/api";
import moment from "moment";

export default function Home({ blogs }) {
	return (
		<PageLayout>
			<Row>
				<Col>
					<Media className="admin-intro">
						<Media body>
							<p className="welcome-text">
								Welcome to my blog! My name is Kazuma and I am a CICCC student.
								I am learning about web development. Thank you!
							</p>
						</Media>
					</Media>
				</Col>
			</Row>
			<hr />
			<Row className="mb-5">
				{blogs.map((blog) => (
					<Col key={blog.slug} md="4">
						<CardItem
							title={blog.title}
							subtitle={blog.subtitle}
							date={moment(blog.date).format("LLL")}
							image={blog.coverImage}
							link={{
								href: "blogs/[slug]",
								as: `/blogs/${blog.slug}`,
							}}
						/>
					</Col>
				))}
			</Row>
		</PageLayout>
	);
}

export async function getStaticProps() {
	const blogs = await getAllBlogs();
	return {
		props: {
			blogs,
		},
	};
}
