import { useEffect, useState } from 'react';
import classnames from 'classnames';
import format from 'date-fns/format';
import styles from './index.module.scss';
import getData from '../api';
import Layout from '../components/Layout';
import Tile from '../components/Tile';

const PricingApp = () => {
	const [prices, setPrices] = useState();
	const [time, setTime] = useState();

	useEffect(() => {
		const callGetData = async () => {
			const {
				bpi: { USD, GBP, EUR },
				time: { updatedISO }
			} = await getData();
			setPrices([USD, GBP, EUR]);
			setTime(format(new Date(updatedISO), 'h:mm aaa'));
		};
		callGetData();

		const polling = setInterval(() => {
			callGetData();
		}, 15000);
		return () => clearInterval(polling);
	}, []);

	return (
		<Layout>
			<div className={styles.header}>
				<h1 className={styles.title}>
					Bitcoin{' '}
					<span className={classnames(styles.light, styles.ticker)}>BTC</span>
				</h1>
				<div className={styles.lastUpdated}>
					<div className={styles.light}>Last Updated:</div>
					<div className={styles.time}>{time}</div>
				</div>
			</div>
			{prices && (
				<div className={styles.tiles}>
					{prices.map(({ code, rate_float: float, description }) => (
						<Tile
							key={code}
							code={code}
							float={float}
							description={description}
						/>
					))}
				</div>
			)}
		</Layout>
	);
};

export default PricingApp;
