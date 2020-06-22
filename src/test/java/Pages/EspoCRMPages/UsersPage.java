package Pages.EspoCRMPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class UsersPage {

    public UsersPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//tbody//tr//td//img[@width='16']/following-sibling::a")
    public List<WebElement> usersNames;

    @FindBy(xpath = "//tbody//tr//td[@data-name='emailAddress']//a")
    public List<WebElement> usersMail;
}
