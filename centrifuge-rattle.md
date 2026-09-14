---
title: Centrifuge Rattle
permalink: /centrifuge-rattle/
standfirst: The book she was assembling, in the order she left it.
---

<p class="index-note">
A manuscript she put together and did not publish, gathered around the year
she spent waiting for a heart and the years after it. The sequence below is
hers, taken from her typescript. Every poem in it is on this site; this page
only restores the order.
</p>

{%- assign sequence = site.poems | where_exp: "p", "p.manuscript_order" | sort: "manuscript_order" -%}

<ol class="sequence">
  {%- for poem in sequence %}
  <li>
    <a href="{{ poem.url | relative_url }}">{{ poem.title }}</a>
    {%- if poem.opening %}<span class="poem-list__opening">{{ poem.opening }}</span>{% endif -%}
  </li>
  {%- endfor %}
</ol>

<p class="index-note">
The end matter of the manuscript, where she thanks the papers that first
printed these poems and the people who saw her through the years of writing
them, is at the foot of the <a href="{{ '/poems/' | relative_url }}">poems</a>
page.
</p>
