---
title: Prose
permalink: /prose/
standfirst_include: prose-standfirst.html
---

{%- assign published = site.prose | where_exp: "p", "p.publication" -%}
{%- assign papers = site.prose | where_exp: "p", "p.publication == nil" -%}

{%- if published.size > 0 %}
<h2 class="group-heading">Published</h2>

<p class="index-note">
Printed in her lifetime, and reprinted here with the original credited at the
foot of each page.
</p>

<ul class="poem-list">
  {%- for piece in published %}
  <li>
    <a href="{{ piece.url | relative_url }}">{{ piece.title }}</a>
    {%- if piece.subtitle %}<span class="poem-list__opening">{{ piece.subtitle }}</span>{% endif -%}
  </li>
  {%- endfor %}
</ul>
{%- endif %}

{%- if papers.size > 0 %}
<h2 class="group-heading">From her papers</h2>

<p class="index-note">
Prose she finished but never sent out.
</p>

<ul class="poem-list">
  {%- for piece in papers %}
  <li>
    <a href="{{ piece.url | relative_url }}">{{ piece.title }}</a>
    {%- if piece.subtitle %}<span class="poem-list__opening">{{ piece.subtitle }}</span>{% endif -%}
  </li>
  {%- endfor %}
</ul>
{%- endif %}
