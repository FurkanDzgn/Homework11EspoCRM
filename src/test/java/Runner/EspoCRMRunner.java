package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
//        plugin = {"pretty",
//                "html:target\\cucumber-html-report",
//                "json:target\\cucumber.json",
//                "junit:target\\cucmber.xml",
//                "rerun:target\\rerun.txt"},
        features = "src\\test\\resources\\com.EspoCRM\\EspoCRM.feature",
        glue = "StepDefinitions",
        monochrome = false,
        dryRun = false,
        tags = "@case3"
)
public class EspoCRMRunner {
}
