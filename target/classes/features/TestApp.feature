@testApps @regression @smoke

Feature: Testing TestApp admin application

  Background: User is Logged In
    Given the user navigate to environment
    When the user enters username "prajwala.r.122@outlook.com"
    When the user enters password "tapclicks"
    Then click on login button
    When user clicks on admin nav
    And click on platform settings

  @testApps1
  Scenario: 1-Validate the welcome message change
    Then update the welcome message
    And take the screenshot
    And click on save button
    When the user is logged out
    Then validate the welcome message
    And take the screenshot

  @testApps2
  Scenario: 2-Validate the background color
    When user select "light" mode
    When the user is logged out
    Given the user navigate to environment
    Then validate the background color is updated to "#363636"
    When the user enters username "prajwala.r.122@outlook.com"
    When the user enters password "tapclicks"
    Then click on login button
    When user clicks on admin nav
    And click on platform settings
    When user select "dark" mode
    When the user is logged out
    Given the user navigate to environment
    Then validate the background color is updated to "#fafafa"

  @testApps3
  Scenario: 3-Validate the app name change
    When user clicks on application tab
    Then update the application name
    Then validate the application name is updated
