import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "../lib/api";

const CardItem = ({ title, subtitle, image, date, link }) => {
	return (
		<Card className={`blog-card`}>
			<div className="card-body-wrapper">
				<Card.Header className="d-flex flex-row">
					<div>
						<Card.Title className="card-main-title font-weight-bold">
							{title}
						</Card.Title>
						<Card.Text className="card-date">{date}</Card.Text>
					</div>
				</Card.Header>
				<div className="view overlay">
					<Card.Img
						src={urlFor(image).height(300).crop("center").fit("clip").url()}
						alt="Card image cap"
					/>
				</div>
				<Card.Body>
					<Card.Text>{subtitle}</Card.Text>
				</Card.Body>
			</div>
			{link && (
				<Link {...link}>
					<a className="card-button">Read More</a>
				</Link>
			)}
		</Card>
	);
};

export default CardItem;
