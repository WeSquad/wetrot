Feature: Trot Catalog
  An administrator wants to add a Trot into the catalog

  @Catalog
  Scenario Outline: Create a Trot by an administrator
    Given an admin user existing in the system
    Given a Trot of brand <brand> and of name <name>
    When he want to create a trot
    Then the trot is created

    Examples:
      | brand    | name  |
      | Xiaomi   | X-01  |
      | Uber     | U-01  |

  @Catalog
  Scenario Outline: Delete a Trot by an administrator
    Given an admin user existing in the system
    Given a Trot of brand <brand> and of name <name>
    When he want to delete a trot with name <name>
    Then the trot is deleted

    Examples:
      | brand    | name  |
      | Xiaomi   | X-01  |
      | Uber     | U-01  |