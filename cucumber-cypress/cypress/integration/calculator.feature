Feature: Calculator
    Scenario: Add operation
        Given I am in the calculator page
        When I enter "10" in textbox1
        And I enter "20" in textbox2
        And I click the Add button
        Then result "30" is displayed

    Scenario: Adding negative numbers
        Given I am in the calculator page
        When I enter "-10" in textbox1
        And I enter "-20" in textbox2
        And I click the Add button
        Then result "-30" is displayed