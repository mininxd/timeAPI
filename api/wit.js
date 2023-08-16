const request = require("request");
const moment = require("moment");

//GMT 0-14 List
const { GMT9 } = require("./tz-data.js");

module.exports = async (req, res) => {
  var options = {
    method: "GET",
    url: "https://time.akamai.com/",
  };
  request(options, function (error, response) {
    if (error) {
      res.json({ result: "false" });
    } else {
      var unix = Number(response.body) + Number(GMT9);
      var timem = moment.unix(unix);

      //API Response
      res.json({
        timezone: "Asia/Jayapura",
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
