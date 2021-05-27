import axios from 'axios';

const getData = async () => {
	try {
		const { data } = await axios.get(
			'https://api.coindesk.com/v1/bpi/currentprice.json'
		);
		return data;
	} catch (error) {
		return { error };
	}
};

export default getData;
