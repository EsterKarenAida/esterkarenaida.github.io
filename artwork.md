---
title: Artwork
permalink: /artwork/
standfirst_include: artwork-standfirst.html
---

<p class="index-note">
She painted, drew, embroidered, sewed, knitted, worked in calligraphy and
pieced mosaics from ceramic shards, and she designed the first printed covers
of <em>The Ilanot Review</em>. Most of what follows was photographed by her and
posted as she finished it, so the pictures are snapshots rather than
reproductions, and a few works appear as they were, unfinished or still wet.
More is being gathered and scanned.
</p>

{%- for section in site.data.artwork %}
<section class="gallery-section" id="{{ section.group }}">
  <h2 class="gallery-section__title">{{ section.label }}</h2>
  {%- if section.blurb %}
  <p class="index-note">{{ section.blurb }}</p>
  {%- endif %}

  <div class="gallery">
    {%- for work in section.works %}
    <figure class="work" id="{{ work.slug }}">
      <img src="{{ '/assets/img/artwork/' | relative_url }}{{ work.slug }}.jpg"
           alt="{{ work.title }}{% if work.medium %}, {{ work.medium | downcase }}{% endif %}" loading="lazy">
      <figcaption>
        <strong>{{ work.title }}</strong>{% if work.medium %} · {{ work.medium }}{% endif %}{% if work.year %} · {{ work.year }}{% endif %}
        {%- if work.note %}<span class="work__note">{{ work.note }}</span>{% endif %}
      </figcaption>
    </figure>
    {%- endfor %}
  </div>
</section>
{%- endfor %}

<p class="index-note">
Prints of some of her designs, alongside work by family members and
collaborators, remain on her
<a href="https://www.redbubble.com/people/EsterKarenAida/shop">Redbubble shop</a>.
</p>
