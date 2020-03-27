const cookieParser = require('cookie-parser');
const express = require('express');
const expressStatsd = require('express-statsd');
const useragent = require('express-useragent');
const fs = require('fs');

const app = express();

process
    .on('unhandledRejection', reason => {
        console.error('Unhandled Rejection at Promise', reason);
    })
    .on('uncaughtException', err => {
        console.error('Uncaught Exception thrown', err);
        process.exit(1);
    });

app.set('trust proxy', true);
// The request handler must be the first middleware on the app
app.use(cookieParser());
app.use(useragent.express());
app.use(expressStatsd());
app.use((req, res, next) => {
    if (
        req.get('X-Forwarded-Proto') === 'https' ||
        req.get('X-Forwarded-Proto') === 'https, https' ||
        req.hostname === 'localhost' ||
        req.hostname.startsWith('192.168') ||
        req.hostname.startsWith('10.0')
    ) {
        // Serve Angular App by passing control to the next middleware
        next();
    } else if (req.get('X-Forwarded-Proto') !== 'https' && req.get('X-Forwarded-Port') !== '443') {
        // Redirect if not HTTP with original request URL
        console.error(`X-Forwarded-Proto is : ${req.get('X-Forwarded-Proto')}`);
        console.info('redirect');
        res.redirect(`https://${req.hostname}${req.url}`);
    } else {
        console.error(`X-Forwarded-Proto is : ${req.get('X-Forwarded-Proto')} /// WHAT ARE WE GOING TO DO`);
        next();
    }
});

app.use((req, res, next) => {
    const start = new Date().getTime();
    res.on('finish', () => {
        console.log(
            `[${req.method}][${req.url}][${req.originalUrl}][${res.statusCode}]:  ${new Date().getTime() - start}ms`
        );
    });
    next();
});

const redirect = (req, res) => res.redirect(302, '/react-ultimate-resume/docs/home');
app.get('/', redirect);
app.get('/react-ultimate-resume', redirect);
app.get('/react-ultimate-resume/docs', redirect);
app.get('/docs', redirect);

app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
});

app.get('*.css', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
});

app.use(express.static(__dirname + '/build', { maxAge: '25d' }));
app.use('/react-ultimate-resume', express.static(__dirname + '/build', { maxAge: '25d' }));

app.get('/react-ultimate-resume/*', (req, res, next) => {
    console.log(`${req.originalUrl} matched index.html route`);
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(__dirname + '/build/index.html').pipe(res);
});
app.get('/*', (req, res, next) => {
    if (
        req.path.endsWith('.js.gz') ||
        req.path.endsWith('.js') ||
        req.path.endsWith('.css.gz') ||
        req.path.endsWith('.css')
    ) {
        console.info(`css or js file requested and not found in static ${req.path}`);
        return res.status(404).send();
    }
    next();
});

app.use((err, req, res, next) => {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    if (err) {
        console.error(err);
        res.status(500).send({ err });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info('app listening on', port);
});
