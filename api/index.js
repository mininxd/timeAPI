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
                timefull: timem.format('LTS'),
                second: timem.format('ss'),
                minute: timem.format('mm'),
                hour: timem.format('hh'),
                dayname: timem.format('dddd'),
                day: timem.format('D'),
                month: timem.format('M'),
                year: timem.format('yyyy'),
                time12: timem.format('hh:mm'),
                time24: timem.format('H:mm')
            });
        };
    });
}
