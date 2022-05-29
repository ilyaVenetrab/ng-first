const http = require('http');

const host = 'localhost';
const port = 8000;

const products = [
	{
		_id: '61c200dc8532d2c0ec8a9dc2',
		title: 'Moto 2X',
		img: 'assets/img/product-2.jpg',
		price: 221,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc3',
		title: 'Galaxy S3',
		img: 'assets/img/product-5.jpg',
		price: 23,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc4',
		title: 'IPad 12 pro',
		img: 'assets/img/product-6.jpg',
		price: 2344,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc5',
		title: 'Moto 31',
		img: 'assets/img/product-7.jpg',
		price: 334,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc6',
		title: 'Galaxy A',
		img: 'assets/img/product-3.jpg',
		price: 333,
		author: 'Samsung',
		isFavorite: true,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc7',
		title: 'IPad 8',
		img: 'assets/img/product-8.jpg',
		price: 22,
		author: 'Apple',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc8',
		title: 'IPad 10',
		img: 'assets/img/product-9.jpg',
		price: 1200,
		author: 'Apple',
		isFavorite: true,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dc9',
		title: 'Moto 11',
		img: 'assets/img/product-4.jpg',
		price: 2345,
		author: 'Motorola',
		isFavorite: false,
	},
	{
		_id: '61c200dc8532d2c0ec8a9dca',
		title: 'Galaxy 10',
		img: 'assets/img/product-1.jpg',
		price: 200,
		author: 'Samsung',
		isFavorite: true,
	},
];

const httpStatusCodes = {
	OK: 200,
	BAD_REQUEST: 400,
	NOT_FOUND: 404,
};

const requestListener = function (request, response) {
	response.setHeader('Content-Type', 'application/json');
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	const url = request.url.slice('1').split('/');
	console.log(url);
	if (url.length === 1 && url[0] === 'products') {
		response.writeHead(httpStatusCodes.OK);
		response.end(JSON.stringify(products));
	} else if (url.length === 2 && url[0] === 'products') {
		const product = products.filter((el) => el._id === url[1]);

		if (product.length) {
			response.writeHead(httpStatusCodes.OK);
			response.end(JSON.stringify(product));
		} else {
			const badRequest = {
				error: 'product not found',
			};

			response.writeHead(httpStatusCodes.BAD_REQUEST);
			response.end(JSON.stringify(badRequest));
		}
		// TODO: add server logic
	} else if (url.length === 2 && url[0] === 'auth' && url[1] === 'checkUsername') {
		response.writeHead(httpStatusCodes.OK);
		response.end(JSON.stringify(true));
	} else {
		const notFound = {
			error: 'page not found',
		};

		response.writeHead(httpStatusCodes.NOT_FOUND);
		response.end(JSON.stringify(notFound));
	}
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
