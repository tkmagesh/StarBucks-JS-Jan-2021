Feature: Greeter
    Scenario: Greeting the user
    Given I am in the greeter page
    When I enter my username
    And click the greet button
    Then the greet message should be displayed