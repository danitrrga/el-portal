const https = require('https');

const data = JSON.stringify({
    email: 'dani.trrga@gmail.com',
    password: 'password123',
    name: 'Test'
});

const options = {
    hostname: 'danitrrga2.app.n8n.cloud',
    path: '/webhook-test/signup',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        console.log('BODY:', body);
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
