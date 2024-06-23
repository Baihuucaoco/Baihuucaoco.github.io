const url = 'https://chinese-food-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ea1c44a32emsh6d3db03643ce408p1a1ba7jsn4e792869531c',
		'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}