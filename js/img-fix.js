window.PAYAM_IMG_FIX = {
  "s25-ultra":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg",
  "s25-ultra-512":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg",
  "s25-plus":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-plus-sm-s936.jpg",
  "s25":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-sm-s931.jpg",
  "s24-ultra":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
  "s24-plus":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-plus-5g-sm-s926.jpg",
  "s24":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g-sm-s921.jpg",
  "s24-fe":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-fe-r1.jpg",
  "s23-ultra":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
  "s23-plus":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-plus-5g.jpg",
  "s23":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg",
  "a56":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a56-.jpg",
  "a54":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg",
  "a34":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a34.jpg",
  "a16":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a16-5g.jpg",
  "a06":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a06-1.jpg",
  "m35":"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m35-.jpg",
  "x15-ultra":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-ultra-.jpg",
  "x15-ultra-1tb":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-ultra-.jpg",
  "x14-ultra":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra-new.jpg",
  "x13":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t.jpg",
  "iphone-14-pro-max":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
  "iphone-15-plus":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus-.jpg",
  "note14":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-5g.jpg",
  "note14-pro-plus":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-plus-5g.jpg",
  "note13-pro-plus":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus-int.jpg",
  "note12-pro":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-pro.jpg",
  "poco-c75":"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c75-.jpg",
  "honor-200":"https://fdn2.gsmarena.com/vv/bigpic/honor-200-.jpg",
  "honor-200-pro":"https://fdn2.gsmarena.com/vv/bigpic/honor-200-pro-.jpg",
  "x7c":"https://fdn2.gsmarena.com/vv/bigpic/honor-x7c-5g.jpg",
  "cmf-1":"https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-1.jpg",
  "pixel-9-pro-xl":"https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl-.jpg",
  "pixel-9-pro":"https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-.jpg",
  "pixel-9":"https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-.jpg",
  "pixel-7":"https://fdn2.gsmarena.com/vv/bigpic/google-pixel-7a.jpg",
  "nord4":"https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord4.jpg",
  "nord-ce4":"https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce4-lite.jpg",
  "gt7-pro":"https://fdn2.gsmarena.com/vv/bigpic/realme-gt7-pro.jpg",
  "gt6":"https://fdn2.gsmarena.com/vv/bigpic/realme-gt6.jpg",
  "c67":"https://fdn2.gsmarena.com/vv/bigpic/realme-c65.jpg",
  "note60":"https://fdn2.gsmarena.com/vv/bigpic/realme-c61.jpg",
  "g55":"https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g55-5g.jpg",
  "g35":"https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g35-5g.jpg",
  "g04":"https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g24.jpg",
  "nokia-c32":"https://fdn2.gsmarena.com/vv/bigpic/nokia-c32-2023.jpg",
  "infinix-note40":"https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40.jpg",
  "a40":"https://fdn2.gsmarena.com/vv/bigpic/oppo-a3x.jpg"
};

window.payamFixProducts = function () {
  var list = window.PAYAM_PRODUCTS || [];
  var fix = window.PAYAM_IMG_FIX || {};
  list.forEach(function (p) {
    if (fix[p.id]) p.img = fix[p.id];
  });
  return list;
};

window.payamGallery = function (p) {
  var img = p.img || "";
  var stem = img.split("/").pop().replace(/\.jpg$/i, "");
  var folderMap = {
    apple: "apple", samsung: "samsung", xiaomi: "xiaomi", honor: "honor",
    google: "google", nothing: "nothing", oneplus: "oneplus", realme: "realme",
    oppo: "oppo", vivo: "vivo", motorola: "motorola", nokia: "nokia",
    tecno: "tecno", infinix: "infinix"
  };
  var folder = folderMap[p.brand] || p.brand;
  var urls = [img];
  for (var i = 0; i < 6; i++) {
    urls.push("https://fdn2.gsmarena.com/vv/pics/" + folder + "/" + stem + "-" + i + ".jpg");
  }
  return urls;
};
