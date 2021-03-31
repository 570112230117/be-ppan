const moment = require("moment");
var LocaleUS = "en-US";
var Pattern = "YYYY-MM-DD HH:mm:ss";

exports.dateToStr = (datetime, pattern, locale) => {
  return moment(datetime).format(pattern).toLocaleString(locale);
};

exports.getCurrentDateString = () => {
  return moment(getCurrentDate()).format(Pattern).toLocaleString(LocaleUS);
};

const getCurrentDate = () => {
  return new Date(Date.now());
};
