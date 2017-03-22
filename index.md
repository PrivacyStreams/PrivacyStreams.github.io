---
layout: homepage
---

+ [Overview](#overview)
+ [Installing PrivacyStreams](#installing-privacystreams)
    - [Installing with Gradle](#installing-with-gradle)
    - [Installing from source](#installing-from-source)
+ [Quick examples](#quick-examples)
    - [Querying random data](#querying-random-data)
    - [Getting recent called contacts](#getting-recent-called-contacts)
+ [PrivacyStreams API](#privacystreams-api)
    - [Unified query interface (UQI)](#unified-query-interface-uqi)
    - [Simplifying the code](#simplifying-the-code)
    - [PrivacyStreams pipeline](#privacyStreams-pipeline)
    - [Reusing streams](#reusing-streams)
+ [Permissions and exception handling](#permissions-and-exception-handling)
    - [Handling exceptions in blocking pipelines](#handling-exceptions-in-blocking-pipelines)
    - [Handling exceptions in non-blocking pipelines](#handling-exceptions-in-non-blocking-pipelines)
    - [Permission configuration](#permission-configuration)
+ [Debugging and testing](#debugging-and-testing)
    - [Mocking data source](#mocking-data-source)
    - [Printing the streams](#printing-the-streams)
+ [Read more](#read-more)

## Overview

PrivacyStreams is a framework for **privacy-friendly personal data processing**.
Currently, it supports Android platform.

<figure>
<img src="{{site.baseurl}}/static/figure/simple_explain.png" alt="PrivacyStreams simply explained." style="min-width: 300px">
</figure>

**App developers** can use PrivacyStreams to access and process personal data with a unified query interface (**UQI**).
<pre>
<code>
// Record audio periodically and callback if loudness changes.
uqi.getData(Audio.recordPeriodic(.., ..), Purpose.HEALTH(..))
   .setField("loudness", calcLoudness(Audio.AUDIO_URI))
   .onChange("loudness", callback)
</code>
</pre>

**Apps** developed with PrivacyStreams are more **privacy-friendly**.

- Easier for analysis.
- More transparent for app users.

<div class="w3-container w3-cell w3-cell-middle w3-panel w3-leftbar w3-sand w3-xlarge w3-serif verified">
  <p><strong style="color:green;">Verified &#9989;</strong>: <i>"Microphone is used by this app to compute loudness periodically."</i></p>
</div>

## Installing PrivacyStreams

To use PrivacyStreams in your Android app, you can either install it with Maven/Gradle or from source.

### Installing with Gradle

This is the most convenient way to install PrivacyStreams for most Android developers.
Simply add the following line to `build.gradle` file under you app module.

<pre>
<code>dependencies {</code>
    <code class="highlight">compile 'com.github.privacystreams:privacystreams-core:0.0.2'</code>
    <code>...
}</code>
</pre>

### Installing from source

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

Accessing and processing personal data with PrivacyStreams is simple. Let me show you two examples.

### Querying random data

<pre class="line-numbers">
<code>void foo(Context context) {
    UQI uqi = new UQI(context);  // Initialize a UQI (unified query interface) instance.
    
    // Get random MockItem stream for testing.
    uqi.getData(MockItem.asRandomUpdates(10, 10.0, 100), Purpose.TEST("Testing first data query."))
       .limit(10)                // Limit the number of Items to at most 10.
       .debug();                 // Print the items for debugging.
}</code>
</pre>

UQI stands for "unified query interface", which is the most important class in PrivacyStreams.

The above code constructs a UQI instance, accesses a mock data stream and prints 10 items.
The data being accessed is a stream of randomized data specified by `MockItem.asRandomUpdates(10, 10.0, 100)`.
Each item in this stream is a map of some random values. The definition of MockItem's format can be found [here](items.html#mockitem).

The second parameter of `uqi.getData()` specifies the purpose of data access.
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

<pre>
<code>List&lt;String&gt; recentCalledNumbers = 
    uqi.getData(Phonecall.asLogs(), Purpose.SOCIAL("finding your recent called contacts."))
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
               ...</code></pre>
    
    In your Java code:
    
    <pre>
    <code>try {
        List&lt;String&gt; recentCalledNumbers = 
            uqi.getData(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest friends."))
               . ...  // filter, sortBy, etc.
               .asList(Phonecall.CONTACT)
    } catch (PrivacyStreamsException e) {
        if (e.isPermissionDenied()) {
            String[] deniedPermissions = e.getDeniedPermissions();
            ...
        }
    }</code></pre>

That's it! More details about exception handling will be discussed in [Permissions and exception handling](#permissions-and-exception-handling) section.

## PrivacyStreams API

This section will explain the details about PrivacyStreams pipeline with a more complicated example.

Suppose we want to do the following programming task with PrivacyStreams:

- Get the phone number that has the most phonecalls with the user in the past year.

The code to do the task with PrivacyStreams is as follows:

<pre>
<code class="line-numbers">String mostCalledContact = 
     uqi.getData(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest contact."))                      // Get a stream of call logs
        .transform(Filters.keep(TimeOperators.recent(Phonecall.TIMESTAMP, Duration.days(365))))            // keep the call logs in recent 365 days
        .transform(Groupers.groupBy(Phonecall.CONTACT))                                                    // group by contact (phone number)
        .transform(Mappers.mapEachItem(ItemOperators.setGroupField("#calls", StatisticOperators.count()))) // set "#calls" to the number of logs in each group
        .transform(Selectors.select(ItemsOperators.getItemWithMax("#calls")))                              // select the item with largest "#calls"
        .output(ItemOperators.&lt;String&gt;getField(Phonecall.CONTACT));                                        // get the contact field of the item
</code></pre>

Looks messy? Don't worry, next I will show you what happened and how to simplify it.

### Unified query interface (UQI)

In PrivacyStreams, all types of personal data can be accessed and processed through the unified query interface (**UQI**).

<pre>
<code style="font-size:1.4rem;" class="highlight">UQI.getData(Provider, Purpose)[.transform(Transformation)]*.output(Action)</code>
</pre>

The query describes a **PrivacyStreams pipeline**, which is a sequence of three types of functions, including:

- **1** data providing function (i.e. **Provider**) that gets raw data from data sources and converts it to a stream in standard format.
    - For example, `Phonecall.asLogs()` convert raw call logs in Android database to a stream of Phonecall items;
- **N (N=0,1,2,...)** transforming functions (i.e. **Transformation**s), each of them takes a stream as input and produce another stream as output.
    - For example, `filter(Phonecall.TYPE, "outgoing")` filters the stream and only keeps the items whose `TYPE` is `"outgoing"`;
- **1** data outputting function (i.e. **Action**), which outputs the stream as the result needed by the app.
    - For example, `asList(Phonecall.CONTACT)` collect the `CONTACT` field of items to a list.

The **Transformation** and **Action** functions are based on a lot of operators, including comparators, arithmetic operators, etc..
For example, `Filters.keep()` is a **Transformation**, and it accepts operator `TimeOperators.recent()` as a parameter, meaning it only keeps the items whose TIMESTAMP field is a recent time.

- **The full list of available data types and corresponding providers is at [here](items.html);**
- **The full list of available providers, transformations, actions and operators is at [here](operators.html).**

### Simplifying the code

In practice, the nested functions may be redundant, thus we wrap some common function combinations to one function for simplicity. 
For example:

- `.transform(Filters.keep(xxx))` can be simplified as `.filter(xxx)`;
- `.transform(Groupers.groupBy(xxx)` can be simplified as `.groupBy(xxx)`;
- `.transform(Mappers.mapEachItem(ItemOperators.setGroupField(xxx)))` can be simplified as `.setGroupField(xxx)`;
- ...

With the simplification, the code in the above example can be written as:
<pre>
<code class="line-numbers">String mostCalledContact = 
     uqi.getData(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest contact."))
        .filter(TimeOperators.recent(Phonecall.TIMESTAMP, Duration.days(365)))
        .groupBy(Phonecall.CONTACT)
        .setGroupField("#calls", StatisticOperators.count())
        .select(ItemsOperators.getItemWithMax("#calls"))
        .getField(Phonecall.CONTACT);</code></pre>

If you use static import, the code can be even briefer.
For example, with `import static com.github.privacystreams.commons.time.TimeOperators.recent;`, you can simplify `TimeOperators.recent(xxx)` with `recent(xxx)`.
With static import, the above code can be simplified as:
<pre>
<code class="line-numbers">String mostCalledContact = 
     uqi.getData(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest contact."))
        .filter(recent(Phonecall.TIMESTAMP, Duration.days(365)))
        .groupBy(Phonecall.CONTACT)
        .setGroupField("#calls", count())
        .select(getItemWithMax("#calls"))
        .getField(Phonecall.CONTACT);</code></pre>

### PrivacyStreams pipeline

The figure below shows the overview of a **PrivacyStreams pipeline**:

<figure>
<img src="static/figure/overview.png" alt="PrivacyStreams overview" style="min-width: 500px">
</figure>

The basic data types in PrivacyStreams are **Item** and **Stream**.

- **Item** is an element in a Stream. All **Item**s are in a map format, in which each key-value pair represents the name and value of a field.
    - Each kind of personal data has a list of pre-defined fields. Below is an example of call log **Item**:

    <pre>
    <code class="language-json">// An example of call log Item.
    {
        "timestamp": 1489528267720,
        "contact": "14120001234",
        "type": "outgoing",
        "duration": 30000
    }</code></pre>
- **Stream** is what being produced, transformed and outputted in a PrivacyStreams pipeline, and a **Stream** is a sequence of **Item**s. In PrivacyStreams, we have two kinds of Streams:
    1. **MStream** (short for multi-item stream) contains multiple items.
        - For example, the “call log stream” (`Phonecall.asLogs()`) contains many phonecall items, and the stream of location updates contains many location items;
    2. **SStream** (short for single-item stream) contains only one item.
        - For example, the “last-known location stream” (`GeoLocation.asLastKnown()`) only contains one location item.
    
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
For example, in the above example, if we also want to get the phone number that has the longest total phonecall duration, we may need to reuse the call log stream.

We provide a method `fork(int)` to support stream reusing, where the `int` parameter means the number of reusable times.

<pre>
<code class="line-numbers">MStreamInterface streamToReuse = 
              uqi.getData(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest contact."))
                 .filter(recent(Phonecall.TIMESTAMP, Duration.days(365)))
                 .groupBy(Phonecall.CONTACT)
                 .fork(2);  // fork current stream to reuse twice.
        
String mostCalledContact = 
    streamToReuse.setGroupField("#calls", count())
                 .select(getItemWithMax("#calls"))
                 .getField(Phonecall.CONTACT);
                 
String longestCalledContact = 
    streamToReuse.setGroupField("durationOfCalls", sum(Phonecall.DURATION))
                 .select(getItemWithMax("durationOfCalls"))
                 .getField(Phonecall.CONTACT);</code></pre>

### Non-blocking pipeline

So far I have shown how to build a blocking pipeline (the pipeline will block the execution until the result returns).

In Android, non-blocking pipelines might be more common. A non-blocking pipeline will **NOT** pause the code execution, and its result will be returned asynchronously.

PrivacyStreams provides many **callback Action**s (in `Callbacks` class) and **callback-based collector Action**s (in `Collectors` class) for building non-blocking pipeline.

- For example, following code will not block, and each item will be printed asynchronously.
    - `.debug()` is the equivalence of `.output(Callbacks.forEach(ItemOperators.debug()))`.
    
    <pre>
    <code> uqi.getData(MockItem.asRandomUpdates(10, 10.0, 100), Purpose.TEST("Testing mock data query."))
        .debug();</code></pre>
       
- The "most-called contact" example can also be implemented as non-blocking.
    - `.output(getField(), callback)` is the equivalence of `.output(Collectors.collectItem(getField(), callback))`
    
    <pre>
    <code> uqi.getData(Phonecall.asLogs(), Purpose.SOCIAL("finding your closest contact."))
        .filter(recent(Phonecall.TIMESTAMP, Duration.days(365)))
        .groupBy(Phonecall.CONTACT)
        .setGroupField("#calls", count())
        .select(getItemWithMax("#calls"))
        .output(ItemOperators.&lt;String&gt;getField(Phonecall.CONTACT), new Callback&lt;String&gt;() {
            @Override
            protected void onSuccess(String contact) {
                System.out.println("Most-called contact: " + contact);
            }
        });</code></pre>
        
That's it. When you are developing you app, select either blocking or non-blocking pipeline to fulfill your need.


## Permissions and exception handling

Sometimes the pipeline may be failed due to exceptions, such as InterruptedException, PermissionDeniedException, etc.

In PrivacyStreams, exception handling is extremely easy for both blocking pipeline and non-blocking pipeline.

### Handling exceptions in blocking pipelines

For blocking pipelines, simply put your query in a try block and catch `PrivacyStreamsException`. For example:

<pre>
    <code>try {
        result = uqi.getData(...).transform(...).output(...);
    } catch (PrivacyStreamsException e) {
        System.out.println(e.getMessage());
    }</code></pre>

### Handling exceptions in non-blocking pipelines

For non-blocking pipelines, simply override the `onFail(PrivacyStreamsException e)` method in your result handler. For example:

<pre>
    <code> uqi.getData(...)
        .transform(...)
        .output(..., new Callback&lt;Object&gt;() {
            @Override
            protected void onSuccess(Object result) {
                ...
            }
            
            @Override
            protected void onFail(PrivacyStreamsException e) {
                System.out.println(e.getMessage());
            }
        });</code></pre>

### Permission configuration

In Android, personal data is controlled with a permission-based access control mechanism. Android apps need to declare permissions in `AndroidManifest.xml`.
For Android 6.0+, apps must request permissions at runtime, including checking whether permissions are granted, prompting users to grant the permissions and handling users' access control decisions.
With Android standard APIs, these are often headache.

In PrivacyStreams, configuring permissions can be much easier. Follow the steps below:

1. Write your pipeline, and cache the exception;
2. Print the exception, and you will see which permissions are needed;
3. Add the needed permissions to `AndroidManifest.xml`.

That's it. PrivacyStream will automatically generate a dialog to ask users to grant permissions. If not granted, there will be a `PrivacyStreamsException`.

## Debugging and testing

PrivacyStreams provides some simple interfaces to support debugging and testing.

### Mocking data source

You can mock a data source using `MockItem` class for debugging and testing. For example:

- Mocking a stream with random items.
    - `MockItem.asRandomUpdates()` can provide a live MStream that produces random items periodically;
    - `MockItem.asRandomList()` can provide a MStream that produces a list of random items in a batch;
    - `MockItem.asRandomInstance()` can provide an SStream that contains a random item.
- Mocking a stream from a file.
    - `uqi.getData(...).transform(...).archiveTo("/sdcard/data.json")` will record the stream to a file;
    - `uqi.getData(MockItem.fromArchive("/sdcard/data.json"), ...)` will load and replay the stream from the file.

### Printing the streams

Most data types support serialization, i.e. you can easily print the streams and see what happens.

- For example, if you have a N-step pipeline `uqi.getData(...).step1(...).step2(...)....stepN(...))`, you can print any step you want to see what is going on.
    - `uqi.getData(...).debug()`;
    - `uqi.getData(...).step1(...).debug()`;
    - `uqi.getData(...).step1(...).step2(...).debug()`;
    - ...
    
## Read more

### API Docs

For more information about PrivacyStreams APIs, please refer to:

- [PrivacyStreams Javadoc](javadoc/index.html);
- [Available data types](items.html);
- [Available operators](operators.html).


### News & Posts
{% for post in site.posts %}
- [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) {{ post.date | date_to_string }}
{% endfor %}
