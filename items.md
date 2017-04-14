---
layout: homepage
title: Available data types in PrivacyStreams
---

- [Audio](#audio)
- [BaseAccessibilityEvent](#baseaccessibilityevent)
- [BatteryInfo](#batteryinfo)
- [BluetoothDevice](#bluetoothdevice)
- [BrowserSearch](#browsersearch)
- [BrowserVisit](#browservisit)
- [CalendarEvent](#calendarevent)
- [Call](#call)
- [Contact](#contact)
- [DeviceEvent](#deviceevent)
- [DeviceState](#devicestate)
- [EmptyItem](#emptyitem)
- [Geolocation](#geolocation)
- [GroupItem](#groupitem)
- [Image](#image)
- [Item](#item)
- [LightEnv](#lightenv)
- [Message](#message)
- [MockItem](#mockitem)
- [Notification](#notification)
- [TestItem](#testitem)
- [TextEntry](#textentry)
- [UIAction](#uiaction)
- [WifiAp](#wifiap)

## Audio

Package: `com.github.privacystreams.audio`

An Audio item represents an audio, could be an audio record from microphone,
 an audio file from storage, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Audio.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Audio.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the audio/record was generated. |
| `Audio.AUDIO_DATA` | `"audio_data"` | `AudioData` | The abstraction of audio data.  The value is an `AudioData` instance. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `Audio.record(long duration)` <br> Provide an Audio item.  The audio is recorded from microphone for a certain duration of time.<br> - `duration`: the time duration of audio. |
| `MStreamProvider` | `Audio.recordPeriodic(long durationPerRecord, long interval)` <br> Provide a live stream of Audio items.  The audios are recorded from microphone periodically every certain time interval,  and each Audio item is a certain duration of time long.  For example, <code>recordPeriodic(1000, 4000)</code> will record audio from 0s-1s, 5s-6s, 10s-11s, ...<br> - `durationPerRecord`: the time duration of each audio record, in milliseconds.<br> - `interval`: the time interval between each two records, in milliseconds. |
| `MStreamProvider` | `Audio.getFromStorage()` <br> Provide all Audio items in local file system. |

## BaseAccessibilityEvent

Package: `com.github.privacystreams.accessibility`

Base Accessibility event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BaseAccessibilityEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BaseAccessibilityEvent.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `BaseAccessibilityEvent.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `BaseAccessibilityEvent.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `BaseAccessibilityEvent.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of AccessibilityNodeInfo. |
| `BaseAccessibilityEvent.ITEM_COUNT` | `"item_count"` | `Integer` | The number of items in current event. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BaseAccessibilityEvent.asUpdates()` <br> Provide a live stream of BaseAccessibilityEvent items. |

## BatteryInfo

Package: `com.github.privacystreams.device`

A BatteryInfo item represents an event about the device.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BatteryInfo.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BatteryInfo.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the state is requested. |
| `BatteryInfo.LEVEL` | `"level"` | `Float` | The level of when the state is requested. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `BatteryInfo.asSnapshot()` <br>  |

## BluetoothDevice

Package: `com.github.privacystreams.device`

A BluetoothDevice represents a bluetooth device.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BluetoothDevice.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BluetoothDevice.NAME` | `"name"` | `String` | The name of the scanned bluetooth device. |
| `BluetoothDevice.MAC_ADDRESS` | `"mac_address"` | `String` | The mac address of the scanned bluetooth device. |
| `BluetoothDevice.BONDED` | `"bonded"` | `Boolean` | The boolean value indicating whether the bluetooth device is connected to the user's phone. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BluetoothDevice.getScanResults()` <br>  |

## BrowserSearch

Package: `com.github.privacystreams.accessibility`

A browser search activity.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BrowserSearch.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BrowserSearch.TEXT` | `"text"` | `String` | The searched text. |
| `BrowserSearch.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the search event is happened. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BrowserSearch.asUpdates()` <br> Provide a live stream of BrowserSearch items.  An item will be generated once the user do a search in the browser. |

## BrowserVisit

Package: `com.github.privacystreams.accessibility`

A website visit event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BrowserVisit.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BrowserVisit.TITLE` | `"title"` | `String` | The title of current webpage. |
| `BrowserVisit.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the browser used to visit webpage. |
| `BrowserVisit.URL` | `"url"` | `String` | The URL of the visited website. |
| `BrowserVisit.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the web page is visited. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `BrowserVisit.asUpdates()` <br> Provide a live stream of BrowserVisit items.  An item will be generated once the user visit a website in the browser. |

## CalendarEvent

Package: `com.github.privacystreams.calendar`

The meta information for a calendar event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `CalendarEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `CalendarEvent.ID` | `"id"` | `String` | Event ID. |
| `CalendarEvent.TITLE` | `"title"` | `String` | Event title. |
| `CalendarEvent.START_TIME` | `"start_time"` | `Long` | Event start time. |
| `CalendarEvent.DURATION` | `"duration"` | `Long` | Duration of the event. |
| `CalendarEvent.EVENT_LOCATION` | `"event_location"` | `String` | Event location. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `CalendarEvent.getAll()` <br> Provide all CalendarEvent items from device's calendar database. |

## Call

Package: `com.github.privacystreams.communication`

The information of a phone call.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Call.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Call.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the phone call is happened. |
| `Call.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the phone call. |
| `Call.DURATION` | `"duration"` | `Long` | The duration of the phone call, in milliseconds. |
| `Call.TYPE` | `"type"` | `String` | The type of the phone call, could be "incoming", "outgoing" or "missed". |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Call.getLogs()` <br> Provide a list of Call items from the device call log. |
| `MStreamProvider` | `Call.asUpdates()` <br> Provide a live stream of Call items.  A Call item will be generated if there is a new phone call event. |

## Contact

Package: `com.github.privacystreams.communication`

The information of a contact.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Contact.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Contact.ID` | `"id"` | `String` | The contact's unique ID in Android database. |
| `Contact.NAME` | `"name"` | `String` | The contact name. |
| `Contact.PHONES` | `"phone_numbers"` | `List<>` | The phone numbers of the contact. |
| `Contact.EMAILS` | `"emails"` | `List<>` | The emails of the contact. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Contact.getAll()` <br> Provide all Contact items in device's contacts database. |

## DeviceEvent

Package: `com.github.privacystreams.device`

A DeviceEvent item represents an event about the device.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `DeviceEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `DeviceEvent.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the event is happened. |
| `DeviceEvent.TYPE` | `"type"` | `String` | The type of the event, could be "screen", "boot", "battery", "ringer", etc. |
| `DeviceEvent.EVENT` | `"event"` | `String` | The event name. For screen events, could be on/off/user_present;  For boot events, could be boot_completed/shutdown;  For battery events, could be low/okay/ac_connected/ac_disconnected;  For ringer events, could be silent/vibrate/normal. |

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
| `DeviceState.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `DeviceState.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the state is requested. |
| `DeviceState.BLUETOOTH_DEVICE_LIST` | `"bluetooth_device_list"` | `List<>` | The list of currently scanned bluetooth device. |
| `DeviceState.WIFI_AP_LIST` | `"wifi_ap_list"` | `List<>` | The list of currently scanned Wifi APs. |
| `DeviceState.BATTERY_LEVEL` | `"battery_level"` | `Float` | The current battery level. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `DeviceState.asUpdates(long interval, int mask)` <br> Provide a live stream of device states, including bluetooth, wifi, battery level, and/or foreground apps etc.<br> - `interval`: the interval between each two device state snapshots<br> - `mask`: the mask of device state type, could be `DeviceState.Masks.BLUETOOTH_DEVICE_LIST`, `DeviceState.Masks.WIFI_AP_LIST`, etc. |

## EmptyItem

Package: `com.github.privacystreams.core.items`

An empty item.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `EmptyItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `EmptyItem.asUpdates(long interval)` <br> Provide a live stream of EmptyItems. The interval between each two items is a given value. |

## Geolocation

Package: `com.github.privacystreams.location`

An Geolocation item represents a geolocation value.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Geolocation.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Geolocation.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of the location. |
| `Geolocation.LAT_LNG` | `"lat_lng"` | `LatLng` | The coordinates of the location.  The value is a LatLng instance. |
| `Geolocation.SPEED` | `"speed"` | `Float` | The speed at the location, in meters/second. |
| `Geolocation.PROVIDER` | `"provider"` | `String` | The provider of the location data, e.g., "gps" or "network". |
| `Geolocation.ACCURACY` | `"accuracy"` | `Float` | The accuracy of the location data, in meters. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Geolocation.asUpdates(long interval, String level)` <br> Provide a live stream of Geolocation as the location updates.<br> - `interval`: The interval between each two location updates.<br> - `level`: The location granularity level, could be               "country"/"city"/"neighborhood"/"building"/"exact".               "exact" level requires ACCESS_FINE_LOCATION permission,               other levels requires ACCESS_COARSE_LOCATION. |
| `SStreamProvider` | `Geolocation.asLastKnown(String level)` <br> Provide an SStream of a Geolocation item, as the last known location. |
| `SStreamProvider` | `Geolocation.asCurrent(String level)` <br> Provide an SStream of a Geolocation item, as the current location. |

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
| `GroupItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `GroupItem.GROUPED_ITEMS` | `"grouped_items"` | `List<>` | A list of the grouped items. |

## Image

Package: `com.github.privacystreams.image`

An Image item represents an image, could be an image file from storage, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Image.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Image.DATE_ADDED` | `"date_added"` | `Long` | The timestamp of when the image was generated. |
| `Image.IMAGE_DATA` | `"image_data"` | `ImageData` | The abstraction of image data.  The value is an `ImageData` instance. |
| `Image.BUCKET_ID` | `"bucket_id"` | `Integer` | The id of the bucket (folder) that the image belongs to.  This field is only available with `getFromStorage` provider. |
| `Image.BUCKET_NAME` | `"bucket_name"` | `String` | The name of the bucket (folder) that the image belongs to.  This field is only available with `getFromStorage` provider. |
| `Image.IMAGE_ID` | `"image_id"` | `Integer` | The id of the image in Android media database.  This field is only available with `getFromStorage` provider. |
| `Image.IMAGE_NAME` | `"image_name"` | `String` | The name of the image.  This field is only available with `getFromStorage` provider. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `Image.takeFromCamera()` <br> Provide an SStream with an Image item, which represents a photo taken from camera. |
| `MStreamProvider` | `Image.getFromStorage()` <br> Provide a stream of all Image items in local file system. |

## Item

Package: `com.github.privacystreams.core`

An Item is a basic element in a stream.
 This class is the base class of all type of personal data items in PrivacyStream.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Item.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

## LightEnv

Package: `com.github.privacystreams.environment`

A LightEnv item represents the data read from light environment sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `LightEnv.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `LightEnv.INTENSITY` | `"intensity"` | `Float` | The light intensity, in lumens. |
| `LightEnv.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the light sensor value is read. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `LightEnv.asUpdates()` <br> Provide a live stream of LightEnv items that are read from the light sensor. |

## Message

Package: `com.github.privacystreams.communication`

A text message. It could be from SMS, WhatsApp, Facebook, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Message.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Message.CONTENT` | `"content"` | `String` | The message content. |
| `Message.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the app where message is captured.  For example, if it is a Facebook message, package_name will be "com.facebook.orca";  If it is an SMS message, package_name will be "system". |
| `Message.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the message. |
| `Message.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the message is sent/received. |
| `Message.TYPE` | `"type"` | `String` | The message type, could be "received"/"sent"/"draft"/"pending"/"unknown". |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Message.asUpdatesInIM()` <br> Provide a live stream of new Message items in Instant Messenger (IM) apps, including WhatsApp and Facebook.  This provider requires Accessibility service turned on. |
| `MStreamProvider` | `Message.asIncomingSMS()` <br> Provide a live stream of new incoming Message items from the Android Short Message Service (SMS). |
| `MStreamProvider` | `Message.getAllSMS()` <br> Provide all Message items from Android Short Message Service SMS. |

## MockItem

Package: `com.github.privacystreams.core.items`

A mock item. The content of a MockItem is mocked from another item.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `MockItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

### Providers

| Type | Reference & Description |
|----|----|
| `SStreamProvider` | `MockItem.asRandomItem()` <br> Provide a TestItem item, which is randomly generated. |

## Notification

Package: `com.github.privacystreams.notification`

An Notification item represents a received notification.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Notification.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Notification.POST_TIME` | `"post_time"` | `Long` | The timestamp of when the notification was posted. |
| `Notification.ACTION` | `"action"` | `String` | The action associated with the notification.  It could be "removed" or "posted". |
| `Notification.CATEGORY` | `"category"` | `String` | The category of the notification.  One of the predefined notification categories  (see the `CATEGORY_*` constants in `android.app.Notification` class.)  that best describes this Notification.  Such as "sys", "social", etc. |
| `Notification.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the notification. |
| `Notification.TITLE` | `"title"` | `String` | The title of the notification. |
| `Notification.TEXT` | `"text"` | `String` | The text of the notification. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `Notification.asUpdates()` <br> Provide a list of WifiAp items from WIFI scan result. |

## TestItem

Package: `com.github.privacystreams.core.items`

A random item for testing.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `TestItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TestItem.ID` | `"id"` | `Long` | The index of current item. |
| `TestItem.X` | `"x"` | `Integer` | A random integer. |
| `TestItem.Y` | `"y"` | `String` | A random String. |
| `TestItem.Z` | `"z"` | `Double` | A random float number. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `TestItem.asUpdatesFrom(List<TestObject> testObjects, long interval)` <br> Provide a live stream of TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data<br> - `interval`: the interval between each two items, in milliseconds |
| `MStreamProvider` | `TestItem.asUpdates(int maxInt, double maxDouble, long interval)` <br> Provide a live stream of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `interval`: the interval between each two items, in milliseconds |
| `MStreamProvider` | `TestItem.getAllFrom(List<TestObject> testObjects)` <br> Provide a stream of existing TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data |
| `MStreamProvider` | `TestItem.getAllRandom(int maxInt, double maxDouble, int count)` <br> Provide a list of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `count`: the number of random items |
| `SStreamProvider` | `TestItem.getOneFrom(TestObject testObject)` <br> Provide one TestItem item, which is based on an given TestObject.<br> - `testObject`: the mock data |
| `SStreamProvider` | `TestItem.getOne()` <br> Provide one TestItem item, which is randomly generated. |

## TextEntry

Package: `com.github.privacystreams.accessibility`

A user text input action.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `TextEntry.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TextEntry.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `TextEntry.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `TextEntry.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `TextEntry.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of AccessibilityNodeInfo. |
| `TextEntry.ITEM_COUNT` | `"item_count"` | `Integer` | The number of items in current event. |
| `TextEntry.SOURCE_NODE` | `"source_node"` | `AccessibilityNodeInfo` | The source node of the UI action, which is an instance of [AccessibilityNodeInfo](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html). |
| `TextEntry.CONTENT` | `"content"` | `String` | The user-typed text content. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `TextEntry.asUpdates()` <br> Provide a live stream of TextEntry items.  The provider will generate a TextEntry item once the user type some text. |

## UIAction

Package: `com.github.privacystreams.accessibility`

A UI action, such as a view is clicked, selected, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `UIAction.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `UIAction.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the item is generated. |
| `UIAction.EVENT_TYPE` | `"event_type"` | `Integer` | The type of the event, see Android official document of [AccessibilityEvent](https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent.html) for a list of event types. |
| `UIAction.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the current app (could be null). |
| `UIAction.ROOT_VIEW` | `"root_view"` | `AccessibilityNodeInfo` | The root view of current event, which is an instance of AccessibilityNodeInfo. |
| `UIAction.ITEM_COUNT` | `"item_count"` | `Integer` | The number of items in current event. |
| `UIAction.SOURCE_NODE` | `"source_node"` | `AccessibilityNodeInfo` | The source node of the UI action, which is an instance of [AccessibilityNodeInfo](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo.html). |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `UIAction.asUpdates()` <br> Provide a live stream of UIAction items.  A UIAction item will be generated once there is a UI action happened. |

## WifiAp

Package: `com.github.privacystreams.device`

A WifiAp item represents the information of a WIFI AP.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `WifiAp.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `WifiAp.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the WIFI AP information is found. |
| `WifiAp.BSSID` | `"bssid"` | `String` | The BSSID. |
| `WifiAp.SSID` | `"ssid"` | `String` | The SSID. |
| `WifiAp.FREQUENCY` | `"frequency"` | `String` | The frequency. |
| `WifiAp.RSSI` | `"rssi"` | `String` | The RSSI. |
| `WifiAp.CONNECTED` | `"connected"` | `Boolean` | Whether this AP is connected. |

### Providers

| Type | Reference & Description |
|----|----|
| `MStreamProvider` | `WifiAp.getScanResults()` <br> Provide a list of WifiAp items from WIFI scan result. |

