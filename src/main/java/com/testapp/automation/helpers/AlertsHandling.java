package com.testapp.automation.helpers;

import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;

import static com.testapp.automation.browser.AbstractPage.driver;

/**
 * @author prajwala
 */
public class AlertsHandling {

    public static boolean checkForUnexpectedAlert() {
        try {
            driver.switchTo().alert();
            return true;
        } catch (NoAlertPresentException ex) {
            return false;
        }
    }

    public static String readAlertText() {
        Alert alert = driver.switchTo().alert();
        String alertText = null;
        if (checkForUnexpectedAlert()) {
            driver.switchTo().alert();
            alertText = alert.getText();
        }
        return alertText;
    }
}
