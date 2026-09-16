---
title: Zimrat Tal
permalink: /siddur/
standfirst: The Friday night siddur she illustrated page by page, given to her eldest daughter and finished six years later.
description: Zimrat Tal, a Friday night siddur illustrated by Ester Karen Aida, all fifty pages, with an English guide.
---

<p class="index-note">
<em>Zimrat Tal</em> is a prayer book for Friday night, the service that brings in
the Jewish Sabbath. Ester began it as a bat mitzvah present for Tal, her eldest
daughter, and spent six years painting it, one page at a time, filling the
margins around the Hebrew with sunflowers, angels, goats, Jerusalem hillsides,
and the rooms of her own house. The text is the traditional liturgy in the
Sephardi rite; everything around it is hers. She edited it together with Shoshan
Boxenhorn and it was printed in 2019.
</p>

<p class="index-note">
All fifty pages are below. The Hebrew is not translated here, but each page
carries a line of English naming the prayer on it, so the book can be followed
without reading Hebrew. Hebrew books open from what an English reader would call
the back, so page one is the cover and the pages run right to left.
</p>

<div class="siddur" id="siddur" data-total="{{ site.data.siddur.size }}">
  <div class="siddur__stage">
    <button class="siddur__arrow" type="button" data-step="1" aria-label="Next page">‹</button>
    <a class="siddur__frame" id="siddur-link" href="{{ '/assets/img/siddur/p01.jpg' | relative_url }}">
      <img id="siddur-img" src="{{ '/assets/img/siddur/p01.jpg' | relative_url }}" alt="Page 1 of Zimrat Tal">
    </a>
    <button class="siddur__arrow" type="button" data-step="-1" aria-label="Previous page">›</button>
  </div>
  <p class="siddur__caption" aria-live="polite">
    <strong id="siddur-en">Cover</strong>
    <span id="siddur-section"></span>
    <span class="siddur__count" id="siddur-count">Page 1 of {{ site.data.siddur.size }}</span>
  </p>
</div>

<h2 class="gallery-section__title">All fifty pages</h2>

<div class="siddur-grid">
  {%- for p in site.data.siddur %}
  {%- assign num = p.n | prepend: '0' | slice: -2, 2 %}
  <a class="siddur-grid__item" href="{{ '/assets/img/siddur/p' | relative_url }}{{ num }}.jpg" data-page="{{ p.n }}">
    <img src="{{ '/assets/img/siddur/thumbs/p' | relative_url }}{{ num }}.jpg"
         alt="{{ p.en }}{% if p.section %}, {{ p.section }}{% endif %}" loading="lazy" width="150">
    <span>{{ p.n }}</span>
  </a>
  {%- endfor %}
</div>

<p class="index-note">
The whole book is also a
<a href="{{ '/assets/files/zimrat-tal.pdf' | relative_url }}">single PDF, eleven megabytes</a>.
The print-ready files are kept in the family archive.
</p>

<script>
  (function () {
    var pages = [
      {%- for p in site.data.siddur %}
      { n: {{ p.n }}, section: {{ p.section | jsonify }}, en: {{ p.en | jsonify }} }{% unless forloop.last %},{% endunless %}
      {%- endfor %}
    ];
    var base = "{{ '/assets/img/siddur/' | relative_url }}";
    var img = document.getElementById('siddur-img');
    var link = document.getElementById('siddur-link');
    var en = document.getElementById('siddur-en');
    var section = document.getElementById('siddur-section');
    var count = document.getElementById('siddur-count');
    var i = 0;

    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function show(next, scroll) {
      i = Math.max(0, Math.min(pages.length - 1, next));
      var p = pages[i];
      img.src = base + 'p' + pad(p.n) + '.jpg';
      img.alt = p.en + ', page ' + p.n + ' of Zimrat Tal';
      link.href = img.src;
      en.textContent = p.en;
      section.textContent = p.section;
      count.textContent = 'Page ' + p.n + ' of ' + pages.length;
      if (scroll) document.getElementById('siddur').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    Array.prototype.forEach.call(document.querySelectorAll('.siddur__arrow'), function (b) {
      b.addEventListener('click', function () { show(i + Number(b.dataset.step)); });
    });

    Array.prototype.forEach.call(document.querySelectorAll('.siddur-grid__item'), function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        show(Number(a.dataset.page) - 1, true);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(i + 1);
      if (e.key === 'ArrowRight') show(i - 1);
    });

    show(0);
  })();
</script>
