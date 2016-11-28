const request = require('request');
const url = require('url');
const cheerio = require('cheerio');

module.exports = {
  scrapeWebPage(req, res) {
    let input = req.body;

    request('http://www.google.com', (err, resp, body) => {
      if (!err) {
        const $ = cheerio.load(body);
        var links = [];

        // res.send(JSON.stringify(Array.isArray($('a'))));
        $('a').each(function(i, link) {
          // res.send(JSON.stringify(link));
          var parsedUrl = url.parse($(this).attr('href')).hostname;

          if (links.indexOf(parsedUrl) === -1) {
            links.push(parsedUrl);
          }
        });

        res.send(links);
      } else {
        console.log(err, 'ERROR in web scraper!');
        res.send('ERROR in web scraper!');
      }
    });

  }
};
