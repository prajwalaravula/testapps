package com.testapp.automation.step_definitions.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/main/resources/features/TestApp.feature" }, glue = {
        "com.testapp.automation" }, plugin = { "pretty", "html:target/cucumber-reports",
        "json:target/cucumber-reports/TestApp.json",
        "junit:target/cucumber-reports/TestApp.xml",
        "rerun:target/rerun/Tests.txt" }, monochrome = true)

public class Test_TestApp {

}
