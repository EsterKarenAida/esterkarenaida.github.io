(function () {
  var KEY = "eka-saved";
  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }
  function write(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }

  var saved = read();
  var navLink = document.querySelector(".nav__saved");
  function refreshNav() {
    if (navLink) navLink.hidden = saved.length === 0;
  }
  refreshNav();

  var btn = document.querySelector(".save");
  if (btn) {
    var item = {
      url: btn.getAttribute("data-save-url"),
      title: btn.getAttribute("data-save-title"),
      kind: btn.getAttribute("data-save-kind")
    };
    function paint() {
      var on = saved.some(function (s) { return s.url === item.url; });
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.querySelector(".save__label").textContent = on ? "Saved" : "Save";
      btn.setAttribute("aria-label", (on ? "Remove this " : "Save this ") + item.kind);
    }
    btn.hidden = false;
    paint();
    btn.addEventListener("click", function () {
      if (saved.some(function (s) { return s.url === item.url; })) {
        saved = saved.filter(function (s) { return s.url !== item.url; });
      } else {
        saved.push(item);
      }
      write(saved);
      paint();
      refreshNav();
    });
  }

  var list = document.querySelector(".saved-list");
  if (list) {
    var empty = document.querySelector(".saved-empty");
    function render() {
      list.innerHTML = "";
      if (empty) empty.hidden = saved.length > 0;
      var kinds = [["poem", "Poems"], ["prose", "Prose"]];
      kinds.forEach(function (k) {
        var items = saved.filter(function (s) { return s.kind === k[0]; });
        if (!items.length) return;
        var h = document.createElement("h2");
        h.className = "saved-list__kind";
        h.textContent = k[1];
        list.appendChild(h);
        var ul = document.createElement("ul");
        ul.className = "poem-list";
        items.forEach(function (s) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = s.url;
          a.textContent = s.title;
          var rm = document.createElement("button");
          rm.type = "button";
          rm.className = "saved-list__remove";
          rm.setAttribute("aria-label", "Remove " + s.title);
          rm.textContent = "\u00d7";
          rm.addEventListener("click", function () {
            saved = saved.filter(function (t) { return t.url !== s.url; });
            write(saved);
            render();
            refreshNav();
          });
          li.appendChild(a);
          li.appendChild(rm);
          ul.appendChild(li);
        });
        list.appendChild(ul);
      });
    }
    render();
  }
})();
