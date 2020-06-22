$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.EspoCRM/EspoCRMcase2.feature");
formatter.feature({
  "name": "Add new user",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Second Test Case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user goes to the WebSite",
  "keyword": "Given "
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.step({
  "name": "the user enter \"\u003cname\u003e\", \"\u003cwebSite\u003e\", \"\u003cEmail\u003e\", \"\u003cPhone\u003e\", \"\u003cstreet\u003e\", \"\u003ccity\u003e\", \"\u003cstate\u003e\",\"\u003cpostalCode\u003e\", \"\u003ccountry\u003e\", \"\u003cType\u003e\", \"\u003cIndustry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user validate \"\u003cname\u003e\", \"\u003cwebSite\u003e\", \"\u003cEmail\u003e\", \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "webSite",
        "Email",
        "Phone",
        "street",
        "city",
        "state",
        "postalCode",
        "country",
        "Type",
        "Industry"
      ]
    },
    {
      "cells": [
        "Davids",
        "www.davud.com",
        "davud@gmail.com",
        "2226667788",
        "Mount",
        "Prospect",
        "IL",
        "66678",
        "Chicago",
        "Customer",
        "Advertising"
      ]
    },
    {
      "cells": [
        "Zachs",
        "www.zach.com",
        "kumar@gmail.com",
        "2226664455",
        "Des",
        "Plaines",
        "IL",
        "99978",
        "New York",
        "Partner",
        "Aerospace"
      ]
    },
    {
      "cells": [
        "Kumars",
        "www.kumar.com",
        "kumar@gmail.com",
        "993366788",
        "Wing",
        "Zlach",
        "LA",
        "66858",
        "Los Angeles",
        "Reseller",
        "Architecture"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Second Test Case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user goes to the WebSite",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.EspoCrm.the_user_goes_to_the_WebSite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enter \"Davids\", \"www.davud.com\", \"davud@gmail.com\", \"2226667788\", \"Mount\", \"Prospect\", \"IL\",\"66678\", \"Chicago\", \"Customer\", \"Advertising\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_enter(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user validate \"Davids\", \"www.davud.com\", \"davud@gmail.com\", \"2226667788\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_validate(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Davids]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.com.EspoCRM.Case2.the_user_validate(Case2.java:72)\r\n\tat ✽.the user validate \"Davids\", \"www.davud.com\", \"davud@gmail.com\", \"2226667788\"(file:///C:/Users/12242/IdeaProjects/Homework11June16/src/test/resources/com.EspoCRM/EspoCRMcase2.feature:8)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "Second Test Case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user goes to the WebSite",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.EspoCrm.the_user_goes_to_the_WebSite()"
});
formatter.result({
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : }\n  (Session info: chrome\u003d83.0.4103.106): {Alert text : \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSI\u0027, ip: \u002710.50.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\12242\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62877}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8dab250a7abf73e4775736b2636f8871\n*** Element info: {Using\u003dxpath, value\u003d//button[@type\u003d\u0027submit\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.submit(Unknown Source)\r\n\tat StepDefinitions.com.EspoCRM.EspoCrm.the_user_goes_to_the_WebSite(EspoCrm.java:35)\r\n\tat ✽.the user goes to the WebSite(file:///C:/Users/12242/IdeaProjects/Homework11June16/src/test/resources/com.EspoCRM/EspoCRMcase2.feature:4)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "the user enter \"Zachs\", \"www.zach.com\", \"kumar@gmail.com\", \"2226664455\", \"Des\", \"Plaines\", \"IL\",\"99978\", \"New York\", \"Partner\", \"Aerospace\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_enter(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "the user validate \"Zachs\", \"www.zach.com\", \"kumar@gmail.com\", \"2226664455\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_validate(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.scenario({
  "name": "Second Test Case",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user goes to the WebSite",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.EspoCrm.the_user_goes_to_the_WebSite()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@type\u003d\u0027submit\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MSI\u0027, ip: \u002710.50.1.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\12242\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62877}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8dab250a7abf73e4775736b2636f8871\n*** Element info: {Using\u003dxpath, value\u003d//button[@type\u003d\u0027submit\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.submit(Unknown Source)\r\n\tat StepDefinitions.com.EspoCRM.EspoCrm.the_user_goes_to_the_WebSite(EspoCrm.java:35)\r\n\tat ✽.the user goes to the WebSite(file:///C:/Users/12242/IdeaProjects/Homework11June16/src/test/resources/com.EspoCRM/EspoCRMcase2.feature:4)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "the user enter \"Kumars\", \"www.kumar.com\", \"kumar@gmail.com\", \"993366788\", \"Wing\", \"Zlach\", \"LA\",\"66858\", \"Los Angeles\", \"Reseller\", \"Architecture\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_enter(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "the user validate \"Kumars\", \"www.kumar.com\", \"kumar@gmail.com\", \"993366788\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.com.EspoCRM.Case2.the_user_validate(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
});