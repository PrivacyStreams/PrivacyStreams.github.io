---
layout: homepage
title: Available data types in PrivacyStreams
---

This document contains all types of personal data available in PrivacyStreams v0.0.2.

- [BaseAccessibilityEvent](#baseaccessibilityevent)
- [BrowserSearch](#browsersearch)
- [BrowserVisit](#browservisit)
- [TextEntry](#textentry)
- [UIAction](#uiaction)
- [Audio](#audio)
- [Contact](#contact)
- [Message](#message)
- [Phonecall](#phonecall)
- [MockItem](#mockitem)
- [GroupItem](#groupitem)
- [DeviceEvent](#deviceevent)
- [WifiAp](#wifiap)
- [Light](#light)
- [Image](#image)
- [GeoLocation](#geolocation)

## BaseAccessibilityEvent

Package: `com.github.privacystreams.accessibility`

Base Accessibility event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BaseAccessibilityEvent.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `BaseAccessibilityEvent.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `BaseAccessibilityEvent.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `BaseAccessibilityEvent.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of [AccessibilityNodeInfo](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html). |
| `BaseAccessibilityEvent.ITEM_COUNT` | `"item_count"` | `Integer` | The number of items in current event. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BaseAccessibilityEvent.asUpdates()` <br> Provide a live stream of BaseAccessibilityEvent items. |

## BrowserSearch

Package: `com.github.privacystreams.accessibility`

A browser search activity.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BrowserSearch.TEXT` | `"text"` | `String` | The searched text. |
| `BrowserSearch.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the search event is happened. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BrowserSearch.asUpdates()` <br> Provide a live stream of BrowserSearch items. |

## BrowserVisit

Package: `com.github.privacystreams.accessibility`

A website visit event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BrowserVisit.TITLE` | `"title"` | `String` | The title of current webpage. |
| `BrowserVisit.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the browser used to visit webpage. |
| `BrowserVisit.URL` | `"url"` | `String` | The URL of the visited website. |
| `BrowserVisit.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the web page is visited. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BrowserVisit.asUpdates()` <br> Provide a live stream of BrowserVisit items. |

## TextEntry

Package: `com.github.privacystreams.accessibility`

User input text.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `TextEntry.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `TextEntry.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `TextEntry.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `TextEntry.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of [AccessibilityNodeInfo](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html). |
| `TextEntry.ITEM_COUNT` | `"item_count"` | `Integer` | The number of items in current event. |
| `TextEntry.SOURCE_NODE` | `"source_node"` | `AccessibilityNodeInfo` | The source node of current accessibility event, which is an instance of [AccessibilityNodeInfo](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html). |
| `TextEntry.CONTENT` | `"content"` | `String` | The user-typed text content. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `TextEntry.asUpdates()` <br> Provide a live stream of TextEntry items. |

## UIAction

Package: `com.github.privacystreams.accessibility`

A UI action, such as a view is clicked, selected, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `UIAction.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `UIAction.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `UIAction.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `UIAction.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of [AccessibilityNodeInfo](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html). |
| `UIAction.ITEM_COUNT` | `"item_count"` | `Integer` | The number of items in current event. |
| `UIAction.SOURCE_NODE` | `"source_node"` | `AccessibilityNodeInfo` | The source node of current accessibility event, which is an instance of [AccessibilityNodeInfo](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html). |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `UIAction.asUpdates()` <br> Provide a live stream of UIAction items. |

## Audio

Package: `com.github.privacystreams.audio`

An audio record.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Audio.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when current audio record is generated. |
| `Audio.AUDIO_URI` | `"audio_uri"` | `String` | The URI of the audio file. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `Audio.record(long duration)` <br> Provide an Audio item.  The audio is recorded from microphone for a certain duration of time.<br> - `duration`: the time duration of audio. |
| `MStreamProvider` | `Audio.recordPeriodic(long durationPerRecord, long interval)` <br> Provide a live stream of Audio items.  The audios are recorded from microphone periodically every certain time interval,  and each Audio item is a certain duration of time long.  For example, <code>recordPeriodic(1000, 4000)</code> will record audio from 0s-1s, 5s-6s, 10s-11s, ...<br> - `durationPerRecord`: the time duration of each audio record, in milliseconds.<br> - `interval`: the time interval between each two records, in milliseconds. |

## Contact

Package: `com.github.privacystreams.communication`

The information of a contact.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Contact.ID` | `"id"` | `String` | The contact ID in Android database. |
| `Contact.NAME` | `"name"` | `String` | The contact name. |
| `Contact.PHONES` | `"phone_numbers"` | `List<>` | The phone numbers of the contact. |
| `Contact.EMAILS` | `"emails"` | `List<>` | The emails of the contact. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Contact.asList()` <br> Provide a list of Contact items from device's contacts database. |

## Message

Package: `com.github.privacystreams.communication`

A text message. It could be from SMS, WhatsApp, Facebook, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Message.TYPE` | `"type"` | `String` | The message type, could be "received" or "sent". |
| `Message.CONTENT` | `"content"` | `String` | The message content. |
| `Message.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the app where message is captured. |
| `Message.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the message. |
| `Message.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the message is sent/received. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Message.asIMUpdates()` <br> Provide a live stream of Message items from IM apps, including WhatsApp and Facebook. |
| `MStreamProvider` | `Message.asSMSUpdates()` <br> Provide a live stream of Message items from the Android SMS app. |
| `MStreamProvider` | `Message.asSMSHistory()` <br> Provide a list of historic Message items from the Android SMS app. |

## Phonecall

Package: `com.github.privacystreams.communication`

The information of a phonecall.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Phonecall.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the phonecall is happened. |
| `Phonecall.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the phonecall. |
| `Phonecall.DURATION` | `"duration"` | `Long` | The duration of the phonecall, in milliseconds. |
| `Phonecall.TYPE` | `"type"` | `String` | The phonecall type, could be "incoming", "outgoing" or "missed". |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Phonecall.asLogs()` <br> Provide a list of Phonecall items from the device call log. |

## MockItem

Package: `com.github.privacystreams.core.providers.mock`

A random item for testing.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `MockItem.ID` | `"id"` | `Long` | The index of current item. |
| `MockItem.X` | `"x"` | `Integer` | A random integer. |
| `MockItem.Y` | `"y"` | `String` | A random String. |
| `MockItem.Z` | `"z"` | `Double` | A random float number. |
| `MockItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when current item is created. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `MockItem.asUpdates(List<MockObject> mockObjects, long interval)` <br> Provide a live stream of MockItem items, which are from a given list.<br> - `mockObjects`: the list of mock data<br> - `interval`: the interval between each two items, in milliseconds |
| `MStreamProvider` | `MockItem.asRandomUpdates(int maxInt, double maxDouble, long interval)` <br> Provide a live stream of MockItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `interval`: the interval between each two items, in milliseconds |
| `MStreamProvider` | `MockItem.asHistory(List<MockObject> mockObjects)` <br> Provide a list of MockItem items, which are from a given list.<br> - `mockObjects`: the list of mock data |
| `MStreamProvider` | `MockItem.asRandomList(int maxInt, double maxDouble, int count)` <br> Provide a list of MockItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `count`: the number of random items |
| `SStreamProvider` | `MockItem.asItem(MockObject mockObject)` <br> Provide a MockItem item, which is based on an given MockObject.<br> - `mockObject`: the mock data |
| `SStreamProvider` | `MockItem.asRandomItem()` <br> Provide a MockItem item, which is randomly generated. |

## GroupItem

Package: `com.github.privacystreams.core.transformations.group`

An item in a stream after grouping operation.
 GroupItem cannot be produced directly, instead, it can be generated using <code>groupBy</code> or <code>localGroupBy</code> operators.
 An GroupItem contains two initial fields:
 1. The field name is the same as the field used to group (e.g. the 1st parameter of <code>groupBy</code>), and the value is the field value;
 2. The field name is `grouped_items`, and the value is a list of the grouped items.
 More fields can be produced with <code>setGroupField</code> operators.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `GroupItem.GROUPED_ITEMS` | `"grouped_items"` | `List<>` | A list of the grouped items. |

## DeviceEvent

Package: `com.github.privacystreams.device`

A DeviceEvent item represents an event about the device.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `DeviceEvent.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the event is happened. |
| `DeviceEvent.TYPE` | `"type"` | `String` | The type of the event, could be "screen", "boot", "battery", "ringer", etc. |
| `DeviceEvent.Event` | `"event"` | `String` | The event name. For screen events, could be on/off/user_present;  For boot events, could be boot_completed/shutdown;  For battery events, could be low/okay/ac_connected/ac_disconnected;  For ringer events, could be silent/vibrate/normal. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `DeviceEvent.asUpdates()` <br> Provide a live stream of device events, including screen/boot/battery/ringer events. |

## WifiAp

Package: `com.github.privacystreams.device`

A WifiAp item represents the information of a WIFI AP.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `WifiAp.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the WIFI AP information is found. |
| `WifiAp.BSSID` | `"bssid"` | `String` | The BSSID. |
| `WifiAp.SSID` | `"ssid"` | `String` | The SSID. |
| `WifiAp.FREQUENCY` | `"frequency"` | `String` | The frequency. |
| `WifiAp.RSSI` | `"rssi"` | `String` | The RSSI. |
| `WifiAp.CONNECTED` | `"connected"` | `Boolean` | Whether this AP is connected. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `WifiAp.asScanList()` <br> Provide a list of WifiAp items from WIFI scan result. |

## Light

Package: `com.github.privacystreams.environment`

A Light item represents the data read from light sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Light.INTENSITY` | `"intensity"` | `Float` | The light intensity, in ??. |
| `Light.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the light sensor value is read. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Light.asUpdates()` <br> Provide a live stream of Light items that are read from the light sensor. |

## Image

Package: `com.github.privacystreams.image`

An Image item represents an image file.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Image.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the image is generated. |
| `Image.URI` | `"uri"` | `String` | The URI of image file. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `Image.takeFromCamera()` <br> Provide an Image item, which represents a photo taken from camera. |
| `MStreamProvider` | `Image.readFromStorage()` <br> Provide a list of Image items that are read from file system. |

## GeoLocation

Package: `com.github.privacystreams.location`

An GeoLocation item represents a geolocation value.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `GeoLocation.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of the location. |
| `GeoLocation.COORDINATES` | `"coordinates"` | `List<>` | The coordinates of the location.  The value is a list of double numbers, including latitude, longitude, and (optional) altitude. |
| `GeoLocation.SPEED` | `"speed"` | `Float` | The speed at the location, in meters/second. |
| `GeoLocation.PROVIDER` | `"provider"` | `String` | The provider of the location data, e.g., "gps" or "network". |
| `GeoLocation.ACCURACY` | `"accuracy"` | `Float` | The accuracy of the location data, in meters. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `GeoLocation.asUpdates(String provider, long minTime, float minDistance)` <br> Provide a live stream of GeoLocation items from device's location sensors.<br> - `provider`: the location provider, could be "gps", "network", etc.<br> - `minTime`: minimum time interval between location updates, in milliseconds.<br> - `minDistance`: minimum distance between location updates, in meters. |
| `SStreamProvider` | `GeoLocation.asLastKnown()` <br> Provide a GeoLocation item, which is the last known location. |
| `MStreamProvider` | `GeoLocation.asHistory()` <br> Provide a list of GeoLocation items, which are the location history of the device. |

