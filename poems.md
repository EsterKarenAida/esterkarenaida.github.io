---
title: Poems
permalink: /poems/
standfirst_include: poems-standfirst.html
---

{%- assign published = site.poems | where_exp: "p", "p.publication" -%}
{%- assign unpublished = site.poems | where_exp: "p", "p.publication == nil" -%}
{%- assign papers = unpublished | where_exp: "p", "p.draft != true" -%}
{%- assign drafts = unpublished | where: "draft", true -%}
{%- assign posthumous = published | where: "publication", "The Ilanot Review" -%}
{%- assign in_life = published | where_exp: "p", "p.publication != 'The Ilanot Review'" -%}

<h2 class="group-heading">Published</h2>

<p class="index-note">
{% capture n %}{% include number-word.html n=posthumous.size %}{% endcapture %}{{ n | capitalize }}
of these were printed by <em>The Ilanot Review</em> after her death, taken from
an unpublished manuscript; {% include number-word.html n=in_life.size %}
appeared in her lifetime. Each poem carries its original publication at the foot
of the page.
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

<h2 class="group-heading">From her drafts</h2>

<p class="index-note">
Poems she left in her working folder rather than in the folder she marked
<em>polished</em>. She may well have gone on changing them. They are here
because they read whole, and transcribed as she left them.
</p>

<ul class="poem-list">
  {%- for poem in drafts %}
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
