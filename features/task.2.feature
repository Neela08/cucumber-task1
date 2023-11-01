Feature: Task 2

  Scenario: Test hovers
    Given I am on the Home page
    When I click the hovers link
    Then I am on the hovers page
    When I Hover over the profile image of user2
    Then I see name: user 2 and view profile link are displayed under the image on hover

  Scenario: Key Press
    Given I am on the Home page
    When I click on the key press link
    Then I am on the Key Press page
    When I press Backspace key
    Then I can see the message You entered: BACK_SPACE

  Scenario: JS Alerts
    Given I am on the Home page
    When I click on the JavaScript Alerts link
    Then I am on the JavaScript Alerts page
    When I press Click for JS Alert button
    Then I can see the Alert
    When I close the alert
    Then I can see the alert is closed
    When I Click the Click for JS Confirm button
    Then Confirm with "I am a JS Confirm" text is shown
    When I Click the cancel button
    Then Confirm is closed and The message that you've clicked Cancel is shown under the results section
    When I Click the Click for JS Prompt button
    Then Prompt with "I am a JS Prompt" text is shown
    When I Enter any text into the prompt and click ok
    Then Prompt is closed. The text, that I have entered is displayed under the results section
