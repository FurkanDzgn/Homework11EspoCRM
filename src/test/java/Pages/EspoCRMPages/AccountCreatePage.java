package Pages.EspoCRMPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountCreatePage {
    public AccountCreatePage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//input[@autocomplete='espo-name']")
    public WebElement name;

    @FindBy(xpath = "//input[@autocomplete='espo-website']")
    public WebElement website;

    @FindBy(xpath = "//input[@autocomplete='espo-emailAddress']")
    public WebElement email;

    @FindBy(xpath = "//input[@autocomplete='espo-phoneNumber']")
    public WebElement phoneNum;

    @FindBy(xpath = "(//textarea[@autocomplete='espo-street'])[1]")
    public WebElement street;

    @FindBy(xpath = "(//input[@autocomplete='espo-city'])[1]")
    public WebElement city;

    @FindBy(xpath = "(//input[@autocomplete='espo-state'])[1]")
    public WebElement state;

    @FindBy(xpath = "(//input[@autocomplete='espo-postalCode'])[1]")
    public WebElement postalCode;

    @FindBy(xpath = "(//input[@autocomplete='espo-country'])[1]")
    public WebElement country;

    @FindBy(xpath = "//button[text()='Copy Billing']")
    public WebElement copyBillingButton;

    @FindBy(xpath = "(//select[@class='form-control main-element'])[1]")
    public WebElement selectType;

    @FindBy(xpath = "(//select[@class='form-control main-element'])[2]")
    public WebElement SelectIndustry;

    @FindBy(xpath = "//button[text()='Save']")
    public WebElement saveButton;

    @FindBy(xpath = "(//div[@class='cell col-sm-6 form-group']//label/following-sibling::div)[1]")
    public WebElement validateName;

    @FindBy(xpath = "//a[@target='_blank']")
    public WebElement validateWebsite;

    @FindBy(xpath = "//span[@style='text-decoration: line-through']")
    public WebElement validateEmail;

    @FindBy(xpath = "//a[@data-action='dial']//span")
    public WebElement validatePhone;


}
