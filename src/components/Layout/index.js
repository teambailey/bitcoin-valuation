import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Layout = ({ children }) => (
	<div className={styles.maxWidth}>
		<div className={styles.spacing}>{children}</div>
	</div>
);

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

Layout.defaultProps = {
	children: null
};

export default Layout;
