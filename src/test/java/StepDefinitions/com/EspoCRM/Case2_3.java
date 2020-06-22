package StepDefinitions.com.EspoCRM;

import Pages.EspoCRMPages.AccountCreatePage;
import Pages.EspoCRMPages.HomePage;
import Pages.EspoCRMPages.LoginPage;
import Pages.EspoCRMPages.UsersPage;
import Utils.BrowserUtils;
import Utils.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.it.Ma;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.*;
import java.util.concurrent.TimeUnit;

public class Case2_3 {

    WebDriver driver= Driver.getDriver();
    HomePage homePage=new HomePage(driver);
    AccountCreatePage accountCreatePage=new AccountCreatePage(driver);
    UsersPage usersPage=new UsersPage(driver);


    @When("the user open the Accounts")
    public void the_user_open_the_Accounts() throws InterruptedException {
//        WebDriverWait wait=new WebDriverWait(driver,10);
//        wait.until(ExpectedConditions.visibilityOf(homePage.accountsButton));
        //       driver.manage().timeouts().pageLoadTimeout(10,TimeUnit.SECONDS);
          Thread.sleep(2000);
//        Actions actions=new Actions(driver);
//        actions.moveToElement(homePage.accountsButton).click().perform();
//        for(WebElement ss:homePage.functionNames){
//            if(ss.getText().contains("Accounts")){
//                ss.click();
//            }
//        }
   //     System.out.println("Click on accounts button");
        homePage.accountsButton.click();
        // homePage.accountsButton.click();

    }

    @Then("the user clicks the Create Account button")
    public void the_user_clicks_the_Create_Account_button() {
//        WebDriverWait wait=new WebDriverWait(driver,10);
//        wait.until(ExpectedConditions.visibilityOf(homePage.createAccountButton));
        homePage.createAccountButton.click();
    }

    @Then("the user enter {string}, {string}, {string}, {string}, {string}, {string}, {string},{string}, {string}, {string}, {string}")
    public void the_user_enter(String name, String website, String email, String phone, String street, String city, String state, String postalCode, String country, String type, String industry) {

        accountCreatePage.name.sendKeys(name);
        accountCreatePage.website.sendKeys(website);
        accountCreatePage.email.sendKeys(email);
        accountCreatePage.phoneNum.sendKeys(phone);
        accountCreatePage.street.sendKeys(street);
        accountCreatePage.city.sendKeys(city);
        accountCreatePage.state.sendKeys(state);
        accountCreatePage.postalCode.sendKeys(postalCode);
        accountCreatePage.country.sendKeys(country);
        BrowserUtils.selectByValue(accountCreatePage.selectType,type);
        BrowserUtils.selectByVisibleText(accountCreatePage.SelectIndustry,industry);
        accountCreatePage.saveButton.click();
    }


    @Then("the user validate {string}, {string}, {string}, {string}")
    public void the_user_validate(String name, String website, String email, String phone) throws InterruptedException {
       //   driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        Thread.sleep(3000);
        System.out.println(accountCreatePage.validateName.getText());
        Assert.assertEquals(name,accountCreatePage.validateName.getText());
        Assert.assertEquals(website,accountCreatePage.validateWebsite.getText());
        Assert.assertEquals(email,accountCreatePage.validateEmail.getText());
        Assert.assertEquals(phone,accountCreatePage.validatePhone.getText());
        homePage.threedot.click();
        homePage.logOut.click();

    }

    @When("the user click three dot")
    public void the_user_click_three_dot() throws InterruptedException {

        Thread.sleep(2000);
        homePage.getDot.click();

    }

    @Then("the user clicks the Users")
    public void the_user_clicks_the_Users() throws InterruptedException {

        Thread.sleep(1000);
        homePage.getUsers.click();
    }

    @Then("the user see given Names and Emails") //Map<String,String> expectedMap
    public void the_user_see_given_Names_and_Emails(DataTable dataTable) throws InterruptedException {

//   //     Map<String,String> expectedMap= (Map<String, String>) dataTable.asMaps();
//        Map<String,String> actualMap=new LinkedHashMap<>();
//        for(int i=0;i<usersPage.usersNames.size();i++){
//            actualMap.put(usersPage.usersNames.get(i).getText().trim(),usersPage.usersMail.get(i).getText().trim());
//        }
//        Set<String > keys=expectedMap.keySet();
//        List<String> listEx=new ArrayList<>(keys);
//        Set<String> keys2=actualMap.keySet();
//        List<String> listAc=new ArrayList<>(keys2);
//       for(int i=0;i<listAc.size();i++){
//           Assert.assertEquals(listEx.get(i),listAc.get(i));
//    }

        Thread.sleep(1000);
        List<String> list = dataTable.asList();
        List<String> expectedList = new ArrayList<>();
        for (String ll : list) {
            expectedList.add(ll.trim());
        }
        System.out.println(list);
        List<String> actualList = new ArrayList<>();
        for (int i = 0; i < usersPage.usersNames.size(); i++) {
            actualList.add(usersPage.usersNames.get(i).getText() );
            actualList.add( usersPage.usersMail.get(i).getText());
        }
        System.out.println(actualList);
        for(int i=0;i<expectedList.size();i++){
            Assert.assertEquals(expectedList.get(i).trim(), actualList.get(i).trim());
        }



    }

}
