package StepDefinitions;

import Utils.BrowserUtils;
import Utils.Driver;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Scenario;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class Hook {
    WebDriver driver= Driver.getDriver();

    @Before
    public void setUp(Scenario scenario){
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        System.out.println(scenario.getName());
    }

    @AfterStep
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            System.out.println("Failed");
            BrowserUtils.takeScreenShot();
        }
    }

}
