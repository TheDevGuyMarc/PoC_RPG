# PlatformDetector Class

The `PlatformDetector` class provides methods to detect the current platform and browser being used in a web environment. It uses the user agent string to determine the platform and browser.

## Class Methods

### `detectPlatform(): Platform`

Detects and returns the current platform as a value from the `Platform` enum.

### `detectBrowser(): Browser`

Detects and returns the current browser as a value from the `Browser` enum.

## Enums

### `Platform`

An enumeration that represents different platforms.

- `Unknown`: Represents an unknown or unsupported platform.
- `Windows`: Represents the Windows operating system.
- `MacOS`: Represents the macOS operating system.
- `Linux`: Represents the Linux operating system.
- `Android`: Represents the Android mobile platform.
- `iOS`: Represents the iOS mobile platform.

### `Browser`

An enumeration that represents different web browsers.

- `Unknown`: Represents an unknown or unsupported browser.
- `Chrome`: Represents the Google Chrome browser.
- `Firefox`: Represents the Mozilla Firefox browser.
- `Safari`: Represents the Apple Safari browser.
- `Edge`: Represents the Microsoft Edge browser.
- `Opera`: Represents the Opera browser.
- `InternetExplorer`: Represents the Internet Explorer browser.

## Example Usage

```javascript
// Detect the current platform and browser
const currentPlatform = PlatformDetector.detectPlatform();
const currentBrowser = PlatformDetector.detectBrowser();

// Output the detected platform and browser
console.log(`Detected platform: ${currentPlatform}`);
console.log(`Detected browser: ${currentBrowser}`);
```
