import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Tile = ({ code, float, description }) => {
	const formattedRate = (number, countryCode) =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: countryCode
		}).format(number);

	return (
		<>
			{code ? (
				<div className={styles.wrapper}>
					<div className={styles.title}>{description}</div>
					<div className={styles.price}>{formattedRate(float, code)}</div>
				</div>
			) : null}
		</>
	);
};

Tile.propTypes = {
	code: PropTypes.string,
	float: PropTypes.number,
	description: PropTypes.string
};

Tile.defaultProps = {
	code: undefined,
	float: 0,
	description: ''
};

export default Tile;
