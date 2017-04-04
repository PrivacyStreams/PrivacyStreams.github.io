---
layout: homepage
title: Installing Google location service.
---

The Location APIs in PrivacyStreams are based on Google location service.
In order to access location with PrivacyStreams, you will need to install Google Service.

Specifically, add the following line to `build.gradle` file under the app module.

<pre>
<code>dependencies {
    compile 'com.github.privacystreams:privacystreams-core:0.0.4'</code>
    <code class="highlight">compile 'com.google.android.gms:play-services-location:10.2.1'</code>
    <code>...
}</code>
</pre>

Then in your app code, enable Google location service:

<pre>
<code>protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);</code>
        <code class="highlight">Globals.LocationConfig.useGoogleService = true;</code>
        <code>...
}</code>
</pre>
