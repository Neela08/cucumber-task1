Feature: Task 2

  Background: Start
    Given I am on the Home page

  Scenario: Test hovers
    When I click the hovers link
    Then I am on the hovers page
    When I Hover over the profile image of user2
    Then I see name: user 2 and view profile link are displayed under the image on hover

  Scenario: Key Press
    When I click on the key press link
    Then I am on the Key Press page
    When I press Backspace key
    Then I can see the message You entered: BACK_SPACE

  Scenario: JS Alerts
    When I click on the JavaScript Alerts link
    Then I am on the JavaScript Alerts page
    When I press Click for JS Alert button
    Then User prompt with "I am a JS Alert" is shown
    When I close the alert
    Then I can see the user prompt is closed
    When I Click the Click for JS Confirm button
    Then User prompt with "I am a JS Confirm" is shown
    When I click cancel button
    Then I can see the user prompt is closed
    And  The message that you've clicked Cancel is shown under the results section
    When I Click the Click for JS Prompt button
    Then User prompt with "I am a JS prompt" is shown
    When I Enter any text into the prompt and click ok
    Then I can see the user prompt is closed
    And  The text, that I have entered is displayed under the results section
