const flagSvgs = {
  en: '<svg viewBox="0 0 60 36" width="20" height="14"><rect width="60" height="36" fill="#012169"/><path d="M0 0 60 36M60 0 0 36" stroke="#fff" stroke-width="6"/><path d="M0 0 60 36M60 0 0 36" stroke="#C8102E" stroke-width="2"/><path d="M30 0V36M0 18H60" stroke="#fff" stroke-width="10"/><path d="M30 0V36M0 18H60" stroke="#C8102E" stroke-width="6"/></svg>',
  no: '<svg viewBox="0 0 22 16" width="20" height="14"><rect width="22" height="16" fill="#EF2B2D"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#002868"/><rect y="7" width="22" height="2" fill="#002868"/></svg>'
};

function applyLang(lang) {
  document.querySelectorAll("[data-en]").forEach(function (el) {
    var text = el.getAttribute("data-" + lang);
    if (text !== null) el.textContent = text;
  });
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);
  document.getElementById("langBtn").innerHTML = flagSvgs[lang];
}

function initLangSwitch() {
  var menu = document.getElementById("langMenu");
  menu.querySelectorAll("button").forEach(function (item) {
    var code = item.getAttribute("data-lang");
    item.innerHTML = flagSvgs[code] + item.textContent;
  });

  var saved = localStorage.getItem("lang") || "en";
  applyLang(saved);

  var btn = document.getElementById("langBtn");

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("open");
  });

  document.addEventListener("click", function () {
    menu.classList.remove("open");
  });

  menu.querySelectorAll("button").forEach(function (item) {
    item.addEventListener("click", function () {
      applyLang(item.getAttribute("data-lang"));
      menu.classList.remove("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", initLangSwitch);