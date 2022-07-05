
<div align="left">
  <br/>
  <a href="https://www.realdecoy.com/jamaica/" title="REALDECOY">
    <img width=400px src="https://www.realdecoy.com/wp-content/uploads/2019/02/Realdecoy-logo-transparent.png" alt="rd logo">
  </a>
  <br/>
</div>

# Frontier Type Library

### @rdfrontier/typekit
A library of common reusable types. 


&nbsp;
&nbsp;
&nbsp;
<!-- custom-toc -->
## Table of Contents

* [Installation](#install)
* [Usage](#usage)
* [Options](#options)
<!-- custom-tocstop -->

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## Installation

```sh
$ yarn add --save--dev @rdfrontier/typekit
```

or 

```sh
$ npm install --save--dev @rdfrontier/typekit
```

&nbsp;
&nbsp;

## Usage

```sh
import { SuccessCode } from '@rdfrontier/typekit';

console.log(SuccessCode.Countinue)
```


&nbsp;
&nbsp;

## Options

| Name | Description  | 
| --- | ------------- | 
| HTTP Status Codes     | Add Description                                        |
| Network Information   | Add Description                                        |

&nbsp;
&nbsp;

###  HTTP Status Codes
This is ______________

#### Information Code 
* `Continue - 100`
* `SwitchingProtoclos - 101`
* `Processing - 102`
* `EarlyHints - 103 `

#### Success Code 
* `OK - 200`
* `Created - 201`
* `Acccepted - 202`
* `NoAuthoritativeInformations - 203`
* `NoConent - 204`
* `ResetConent - 205`
* `PartialConent - 206`
* `MultiStatus - 207`
* `AlreadyReported - 208`
* `IMUsed - 226`

#### Redirect Code 
* `MultipleChoices - 300`
* `MovedPermanently - 301`
* `Found - 302`
* `SeeOther - 303`
* `NotModified - 304`
* `TemporaryRedirect - 307`
* `PermanentRedirect - 308`

#### Client Error Code 
* `BadRequest - 400`
* `Unauthorized - 401`
* `PaymentRequired - 402`
* `Forbidden - 403`
* `NotFound - 404`
* `MethodNotAllowed - 405`
* `NotAcceptable - 406`
* `ProxyAuthenticationRequired - 407`
* `RequestTimeout - 408`
* `Conflict - 409`
* `Gone - 410`
* `LengthRequired - 411`
* `PreconditionFailed - 412`
* `PayloadTooLarge - 413`
* `URITooLong - 414`
* `UnsupportedMediaType - 415`
* `RangeNotSatisifiable - 416`
* `ExpectationFailed - 417`
* `ImATeapot - 418`
* `MisdirectedRequest - 421` 
* `UnprocessableEntity - 422`
* `Locked - 423`
* `FailedDependency - 424`
* `UpgradeRequired - 426`
* `PreconditionRequired - 428`
* `ToomanyRequests - 429`
* `RequestHeaderFieldsTooLong - 431`
* `UnavailableForLegalReasins - 451`

#### Server Error Code
* `InternalServerError - 500`
* `NotImplemented - 501`
* `BadGateway - 502`
* `ServiceUnavailable - 503`
* `GatewayTimeout - 504`
* `HTTPVersionNotSupported - 505`
* `VariantAlsoNegotiates - 506`
* `InusufficientStorage - 507`
* `LoopDetected - 508`
* `NotExtended - 510`
* `NetworkAuthenticationRequired - 511`