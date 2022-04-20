export enum InformationCode {
  /**
   * RFC 7231 - Server has received headers, client should send body.
   */
  Continue = 100,
  /**
   * RFC 7231 - Server is willing to comply with request via Upgrade header field.
   */
  SwitchingProtocols = 101,
  /**
   * RFC 2518 - Server has received complete request but has not completed it.
   */
  Processing = 102,
  EarlyHints = 103,
}

export enum SuccessCode {
  /**
   * RFC 7231 - Server completed request. Payload is response.
   */
  OK = 200,
  /**
   * RFC 7231 - Server created requested resource.
   */
  Created = 201,
  /**
   * RFC 7231 - Request has been accepted for processing. Processing may happen.
   */
  Accepted = 202,
  /**
   * RFC 7230 - RFC 7231 - Request was successful, but content was modified by proxy.
   */
  NonAuthoritativeInformation = 203,
  /**
   * RFC 7231 - Request was successful but there is no more content to send.
   */
  NoContent = 204,
  /**
   * RFC 7231 - Request fulfilled, the "document view" should be reset.
   */
  ResetContent = 205,
  /**
   * RFC 2733 - Server is responding with a range according the the request's Range header field.
   */
  PartialContent = 206,
  /**
   * RFC 4918 - (WebDAV) Multiple status were returned for each action in the request.
   */
  MultiStatus = 207,
  /**
   * RFC 5842 - (WebDAV) Subsequent successful binding to a collection.
   */
  AlreadyReported = 208,
  /**
   * RFC 3229 - (Delta Encoding) Response represents the result of 1+ instance-manipulation (IM header).
   */
  IMUsed = 226,
}

export enum RedirectionCode {
  /**
   * RFC 7231 - Target resource has multiple representations.
   */
  MultipleChoices = 300,
  /**
   * RFC 7231 - Resource has new permanent URI in Location header. UA MAY change request from POST to GET when following.
   */
  MovedPermanently = 301,
  /**
   * RFC 7231 - Resource temporarily resides at new URI in Location header. UA MAY change request from POST to GET when following.
   */
  Found = 302,
  /**
   * RFC 7231 - A resource descriptive of the requested resource is available in Location header.
   */
  SeeOther = 303,
  /**
   * RFC 7232 - A conditional GET or HEAD request was received and the condition evaluated to false.
   */
  NotModified = 304,
  /**
   * DEPRECATED for security reasons. DO NOT USE.
   */
  // UseProxy = 305,
  /**
   * DEPRECATED for security reasons. DO NOT USE.
   */
  // SwitchProxy = 306,
  /**
   * RFC 7231 - Resource resides under another temporary URI. UA MUST use POST if initial request was POST.
   */
  TemporaryRedirect = 307,
  /**
   * RFC 7538 - Resource resides at a new permanent URI. UA MUST use POST if initial request was POST.
   */
  PermanentRedirect = 308,
}

export enum ClientErrorCode {
  /**
   * RFC 7231 - Server can't or won't process due to client error.
   */
  BadRequest = 400,
  /**
   * RFC 7235 - Request lacks valid authentication credentials.
   */
  Unauthorized = 401,
  /**
   * RFC 7231 - (Future use) payment required.
   */
  PaymentRequired = 402,
  /**
   * RFC 7231 - Provided authentication credentials were insufficient, server refuses to authorize.
   */
  Forbidden = 403,
  /**
   * RFC 7231 - No representation of target at URI, or server won't disclose existence.
   */
  NotFound = 404,
  /**
   * RFC 7231 - Resource does not support HTTP method used.
   */
  MethodNotAllowed = 405,
  /**
   * RFC 7231 - Target resource does not have a representation acceptable to the UA.
   */
  NotAcceptable = 406,
  /**
   * RFC 7235 - Client needs to authenticate with proxy.
   */
  ProxyAuthenticationRequired = 407,
  /**
   * RFC 7231 - Server did not receive a complete request within acceptable time.
   */
  RequestTimeout = 408,
  /**
   * RFC 7231 - Request couldn't complete due to a conflict with the state of the target resource.
   */
  Conflict = 409,
  /**
   * RFC 7231 - Target resource is no longer available at the origin server.
   */
  Gone = 410,
  /**
   * RFC 7231 - Request needs a Content-Length.
   */
  LengthRequired = 411,
  /**
   * RFC 7232 - Preconditions in the header failed.
   */
  PreconditionFailed = 412,
  /**
   * RFC 7231 - Request payload is too large.
   */
  PayloadTooLarge = 413,
  /**
   * RFC 7231 - Requested URI is too long.
   */
  URITooLong = 414,
  /**
   * RFC 7231 - Request payload is in a format the server can't process.
   */
  UnsupportedMediaType = 415,
  /**
   * RFC 7233 - None of the ranges in the Range header field are available.
   */
  RangeNotSatisifiable = 416,
  /**
   * RFC 7231 - Expectation in Expect header field could not be met.
   */
  ExpectationFailed = 417,
  /**
   * RFC 2324 - (April Fool's) Attempt to brew coffee with a tea pot could not be fulfilled.
   */
  ImATeapot = 418,
  /**
   * RFC 7540 - Request went to a server that could not produce a response.
   */
  MisdirectedRequest = 421,
  /**
   * RFC 4918 - Understandable content type & proper request entity, but can't process the instructions.
   */
  UnprocessableEntity = 422,
  /**
   * RFC 4918 - Source or destination resource is locked.
   */
  Locked = 423,
  /**
   * RFC 4918 - Method could not be performed because a prerequisite action failed.
   */
  FailedDependency = 424,
  /**
   * RFC 7231 - Protocol must be upgraded to continue.
   */
  UpgradeRequired = 426,
  /**
   * RFC 6585 - Server requires request to be conditional.
   */
  PreconditionRequired = 428,
  /**
   * RFC 6585 - User has sent too many requests and is being rate limited.
   */
  TooManyRequests = 429,
  /**
   * RFC 6585 - Header fields are too large.
   */
  RequestHeaderFieldsTooLarge = 431,
  /**
   * RFC 7725 - Server cannot fulfill requests for legal reasons.
   */
  UnavailableForLegalReasons = 451,
}

export enum ServerErrorCode {
  /**
   * RFC 7231 - Unexpected error prevented fulfilling the request.
   */
  InternalServerError = 500,
  /**
   * RFC 7231 - The server does not support the functionality to fulfill this request.
   */
  NotImplemented = 501,
  /**
   * RFC 7231 - The server, while acting as a gateway, received an invalid response from the inbound server.
   */
  BadGateway = 502,
  /**
   * RFC 7231 - Server is unavailable to handle request.
   */
  ServiceUnavailable = 503,
  /**
   * RFC 7231 - The server, while acting as a gateway, did not receive a response in a timely manner from the inbound server.
   */
  GatewayTimeout = 504,
  /**
   * RFC 7231 - The server refuses to support the major version of this HTTP request.
   */
  HTTPVersionNotSupported = 505,
  /**
   * RFC 2295 - Server has an internal configuration error.
   */
  VariantAlsoNegotiates = 506,
  /**
   * RFC 4918 - The sserver is unable to store a representation needed to complete the request.
   */
  InusufficientStorage = 507,
  /**
   * RFC 5842 - (WebDAV) Server encountered an infinite loop.
   */
  LoopDetected = 508,
  /**
   * RFC 2774 - (HTTP Extensions) Policy for accessing the resource has not been met in request.
   */
  NotExtended = 510,
  /**
   * RFC - Client needs to authenticate to gain network access.
   */
  NetworkAuthenticationRequired = 511,
}

export type HTTPStatusCode =
  | ClientErrorCode
  | InformationCode
  | RedirectionCode
  | ServerErrorCode
  | SuccessCode;

export const HTTPStatusCode = {
  ...InformationCode,
  ...SuccessCode,
  ...RedirectionCode,
  ...ClientErrorCode,
  ...ServerErrorCode,
};
