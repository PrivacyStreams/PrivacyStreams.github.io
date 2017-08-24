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

#### Fields of *Acceleration*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `X` | `Float` | Acceleration force along the x axis (including gravity). |
| `Y` | `Float` | Acceleration force along the y axis (including gravity). |
| `Z` | `Float` | Acceleration force along the z axis (including gravity). |

#### Providers of *Acceleration*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Acceleration.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from accelerometer. |

## AirPressure

Package: `io.github.privacystreams.sensor`

Air pressure environment sensor.

#### Fields of *AirPressure*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `PRESSURE` | `Float` | Ambient air pressure. Unit: hPa or mbar. |

#### Providers of *AirPressure*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`AirPressure.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from air pressure sensor. |

## AmbientTemperature

Package: `io.github.privacystreams.sensor`

Ambient air temperature sensor.

#### Fields of *AmbientTemperature*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TEMPERATURE` | `Float` | Ambient air temperature. Unit: °C. |

#### Providers of *AmbientTemperature*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`AmbientTemperature.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from air temperature sensor. |

## Audio

Package: `io.github.privacystreams.audio`

An Audio item represents an audio, could be an audio record from microphone,
 an audio file from storage, etc.

#### Fields of *Audio*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TIMESTAMP` | `Long` | The timestamp of when the Audio item was generated. |
| `AUDIO_DATA` | `AudioData` | The abstraction of audio data.  The value is an `AudioData` instance. |

#### Providers of *Audio*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Audio.record(long duration)`** <br> Provide an Audio item.  The audio is recorded from microphone for a certain duration of time.  This provider requires `android.permission.RECORD_AUDIO` permission.<br> - `duration`: the time duration of audio. |
| `PStreamProvider` | **`Audio.recordPeriodic(long durationPerRecord, long interval)`** <br> Provide a live stream of Audio items.  The audios are recorded from microphone periodically every certain time interval,  and each Audio item is a certain duration of time long.  For example, `recordPeriodic(1000, 4000)` will record audio from 0s-1s, 5s-6s, 10s-11s, ...  This provider requires `android.permission.RECORD_AUDIO` permission.<br> - `durationPerRecord`: the time duration of each audio record, in milliseconds.<br> - `interval`: the time interval between each two records, in milliseconds. |
| `PStreamProvider` | **`Audio.getFromStorage()`** <br> Provide all Audio items in local file system.  This provider requires `android.permission.READ_EXTERNAL_STORAGE` permission. |

## BluetoothDevice

Package: `io.github.privacystreams.device`

A BluetoothDevice represents a bluetooth device.

#### Fields of *BluetoothDevice*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `NAME` | `String` | The name of the scanned bluetooth device. |
| `MAC_ADDRESS` | `String` | The mac address of the scanned bluetooth device. |
| `BONDED` | `Boolean` | The boolean value indicating whether the bluetooth device is connected to the user's phone. |

#### Providers of *BluetoothDevice*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`BluetoothDevice.getScanResults()`** <br> Get a stream of scanned bluetooth devices.  This provider requires `android.permission.BLUETOOTH` permission  and `android.permission.BLUETOOTH_ADMIN` permission. |

## BrowserSearch

Package: `io.github.privacystreams.accessibility`

Browser search activity.

#### Fields of *BrowserSearch*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TEXT` | `String` | The searched text. |

#### Providers of *BrowserSearch*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`BrowserSearch.asUpdates()`** <br> Provide a live stream of BrowserSearch items.  An item will be generated once the user do a search in the browser. |

## BrowserVisit

Package: `io.github.privacystreams.accessibility`

Website visiting event.

#### Fields of *BrowserVisit*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TITLE` | `String` | The title of current webpage. |
| `PACKAGE_NAME` | `String` | The package name of the browser used to visit the webpage. |
| `URL` | `String` | The URL of the visited website. |

#### Providers of *BrowserVisit*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`BrowserVisit.asUpdates()`** <br> Provide a live stream of BrowserVisit items.  An item will be generated once the user visit a website in the browser. |

## CalendarEvent

Package: `io.github.privacystreams.calendar`

The meta information for a calendar event.

#### Fields of *CalendarEvent*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `ID` | `String` | Event ID. |
| `TITLE` | `String` | Event title. |
| `START_TIME` | `Long` | Event start time. |
| `END_TIME` | `Long` | Event end time. |
| `DURATION` | `String` | Duration of the event, in RFC2445 format. |
| `EVENT_LOCATION` | `String` | Event location. |

#### Providers of *CalendarEvent*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`CalendarEvent.getAll()`** <br> Provide all CalendarEvent items from device's calendar database.  This provider requires `android.permission.READ_CALENDAR` permission. |

## Call

Package: `io.github.privacystreams.communication`

The information of a phone call.

#### Fields of *Call*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TIMESTAMP` | `Long` | The timestamp of when the phone call is happened. |
| `CONTACT` | `String` | The contact (phone number or name) of the phone call. |
| `DURATION` | `Long` | The duration of the phone call, in milliseconds. |
| `TYPE` | `String` | The type of the phone call, could be "incoming", "outgoing" or "missed". |

#### Providers of *Call*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Call.getLogs()`** <br> Provide a list of Call items from the device call log.  This provider requires `android.permission.READ_CALL_LOG` permission. |
| `PStreamProvider` | **`Call.asUpdates()`** <br> Provide a live stream of Call items.  A Call item will be generated if there is a new phone call event.  This provider requires `android.permission.PROCESS_OUTGOING_CALLS` permission  and `android.permission.READ_PHONE_STATE` permission. |

## Contact

Package: `io.github.privacystreams.communication`

The information of a contact.

#### Fields of *Contact*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `ID` | `String` | The contact's unique ID in Android database. |
| `NAME` | `String` | The contact name. |
| `PHONES` | `List<>` | The phone numbers of the contact. |
| `EMAILS` | `List<>` | The emails of the contact. |

#### Providers of *Contact*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Contact.getAll()`** <br> Provide all Contact items in device's contacts database.  This provider requires `android.permission.READ_CONTACTS` permission. |

## DeviceEvent

Package: `io.github.privacystreams.device`

A DeviceEvent item represents an event about the device.

#### Fields of *DeviceEvent*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TYPE` | `String` | The type of the event, could be "screen", "boot", "battery", or "ringer". |
| `EVENT` | `String` | The event name. For screen events, could be "on", "off", or "user_present";  For boot events, could be "boot_completed", or "shutdown";  For battery events, could be "low", "okay", "ac_connected", or "ac_disconnected";  For ringer events, could be "silent", "vibrate", or "normal". |

#### Providers of *DeviceEvent*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`DeviceEvent.asUpdates()`** <br> Provide a live stream of device events, including screen/boot/battery/ringer events. |

## DeviceState

Package: `io.github.privacystreams.device`

A DeviceEvent item represents a snapshot of device state.

#### Fields of *DeviceState*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BT_DEVICE_LIST` | `List<>` | The list of currently scanned bluetooth device. |
| `WIFI_AP_LIST` | `List<>` | The list of currently scanned Wifi APs. |
| `BATTERY_LEVEL` | `Float` | The current battery level. |
| `IS_CONNECTED` | `Boolean` | Whether the current device is connected to network |
| `WIFI_BSSID` | `String` | The connected WiFi AP BSSID, could be null if the device is not connected to WiFi |
| `IS_SCREEN_ON` | `String` | Whether the screen is on |

#### Providers of *DeviceState*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`DeviceState.asUpdates(long interval, int mask)`** <br> Provide a live stream of device states, including bluetooth, wifi, battery level, and/or foreground apps etc.<br> - `interval`: the interval between each two device state snapshots<br> - `mask`: the mask of device state type, could be `DeviceState.Masks.BT_DEVICE_LIST`, `DeviceState.Masks.WIFI_AP_LIST`, etc. |

## Email

Package: `io.github.privacystreams.communication`

Email.

#### Fields of *Email*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `BODY` | `String` | The email body. |
| `PACKAGE_NAME` | `String` | The package name of the email app. |
| `FROM` | `String` | The sender of the email |
| `TO` | `String` | The receiver of the email |
| `SUBJECT` | `String` | The subject of the email |
| `TIMESTAMP` | `Long` | The timestamp of when the message is sent or received. |

#### Providers of *Email*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Email.asGmailHistory(long afterTime, long beforeTime, int maxNumberOfResults)`** <br> Provide a list of Email items from Gmail.<br> - `afterTime`: the minimum timestamp of emails to get<br> - `beforeTime`: the maximum timestamp of emails to get<br> - `maxNumberOfResults`: the max number of emails to get |
| `PStreamProvider` | **`Email.asGmailUpdates(long frequency)`** <br> Provide a live stream of Emails from Gmail.  Updates will be generated if there are emails sent or received per hour.<br> - `frequency`: the frequency of checking updates |

## EmptyItem

Package: `io.github.privacystreams.core.items`

An empty item.

#### Fields of *EmptyItem*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

#### Providers of *EmptyItem*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`EmptyItem.asUpdates(long interval)`** <br> Provide a live stream of EmptyItems. The interval between each two items is a given value. |

## Geolocation

Package: `io.github.privacystreams.location`

An Geolocation item represents a geolocation value.

#### Fields of *Geolocation*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TIMESTAMP` | `Long` | The timestamp of the location. |
| `LAT_LON` | `LatLon` | The coordinates of the location.  The value is a LatLon instance. |
| `SPEED` | `Float` | The speed at the location, in meters/second. |
| `PROVIDER` | `String` | The provider of the location data, e.g., "gps" or "network". |
| `ACCURACY` | `Float` | The accuracy of the location data, in meters. |
| `BEARING` | `Float` | The bearing of the location data.  Bearing is the horizontal direction of travel of this device,  and is not related to the device orientation. It is guaranteed to  be in the range (0.0, 360.0] if the device has a bearing.  If this location does not have a bearing, then the bearing value will be0.0. |

#### Providers of *Geolocation*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Geolocation.asUpdates(long interval, String level)`** <br> Provide a live stream of Geolocation as the location updates.  This provider requires a location permission based on the location level.  If `level` is `Geolocation.LEVEL_EXACT`, this provider requires `android.permission.ACCESS_COARSE_LOCATION` permission.  If `level` is any other level, this provider requires `android.permission.ACCESS_FINE_LOCATION` permission.<br> - `interval`: The interval between each two location updates.<br> - `level`: The location granularity level, could be               `Geolocation.LEVEL_COUNTRY`, `Geolocation.LEVEL_CITY`, `Geolocation.LEVEL_NEIGHBORHOOD`,               `Geolocation.LEVEL_BUILDING`, or `Geolocation.LEVEL_EXACT`. |
| `PStreamProvider` | **`Geolocation.asLastKnown(String level)`** <br> Provide an PStream of a Geolocation item, as the last known location.  If `level` is `Geolocation.LEVEL_EXACT`, this provider requires `android.permission.ACCESS_COARSE_LOCATION` permission.  If `level` is any other level, this provider requires `android.permission.ACCESS_FINE_LOCATION` permission.<br> - `level`: The location granularity level, could be               `Geolocation.LEVEL_COUNTRY`, `Geolocation.LEVEL_CITY`, `Geolocation.LEVEL_NEIGHBORHOOD`,               `Geolocation.LEVEL_BUILDING`, or `Geolocation.LEVEL_EXACT`. |
| `PStreamProvider` | **`Geolocation.asCurrent(String level)`** <br> Provide an PStream of a Geolocation item, as the current location.  If `level` is `Geolocation.LEVEL_EXACT`, this provider requires `android.permission.ACCESS_COARSE_LOCATION` permission.  If `level` is any other level, this provider requires `android.permission.ACCESS_FINE_LOCATION` permission.<br> - `level`: The location granularity level, could be               `Geolocation.LEVEL_COUNTRY`, `Geolocation.LEVEL_CITY`,               `Geolocation.LEVEL_NEIGHBORHOOD`, `Geolocation.LEVEL_BUILDING`,               or `Geolocation.LEVEL_EXACT`. |

## Gravity

Package: `io.github.privacystreams.sensor`

Gravity sensor.

#### Fields of *Gravity*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `X` | `Float` | Force of gravity along the x axis. |
| `Y` | `Float` | Force of gravity along the y axis. |
| `Z` | `Float` | Force of gravity along the z axis. |

#### Providers of *Gravity*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Gravity.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from gravity sensor. |

## GroupItem

Package: `io.github.privacystreams.core.transformations.group`

An item in a stream after grouping operation.
 GroupItem cannot be produced directly, instead, it can be generated using `groupBy` or `localGroupBy` operators.
 An GroupItem contains two initial fields:
 1. The field name is the same as the field used to group (e.g. the 1st parameter of `groupBy`), and the value is the field value;
 2. The field name is `grouped_items`, and the value is a list of the grouped items.
 More fields can be produced with `setGroupField` operators.

#### Fields of *GroupItem*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `GROUPED_ITEMS` | `List<>` | A list of the grouped items. |

## Gyroscope

Package: `io.github.privacystreams.sensor`

Gyroscope.

#### Fields of *Gyroscope*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `X` | `Float` | Rate of rotation around the x axis. |
| `Y` | `Float` | Rate of rotation around the y axis. |
| `Z` | `Float` | Rate of rotation around the z axis. |

#### Providers of *Gyroscope*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Gyroscope.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from gyroscope. |

## Image

Package: `io.github.privacystreams.image`

An Image item represents an image, could be an image file from storage, etc.

#### Fields of *Image*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `DATE_ADDED` | `Long` | The timestamp of when the Image item was generated. |
| `IMAGE_DATA` | `ImageData` | The abstraction of image data.  The value is an `ImageData` instance. |
| `BUCKET_ID` | `Integer` | The id of the bucket (folder) that the image belongs to.  This field is only available with `getFromStorage` provider. |
| `BUCKET_NAME` | `String` | The name of the bucket (folder) that the image belongs to.  This field is only available with `getFromStorage` provider. |
| `IMAGE_ID` | `Integer` | The id of the image in Android media database.  This field is only available with `getFromStorage` provider. |
| `IMAGE_NAME` | `String` | The name of the image.  This field is only available with `getFromStorage` provider. |
| `IMAGE_PATH` | `String` | The file path of the image.  This field is only available with `getFromStorage` provider. |

#### Providers of *Image*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Image.takeFromCamera()`** <br> Provide an PStream with an Image item, which represents a photo taken from camera.  This provider requires `android.permission.CAMERA` permission  and `android.permission.WRITE_EXTERNAL_STORAGE` permission. |
| `PStreamProvider` | **`Image.getFromStorage()`** <br> Provide a stream of all Image items in local file system.  This provider requires `android.permission.READ_EXTERNAL_STORAGE` permission. |

## Item

Package: `io.github.privacystreams.core`

An Item is a basic element in a stream.
 This class is the base class of all type of personal data items in PrivacyStream.

#### Fields of *Item*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

## Light

Package: `io.github.privacystreams.sensor`

Light environment sensor.

#### Fields of *Light*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `ILLUMINANCE` | `Float` | The light illuminance. Unit: lx. |

#### Providers of *Light*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Light.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from light sensor. |

## LinearAcceleration

Package: `io.github.privacystreams.sensor`

Linear acceleration.

#### Fields of *LinearAcceleration*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `X` | `Float` | Acceleration force along the x axis (excluding gravity). |
| `Y` | `Float` | Acceleration force along the y axis (excluding gravity). |
| `Z` | `Float` | Acceleration force along the z axis (excluding gravity). |

#### Providers of *LinearAcceleration*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`LinearAcceleration.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from linear acceleration sensor. |

## Message

Package: `io.github.privacystreams.communication`

A text message. It could be from SMS, WhatsApp, Facebook, etc.

#### Fields of *Message*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `CONTENT` | `String` | The message content. |
| `PACKAGE_NAME` | `String` | The package name of the app where message is captured.  For example, if it is a Facebook message, package_name will be "com.facebook.orca";  If it is an SMS message, package_name will be "system". |
| `CONTACT` | `String` | The contact (phone number or name) of the message. |
| `TIMESTAMP` | `Long` | The timestamp of when the message is sent or received. |
| `TYPE` | `String` | The message type, could be "received", "sent", "draft", "pending", or "unknown". |

#### Providers of *Message*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Message.asUpdatesInIM()`** <br> Provide a live stream of new Message items in Instant Messenger (IM) apps, including WhatsApp and Facebook.  This provider requires Accessibility service turned on. |
| `PStreamProvider` | **`Message.asIncomingSMS()`** <br> Provide a live stream of new incoming Message items from the Android Short Message Service (SMS).  This provider requires `android.permission.RECEIVE_SMS` permission. |
| `PStreamProvider` | **`Message.getAllSMS()`** <br> Provide all Message items from Android Short Message Service SMS.  This provider requires `android.permission.READ_SMS` permission. |

## MockItem

Package: `io.github.privacystreams.core.items`

A mock item. The content of a MockItem is mocked from another item.

#### Fields of *MockItem*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |

## Notification

Package: `io.github.privacystreams.notification`

An Notification item represents a received notification.

#### Fields of *Notification*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `POST_TIME` | `Long` | The timestamp of when the notification was posted. |
| `ACTION` | `String` | The action associated with the notification.  It could be "removed" or "posted". |
| `CATEGORY` | `String` | The category of the notification.  One of the predefined notification categories  (see the `CATEGORY_*` constants in `android.app.Notification` class.)  that best describes this Notification.  Such as "sys", "social", etc. |
| `PACKAGE_NAME` | `String` | The package name of the notification. |
| `TITLE` | `String` | The title of the notification. |
| `TEXT` | `String` | The text of the notification. |
| `SUB_TEXT` | `String` | The subtext of the notification. |
| `EXTRA` | `Bundle` | The extra bundle of the notification. |

#### Providers of *Notification*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`Notification.asUpdates()`** <br> Provide a list of Notification items from Notification catch result. |

## RelativeHumidity

Package: `io.github.privacystreams.sensor`

Ambient relative humidity sensor.

#### Fields of *RelativeHumidity*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `HUMIDITY` | `Float` | Ambient relative humidity. Unit: %. |

#### Providers of *RelativeHumidity*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`RelativeHumidity.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from ambient relative humidity sensor. |

## RotationVector

Package: `io.github.privacystreams.sensor`

Rotation vector sensor.

#### Fields of *RotationVector*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `X` | `Float` | Rotation vector component along the x axis (x * sin(θ/2)). |
| `Y` | `Float` | Rotation vector component along the y axis (y * sin(θ/2)). |
| `Z` | `Float` | Rotation vector component along the z axis (z * sin(θ/2)). |
| `SCALAR` | `Float` | (Optional) Scalar component of the rotation vector ((cos(θ/2)). |

#### Providers of *RotationVector*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`RotationVector.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from rotation vector sensor. |

## StepCounter

Package: `io.github.privacystreams.sensor`

Step counter.

#### Fields of *StepCounter*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `STEPS` | `Float` | Rotation vector component along the x axis (x * sin(θ/2)). |

#### Providers of *StepCounter*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`StepCounter.asUpdates(int sensorDelay)`** <br> Provide a live stream of sensor readings from the step counter. |

## TestItem

Package: `io.github.privacystreams.core.items`

A random item for testing.

#### Fields of *TestItem*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `ID` | `Long` | The index of current item. |
| `X` | `Integer` | A random integer. |
| `Y` | `String` | A random String. |
| `Z` | `Double` | A random float number. |

#### Providers of *TestItem*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`TestItem.asUpdatesFrom(List<TestObject> testObjects, long interval)`** <br> Provide a live stream of TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data<br> - `interval`: the interval between each two items, in milliseconds |
| `PStreamProvider` | **`TestItem.asUpdates(int maxInt, double maxDouble, long interval)`** <br> Provide a live stream of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `interval`: the interval between each two items, in milliseconds |
| `PStreamProvider` | **`TestItem.getAllFrom(List<TestObject> testObjects)`** <br> Provide a stream of existing TestItem items, which are from a given list.<br> - `testObjects`: the list of mock data |
| `PStreamProvider` | **`TestItem.getAllRandom(int maxInt, double maxDouble, int count)`** <br> Provide a list of TestItem items, which are randomly generated.<br> - `maxInt`: the max value of the int field of the random mock items<br> - `maxDouble`: the max value of the double field of the random mock items<br> - `count`: the number of random items |

## WifiAp

Package: `io.github.privacystreams.device`

A WifiAp item represents the information of a WIFI AP.

#### Fields of *WifiAp*

| Name | Type | Description |
|----|----|----|
| `TIME_CREATED` | `Long` | The timestamp of when this item is created.  It is a general field for all items. |
| `TIMESTAMP` | `Long` | The timestamp of when the WIFI AP information is found. |
| `BSSID` | `String` | The BSSID. |
| `SSID` | `String` | The SSID. |
| `FREQUENCY` | `String` | The frequency. |
| `RSSI` | `String` | The RSSI. |
| `CONNECTED` | `Boolean` | Whether this AP is connected. |

#### Providers of *WifiAp*

| Type | API & Description |
|----|----|
| `PStreamProvider` | **`WifiAp.getScanResults()`** <br> Provide a list of WifiAp items from WIFI scan result.  This provider requires `android.permission.ACCESS_COARSE_LOCATION`,  `android.permission.CHANGE_WIFI_STATE`, and `android.permission.ACCESS_WIFI_STATE` permission. |

