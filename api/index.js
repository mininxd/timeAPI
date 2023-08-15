const request = require('request');
const moment = require('moment');

module.exports = async(req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://time.akamai.com/'
    };
    request(options, function(error, response) {
        if (error) {
            res.json({ result: 'false' });
        } else {
        //
            //Unix Time
            var unix = Number(response.body) + Number('25200');
            var timem = moment.unix(unix);

            //API Response
            res.json({
               //Timezone hanyalah string
                timezone: 'Asia/Jakarta',
                //Unix Time
                unixtime: unix,
                date: timem.format('L'),
                time: timem.format('LTS'),
                day: timem.format('dddd')
            });
        };
    });
}
