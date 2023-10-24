import {Platform} from "./Platform";
import {Browser} from "./Browser";

export default class PlatformDetector {
  static detectPlatform(): Platform {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes('win')) {
      return Platform.Windows;
    } else if (userAgent.includes('mac')) {
      return Platform.MacOS;
    } else if (userAgent.includes('linux')) {
      return Platform.Linux;
    } else if (userAgent.includes('android')) {
      return Platform.Android;
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
      return Platform.iOS;
    } else {
      return Platform.Unknown;
    }
  }

  static detectBrowser(): Browser {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes('chrome')) {
      return Browser.Chrome;
    } else if (userAgent.includes('firefox')) {
      return Browser.Firefox;
    } else if (userAgent.includes('safari')) {
      return Browser.Safari;
    } else if (userAgent.includes('edge')) {
      return Browser.Edge;
    } else if (userAgent.includes('opera')) {
      return Browser.Opera;
    } else if (userAgent.includes('msie') || userAgent.includes('trident')) {
      return Browser.InternetExplorer;
    } else {
      return Browser.Unknown;
    }
  }
}
