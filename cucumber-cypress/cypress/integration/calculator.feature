Feature: Calculator
Scenario Outline: Add operation
    Given I am in the calculator page
    When I enter "<n1>" in textbox1
    And I enter "<n2>" in textbox2
    And I click the Add button
    Then result "<result>" is displayed
    Examples:
        | n1  | n2  | result |
        | 10  | 20  | 30     |
        | -10 | 20  | 10     |
        | -10 | -20 | -30    |