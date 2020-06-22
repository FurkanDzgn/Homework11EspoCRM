package Utils;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.*;

import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class BrowserUtils {

    public static void switchWindowByTitle(WebDriver driver,String targetTitle){
        Set<String> ids=driver.getWindowHandles();
        for(String id:ids){
            if(!driver.getTitle().equals(targetTitle)){
                driver.switchTo().window(id);
            }
        }
    }

    public static void switchWindowByUrl(WebDriver driver,String url){
        Set<String> ids=driver.getWindowHandles();
        for(String id:ids){
            if(!driver.getCurrentUrl().contains(url)){
                driver.switchTo().window(id);
            }
        }
    }

    public static void closeWindow(WebDriver driver,String parentId){
        Set<String> ids=driver.getWindowHandles();
        for(String id:ids){
            if(!id.equals(parentId)){
                driver.switchTo().window(id);
                driver.close();
            }
        }
    }

    public static WebElement fluentWait(WebDriver driver, long totalSec, long pollingSecond, By locator){
        Wait<WebDriver> wait=new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(totalSec))
                .pollingEvery(Duration.ofSeconds(pollingSecond))
                .ignoring(RuntimeException.class);
        return wait.until(driver1 -> driver1.findElement(locator));
    }

    public static WebElement visibilityOf(WebDriver driver,int timeInSecond, WebElement element){
        WebDriverWait wait=new WebDriverWait(driver,timeInSecond);
        return wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static WebElement visibilityOfElementLocator(WebDriver driver,int timeInSecond,By locator){
        WebDriverWait wait=new WebDriverWait(driver,timeInSecond);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));

    }

    public static String takeScreenShot(){
        File src=((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.FILE);
        String destination=System.getProperty("user.dir")+"\\Screenshot\\"+System.currentTimeMillis()+".png";
        File des=new File(destination);
        try {
            FileUtils.copyFile(src,des);
        }catch (IOException e){
            e.printStackTrace();
        }
        return destination;
    }

    public static String todaysDate(String formatType){
        LocalDate today=LocalDate.now();
        DateTimeFormatter newFormat=DateTimeFormatter.ofPattern(formatType);
        String todayDate=newFormat.format(today);
        return todayDate;
    }

    public static void switchFrameByIndex(WebDriver driver,int index){
        driver.switchTo().frame(index);
    }

    public static void switchFrameByWebElement(WebDriver driver,WebElement element) {
        driver.switchTo().frame(element);
    }

    public static void switchFrameByElement(WebDriver driver,By locator){
        driver.switchTo().frame(driver.findElement(locator));
    }

    public static List<String> getTextOfElement(List<WebElement> lists){
        List<String> texts=new ArrayList<>();
        for(WebElement list:lists){
            texts.add(list.getText().trim());
        }
        return texts;
    }

    public static void selectByVisibleText(WebElement element,String visibletext){
        Select select=new Select(element);
        select.selectByVisibleText(visibletext);
    }

    public static void selectByIndex(WebElement element,int index){
        Select select=new Select(element);
        select.selectByIndex(index);
    }

    public static void selectByValue(WebElement element,String value){
        Select select=new Select(element);
        select.selectByValue(value);
    }

    public static Select getSelect(WebElement element){

        return new Select(element);
    }

}
