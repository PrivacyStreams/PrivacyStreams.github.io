---
layout: homepage
---

<div class="w3-cell-row" style="width:80%">
<div class="w3-container w3-cell w3-cell-middle">
<h3>What is PrivacyStreams?</h3>
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
<h3>Easy-to-use</h3>
<p><strong>App developers</strong> can use PrivacyStreams to access and process personal data with a unified query interface (<strong>UQI</strong>).</p>
</div>
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
</div>

<br/>

<div class="w3-cell-row" style="width:80%">
<div class="w3-container w3-cell w3-cell-middle">
<h3>Privacy benefits</h3>
<p><strong>Apps</strong> developed with PrivacyStreams are more <strong>privacy-friendly</strong>.</p>
<ul>
<li>Easier for analysis.</li>
<li>More transparent for app users.</li>
</ul>
</div>
<div class="w3-container w3-cell w3-cell-middle w3-panel w3-leftbar w3-sand w3-xlarge w3-serif verified">
  <p><strong style="color:green;">Verified &#9989;</strong>: <i>"Microphone is used by this app to compute loudness periodically."</i></p>
</div> 
</div>

<br />

<a href="get_started.html">
<button class="w3-button w3-white w3-border w3-border-red w3-round-large w3-xlarge">Get started!</button>
</a>

## News
{% for post in site.posts %}
+ [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) {{ post.date | date_to_string }}
{% endfor %}

