Feature: Add Remove elements

  Scenario: addremoveelements
    Given I am on the Add Remove Elements page
    When I click the Add remove Element link
    Then I am on the Add remove Element page
    When I click add element button
    Then I see an element is added
    When i click delete button
    Then Element is deleted

  Scenario: Dynamic Loading (Using waits)
    Given I am on the Home page
    When I click dynamic loading link
    Then I see Dynamically Loaded Page Elements page is opened
    When I Click on the Example 2: Element rendered after the fact link
    Then I see the Example 2: Element rendered after the fact is opened
    When I Click on the Start button
    Then I see The loading indicator is displayed. After a while a "Hello World!" message is displayed
