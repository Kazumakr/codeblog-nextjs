import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
const BlogNavbar = () => {
	return (
		<Navbar className="blog-navbar blog-nav-base" bg="transparent" expand="lg">
			<Navbar.Brand className="blog-navbar-brand">
				<Link href="/">
					<a>K-code</a>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link
						as={() => (
							<Link href="/">
								<a className="blog-navbar-item blog-navbar-link">Home</a>
							</Link>
						)}
					></Nav.Link>
					<Nav.Link
						as={() => (
							<Link href="#">
								<a className="blog-navbar-item blog-navbar-link">About</a>
							</Link>
						)}
					></Nav.Link>
					<Nav.Link
						as={() => (
							<Link href="#">
								<a className="blog-navbar-item blog-navbar-link">Contact</a>
							</Link>
						)}
					></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default BlogNavbar;
