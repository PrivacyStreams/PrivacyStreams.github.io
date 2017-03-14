---
layout: homepage
---

<div class="w3-cell-row" style="width:80%">
<div class="w3-container w3-cell w3-cell-middle">
<p>PrivacyStreams is a framework for <strong>privacy-friendly personal data processing</strong>.</p>
<p>Currently, it supports Android platform.</p>
</div>
<div class="w3-container w3-cell w3-cell-middle">
<img src="{{site.baseurl}}/static/figure/simple_explain.png" alt="PrivacyStreams simply explained." style="min-width: 500px">
</div>
</div>

<br/>

<div class="w3-cell-row" style="width:80%">
<div class="w3-container w3-cell w3-cell-middle">
<pre>
<code>
// Record audio periodically and callback if loudness changes.
uqi.getDataItems(Audio.recordPeriodic(.., ..), Purpose.HEALTH(..))
   .setField("loudness", calcLoudness(Audio.AUDIO_URI))
   .onChange("loudness", callback)
</code>
</pre>
</div>
<div class="w3-container w3-cell w3-cell-middle">
<p><strong>App developers</strong> can use PrivacyStreams to access and process personal data with a unified query interface (<strong>UQI</strong>).</p>
</div>
</div>

<br/>

<div class="w3-cell-row" style="width:80%">
<div class="w3-container w3-cell w3-cell-middle">
<p><strong>Apps</strong> developed with PrivacyStreams are more <strong>privacy-friendly</strong>.</p>
<ul>
<li>Easier for analysis.</li>
<li>More transparent for app users.</li>
</ul>
</div>
<div class="w3-container w3-cell w3-cell-middle w3-panel w3-leftbar w3-sand w3-xlarge w3-serif verified">
  <p><i>"Microphone is used by this app to compute loudness periodically."</i></p>
</div> 
</div>

<br />

<a href="({{site.baseurl}}/get_started.html">
<button class="w3-button w3-white w3-border w3-border-red w3-round-large w3-xlarge">Get started!</button>
</a>

## News
{% for post in site.posts %}
+ [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) {{ post.date | date_to_string }}
{% endfor %}

