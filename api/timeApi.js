const moment = require("moment");
const axios = require("axios");

module.exports = function(req) {
  return new Promise((resolve, reject) => {
    axios.get("https://time.akamai.com/") 
      .then(res => {
        const time = moment(res.data);
        const unix = res.data;
        const gmtOffset = parseInt(req.query.gmt, 10);
        if (!gmtOffset) {
          resolve({
            "info": "query required",
            "example": "timeapi.mininxd.my.id?gmt=7"
          });
          return;
        }

        if (gmtOffset >= 13 || gmtOffset <= -13) {
          resolve({
            "info": "GMT is exceeded"
          });
          return;
        }

        const newTime = moment.unix(time + (req.query.gmt * 3600));
        resolve({
          "gmt": gmtOffset,
          "unix": unix,
          "hour": newTime.format("HH"),
          "minute": newTime.format("mm"),
          "second": newTime.format("ss"),
          "hour12": newTime.format("hh"),
          "ampm": newTime.format("A"),
          "time": newTime.format("HH:mm"),
          "times": newTime.format("HH:mm:ss"),
          "time12": newTime.format("hh:mm"),
          "times12": newTime.format("h:mm:ss"),
          "day": newTime.format("DD"),
          "days": newTime.format("dddd"),
          "month": newTime.format("MM"),
          "months": newTime.format("MMMM"),
          "year": newTime.format("YYYY"),
          "date": newTime.format("L"),
        });
      })
      .catch(err => {
        reject({ "info": err });
      });
  });
}
