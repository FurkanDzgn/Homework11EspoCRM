package StepDefinitions.com.EspoCRM;

import Pages.EspoCRMPages.AccountCreatePage;
import Pages.EspoCRMPages.HomePage;
import Pages.EspoCRMPages.LoginPage;
import Utils.BrowserUtils;
import Utils.ConfigReader;
import Utils.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en_old.Ac;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class EspoCrm {

    WebDriver driver= Driver.getDriver();
    LoginPage loginPage=new LoginPage(driver);
    HomePage homePage=new HomePage(driver);


    @Given("the user goes to the WebSite")
    public void the_user_goes_to_the_WebSite() {
        driver.navigate().to(ConfigReader.getProperty("EspoCRMUrl"));
        loginPage.loginButton.submit();
    }

    @When("the user validate the title contains {string}")
    public void the_user_validate_the_title_contains(String url) throws InterruptedException {
//        WebDriverWait wait=new WebDriverWait(driver,10);
//        wait.until(ExpectedConditions.titleIs("EspoCRM Demo"));
  //      driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
  //      Thread.sleep(10);
        Assert.assertTrue(driver.getCurrentUrl().contains(url));
    }

    @Then("the user see the function names")
    public void the_user_see_the_function_names(DataTable dataTable) {
        List<String> expectedList=dataTable.asList();
        List<String> actualList=new ArrayList<>();
        for(int i=0;i<homePage.functionNames.size()-1;i++){
            actualList.add(homePage.functionNames.get(i).getText());
        }
            Assert.assertEquals(expectedList,actualList);
    }




}
