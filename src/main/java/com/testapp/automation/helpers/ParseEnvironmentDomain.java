package com.testapp.automation.helpers;


/**
 * @author prajwala
 */
public class ParseEnvironmentDomain {

    private final String mvnTestingUrl = System.getProperty("testingUrl").replaceAll("/$", "");

    public String feUrl = getFeUrl();

    public ParseEnvironmentDomain() {

    }

    private  String getFeUrl() {
        return  mvnTestingUrl;
    }
}
