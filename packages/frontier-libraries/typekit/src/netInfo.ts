/**
 * Values the browser may provide for effective connection type.
 */
export enum EffectiveConnectionType {
  FourthGeneration = '4g',
  SecondGeneration = '2g',
  SlowSecondGeneration = 'slow-2g',
  ThirdGeneration = '3g',
}

/**
 * Values the browser may provide for connection type.
 */
export enum ConnectionType {
  Bluetooth = 'bluetooth',
  Cellular = 'cellular',
  Ethernet = 'ethernet',
  None = 'none',
  Other = 'other',
  Unknown = 'unknown',
  WiFi = 'wifi',
  WiMax = 'wimax',
}

/**
 * The Network Information API as defined by WICG.
 * http://wicg.github.io/netinfo/
 */
export interface NetworkInformation {
  /**
   * The currently observed download speed for this client.
   */
  downlink: number;
  /**
   * The maximum observed download speed for this client.
   */
  downlinkMax: number;
  /**
   * The effective network connection based on observed up/down/RTT.
   * This is in terms of cellular connections.
   */
  effectiveType: EffectiveConnectionType;
  /**
   * The currently observed Round Trip Time (RTT) for this client.
   */
  rtt: number;
  /**
   * The last hop network connection for this client.
   * For example, if a tablet is tethered to LTE via wifi this will be "wifi"
   * whereas if a cell phone is on LTE it will be "cellular". Use effectiveType
   * to get a category of performance.
   */
  type: ConnectionType;
}

/**
 * NetworkInformation API values mapped to data science names.
 */
export interface DataScienceNetworkInformation {
  /**
   * NetworkInformation downlink, when available
   */
  bandwidth: number | undefined;
  /**
   * NetworkInformation downlinkMax, when available
   */
  bandwidth_max: number | undefined;
  /**
   * NetworkInformation effectiveType, when available
   */
  effective_mobile_connection_type: EffectiveConnectionType | undefined;
  /**
   * NetworkInformation type, when available
   */
  mobile_connection_type: ConnectionType | undefined;
  /**
   * NetworkInformation rtt, when available
   */
  round_trip_time: number | undefined;
}
