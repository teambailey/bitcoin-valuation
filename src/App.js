import { useEffect, useState } from 'react';
import getData from './api';

const App = () => {
	const [prices, setPrices] = useState();
	const [time, setTime] = useState();

	useEffect(() => {
		const callGetData = async () => {
			const {
				bpi: { USD, GBP, EUR },
				time: { updatedISO }
			} = await getData();
			setPrices([USD, GBP, EUR]);
			setTime(updatedISO);
		};
		callGetData();
	}, []);

	return (
		<>
			{prices &&
				prices.map(({ code, symbol, rate, description }) => (
					<div key={code}>
						<p>{time}</p>
						<p>{description}</p>
						<p>
							{symbol && <span dangerouslySetInnerHTML={{ __html: symbol }} />}
							{rate}
						</p>
					</div>
				))}
		</>
	);
};

export default App;
