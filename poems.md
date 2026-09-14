---
title: Poems
permalink: /poems/
standfirst: Ten poems, published between 2018 and 2022.
---

<p class="index-note">
Five of these were printed by <em>The Ilanot Review</em> after her death, taken
from an unpublished manuscript; five appeared in her lifetime. Each poem carries
its original publication at the foot of the page.
</p>

<ul class="poem-list">
  {%- for poem in site.poems %}
  <li>
    <a href="{{ poem.url | relative_url }}">{{ poem.title }}</a>
    {%- if poem.opening %}<span class="poem-list__opening">{{ poem.opening }}</span>{% endif -%}
  </li>
  {%- endfor %}
</ul>
