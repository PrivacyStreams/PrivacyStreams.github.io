---
layout: homepage
---

+ [Overview](#overview)
+ [Installing PrivacyStreams](#installing-privacystreams)
+ [Quick examples](#quick-examples)
    - [Getting microphone loudness periodically](#getting-microphone-loudness-periodically)
    - [Getting recent called contacts](#getting-recent-called-contacts)
+ [PrivacyStreams API](#privacystreams-api)
    - [Unified query interface (UQI)](#unified-query-interface-uqi)
    - [Simplifying the code](#simplifying-the-code)
    - [PrivacyStreams pipeline](#privacyStreams-pipeline)
    - [Reusing streams](#reusing-streams)
+ [Exceptions and permissions](#exceptions-and-permissions)
    - [Handling exceptions in blocking pipelines](#handling-exceptions-in-blocking-pipelines)
    - [Handling exceptions in non-blocking pipelines](#handling-exceptions-in-non-blocking-pipelines)
    - [Permission configuration](#permission-configuration)
+ [Debugging and testing](#debugging-and-testing)
    - [Mocking data source](#mocking-data-source)
    - [Printing the streams](#printing-the-streams)
+ [Read more](#read-more)

## Overview

<figure>
<img src="{{site.baseurl}}/static/figure/simple_explain.png" alt="PrivacyStreams simply explained." style="min-width: 300px">
</figure>

PrivacyStreams is a framework for **privacy-friendly personal data processing**.
It provides **easy-to-use APIs** in Android for accessing and processing various types of personal data.
It focused on two challenges for accessing and processing personal data:
 
- It can be **difficult for developers** to access and process personal data, due to the wide range of APIs and data formats.
- End users don't know what granularity of personal data is accessed, which can lead to **privacy concerns**.

As an example of both issues,
a sleep monitoring app might only need access to the microphone for checking loudness of the current environment. 
The developer would have to write a lot of code to record and process audio using [MediaRecorder](https://developer.android.com/guide/topics/media/mediarecorder.html), 
and end-users might be concerned because the app has full access to data collected by the microphone.

PrivacyStreams is designed to address these issues. Its main features include:

- Providing a unified API and a functional programming approach for accessing and processing a large variety of personal data;
- Making it easy for privacy analysis, thus users can monitor the granularity of data accessed and how they are processed;
- Offering many privacy-related functions (`hash`, `blur`, etc.) for developers to implement privacy-friendly features in their apps.

For example, with PrivacyStreams, a sleep monitor can access and process audio data from the microphone with few lines of code:
<pre>
<code>
 uqi.getData(Audio.recordPeriodic(10*1000, 2*60*1000), Purpose.HEALTH("monitoring sleep"))
                                                            // Record a 10-second audio periodically with a 2-minute interval between each two records.
    .setField("loudness", calcLoudness(Audio.AUDIO_DATA))   // Set a customized field "loudness" for each record as the audio loudness
    .onChange("loudness", callback)                         // Callback with loudness value when "loudness" changes</code>
</pre>

Apps developed with PrivacyStreams can be easily analyzed and verified to address privacy concerns of users.

<div class="w3-container w3-cell w3-cell-middle w3-panel w3-leftbar w3-sand w3-large w3-serif verified">
  &#9989; <i>Microphone is used by this app to calculate loudness periodically.</i>
  <p style="text-align: right;"><strong style="color:green;">- Verified by PrivacyStreams.</strong></p>
</div>

## Installing PrivacyStreams

To use PrivacyStreams in your Android app, please add the following line to the `build.gradle` file under the app module.

<pre>
<code>dependencies {</code>
    <code class="highlight">compile 'com.github.privacystreams:privacystreams-core:0.0.6'</code>
    <code>...
}</code>
</pre>

That's it! 

Some types of data and operations may need extra installation and/or configuration.
For example:

- To access location with PrivacyStreams, you may need to [install Google location service](pages/install_google_location.html);
- To collect data to Dropbox, you need to [install Dropbox service](pages/install_dropbox_service.html);
- To access browser search events, WhatsApp/Facebook messages, etc., you need to [enable Accessibility service](pages/enable_accessibility.html);
- To read system notifications, you need to [enable notification service](pages/enable_notification_service.html).

You may also want to [check whether your installation is successful](pages/check_installation.html).

## Quick examples

Before going into details, let's take a quick look at what it is like to use PrivacyStreams for personal data processing.

### Getting microphone loudness periodically

First, let's review the sleep monitor example in [Overview](#overview) section.
We used the following code to get audio loudness periodically.

<pre>
<code>
 uqi.getData(Audio.recordPeriodic(10*1000, 2*60*1000), Purpose.HEALTH("monitoring sleep"))
                                                            // Record a 10-second audio periodically with a 2-minute interval between each two records.
    .setField("loudness", calcLoudness(Audio.AUDIO_DATA))   // Set a customized field "loudness" for each record as the audio loudness
    .onChange("loudness", callback)                         // Callback with loudness value when "loudness" changes</code>
</pre>

UQI stands for "unified query interface", which is the only interface in PrivacyStreams for accessing all kinds of personal data.

The first parameter of `UQI.getData()` is called a "Provider", which declares the data we want to access.
In the example, `Audio.recordPeriodic()` provides audio data by recording from microphone periodically;
The second parameter specifies the purpose of the personal data access.
In the example, the purpose is "monitoring sleep", in `HEALTH` category.

`UQI.getData()` will produce a stream of data items.
In this example, each item represents an audio record. The format of an audio record is shown as follows:

| Reference | Name | Type | Description |
|----|----|----|----|
| `Audio.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created. It is a general field for all items. |
| `Audio.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the audio/record was generated. |
| `Audio.AUDIO_DATA` | `"audio_data"` | `AudioData` | The abstraction of audio data.  The value is an `AudioData` instance. |

It means each Audio item has 3 pre-defined fields: `"time_created"`, `"timestamp"` and `"audio_data"`.
Below is an example of an Audio item:
<pre>
    <code class="language-json">// An example of an Audio Item.
    {
        "time_created": 1489528276655,
        "timestamp": 1489528266640,
        "audio_data": <AudioData@12416728>
    }</code></pre>

Each data type has a list of providers that can produce such type of data.
In this example, the provider is `Audio.recordPeriodic()`, which will provide a live stream of periodically-generated audio record items.

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Audio.recordPeriodic(long durationPerRecord, long interval)` <br> Provide a live stream of Audio items.  The audios are recorded from microphone periodically every certain time interval,  and each Audio item is a certain duration of time long.  For example, <code>recordPeriodic(1000, 4000)</code> will record audio from 0s-1s, 5s-6s, 10s-11s, ...<br> - `durationPerRecord`: the time duration of each audio record, in milliseconds.<br> - `interval`: the time interval between each two records, in milliseconds. |

The list of all available data types and corresponding providers can be found [here](items.html).

The second line, `.setField("loudness", calcLoudness(Audio.AUDIO_DATA))`, transforms the stream produced by the first line.
Specifically, it sets a new customized field "loudness" to each audio record item, indicating the loudness (dB) of the audio.
<pre>
    <code class="language-json">// An example of Audio Item after setting "loudness" field.
    {
        "time_created": 1489528276655,
        "timestamp": 1489528266640,
        "audio_data": <AudioData@12416728>,
        "loudness": 30
    }</code></pre>
The loudness value is calculated using a built-in operator `calcLoudness()`.
You can find the list of all built-in operators [here](operators.html).
Developers can also customize their own operators.

The third line, `.onChange("loudness", callback)`, outputs the items with a callback.
Specifically, it monitors the value of "loudness", and fires a callback once the loudness value changes.
To get the code to work, you will need to define what the `callback` is. A working example is shown as follows:

<pre>
<code>// Make sure you have included the following audio permission tag in manifest:
// &lt;uses-permission android:name="android.permission.RECORD_AUDIO" /&gt;

// Define a callback to handle loudness changes
Callback&lt;Integer&gt; callback = new Callback&lt;&gt;() {
    @Override
    protected void onSuccess(Integer loudness) {
        System.out.println("Current loudness is " + loudness + " dB.")
        // ...
    }
}

// Record a 10-second audio periodically with a 2-minute interval between each two records.
uqi.getData(Audio.recordPeriodic(10*1000, 2*60*1000), Purpose.HEALTH("monitoring sleep"))
   .setField("loudness", calcLoudness(Audio.AUDIO_DATA)) // Set a field "loudness" for each record as the audio loudness
   .onChange("loudness", callback)                       // Callback with loudness value when "loudness" changes</code>
</pre>


### Getting recent called contacts

Here is another example: getting a list of recent-called phone numbers.

<pre>
<code>List&lt;String&gt; recentCalledNumbers = 
    uqi.getData(Call.getLogs(), Purpose.SOCIAL("finding your recent called contacts."))
       .filter(Call.TYPE, "outgoing")  // Only keep the outgoing call logs
       .sortBy(Call.TIMESTAMP)         // Sort the call logs according to timestamp, in ascending order
       .reverse()                      // Reverse the order, now the most recent call log comes first
       .limit(10)                      // Keep the most recent 10 logs
       .asList(Call.CONTACT)           // Output the values of CONTACT field (the phone numbers) to a list</code>
</pre>

The above query accesses the call logs with `Call.getLogs()` and processes the call logs with functions like `filter`, `sortBy`, etc.

The pre-defined fields in a `Call` item include:

| Reference | Name | Type | Description |
|----|----|----|----|
| `Call.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created. It is a general field for all items. |
| `Call.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the phone call is happened. |
| `Call.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the phone call. |
| `Call.DURATION` | `"duration"` | `Long` | The duration of the phone call, in milliseconds. |
| `Call.TYPE` | `"type"` | `String` | The type of the phone call, could be "incoming", "outgoing" or "missed". |

Note that "Reference" is the equivalence to "Name", i.e. `filter(Call.TYPE, "outgoing")` is the same as `filter("type", "outgoing")`.

**About permissions.** Accessing call logs requires *READ_CALL_LOG* permission in Android.
To use the above code, you need to add the permission tag in `AndroidManifest.xml` and handle the exception if the permission request is denied by user. For example:

In `AndroidManifest.xml`:
<pre><code>...</code>
<code class="highlight">&lt;uses-permission android:name="android.permission.READ_CALL_LOG" /&gt;</code>

<code><application
           android:theme="@style/AppTheme"
           ...</code></pre>

In Java code:

<pre>
<code>try {
    List&lt;String&gt; recentCalledNumbers = 
        uqi.getData(Call.getLogs(), Purpose.SOCIAL("finding your closest friends."))
           .filter(Call.TYPE, "outgoing")  // Only keep the outgoing call logs
           .sortBy(Call.TIMESTAMP)         // Sort the call logs according to timestamp, in ascending order
           .reverse()                      // Reverse the order, now the most recent call log comes first
           .limit(10)                      // Keep the most recent 10 logs
           .asList(Call.CONTACT)           // Output the values of CONTACT field (the phone numbers) to a list
} catch (PSException e) {
    if (e.isPermissionDenied()) {
        String[] deniedPermissions = e.getDeniedPermissions();
        ...
    }
}</code></pre>

That's it! More details about exception handling will be discussed in [Permissions and exception handling](#permissions-and-exception-handling) section.

## PrivacyStreams API

This section will explain the details about PrivacyStreams APIs with a more complicated example.

Suppose we want to do the following programming task with PrivacyStreams:

- Get the phone number that had the most phone calls with the user in the past year.

The code to do the task with PrivacyStreams is as follows:

<pre>
<code class="line-numbers">String mostCalledContact = 
     uqi.getData(Call.getLogs(), Purpose.SOCIAL("finding your closest contact."))                          // Get a stream of call logs
        .transform(Filters.keep(TimeOperators.recent(Call.TIMESTAMP, 365*24*60*60*1000)))                  // keep the call logs in recent 365 days
        .transform(Groupers.groupBy(Call.CONTACT))                                                         // group by "contact" field (phone number)
        .transform(Mappers.mapEachItem(ItemOperators.setGroupField("#calls", StatisticOperators.count()))) // set "#calls" to the number of logs in each group
        .transform(Selectors.select(ItemsOperators.getItemWithMax("#calls")))                              // select the item with largest "#calls"
        .output(ItemOperators.&lt;String&gt;getField(Call.CONTACT));                                       // get the contact field of the item
</code></pre>

Looks messy? Don't worry, I will show you how to understand and simplify it in the next sections.

### Unified query interface (UQI)

In PrivacyStreams, all types of personal data can be accessed and processed through the unified query interface (**UQI**).

<pre>
<code style="font-size:1.2rem;">UQI.getData(Provider, Purpose)[.transform(Transformation)]*.output(Action)</code>
</pre>

The query describes a **PrivacyStreams pipeline**, which is a sequence of three types of functions, including:

- **1** data providing function (i.e. **Provider**) that gets raw data from data sources and converts raw data to a stream.
    - For example, `Call.getLogs()` convert raw call logs in Android database to a stream of `Call` items;
- **N (N=0,1,2,...)** transforming functions (i.e. **Transformation**s), each of which takes a stream as the input and produce another stream as the output.
    - For example, `filter(Call.TYPE, "outgoing")` filters the stream and only keeps the items whose `TYPE` is `"outgoing"`;
- **1** data outputting function (i.e. **Action**), which outputs the stream as the result needed by the app.
    - For example, `asList(Call.CONTACT)` collects the `CONTACT` field of items to a list.

The **Transformation** and **Action** functions are based on a lot of operators, including comparators, arithmetic operators, etc..
For example, `Filters.keep()` is a **Transformation**, and it takes `TimeOperators.recent()` operator as the parameter,
meaning it only keeps the items whose TIMESTAMP field value is a recent time.

- **The full list of available data types and corresponding providers is at [here](items.html);**
- **The full list of available providers, transformations, actions and operators is at [here](operators.html).**

Except for the functions, a query also requires a `Purpose` parameter to state the purpose of the data access.
In the example, the purpose of accessing call logs is "finding your closest contact", in SOCIAL category.
**We suggest you carefully explain the purposes in your app,**
because explaining the purposes can help users understand why your app needs the data, hence improving the privacy transparency of your app.
We have several purpose categories (such as `Purpose.ADS(..)`, `Purpose.SOCIAL(..)`, etc.) available for you to select from.


### Simplifying the code

In practice, the nested functions may be redundant, thus we wrap some common function combinations to one function for simplicity's sake. 
For example:

- `.transform(Filters.keep(...))` can be simplified as `.filter(...)`;
- `.transform(Groupers.groupBy(...)` can be simplified as `.groupBy(...)`;
- `.transform(Mappers.mapEachItem(ItemOperators.setGroupField(...)))` can be simplified as `.setGroupField(...)`;
- ...

After the simplification, the code in the above example can be written as:
<pre>
<code class="line-numbers">String mostCalledContact = 
     uqi.getData(Call.getLogs(), Purpose.SOCIAL("finding your closest contact."))
        .filter(TimeOperators.recent(Call.TIMESTAMP, 365*24*60*60*1000))
        .groupBy(Call.CONTACT)
        .setGroupField("#calls", StatisticOperators.count())
        .select(ItemsOperators.getItemWithMax("#calls"))
        .getField(Call.CONTACT);</code></pre>

If you use static import, the code can be even briefer.
For example, with `import static com.github.privacystreams.commons.time.TimeOperators.recent;`, you can simplify `TimeOperators.recent(...)` with `recent(...)`.
With static import, the above code can be simplified as:
<pre>
<code class="line-numbers">String mostCalledContact = 
     uqi.getData(Call.getLogs(), Purpose.SOCIAL("finding your closest contact."))
        .filter(recent(Call.TIMESTAMP, 365*24*60*60*1000))
        .groupBy(Call.CONTACT)
        .setGroupField("#calls", count())
        .select(getItemWithMax("#calls"))
        .getField(Call.CONTACT);</code></pre>

### PrivacyStreams pipeline

The figure below shows an overview of the **PrivacyStreams pipeline**:

<figure>
<img src="static/figure/overview.png" alt="PrivacyStreams overview" style="min-width: 500px">
</figure>

The basic data types in PrivacyStreams include **Item** and **Stream**.

- **Item** is the type of the element in a Stream. An **Item** is a map, in which each key-value pair represents the name and value of a field.
    - Each kind of personal data has a list of pre-defined fields. Below is an example of call log **Item**:

    <pre>
    <code class="language-json">// An example of a call log Item.
    {
        "time_created": 1489528276655,
        "timestamp": 1489528267720,
        "contact": "14120001234",
        "type": "outgoing",
        "duration": 30000
    }</code></pre>
- **Stream** is what being produced, transformed and outputted in PrivacyStreams pipelines.
A **Stream** is a sequence of **Item**s. In PrivacyStreams, we have two kinds of Streams:
    1. **MStream** (short for "multi-item stream") contains multiple items.
        - For example, the “call log stream” (`Call.getLogs()`) contains many `Call` items,
        and the stream of location updates contains many `Geolocation` items;
    2. **SStream** (short for "single-item stream") contains only one item.
        - For example, the “last-known location stream” (`GeoLocation.asLastKnown()`) only contains one `Geolocation item.
    
    The fine-grained data processing state machine is as follows:

<figure>
<img src="static/figure/state_machine.png" alt="PrivacyStreams data processing state machine." style="min-width: 600px">
</figure>

The pipeline of the running example is illustrated as follows (note that some field names are simplified and the field values are mocked):

<figure>
<img src="static/figure/example_pipeline.png" alt="An pipeline illustration of the code in the example." style="min-width: 600px">
</figure>

### Reusing streams

Sometimes you may need to reuse a stream for different actions.
For example, in the above example, if we also want to get the phone number that has the longest total duration of calls,
we may need to reuse the call log stream.

We provide a method `fork(int)` to support stream reusing, where the `int` parameter means the number of reuses.

<pre>
<code class="line-numbers">MStreamInterface streamToReuse = 
              uqi.getData(Call.getLogs(), Purpose.SOCIAL("finding your closest contact."))
                 .filter(recent(Call.TIMESTAMP, 365*24*60*60*1000))
                 .groupBy(Call.CONTACT)
                 .fork(2);  // fork current stream to reuse twice.
        
String mostCalledContact = 
    streamToReuse.setGroupField("#calls", count())
                 .select(getItemWithMax("#calls"))
                 .getField(Call.CONTACT);
                 
String longestCalledContact = 
    streamToReuse.setGroupField("durationOfCalls", sum(Call.DURATION))
                 .select(getItemWithMax("durationOfCalls"))
                 .getField(Call.CONTACT);</code></pre>

### Non-blocking pipeline

The UQI query with return values is called a blocking pipeline (which will block the execution until the result returns).

In Android, non-blocking pipelines might be more common. A non-blocking pipeline will **NOT** pause the code execution,
and its result will be returned asynchronously.

PrivacyStreams provides many **callback Action**s (such as `forEach`, `onChange`, `ifPresent`, etc. in `Callbacks` class.) 
and **callback-based collector Action**s (such as `collectItems`, `toItemList`, etc. in `Collectors` class) for building non-blocking pipelines.

- For example, following code will not block, and each item will be printed asynchronously.
    - `.debug()` is the equivalence of `.output(Callbacks.forEach(ItemOperators.debug()))`.
    
    <pre>
    <code> uqi.getData(TestItem.asUpdates(10, 10.0, 500), Purpose.TEST("Testing non-blocking pipeline."))
        .debug();</code></pre>
       
- The "most-called contact" example can also be implemented as non-blocking.
    - `.output(getField(...), callback)` is the equivalence of `.output(Collectors.collectItem(getField(...), callback))`
    
    <pre>
    <code> uqi.getData(Call.getLogs(), Purpose.SOCIAL("finding your closest contact."))
        .filter(recent(Call.TIMESTAMP, 365*24*60*60*1000))
        .groupBy(Call.CONTACT)
        .setGroupField("#calls", count())
        .select(getItemWithMax("#calls"))
        .output(ItemOperators.&lt;String&gt;getField(Call.CONTACT), new Callback&lt;String&gt;() {
            @Override
            protected void onSuccess(String contact) {
                System.out.println("Most-called contact: " + contact);
            }
        });</code></pre>
        

## Exceptions and Permissions

Sometimes the pipelines may fail due to exceptions, such as InterruptedException, PermissionDeniedException, etc.

In PrivacyStreams, exception handling is extremely easy for both blocking pipeline and non-blocking pipeline.

### Handling exceptions in blocking pipelines

For blocking pipelines, simply put your query in a try block and catch `PSException`. For example:

<pre>
    <code>try {
        result = uqi.getData(...).transform(...).output(...); // A blocking pipeline.
    } catch (PSException e) {
        System.out.println(e.getMessage());
    }</code></pre>

### Handling exceptions in non-blocking pipelines

For non-blocking pipelines, simply override the `onFail(PSException e)` method in your result handler. For example:

<pre>
    <code> uqi.getData(...)
        .transform(...)
        .output(..., new Callback&lt;Object&gt;() {
            @Override
            protected void onSuccess(Object result) {
                ...
            }
            
            @Override
            protected void onFail(PSException e) {
                System.out.println(e.getMessage());
            }
        });</code></pre>

### Permission configuration

In Android, access to personal data is controlled with a permission-based access control mechanism.
Android apps need to declare permissions in `AndroidManifest.xml`.
For Android 6.0+, apps must request permissions at runtime, including checking whether permissions are granted,
prompting users to grant the permissions and handling users' access control decisions.
With Android standard APIs, these are often difficult.

In PrivacyStreams, permission configuration can be much easier. Follow the steps below:

1. Write your pipeline, and catch the exception;
2. Print the exception, and you will see which permissions are needed;
3. Add the needed permissions to `AndroidManifest.xml`.

That's it. PrivacyStream will automatically generate a dialog to ask users for permissions.
If the requested permissions are not granted, a `PSException` will be thrown.

## Debugging and testing

PrivacyStreams provides some simple interfaces to support debugging and testing.

### Mocking data source

You can use `TestItem` and `MockItem` classes for debugging and testing.

- `TestItem` can create a stream with random items. For example:
    - `TestItem.asUpdates()` can provide a live MStream of random items periodically;
    - `TestItem.getOne()` can provide an SStream that contains a random item.
- `MockItem` can mock a stream from a file (*NOT IMPLEMENTED YET*).
    - `uqi.getData(...).transform(...).archiveTo("/sdcard/data.json")` will archive the stream to a file;
    - `uqi.getData(MockItem.fromArchive("/sdcard/data.json"), ...)` will replay the stream from the file.

### Printing the streams

Most data types support serialization, i.e. you can print the streams and see what happens.

- For example, if you have a N-step pipeline `uqi.getData(...).step1(...).step2(...)...stepN(...))`,
you can print any step you want to see what is going on:
    - `uqi.getData(...).debug()`;
    - `uqi.getData(...).step1(...).debug()`;
    - `uqi.getData(...).step1(...).step2(...).debug()`;
    - ...
- You can also instrument an intermediate step using `logAs` API:
    - `uqi.getData().logAs("tag0").step1(...).step2(...)...`;
    - `uqi.getData().step1(...).logAs("tag1").step2(...)...`;
    - ...
    
## Read more

### API Docs

For more information about PrivacyStreams APIs, please refer to:

- [PrivacyStreams Javadoc](javadoc/index.html);
- [Available data types](items.html);
- [Available operators](operators.html);
- [More examples](pages/more_examples.html).


### News & Posts
{% for post in site.posts %}
- [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) {{ post.date | date_to_string }}
{% endfor %}
