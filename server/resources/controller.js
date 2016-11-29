const request = require('request');
const url = require('url');
const cheerio = require('cheerio');

module.exports = {
  scrapeWebPage(req, res) {
    let input = req.body.url;
    let depth = req.body.depth || Number.POSITIVE_INFINITY

    request(input, (err, resp, body) => {
      if (!err) {
        const $ = cheerio.load(body);
        var links = [];

        // check each anchor tag on the page for a link
        $('a').each(function(i, link) {
          if (links.length >= depth) {return;}
          let href = $(this).attr('href');

          if (href) {
            let hostname = url.parse(href).hostname;
            if (hostname) {
              if (links.indexOf(hostname) === -1) {
                links.push(hostname);
              }
            }
          }
        });
        // return collected domains
        res.send(links);
      } else {
        console.log(err, 'ERROR in web scraper!');
        res.send('ERROR in web scraper!');
      }
    });

  }
};
