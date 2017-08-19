---
layout: homepage
title: Available data types in PrivacyStreams
---

- [Acceleration](#acceleration)
- [AirPressure](#airpressure)
- [AmbientTemperature](#ambienttemperature)
- [Audio](#audio)
- [BluetoothDevice](#bluetoothdevice)
- [BrowserSearch](#browsersearch)
- [BrowserVisit](#browservisit)
- [CalendarEvent](#calendarevent)
- [Call](#call)
- [Contact](#contact)
- [DeviceEvent](#deviceevent)
- [DeviceState](#devicestate)
- [Email](#email)
- [EmptyItem](#emptyitem)
- [Geolocation](#geolocation)
- [Gravity](#gravity)
- [GroupItem](#groupitem)
- [Gyroscope](#gyroscope)
- [Image](#image)
- [Item](#item)
- [Light](#light)
- [LinearAcceleration](#linearacceleration)
- [Message](#message)
- [MockItem](#mockitem)
- [Notification](#notification)
- [RelativeHumidity](#relativehumidity)
- [RotationVector](#rotationvector)
- [StepCounter](#stepcounter)
- [TestItem](#testitem)
- [WifiAp](#wifiap)

## Acceleration

Package: `io.github.privacystreams.sensor`

Acceleration.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Acceleration.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Acceleration.X` | `"x"` | `Float` | Acceleration force along the x axis (including gravity). |
| `Acceleration.Y` | `"y"` | `Float` | Acceleration force along the y axis (including gravity). |
| `Acceleration.Z` | `"z"` | `Float` | Acceleration force along the z axis (including gravity). |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Acceleration.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from accelerometer. |

## AirPressure

Package: `io.github.privacystreams.sensor`

Air pressure environment sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `AirPressure.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `AirPressure.PRESSURE` | `"pressure"` | `Float` | Ambient air pressure. Unit: hPa or mbar. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `AirPressure.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from air pressure sensor. |

## AmbientTemperature

Package: `io.github.privacystreams.sensor`

Ambient air temperature sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `AmbientTemperature.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `AmbientTemperature.TEMPERATURE` | `"temperature"` | `Float` | Ambient air temperature. Unit: °C. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `AmbientTemperature.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from air temperature sensor. |

## Audio

Package: `io.github.privacystreams.audio`

An Audio item represents an audio, could be an audio record from microphone,
 an audio file from storage, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Audio.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Audio.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the Audio item was generated. |
| `Audio.AUDIO_DATA` | `"audio_data"` | `AudioData` | The abstraction of audio data.  The value is an `AudioData` instance. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Audio.record(long duration)` <br> Provide an Audio item.  The audio is recorded from microphone for a certain duration of time.  This provider requires `android.permission.RECORD_AUDIO` permission.<br> - `duration`: the time duration of audio. |
| `PStreamProvider` | `Audio.recordPeriodic(long durationPerRecord, long interval)` <br> Provide a live stream of Audio items.  The audios are recorded from microphone periodically every certain time interval,  and each Audio item is a certain duration of time long.  For example, `recordPeriodic(1000, 4000)` will record audio from 0s-1s, 5s-6s, 10s-11s, ...  This provider requires `android.permission.RECORD_AUDIO` permission.<br> - `durationPerRecord`: the time duration of each audio record, in milliseconds.<br> - `interval`: the time interval between each two records, in milliseconds. |
| `PStreamProvider` | `Audio.getFromStorage()` <br> Provide all Audio items in local file system.  This provider requires `android.permission.READ_EXTERNAL_STORAGE` permission. |

## BluetoothDevice

Package: `io.github.privacystreams.device`

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
| `PStreamProvider` | `BluetoothDevice.getScanResults()` <br> Get a stream of scanned bluetooth devices.  This provider requires `android.permission.BLUETOOTH` permission  and `android.permission.BLUETOOTH_ADMIN` permission. |

## BrowserSearch

Package: `io.github.privacystreams.accessibility`

Browser search activity.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BrowserSearch.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BrowserSearch.TEXT` | `"text"` | `String` | The searched text. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `BrowserSearch.asUpdates()` <br> Provide a live stream of BrowserSearch items.  An item will be generated once the user do a search in the browser. |

## BrowserVisit

Package: `io.github.privacystreams.accessibility`

Website visiting event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `BrowserVisit.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BrowserVisit.TITLE` | `"title"` | `String` | The title of current webpage. |
| `BrowserVisit.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the browser used to visit the webpage. |
| `BrowserVisit.URL` | `"url"` | `String` | The URL of the visited website. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `BrowserVisit.asUpdates()` <br> Provide a live stream of BrowserVisit items.  An item will be generated once the user visit a website in the browser. |

## CalendarEvent

Package: `io.github.privacystreams.calendar`

The meta information for a calendar event.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `CalendarEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `CalendarEvent.ID` | `"id"` | `String` | Event ID. |
| `CalendarEvent.TITLE` | `"title"` | `String` | Event title. |
| `CalendarEvent.START_TIME` | `"start_time"` | `Long` | Event start time. |
| `CalendarEvent.END_TIME` | `"end_time"` | `Long` | Event end time. |
| `CalendarEvent.DURATION` | `"duration"` | `String` | Duration of the event, in RFC2445 format. |
| `CalendarEvent.EVENT_LOCATION` | `"event_location"` | `String` | Event location. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `CalendarEvent.getAll()` <br> Provide all CalendarEvent items from device's calendar database.  This provider requires `android.permission.READ_CALENDAR` permission. |

## Call

Package: `io.github.privacystreams.communication`

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
| `PStreamProvider` | `Call.getLogs()` <br> Provide a list of Call items from the device call log.  This provider requires `android.permission.READ_CALL_LOG` permission. |
| `PStreamProvider` | `Call.asUpdates()` <br> Provide a live stream of Call items.  A Call item will be generated if there is a new phone call event.  This provider requires `android.permission.PROCESS_OUTGOING_CALLS` permission  and `android.permission.READ_PHONE_STATE` permission. |

## Contact

Package: `io.github.privacystreams.communication`

The information of a contact.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Contact.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Contact.ID` | `"id"` | `String` | The contact's unique ID in Android database. |
| `Contact.NAME` | `"name"` | `String` | The contact name. |
| `Contact.PHONES` | `"phones"` | `List<>` | The phone numbers of the contact. |
| `Contact.EMAILS` | `"emails"` | `List<>` | The emails of the contact. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Contact.getAll()` <br> Provide all Contact items in device's contacts database.  This provider requires `android.permission.READ_CONTACTS` permission. |

## DeviceEvent

Package: `io.github.privacystreams.device`

A DeviceEvent item represents an event about the device.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `DeviceEvent.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `DeviceEvent.TYPE` | `"type"` | `String` | The type of the event, could be "screen", "boot", "battery", or "ringer". |
| `DeviceEvent.EVENT` | `"event"` | `String` | The event name. For screen events, could be "on", "off", or "user_present";  For boot events, could be "boot_completed", or "shutdown";  For battery events, could be "low", "okay", "ac_connected", or "ac_disconnected";  For ringer events, could be "silent", "vibrate", or "normal". |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `DeviceEvent.asUpdates()` <br> Provide a live stream of device events, including screen/boot/battery/ringer events. |

## DeviceState

Package: `io.github.privacystreams.device`

A DeviceEvent item represents a snapshot of device state.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `DeviceState.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `DeviceState.BLUETOOTH_DEVICE_LIST` | `"bluetooth_device_list"` | `List<>` | The list of currently scanned bluetooth device. |
| `DeviceState.WIFI_AP_LIST` | `"wifi_ap_list"` | `List<>` | The list of currently scanned Wifi APs. |
| `DeviceState.BATTERY_LEVEL` | `"battery_level"` | `Float` | The current battery level. |
| `DeviceState.IS_CONNECTED` | `"is_connected"` | `Boolean` | Whether the current device is connected to network |
| `DeviceState.WIFI_BSSID` | `"wifi_bssid"` | `String` | The connected WiFi AP BSSID, could be null if the device is not connected to WiFi |
| `DeviceState.IS_SCREEN_ON` | `"is_screen_on"` | `String` | Whether the screen is on |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `DeviceState.asUpdates(long interval, int mask)` <br> Provide a live stream of device states, including bluetooth, wifi, battery level, and/or foreground apps etc.<br> - `interval`: the interval between each two device state snapshots<br> - `mask`: the mask of device state type, could be `DeviceState.Masks.BLUETOOTH_DEVICE_LIST`, `DeviceState.Masks.WIFI_AP_LIST`, etc. |

## Email

Package: `io.github.privacystreams.communication`

Email.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Email.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Email.BODY` | `"body"` | `String` | The email body. |
| `Email.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the email app. |
| `Email.FROM` | `"from"` | `String` | The sender of the email |
| `Email.TO` | `"to"` | `String` | The receiver of the email |
| `Email.SUBJECT` | `"subject"` | `String` | The subject of the email |
| `Email.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the message is sent or received. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Email.asGmailHistory(long afterTime, long beforeTime, int maxNumberOfResults)` <br> Provide a list of Email items from Gmail.<br> - `afterTime`: the minimum timestamp of emails to get<br> - `beforeTime`: the maximum timestamp of emails to get<br> - `maxNumberOfResults`: the max number of emails to get |
| `PStreamProvider` | `Email.asGmailUpdates(long frequency)` <br> Provide a live stream of Emails from Gmail.  Updates will be generated if there are emails sent or received per hour.<br> - `frequency`: the frequency of checking updates |

## EmptyItem

Package: `io.github.privacystreams.core.items`

An empty item.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `EmptyItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `EmptyItem.asUpdates(long interval)` <br> Provide a live stream of EmptyItems. The interval between each two items is a given value. |

## Geolocation

Package: `io.github.privacystreams.location`

An Geolocation item represents a geolocation value.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Geolocation.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Geolocation.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of the location. |
| `Geolocation.LAT_LON` | `"lat_lon"` | `LatLon` | The coordinates of the location.  The value is a LatLon instance. |
| `Geolocation.SPEED` | `"speed"` | `Float` | The speed at the location, in meters/second. |
| `Geolocation.PROVIDER` | `"provider"` | `String` | The provider of the location data, e.g., "gps" or "network". |
| `Geolocation.ACCURACY` | `"accuracy"` | `Float` | The accuracy of the location data, in meters. |
| `Geolocation.BEARING` | `"bearing"` | `Float` | The bearing of the location data.  Bearing is the horizontal direction of travel of this device,  and is not related to the device orientation. It is guaranteed to  be in the range (0.0, 360.0] if the device has a bearing.  If this location does not have a bearing, then the bearing value will be0.0. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Geolocation.asUpdates(long interval, String level)` <br> Provide a live stream of Geolocation as the location updates.  This provider requires a location permission based on the location level.  If `level` is `Geolocation.LEVEL_EXACT`, this provider requires `android.permission.ACCESS_COARSE_LOCATION` permission.  If `level` is any other level, this provider requires `android.permission.ACCESS_FINE_LOCATION` permission.<br> - `interval`: The interval between each two location updates.<br> - `level`: The location granularity level, could be               `Geolocation.LEVEL_COUNTRY`, `Geolocation.LEVEL_CITY`, `Geolocation.LEVEL_NEIGHBORHOOD`,               `Geolocation.LEVEL_BUILDING`, or `Geolocation.LEVEL_EXACT`. |
| `PStreamProvider` | `Geolocation.asLastKnown(String level)` <br> Provide an PStream of a Geolocation item, as the last known location.  If `level` is `Geolocation.LEVEL_EXACT`, this provider requires `android.permission.ACCESS_COARSE_LOCATION` permission.  If `level` is any other level, this provider requires `android.permission.ACCESS_FINE_LOCATION` permission.<br> - `level`: The location granularity level, could be               `Geolocation.LEVEL_COUNTRY`, `Geolocation.LEVEL_CITY`, `Geolocation.LEVEL_NEIGHBORHOOD`,               `Geolocation.LEVEL_BUILDING`, or `Geolocation.LEVEL_EXACT`. |
| `PStreamProvider` | `Geolocation.asCurrent(String level)` <br> Provide an PStream of a Geolocation item, as the current location.  If `level` is `Geolocation.LEVEL_EXACT`, this provider requires `android.permission.ACCESS_COARSE_LOCATION` permission.  If `level` is any other level, this provider requires `android.permission.ACCESS_FINE_LOCATION` permission.<br> - `level`: The location granularity level, could be               `Geolocation.LEVEL_COUNTRY`, `Geolocation.LEVEL_CITY`,               `Geolocation.LEVEL_NEIGHBORHOOD`, `Geolocation.LEVEL_BUILDING`,               or `Geolocation.LEVEL_EXACT`. |

## Gravity

Package: `io.github.privacystreams.sensor`

Gravity sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Gravity.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Gravity.X` | `"x"` | `Float` | Force of gravity along the x axis. |
| `Gravity.Y` | `"y"` | `Float` | Force of gravity along the y axis. |
| `Gravity.Z` | `"z"` | `Float` | Force of gravity along the z axis. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Gravity.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from gravity sensor. |

## GroupItem

Package: `io.github.privacystreams.core.transformations.group`

An item in a stream after grouping operation.
 GroupItem cannot be produced directly, instead, it can be generated using `groupBy` or `localGroupBy` operators.
 An GroupItem contains two initial fields:
 1. The field name is the same as the field used to group (e.g. the 1st parameter of `groupBy`), and the value is the field value;
 2. The field name is `grouped_items`, and the value is a list of the grouped items.
 More fields can be produced with `setGroupField` operators.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `GroupItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `GroupItem.GROUPED_ITEMS` | `"grouped_items"` | `List<>` | A list of the grouped items. |

## Gyroscope

Package: `io.github.privacystreams.sensor`

Gyroscope.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Gyroscope.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Gyroscope.X` | `"x"` | `Float` | Rate of rotation around the x axis. |
| `Gyroscope.Y` | `"y"` | `Float` | Rate of rotation around the y axis. |
| `Gyroscope.Z` | `"z"` | `Float` | Rate of rotation around the z axis. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Gyroscope.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from gyroscope. |

## Image

Package: `io.github.privacystreams.image`

An Image item represents an image, could be an image file from storage, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Image.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Image.DATE_ADDED` | `"date_added"` | `Long` | The timestamp of when the Image item was generated. |
| `Image.IMAGE_DATA` | `"image_data"` | `ImageData` | The abstraction of image data.  The value is an `ImageData` instance. |
| `Image.BUCKET_ID` | `"bucket_id"` | `Integer` | The id of the bucket (folder) that the image belongs to.  This field is only available with `getFromStorage` provider. |
| `Image.BUCKET_NAME` | `"bucket_name"` | `String` | The name of the bucket (folder) that the image belongs to.  This field is only available with `getFromStorage` provider. |
| `Image.IMAGE_ID` | `"image_id"` | `Integer` | The id of the image in Android media database.  This field is only available with `getFromStorage` provider. |
| `Image.IMAGE_NAME` | `"image_name"` | `String` | The name of the image.  This field is only available with `getFromStorage` provider. |
| `Image.IMAGE_PATH` | `"image_path"` | `String` | The file path of the image.  This field is only available with `getFromStorage` provider. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Image.takeFromCamera()` <br> Provide an PStream with an Image item, which represents a photo taken from camera.  This provider requires `android.permission.CAMERA` permission  and `android.permission.WRITE_EXTERNAL_STORAGE` permission. |
| `PStreamProvider` | `Image.getFromStorage()` <br> Provide a stream of all Image items in local file system.  This provider requires `android.permission.READ_EXTERNAL_STORAGE` permission. |

## Item

Package: `io.github.privacystreams.core`

An Item is a basic element in a stream.
 This class is the base class of all type of personal data items in PrivacyStream.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Item.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

## Light

Package: `io.github.privacystreams.sensor`

Light environment sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Light.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Light.ILLUMINANCE` | `"illuminance"` | `Float` | The light illuminance. Unit: lx. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Light.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from light sensor. |

## LinearAcceleration

Package: `io.github.privacystreams.sensor`

Linear acceleration.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `LinearAcceleration.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `LinearAcceleration.X` | `"x"` | `Float` | Acceleration force along the x axis (excluding gravity). |
| `LinearAcceleration.Y` | `"y"` | `Float` | Acceleration force along the y axis (excluding gravity). |
| `LinearAcceleration.Z` | `"z"` | `Float` | Acceleration force along the z axis (excluding gravity). |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `LinearAcceleration.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from linear acceleration sensor. |

## Message

Package: `io.github.privacystreams.communication`

A text message. It could be from SMS, WhatsApp, Facebook, etc.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `Message.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `Message.CONTENT` | `"content"` | `String` | The message content. |
| `Message.PACKAGE_NAME` | `"package_name"` | `String` | The package name of the app where message is captured.  For example, if it is a Facebook message, package_name will be "com.facebook.orca";  If it is an SMS message, package_name will be "system". |
| `Message.CONTACT` | `"contact"` | `String` | The contact (phone number or name) of the message. |
| `Message.TIMESTAMP` | `"timestamp"` | `Long` | The timestamp of when the message is sent or received. |
| `Message.TYPE` | `"type"` | `String` | The message type, could be "received", "sent", "draft", "pending", or "unknown". |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Message.asUpdatesInIM()` <br> Provide a live stream of new Message items in Instant Messenger (IM) apps, including WhatsApp and Facebook.  This provider requires Accessibility service turned on. |
| `PStreamProvider` | `Message.asIncomingSMS()` <br> Provide a live stream of new incoming Message items from the Android Short Message Service (SMS).  This provider requires `android.permission.RECEIVE_SMS` permission. |
| `PStreamProvider` | `Message.getAllSMS()` <br> Provide all Message items from Android Short Message Service SMS.  This provider requires `android.permission.READ_SMS` permission. |

## MockItem

Package: `io.github.privacystreams.core.items`

A mock item. The content of a MockItem is mocked from another item.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `MockItem.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

## Notification

Package: `io.github.privacystreams.notification`

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
| `Notification.SUB_TEXT` | `"sub_text"` | `String` | The subtext of the notification. |
| `Notification.EXTRA` | `"extra"` | `Bundle` | The extra bundle of the notification. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `Notification.asUpdates()` <br> Provide a list of Notification items from Notification catch result. |

## RelativeHumidity

Package: `io.github.privacystreams.sensor`

Ambient relative humidity sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `RelativeHumidity.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `RelativeHumidity.HUMIDITY` | `"humidity"` | `Float` | Ambient relative humidity. Unit: %. |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `RelativeHumidity.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from ambient relative humidity sensor. |

## RotationVector

Package: `io.github.privacystreams.sensor`

Rotation vector sensor.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `RotationVector.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `RotationVector.X` | `"x"` | `Float` | Rotation vector component along the x axis (x * sin(θ/2)). |
| `RotationVector.Y` | `"y"` | `Float` | Rotation vector component along the y axis (y * sin(θ/2)). |
| `RotationVector.Z` | `"z"` | `Float` | Rotation vector component along the z axis (z * sin(θ/2)). |
| `RotationVector.SCALAR` | `"scalar"` | `Float` | (Optional) Scalar component of the rotation vector ((cos(θ/2)). |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `RotationVector.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from rotation vector sensor. |

## StepCounter

Package: `io.github.privacystreams.sensor`

Step counter.

### Fields

| Reference | Name | Type | Description |
|----|----|----|----|
| `StepCounter.TIME_CREATED` | `"time_created"` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `StepCounter.STEPS` | `"steps"` | `Float` | Rotation vector component along the x axis (x * sin(θ/2)). |

### Providers

| Type | Reference & Description |
|----|----|
| `PStreamProvider` | `StepCounter.asUpdates(int sensorDelay)` <br> Provide a live stream of sensor readings from the step counter. |

## TestItem

Package: `io.github.privacystreams.core.items`

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
| `PStreamProvider` | `TestItem.asUpdatesFrom(List<TestObject> testObjects, long interval)` <br> Provide a live stream of TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data<br> - `interval`: the interval between each two items, in milliseconds |
| `PStreamProvider` | `TestItem.asUpdates(int maxInt, double maxDouble, long interval)` <br> Provide a live stream of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `interval`: the interval between each two items, in milliseconds |
| `PStreamProvider` | `TestItem.getAllFrom(List<TestObject> testObjects)` <br> Provide a stream of existing TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data |
| `PStreamProvider` | `TestItem.getAllRandom(int maxInt, double maxDouble, int count)` <br> Provide a list of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `count`: the number of random items |

## WifiAp

Package: `io.github.privacystreams.device`

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
| `PStreamProvider` | `WifiAp.getScanResults()` <br> Provide a list of WifiAp items from WIFI scan result.  This provider requires `android.permission.ACCESS_COARSE_LOCATION`,  `android.permission.CHANGE_WIFI_STATE`, and `android.permission.ACCESS_WIFI_STATE` permission. |

