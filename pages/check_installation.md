---
layout: homepage
title: Checking installation.
---

To check whether you have successfully installed PrivacyStreams, modify the `onCreate` method in `MainActivity` class as follows:

<pre class="line-numbers">
<code>protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    UQI uqi = new UQI(MainActivity.this);  // Initialize a UQI (unified query interface) instance.
    uqi.getData(TestItem.asRandomUpdates(10, 10.0, 100), Purpose.TEST("Checking installation."))
                                           // Get random TestItem stream for testing purpose.
       .limit(10)                          // Limit the number of Items to at most 10.
       .debug();                           // Print the items for debugging.
}</code>
</pre>

The above code constructs a UQI instance, accesses a test data stream and prints 10 items.
If your installation was successful, there will be some lines outputted in ADB logcat:

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
