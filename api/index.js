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
      //Unix Time GMT 0
      var unixTime = Number(response.body) + Number(GMT0);
      //convert UNIX with moment
      var unixMoment = moment.unix(unixTime);



      //Unix Time WIB WITA WIT
      var unixWib = Number(response.body) + Number(GMT7);
      var unixWita = Number(response.body) + Number(GMT8);
      var unixWit = Number(response.body) + Number(GMT9);
      //Convert UNIX with moment
      var wibMoment = moment.unix(unixWib);
      var witaMoment = moment.unix(unixWita);
      var witMoment = moment.unix(unixWit);

      //API Response
      res.json({
        docs: "https://github.com/mininxd/timeapi/",
        UNIX: [
          {
            //Timezone hanyalah string
            timezone: "0",

            //Unix Time
            unixtime: unixTime,
            date: unixMoment.format("L"),
            time: unixMoment.format("LTS"),
            time12: unixMoment.format("hh:mm"),
            time12a: unixMoment.format("hh:mm a"),
            time24: unixMoment.format("H:mm"),
            AMPM: unixMoment.format("a"),
            second: unixMoment.format("ss"),
            minute: unixMoment.format("mm"),
            hour: unixMoment.format("hh"),
            weekday: unixMoment.format("dddd"),
            day: unixMoment.format("D"),
            month: unixMoment.format("M"),
            monthName: unixMoment.format("MMMM"),
            year: unixMoment.format("yyyy"),
          },
        ],
        wib: [
          {
            //Timezone hanyalah string
            timezone: "Asia/Jakarta",

            //Unix Time
            unixtime: unixWib,
            date: wibMoment.format("L"),
            time: wibMoment.format("LTS"),
            time12: wibMoment.format("hh:mm"),
            time12a: wibMoment.format("hh:mm a"),
            time24: wibMoment.format("H:mm"),
            AMPM: wibMoment.format("a"),
            second: wibMoment.format("ss"),
            minute: wibMoment.format("mm"),
            hour: wibMoment.format("hh"),
            weekday: wibMoment.format("dddd"),
            day: wibMoment.format("D"),
            month: wibMoment.format("M"),
            monthName: wibMoment.format("MMMM"),
            year: wibMoment.format("yyyy"),
          },
        ],
        wita: [
          {
            //Timezone hanyalah string
            timezone: "Asia/NTT",

            //Unix Time
            unixtime: unixWita,
            date: witaMoment.format("L"),
            time: witaMoment.format("LTS"),
            time12: witaMoment.format("hh:mm"),
            time12a: witaMoment.format("hh:mm a"),
            time24: witaMoment.format("H:mm"),
            AMPM: witaMoment.format("a"),
            second: witaMoment.format("ss"),
            minute: witaMoment.format("mm"),
            hour: witaMoment.format("hh"),
            weekday: witaMoment.format("dddd"),
            day: witaMoment.format("D"),
            month: witaMoment.format("M"),
            monthName: witaMoment.format("MMMM"),
            year: witaMoment.format("yyyy"),
          },
        ],
        wit: [
          {
            //Timezone hanyalah string
            timezone: "Asia/Jayapura",

            //Unix Time
            unixtime: unixWit,
            date: witMoment.format("L"),
            time: witMoment.format("LTS"),
            time12: witMoment.format("hh:mm"),
            time12a: witMoment.format("hh:mm a"),
            time24: witMoment.format("H:mm"),
            AMPM: witMoment.format("a"),
            second: witMoment.format("ss"),
            minute: witMoment.format("mm"),
            hour: witMoment.format("hh"),
            weekday: witMoment.format("dddd"),
            day: witMoment.format("D"),
            month: witMoment.format("M"),
            monthName: witMoment.format("MMMM"),
            year: witMoment.format("yyyy"),
          },
        ],

        //end of JSON
      });
    }
  });
};

            
