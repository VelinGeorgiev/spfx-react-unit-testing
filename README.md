# SharePoint Framework React web parts unit testing tips #

## Summary

Craft SharePoint Framework solutions based on TypeScript, Reactjs and create component unit tests to make your solution `regression less`. This SPFx solution sample is part of a few blogs I will create. It shows how React client side web part can be unit tested.

Here are the packages we would install in order to get started with SPFx React web part unit tests


```
...
  "devDependencies": {
    "@microsoft/sp-build-web": "~1.3.0",
    "@microsoft/sp-module-interfaces": "~1.3.0",
    "@microsoft/sp-webpart-workbench": "~1.3.0",
    "gulp": "~3.9.1",
    "@types/chai": ">=3.4.34 <3.6.0",
    "@types/mocha": ">=2.2.33 <2.6.0",
    "@types/sinon": "2.3.3",
    "@types/enzyme":"2.8.11",
    "chai-enzyme": "0.8.0",
    "enzyme": "2.9.1",
    "react-addons-test-utils": "15.6.0"
  }
....
```

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.3-green.svg)

## Applies to

* [SharePoint Framework](http://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview)
* [Office 365 Tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)

## Prerequisites

- Office 365 subscription with SharePoint Online.
- SharePoint Framework [development environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment) already set up.

## Solution

Solution|Author(s)
--------|---------
spfx-react-unit-tests | Velin Georgiev ([@VelinGeorgiev](https://twitter.com/velingeorgiev))

## Version history

Version|Date|Comments
-------|----|--------
0.0.1|October 06, 2017 | Initial commit

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository.
- Open the command line, navigate to the web part folder and execute:
    - `npm i`
    - `gulp test` 
    - `gulp serve` (optional)
- Navigate to the local or hosted version of the SharePoint workbench.

## Features

This Web Part illustrates the following concepts on top of the SharePoint Framework:

- SPFx default unit test frameworks and packages.
- The Chai Assertion Library basics.
- Mocha for Nodejs basics.
- Enzyme as utility to mount and travers SPFx React components.
- Enzyme for testing the SPFx React component state or properties change.
- Sinon to spy on SPFx React component EventListener and test data or state change.
- Sinon stubs as SharePoint Framework React mocking framework.