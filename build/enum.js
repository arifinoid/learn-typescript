"use strict";
// numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
var Day;
(function (Day) {
    Day["Sun"] = "Minggu";
    Day["Mon"] = "Senin";
    Day["Tue"] = "Selasa";
    Day["Wed"] = "Rabu";
    Day["Thu"] = "Kamis";
    Day["Fri"] = "Jumat";
    Day["Sat"] = "Sabtu";
})(Day || (Day = {}));
console.log(Month);
console.log(Day);
