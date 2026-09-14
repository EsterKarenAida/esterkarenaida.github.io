---
title: Artwork
permalink: /artwork/
standfirst: Seven works, as published with her final poems in The BeZine.
---

<p class="index-note">
She painted, drew, embroidered and worked in appliqué, and designed the first
printed covers of <em>The Ilanot Review</em>. The seven pieces below are the ones
published with titles and dates in her lifetime or immediately after. A larger
archive of her work is being gathered and scanned, and will be added here.
</p>

<div class="gallery">
  {%- for work in site.data.artwork %}
  <figure class="work" id="{{ work.slug }}">
    <img src="{{ '/assets/img/artwork/' | relative_url }}{{ work.slug }}.jpg"
         alt="{{ work.title }}{% if work.medium %}, {{ work.medium | downcase }}{% endif %}" loading="lazy">
    <figcaption>
      <strong>{{ work.title }}</strong>{% if work.medium %} · {{ work.medium }}{% endif %} · {{ work.year }}
    </figcaption>
  </figure>
  {%- endfor %}
</div>

<p class="index-note">
Prints of some of her designs, alongside work by family members and
collaborators, remain on her
<a href="https://www.redbubble.com/people/EsterKarenAida/shop">Redbubble shop</a>.
</p>
