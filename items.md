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
- [CalendarEvent](#calendarevent)
- [Contact](#contact)
- [Message](#message)
- [Phonecall](#phonecall)
- [Item](#item)
- [EmptyItem](#emptyitem)
- [MockItem](#mockitem)
- [TestItem](#testitem)
- [GroupItem](#groupitem)
- [BatteryInfo](#batteryinfo)
- [BluetoothDevice](#bluetoothdevice)
- [DeviceEvent](#deviceevent)
- [DeviceState](#devicestate)
- [WifiAp](#wifiap)
- [Light](#light)
- [Image](#image)
- [GeoLocation](#geolocation)
- [Notification](#notification)

## BaseAccessibilityEvent

Package: `com.github.privacystreams.accessibility`

Base Accessibility event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BaseAccessibilityEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `BaseAccessibilityEvent.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `BaseAccessibilityEvent.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `BaseAccessibilityEvent.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `BaseAccessibilityEvent.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of SerializedAccessibilityNodeInfo |
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
| `BrowserSearch.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
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
| `BrowserVisit.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
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
| `TextEntry.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `TextEntry.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `TextEntry.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `TextEntry.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `TextEntry.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of SerializedAccessibilityNodeInfo |
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
| `UIAction.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `UIAction.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `UIAction.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `UIAction.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `UIAction.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of SerializedAccessibilityNodeInfo |
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
| `Audio.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `Audio.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when current audio record is generated. |
| `Audio.AUDIO_DATA` | `"audio_data"` | `AudioData` | The URI of the audio file. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `Audio.record(long duration)` <br> Provide an Audio item.  The audio is recorded from microphone for a certain duration of time.<br> - `duration`: the time duration of audio. |
| `MStreamProvider` | `Audio.recordPeriodic(long durationPerRecord, long interval)` <br> Provide a live stream of Audio items.  The audios are recorded from microphone periodically every certain time interval,  and each Audio item is a certain duration of time long.  For example, <code>recordPeriodic(1000, 4000)</code> will record audio from 0s-1s, 5s-6s, 10s-11s, ...<br> - `durationPerRecord`: the time duration of each audio record, in milliseconds.<br> - `interval`: the time interval between each two records, in milliseconds. |

## CalendarEvent

Package: `com.github.privacystreams.calendar`

The meta information for a calendar event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `CalendarEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `CalendarEvent.ID` | `"id"` | `String` | Event ID. |
| `CalendarEvent.TITLE` | `"title"` | `String` | Event title. |
| `CalendarEvent.START_TIME` | `"start_time"` | `Long` | Event start time. |
| `CalendarEvent.DURATION` | `"duration"` | `Long` | Duration of the event. |
| `CalendarEvent.EVENT_LOCATION` | `"event_location"` | `String` | Event location. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `CalendarEvent.asList()` <br> Provide a list of Contact items from device's contacts database. |

## Contact

Package: `com.github.privacystreams.communication`

The information of a contact.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Contact.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
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
| `Message.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
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
| `Phonecall.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `Phonecall.ID` | `"id"` | `Long` | The unique id of this call log. |
| `Phonecall.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the phonecall is happened. |
| `Phonecall.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the phonecall. |
| `Phonecall.DURATION` | `"duration"` | `Long` | The duration of the phonecall, in milliseconds. |
| `Phonecall.TYPE` | `"type"` | `String` | The phonecall type, could be "incoming", "outgoing" or "missed". |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Phonecall.asLogs()` <br> Provide a list of Phonecall items from the device call log. |

## Item

Package: `com.github.privacystreams.core`

An Item is a basic element in a stream.
 This class is the base class of all type of personal data items in PrivacyStream.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Item.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |

## EmptyItem

Package: `com.github.privacystreams.core.items`

An empty item.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `EmptyItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `EmptyItem.asUpdates(long interval)` <br> Provide a live stream of EmptyItems. The interval between each two items is a given value. |

## MockItem

Package: `com.github.privacystreams.core.items`

A mock item. The content of a MockItem is mocked from another item.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `MockItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `MockItem.asRandomItem()` <br> Provide a TestItem item, which is randomly generated. |

## TestItem

Package: `com.github.privacystreams.core.items`

A random item for testing.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `TestItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `TestItem.ID` | `"id"` | `Long` | The index of current item. |
| `TestItem.X` | `"x"` | `Integer` | A random integer. |
| `TestItem.Y` | `"y"` | `String` | A random String. |
| `TestItem.Z` | `"z"` | `Double` | A random float number. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `TestItem.asUpdates(List<TestObject> testObjects, long interval)` <br> Provide a live stream of TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data<br> - `interval`: the interval between each two items, in milliseconds |
| `MStreamProvider` | `TestItem.asRandomUpdates(int maxInt, double maxDouble, long interval)` <br> Provide a live stream of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `interval`: the interval between each two items, in milliseconds |
| `MStreamProvider` | `TestItem.asHistory(List<TestObject> testObjects)` <br> Provide a list of TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data |
| `MStreamProvider` | `TestItem.asRandomList(int maxInt, double maxDouble, int count)` <br> Provide a list of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `count`: the number of random items |
| `SStreamProvider` | `TestItem.asItem(TestObject testObject)` <br> Provide a TestItem item, which is based on an given TestObject.<br> - `testObject`: the mock data |
| `SStreamProvider` | `TestItem.asRandomItem()` <br> Provide a TestItem item, which is randomly generated. |

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
| `GroupItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `GroupItem.GROUPED_ITEMS` | `"grouped_items"` | `List<>` | A list of the grouped items. |

## BatteryInfo

Package: `com.github.privacystreams.device`

A BatteryInfo item represents an event about the device.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BatteryInfo.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `BatteryInfo.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the state is requested. |
| `BatteryInfo.LEVEL` | `"level"` | `Float` | The level of when the state is requested. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `BatteryInfo.asSnapshot()` <br>  |

## BluetoothDevice

Package: `com.github.privacystreams.device`

Created by Mingquan Liu 2017/3/6.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BluetoothDevice.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `BluetoothDevice.NAME` | `"name"` | `String` | The name of the scanned bluetooth device. |
| `BluetoothDevice.MAC_ADDRESS` | `"mac_address"` | `String` | The mac address of the scanned bluetooth device. |
| `BluetoothDevice.BONDED` | `"bonded"` | `Boolean` | The boolean value indicating whether the bluetooth device is connected to the user's phone. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BluetoothDevice.asScanList()` <br>  |

## DeviceEvent

Package: `com.github.privacystreams.device`

A DeviceEvent item represents an event about the device.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `DeviceEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `DeviceEvent.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the event is happened. |
| `DeviceEvent.TYPE` | `"type"` | `String` | The type of the event, could be "screen", "boot", "battery", "ringer", etc. |
| `DeviceEvent.Event` | `"event"` | `String` | The event name. For screen events, could be on/off/user_present;  For boot events, could be boot_completed/shutdown;  For battery events, could be low/okay/ac_connected/ac_disconnected;  For ringer events, could be silent/vibrate/normal. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `DeviceEvent.asUpdates()` <br> Provide a live stream of device events, including screen/boot/battery/ringer events. |

## DeviceState

Package: `com.github.privacystreams.device`

A DeviceEvent item represents a snapshot of device state.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `DeviceState.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `DeviceState.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the state is requested. |
| `DeviceState.BLUETOOTH_DEVICE_LIST` | `"bluetooth_device_list"` | `List<>` | The list of currently scanned bluetooth device. |
| `DeviceState.WIFI_AP_LIST` | `"wifi_ap_list"` | `List<>` | The list of currently scanned Wifi APs. |
| `DeviceState.BATTERY_LEVEL` | `"battery_level"` | `Float` | The current battery level. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `DeviceState.asUpdates(long interval, int mask)` <br> Provide a live stream of device states, including bluetooth, wifi, battery level, and/or foreground apps etc.<br> - `interval`: the interval between each two device state snapshots<br> - `mask`: the mask of device state type, could be `DeviceState.Masks.BLUETOOTH_DEVICE_LIST`, `DeviceState.Masks.WIFI_AP_LIST`, etc. |

## WifiAp

Package: `com.github.privacystreams.device`

A WifiAp item represents the information of a WIFI AP.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `WifiAp.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
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
| `Light.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `Light.INTENSITY` | `"intensity"` | `Float` | The light intensity, in lumens. |
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
| `Image.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `Image.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the image is generated. |
| `Image.IMAGE_URI` | `"image_uri"` | `String` | The URI of image file. |

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
| `GeoLocation.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `GeoLocation.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of the location. |
| `GeoLocation.COORDINATES` | `"coordinates"` | `List<>` | The coordinates of the location.  The value is a list of double numbers, including latitude, longitude, and (optional) altitude. |
| `GeoLocation.SPEED` | `"speed"` | `Float` | The speed at the location, in meters/second. |
| `GeoLocation.PROVIDER` | `"provider"` | `String` | The provider of the location data, e.g., "gps" or "network". |
| `GeoLocation.ACCURACY` | `"accuracy"` | `Float` | The accuracy of the location data, in meters. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `GeoLocation.asUpdates(long interval, long fastInterval, int priority)` <br>  |
| `SStreamProvider` | `GeoLocation.asLastKnown()` <br> Provide a GeoLocation item, which is the last known location. |
| `MStreamProvider` | `GeoLocation.asHistory()` <br> Provide a list of GeoLocation items, which are the location history of the device. |

## Notification

Package: `com.github.privacystreams.notification`

An Notification item represents a received notification.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Notification.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when the Item is created. |
| `Notification.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of the notification. |
| `Notification.ACTION` | `"action"` | `String` | The action associated with the notification.  It could be removed or posted. |
| `Notification.CATEGORY` | `"category"` | `String` | The category of the notification.  It could be game, app, etc. |
| `Notification.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the notification. |
| `Notification.NOTIFICATION_TITLE` | `"notification_title"` | `String` | The title of the notification. |
| `Notification.NOTIFICATION_TEXT` | `"notification_text"` | `String` | The text of the notification. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Notification.asUpdates()` <br> Provide a list of WifiAp items from WIFI scan result. |

