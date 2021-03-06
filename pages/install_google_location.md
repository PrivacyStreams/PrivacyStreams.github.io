---
layout: homepage
title: Installing Google location service.
---

The Location APIs in PrivacyStreams are based on Google location service.
In order to access location with PrivacyStreams, you will need to install Google location service.

Specifically, add the following line to `build.gradle` file under the app module.

<pre>
<code>dependencies {
    compile 'io.github.privacystreams:privacystreams-android-sdk:0.1.7'</code>
    <code class="highlight">compile 'com.google.android.gms:play-services-location:10.2.1'</code>
    <code>...
}</code>
</pre>

Then in your app code, enable Google location service:

<pre>
<code>void printLocationTrace() {
    super.onCreate(savedInstanceState);</code>
    <code class="highlight">Globals.LocationConfig.useGoogleService = true;</code>
    <code>// Then the location API will be used on Google location service.
     uqi.getData(Geolocation.asUpdates(1000, Geolocation.LEVEL_CITY), Purpose.TEST("test"))
        .setField("distorted_lat_lon", GeolocationOperators.distort(Geolocation.LAT_LON, 1000))
        .debug();
}</code>
</pre>
