const request = require("request");
const moment = require("moment");

//GMT 0-14 List
const {
  GMT0,
  GMT1,
  GMT2,
  GMT3,
  GMT3_5,
  GMT4,
  GMT4_5,
  GMT5,
  GMT5_5,
  GMT5_75,
  GMT6,
  GMT6_5,
  GMT7,
  GMT8,
  GMT8_75,
  GMT9,
  GMT9_5,
  GMT10,
  GMT10_5,
  GMT11,
  GMT11_5,
  GMT12,
  GMT12_5,
  GMT13,
  GMT14,
} = require("./tz-data.js");

module.exports = async (req, res) => {
  var options = {
    method: "GET",
    url: "https://time.akamai.com/",
  };
  request(options, function (error, response) {
    if (error) {
      res.json({ result: "false" });
    } else {
      //
      //Unix Time
      var unix = Number(response.body) + Number(GMT7);
      //change the plus into minus if youre on GMT-1 and up

      var timem = moment.unix(unix);

      //API Response
      res.json({
        //Timezone hanyalah string
        timezone: "Asia/Jakarta",
        //Unix Time
        unixtime: unix,
        date: timem.format("L"),
        time: timem.format("LTS"),
        time12: timem.format("hh:mm"),
        time12a: timem.format("hh:mm a"),
        time24: timem.format("H:mm"),
        AMPM: timem.format("a"),
        second: timem.format("ss"),
        minute: timem.format("mm"),
        hour: timem.format("hh"),
        dayname: timem.format("dddd"),
        day: timem.format("D"),
        month: timem.format("M"),
        year: timem.format("yyyy"),
      });
    }
  });
};
