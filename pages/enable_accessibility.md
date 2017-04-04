---
layout: homepage
title: Enabling Accessibility service.
---

Some types of personal data are based on Accessibility APIs, such as browser search events (`BrowserSearch.asUpdates()`),
WhatsApp & Facebook messages (`Message.asUpdatesInIM()`), etc.
To use these types of data, you need to enable accessibility service by setting `accessibility_enabled` value to `true` in resource XML.

Specifically, in `res/values/bools.xml` (create one if not exist), add the following line(s):

<pre>
<code>&lt;resources&gt;</code>
    <code class="highlight">&lt;item name="accessibility_enabled" type="bool" format="boolean"&gt;false&lt;/item&gt;</code>
    <code>...
&lt;/resources&gt;</code>
</pre>
