package Pages.EspoCRMPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage {
    public HomePage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//*[@id=\"navbar\"]/div/div[2]/ul/li")
    public List<WebElement> functionNames;

//    @FindBy(xpath = "//*[@id=\"navbar\"]/div/div[2]/ul/li[2]/a/span[2]")
    @FindBy(xpath = "//span[.='Accounts']")
    public WebElement accountsButton;

    @FindBy(xpath = "//div[contains(@class,'header-buttons btn-group pull-right')]")
    public WebElement createAccountButton;

    @FindBy(id="nav-menu-dropdown")
    public WebElement threedot;

    @FindBy(xpath = "//a[text()='Log Out']")
    public WebElement logOut;

    @FindBy(xpath = "//li[@class='dropdown more']")
    public WebElement getDot;

    @FindBy(xpath = "//span[.='Users']")
    public WebElement getUsers;
}
