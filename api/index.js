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
      var uwib = Number(response.body) + Number(GMT7);
      var uwita = Number(response.body) + Number(GMT8);
      var uwit = Number(response.body) + Number(GMT9);
      //change the plus into minus if youre on GMT-1 and up

      var wibnix = moment.unix(uwib);
      var witanix = moment.unix(uwita);
      var witnix = moment.unix(uwit);

      //API Response
      res.json({
        docs: "https://github.com/mininxd/timeapi/",
        wib: [
          {
            //Timezone hanyalah string
            timezone: "Asia/Jakarta",

            //Unix Time
            unixtime: uwib,
            date: wibnix.format("L"),
            time: wibnix.format("LTS"),
            time12: wibnix.format("hh:mm"),
            time12a: wibnix.format("hh:mm a"),
            time24: wibnix.format("H:mm"),
            AMPM: wibnix.format("a"),
            second: wibnix.format("ss"),
            minute: wibnix.format("mm"),
            hour: wibnix.format("hh"),
            weekday: wibnix.format("dddd"),
            day: wibnix.format("D"),
            month: wibnix.format("M"),
            year: wibnix.format("yyyy"),
          },
        ],
        wita: [
          {
            //Timezone hanyalah string
            timezone: "Asia/NTT",

            //Unix Time
            unixtime: uwita,
            date: witanix.format("L"),
            time: witanix.format("LTS"),
            time12: witanix.format("hh:mm"),
            time12a: witanix.format("hh:mm a"),
            time24: witanix.format("H:mm"),
            AMPM: witanix.format("a"),
            second: witanix.format("ss"),
            minute: witanix.format("mm"),
            hour: witanix.format("hh"),
            weekday: witanix.format("dddd"),
            day: witanix.format("D"),
            month: witanix.format("M"),
            year: witanix.format("yyyy"),
          },
        ],
        wit: [
          {
            //Timezone hanyalah string
            timezone: "Asia/Jayapura",

            //Unix Time
            unixtime: uwit,
            date: witnix.format("L"),
            time: witnix.format("LTS"),
            time12: witnix.format("hh:mm"),
            time12a: witnix.format("hh:mm a"),
            time24: witnix.format("H:mm"),
            AMPM: witnix.format("a"),
            second: witnix.format("ss"),
            minute: witnix.format("mm"),
            hour: witnix.format("hh"),
            weekday: witnix.format("dddd"),
            day: witnix.format("D"),
            month: witnix.format("M"),
            year: witnix.format("yyyy"),
          },
        ],

        //end of JSON
      });
    }
  });
};
            
