---
layout: homepage
title: Get started with PrivacyStreams
---

Table of content:

+ [Install PrivacyStreams](#install-privacystreams)
+ [Quick examples](#quick-examples)
+ [Exception handling](#error-handling)

## Install PrivacyStreams

To use PrivacyStreams in your Android app, you can either install it with Maven/Gradle or from source.

### Install with Gradle

This is the most convenient way to install PrivacyStreams for most Android developers.
Simply add the following line to `build.gradle` file under you app module.

<pre>
<code>dependencies {</code>
    <code class="highlight">compile 'com.github.privacystreams:privacystreans-core:0.0.2'</code>
    <code>...
}</code>
</pre>

### Install from source

If you are a contributor or want more flexibility, you can install PrivacyStreams from source code.
For example, in Android Studio, the installation involves the following steps:

1. Create a new project from Github in Android Studio. 
    - Click **File -> New -> Project from version control -> GitHub**;
    - In **Git repository URL** field, input `https://github.com/PrivacyStreams/PrivacyStreams-Android`, and click **Clone**);
2. In the new project, create a new module (your app module).
    - Click **File -> New -> New module...**.
3. Open the build.gradle file of the new module, add the following line to dependencies:
    - `compile project(':privacystreams-core')`

## Quick examples

Accessing and processing personal data with PrivacyStreams is simple,
because all types of personal data can be accessed with a unified query interface (**UQI**).

### Querying random data

<pre class="line-numbers">
<code>void foo(Context context) {
    UQI uqi = new UQI(context);  // Initialize a UQI instance.
    
    // Get random MockItem stream for testing.
    uqi.getDataItems(MockItem.asRandomUpdates(10, 10.0, 100), Purpose.TEST("Testing first data query."))
       .limit(10)                // Limit the number of Items to at most 10.
       .debug();                 // Print the items for debugging.
}</code>
</pre>

The above code constructs a UQI instance, accesses a data stream and prints 10 items.

The data being accessed is a stream of randomized data specified by `MockItem.asRandomUpdates(10, 10.0, 100)`.
Each item in this stream is some random values. The definition of MockItem's format can be found [here]({{site.baseurl}}/items.html#mockitem).

The second parameter of `uqi.getDataItems()` specifies the purpose of data access.
Explaining the purpose can help users understand your permission request, hence better for privacy.
**We suggest you carefully define the purpose in your app.** We have several purpose categories (such as `Purpose.ADS(..)`, `Purpose.HEALTH(..)`, etc.) for you to select.

If you execute the above code (for example, calling `foo(MainActivity.this)`), you will get some output in logcat like:

<pre>
D/PrivacyStreams: {y=1, z=5.245425734292725, x=1, id=0, time_created=1489529999937}
D/PrivacyStreams: {y=8, z=5.4303601061807, x=8, id=1, time_created=1489528265617}
D/PrivacyStreams: {y=4, z=0.7657566725249387, x=4, id=2, time_created=1489528265718}
D/PrivacyStreams: {y=5, z=0.49851207499276406, x=5, id=3, time_created=1489528265819}
D/PrivacyStreams: {y=0, z=3.1471844164445564, x=0, id=4, time_created=1489528265920}
D/PrivacyStreams: {y=6, z=6.541989969401724, x=6, id=5, time_created=1489528266021}
D/PrivacyStreams: {y=1, z=5.484224955776141, x=1, id=6, time_created=1489528266122}
D/PrivacyStreams: {y=8, z=0.01880078580959288, x=8, id=7, time_created=1489528266224}
D/PrivacyStreams: {y=3, z=5.170116507338301, x=3, id=8, time_created=1489528266325}
D/PrivacyStreams: {y=2, z=3.3222939911622795, x=2, id=9, time_created=1489528266427}
</pre>

### Getting recent called contacts

Here is a more realistic example: getting a list of recent-called phone numbers.

<pre class="line-numbers">
<code>List&lt;String&gt; recentCalledNumbers = 
    uqi.getDataItems(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest friends."))
       .filter(Phonecall.TYPE, "outgoing")  // Only keep the outgoing call logs
       .sortBy(Phonecall.TIMESTAMP)         // Sort the call logs according to timestamp, in ascending order
       .reverse()                           // Reverse the order, now the most recent call log comes first
       .limit(10)                           // Keep the most recent 10 logs
       .asList(Phonecall.CONTACT)           // Output the CONTACT field (the phone number) to list</code>
</pre>

The above code accesses the call logs with `Phonecall.asLogs()` and processes the call logs with functions like `filter`, `sortBy`, etc.

The functions operate on the item fields, and the fields of `Phonecall` item are shown as follows:

| Reference | Name | Type | Description |
|----|----|----|----|
| `Phonecall.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the phonecall is happened. |
| `Phonecall.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the phonecall. |
| `Phonecall.DURATION` | `"duration"` | `Long` | The duration of the phonecall, in milliseconds. |
| `Phonecall.TYPE` | `"type"` | `String` | The phonecall type, could be "incoming", "outgoing" or "missed". |

Note that "Reference" is the equivalence to "Name", i.e. `filter(Phonecall.TYPE, "outgoing")` is the same as `filter("type", "outgoing")`.

- **About permissions.** Accessing call logs requires *READ_CALL_LOG* permission in Android.
To use the above code, you need to request the permission in `AndroidManifest.xml` and handle the exception if the permission is denied by user. For example:

In your `AndroidManifest.xml`:
<pre><code>...</code>
<code class="highlight">&lt;uses-permission android:name="android.permission.READ_CALL_LOG" /&gt;</code>

<code><application
           android:theme="@style/AppTheme"
           ...</code>
</pre>

In your Java code:

<pre>
<code>try {
    List&lt;String&gt; recentCalledNumbers = 
        uqi.getDataItems(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest friends."))
           . ...  // filter, sortBy, etc.
           .asList(Phonecall.CONTACT)
} catch (PrivacyStreamsException e) {</code>
    <code class="highlight">if (e instanceof PermissionDeniedException) Log.e("PrivacyStreams", "permission denied by user.")</code>
}
</pre>

That's it! More details about exception handling will be discussed in [Exception handling](#error-handling) section.

## Exception handling

In Android, personal data is controlled by permissions. Android apps need to declare permissions in `AndroidManifest.xml`.
For Android 6.0+, apps must request permissions at runtime, including checking whether permissions are granted, prompting users to grant the permissions and handling users' access control decisions.
In PrivacyStreams, permission handling is extremely easy. Just follow the steps below:

1. Put your UQI code in a try-catch block.