const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle');
xhr.setRequestHeader('x-rapidapi-key', '4c2c2be73fmsh27cb5ccefa75f0cp1aab5bjsn10a39594fdf7');
xhr.setRequestHeader('x-rapidapi-host', 'air-quality-by-api-ninjas.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);