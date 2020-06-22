Feature: EspoCRM Testing

#  Background: It will run before each Scenario

  @case1
  Scenario: First test case
    Given the user goes to the WebSite
    When the user validate the title contains "espocrm"
    Then the user see the function names
      | Home          |
      | Accounts      |
      | Contacts      |
      | Leads         |
      | Opportunities |
      | Reports       |
      | Quotes        |
      | Sales Orders  |
      | Invoices      |
      | Products      |
      | Emails        |
      | Cases         |
      | Calendar      |
      | Tasks         |

  @case2
  Scenario Outline: Second Test Case
    Given the user goes to the WebSite
    When the user open the Accounts
    Then the user clicks the Create Account button
    And the user enter "<name>", "<webSite>", "<Email>", "<Phone>", "<street>", "<city>", "<state>","<postalCode>", "<country>", "<Type>", "<Industry>"
    And the user validate "<name>", "<webSite>", "<Email>", "<Phone>"
    # , "<street>", "<city>", "<state>","<postalCode>", "<country>", "<Type>", "<Industry>"
    Examples:
      | name    | webSite       | Email           | Phone      | street | city     | state | postalCode | country     | Type     | Industry     |
      | Davidqw | www.davud.com | davud@gmail.com | 2226667788 | Mount  | Prospect | IL    | 66678      | Chicago     | Customer | Advertising  |
      | Zachqw  | www.zach.com  | kumar@gmail.com | 2226664455 | Des    | Plaines  | IL    | 99978      | New York    | Partner  | Aerospace    |
      | Kumarqw | www.kumar.com | kumar@gmail.com | 993366788  | Wing   | Zlach    | LA    | 66858      | Los Angeles | Reseller | Architecture |


  @case3
  Scenario: Third Test Case
    Given the user goes to the WebSite
    When the user click three dot
    Then the user clicks the Users
    And the user see given Names and Emails
      | Admin            | espocrm.demo@gmail.com                              |
      | Ben Parter       | ben.parter@example.com.ko                           |
      | Bill Chan        | bill_chan@example-demo.so                           |
      | Brendon Lewis    | brendon.lewis@re-example.org                        |
      | Emma Bard        | emma_bard@rio.demo.su                               |
      | Gabliel Brie     | gabrielbrie@exmpl.org.pi                            |
      | Jake Forester    | jake_forester@example-espo.demo.com                 |
      | Jim Williams     | jim_williams@example.com.ca                         |
      | Rebecca Maer     | rebecca.maer@demoexmpl.org                          |
      | Richard Pan      | richard_pan@read.exmpl-dd.com                       |
      | Thomas Peterson  | thomas.peterson@demo-user.exmpl.com                 |



