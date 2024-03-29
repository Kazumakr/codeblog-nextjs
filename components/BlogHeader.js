export default function BlogHeader({ title, subtitle, coverImage, date }) {
	return (
		<div className="blog-detail-header">
			<p className="lead mb-0">{date}</p>
			<h1 className="font-weight-bold blog-detail-header-title mb-0">
				{title}
			</h1>
			<h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
			<img className="img-fluid rounded" src={coverImage} alt="" />
		</div>
	);
}
