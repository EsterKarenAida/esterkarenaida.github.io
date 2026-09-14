---
title: Poems
permalink: /poems/
standfirst: Twenty poems. Published work, and poems she finished but never sent out.
---

{%- assign published = site.poems | where_exp: "p", "p.publication" -%}
{%- assign papers = site.poems | where_exp: "p", "p.publication == nil" -%}

<h2 class="group-heading">Published</h2>

<p class="index-note">
Five of these were printed by <em>The Ilanot Review</em> after her death, taken
from an unpublished manuscript; five appeared in her lifetime. Each poem carries
its original publication at the foot of the page.
</p>

<ul class="poem-list">
  {%- for poem in published %}
  <li>
    <a href="{{ poem.url | relative_url }}">{{ poem.title }}</a>
    {%- if poem.opening %}<span class="poem-list__opening">{{ poem.opening }}</span>{% endif -%}
  </li>
  {%- endfor %}
</ul>

<h2 class="group-heading">From her papers</h2>

<p class="index-note">
Poems she had brought to a finish, kept in a folder of her own marked
<em>polished</em> or gathered into her manuscript <em>Centrifuge Rattle</em>,
and transcribed from her files. Punctuation and lineation follow her
typescripts, and the dates are the dates of her documents rather than of the
writing.
</p>

<ul class="poem-list">
  {%- for poem in papers %}
  <li>
    <a href="{{ poem.url | relative_url }}">{{ poem.title }}</a>
    {%- if poem.opening %}<span class="poem-list__opening">{{ poem.opening }}</span>{% endif -%}
  </li>
  {%- endfor %}
</ul>

<h2 class="group-heading">Her acknowledgements</h2>

<blockquote class="acknowledgements">
<p>The author gratefully acknowledges the following for first publishing several
poems: <em>The Times of Israel</em> (as blogposts), <em>The BeZine</em> Online
Quarterly. Virtually all poems herein were previously published on the author’s
personal facebook wall.</p>
<p>She wishes to thank, as well, the community surrounding the Shaindy Rudoff
Creative Writing Graduate Program at Bar Ilan University for warm, inclusive
support throughout several health crises, and Jerusalism (promoting Israeli
Literature in English.)</p>
</blockquote>

<p class="index-note">
From the end matter of her manuscript <em>Centrifuge Rattle</em>.
</p>
