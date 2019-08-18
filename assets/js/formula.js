var unitype = 0;
function init() {
  document.getElementById("ifield").value = "";
}
function unitconvert() {
  var s1 = document.getElementById("unitselect1");
  var s2 = document.getElementById("unitselect2");
  var u1 = s1.options[s1.selectedIndex].index;
  var u2 = s2.options[s2.selectedIndex].index;
  var ori = parseInt(document.getElementById("ifield").value);
  if (unitype == 7) {
    var result = tempformula(ori, u1, u2);
  } else if (unitype != 7) {
    var a = ufactor1(u1);
    var b = ufactor2(u2);
    var c = 0;
    var result = (ori / a) * b + c;
  }
  var OString = result.toFixed(5) + s2.value;
  document.getElementById("ofield").innerHTML = OString;
}
function tempformula(ori, u1, u2) {
  a = [9, 1, 9, 1, -6, 60, 9, 24];
  b = [5, 1, 5, 1, 5, 11, 4, 7];
  c = [32, 0, -459.67, -459.67, 212, 32, 32, 32];
  d = [0, 0, 0, 0, 0, 0, 0, -7.5];
  var temp = ((ori + d[u1]) * a[u1]) / b[u1] + c[u1]; // U1轉華氏
  a = [5, 1, 5, 1, -5, 11, 4, 7];
  b = [9, 1, 9, 1, 6, 60, 9, 24];
  c = [0, 0, 0, 0, 0, 0, 0, 7.5];
  d = [-32, 0, 459.67, 459.67, -212, -32, -32, -32];
  result = ((temp + d[u2]) * a[u2]) / b[u2] + c[u2]; // 華氏轉U2
  return result;
}
function ufactor1(u1) {
  return uarray(unitype)[u1];
}
function ufactor2(u2) {
  return uarray(unitype)[u2];
}
function uarray(unitype) {
  var array;
  switch (unitype) {
    case 1:
      array = [
        2500,
        500,
        17.63698097,
        13.33333715,
        1.102311311,
        1,
        0.833336328,
        0.826719577,
        0.500000143,
        0.000551156,
        0.000500003,
        0.000492105
      ];
      break;
    case 2:
      array = [
        12.00002904,
        1.00584,
        1,
        0.33333378,
        0.3048,
        0.0003048,
        0.000189397,
        0.000164579
      ];
      break;
    case 3:
      array = [
        44.704,
        17.6,
        1.609344,
        1,
        0.868976,
        0.868976,
        0.44704,
        0.001314
      ];
      break;
    case 4:
      array = [
        101325,
        10332.275,
        2116.2167,
        760,
        101.325,
        101.296862,
        10.33228,
        1.01325,
        1
      ];
      break;
    case 5:
      array = [100, 30.25, 1, 0.15, 0.02471, 0.02471, 0.0103, 0.01];
      break;
    case 6:
      array = [
        264172052,
        17611470.13,
        52834410.4,
        2641720.52,
        3785.33,
        133.229,
        128,
        3.78533,
        1,
        0.83268,
        0.125,
        0.0625,
        0.023809524,
        0.003785412
      ];
      break;
  }
  return array;
}

/* 所選單位互換 -- 所選單位互換 -- 所選單位互換 */

function swap() {
  var s1 = document.getElementById("unitselect1");
  var s2 = document.getElementById("unitselect2");
  var temp1 = s1.options[s1.selectedIndex].index;
  var temp2 = s2.options[s2.selectedIndex].index;
  s1[temp2].selected = true;
  s2[temp1].selected = true;
  unitconvert();
}
/* 單位更改 -- 單位更改 -- 單位更改 -- 單位更改 */

function exchange(choice1) {
  var select1 = document.getElementById("unitselect1");
  var select2 = document.getElementById("unitselect2");
  var arrlength = choice1.length;
  var length1 = select1.options.length;
  unitselect1.size = arrlength + 1;
  unitselect2.size = arrlength + 1;
  for (var i = length1 - 1; i >= 0; i--) {
    document.getElementById("unitselect1").remove(i);
    document.getElementById("unitselect2").remove(i);
  }
  for (var j = arrlength - 1; j >= 0; j--) {
    var option = document.createElement("option");
    option.text = choice1[arrlength - j - 1];

    select1.add(option);
  }
  for (var j = arrlength - 1; j >= 0; j--) {
    var option = document.createElement("option");
    option.text = choice1[arrlength - j - 1];

    select2.add(option);
  }
}

/*1.weight*/

function weight() {
  unitype = 1;
  var choice1 = [
    "克拉",
    "公克",
    "盎司",
    "台兩",
    "英磅",
    "市斤(中國及金馬)",
    "臺斤(台澎)",
    "斤(港澳新馬)",
    "公斤",
    "短噸(美噸)",
    "公噸",
    "長噸(英噸)"
  ];
  exchange(choice1);
}

/*2.length*/

function length() {
  unitype = 2;
  var choice1 = ["公尺", "公里", "英吋", "英尺", "臺尺", "碼", "英哩", "海浬"];
  exchange(choice1);
}

/*3.speed*/

function speed() {
  unitype = 3;
  var choice1 = [
    "公尺/秒(m/s)",
    "公分/秒(cm/s)",
    "公里/小時(km/s)",
    "英哩/小時(MPH)",
    "英吋/秒",
    "節",
    "海浬/小時",
    "馬赫數"
  ];
  exchange(choice1);
}

/*4.pressure*/

function pressure() {
  unitype = 4;
  var choice1 = [
    "帕(Pa)",
    "百帕(hPa)",
    "牛頓/平方米",
    "巴",
    "噸/平方米",
    "公斤/平方米",
    "磅/平方英尺",
    "毫米汞柱(mmHg)",
    "大氣壓(atm)"
  ];
  exchange(choice1);
}

/*5.area*/

function area() {
  unitype = 5;
  var choice1 = [
    "平方米",
    "公頃",
    "台灣甲",
    "公畝",
    "市畝",
    "英畝",
    "美畝",
    "坪"
  ];
  exchange(choice1);
}

/*6.volume*/

function volumn() {
  unitype = 6;
  var choice1 = [
    "公升",
    "公撮",
    "立方米",
    "公合",
    "毫升",
    "英加侖",
    "美加侖",
    "桶(barrel,oil)",
    "英盎司",
    "美盎司",
    "品脫",
    "杯(cup)",
    "TSP",
    "tbsp"
  ];
  exchange(choice1);
}

/*7.temp*/

function temp() {
  unitype = 7;
  var choice1 = [
    "攝氏溫標 (°C)",
    "華氏溫標 (°F)",
    "凱氏溫標 (K)",
    "蘭金溫標 (R)",
    "德利爾溫標 (°De)",
    "牛頓溫標 (°N)",
    "列氏溫標 (°Ré)",
    "羅氏溫標 (°Rø)"
  ];
  exchange(choice1);
}

/* 單位更改 -- 單位更改 -- 單位更改 -- 單位更改 */
