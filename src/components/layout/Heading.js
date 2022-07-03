import PropTypes from "prop-types";

export default function Heading({ size = "1", content }) {
	const Element = `h${size}`;
	return <Element>{content}</Element>;
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
};
