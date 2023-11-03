Feature: Task 3

  Background: Start
    Given I am on the Home Page
    
  Scenario: Test file download
    When I click download files
    Then I am on the download page
    When I click on a file name
    Then i can see file is downloaded