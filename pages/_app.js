import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/dark.css";
import "../styles/index.scss";

const MyComponent = ({ Component, pageProps }) => <Component {...pageProps} />;

MyComponent.displayName = "MyComponent";

export default MyComponent;
