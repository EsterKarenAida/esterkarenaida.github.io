---
title: Photographs
permalink: /photographs/
standfirst_include: photographs-standfirst.html
---

<p class="index-note">
She walked with a phone in her pocket and photographed what stopped her: a sign
nailed to a eucalyptus, a lemon tree over a gate, borage in a field of mustard,
the ruins at Ramat Rachel under the pines. She kept the pictures in folders by
walk and gave each one a name, and the captions here are hers. Some became
paintings; the <a href="{{ '/artwork/' | relative_url }}#watercolours">watercolours</a>
of the orchards and the blue teapot began in these.
</p>

{%- for section in site.data.photographs %}
<section class="gallery-section" id="{{ section.group }}">
  <h2 class="gallery-section__title">{{ section.label }}</h2>
  {%- if section.blurb %}
  <p class="index-note">{{ section.blurb }}</p>
  {%- endif %}

  <div class="gallery">
    {%- for work in section.works %}
    <figure class="work" id="{{ work.slug }}">
      <img src="{{ '/assets/img/photographs/' | relative_url }}{{ work.slug }}.jpg"
           alt="{{ work.title }}" loading="lazy">
      <figcaption>
        <strong>{{ work.title }}</strong>
        {%- if work.note %}<span class="work__note">{{ work.note }}</span>{% endif %}
      </figcaption>
    </figure>
    {%- endfor %}
  </div>
</section>
{%- endfor %}

<p class="index-note">
All photographs are by Ester Karen Aida and are hers alone; the photographs of
her family, and of the work of friends she admired, stay with the family.
</p>
