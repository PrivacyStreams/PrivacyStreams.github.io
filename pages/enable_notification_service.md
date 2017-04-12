---
layout: homepage
title: Enabling Accessibility service.
---

To read system notifications (for instance `Notification.asUpdates()`),
you need to enable notification service by setting `notification_enabled` value to `true` in resource XML.

Specifically, in `res/values/bools.xml` (create one if not exist), add the following line(s):

<pre>
<code>&lt;resources&gt;</code>
    <code class="highlight">&lt;item name="notification_enabled" type="bool" format="boolean"&gt;false&lt;/item&gt;</code>
    <code>...
&lt;/resources&gt;</code>
</pre>
