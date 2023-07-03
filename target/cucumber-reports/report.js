$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/TestApp.feature");
formatter.feature({
  "name": "Testing TestApp admin application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testApps"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "User is Logged In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the user navigate to environment",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.theUserNavigateToEnvironment()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"prajwala.r.122@outlook.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"tapclicks\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppLoginSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on admin nav",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppAdminSteps.userClicksOnAdminNav()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on platform settings",
  "keyword": "And "
});
formatter.match({
  "location": "TestAppAdminSteps.clickOnPlatformSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "1-Validate the welcome message change",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testApps"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@testApps1"
    }
  ]
});
formatter.step({
  "name": "update the welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppAdminSteps.updateTheWelcomeMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "take the screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "TestAppLoginSteps.takeTheScreenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("text/plain", "https://previewautomationtestprajwala.tapdemo.com/client/dist/#/preferences", null);
formatter.embedding("image/jpeg", "embedded0.jpg", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "TestAppAdminSteps.clickOnSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged out",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserIsLoggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate the welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppAdminSteps.validateTheWelcomeMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "take the screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "TestAppLoginSteps.takeTheScreenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("text/plain", "https://previewautomationtestprajwala.tapdemo.com/client/dist/#/login", null);
formatter.embedding("image/jpeg", "embedded1.jpg", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is Logged In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the user navigate to environment",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.theUserNavigateToEnvironment()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"prajwala.r.122@outlook.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"tapclicks\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppLoginSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on admin nav",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppAdminSteps.userClicksOnAdminNav()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on platform settings",
  "keyword": "And "
});
formatter.match({
  "location": "TestAppAdminSteps.clickOnPlatformSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "2-Validate the background color",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testApps"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@testApps2"
    }
  ]
});
formatter.step({
  "name": "user select \"light\" mode",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppAdminSteps.userSelectMode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged out",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserIsLoggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to environment",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.theUserNavigateToEnvironment()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate the background color is updated to \"#363636\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppAdminSteps.validateTheBackgroundColor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"prajwala.r.122@outlook.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"tapclicks\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppLoginSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on admin nav",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppAdminSteps.userClicksOnAdminNav()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on platform settings",
  "keyword": "And "
});
formatter.match({
  "location": "TestAppAdminSteps.clickOnPlatformSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user select \"dark\" mode",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppAdminSteps.userSelectMode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged out",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserIsLoggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to environment",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.theUserNavigateToEnvironment()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate the background color is updated to \"#fafafa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppAdminSteps.validateTheBackgroundColor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User is Logged In",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the user navigate to environment",
  "keyword": "Given "
});
formatter.match({
  "location": "NavigationSteps.theUserNavigateToEnvironment()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"prajwala.r.122@outlook.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"tapclicks\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppLoginSteps.theUserEntersPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppLoginSteps.clickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on admin nav",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppAdminSteps.userClicksOnAdminNav()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "click on platform settings",
  "keyword": "And "
});
formatter.match({
  "location": "TestAppAdminSteps.clickOnPlatformSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "3-Validate the app name change",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testApps"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@testApps3"
    }
  ]
});
formatter.step({
  "name": "user clicks on application tab",
  "keyword": "When "
});
formatter.match({
  "location": "TestAppAdminSteps.userClicksOnApplicationTab()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "update the application name",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppAdminSteps.updateTheApplicationName()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "validate the application name is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAppAdminSteps.validateTheApplicationNameIsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});