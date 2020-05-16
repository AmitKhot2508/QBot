export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemo.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotdemo-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "b494ae96-84df-46f6-8c51-02afe7c94581",
        clientId: "216c1580-b855-410a-9796-def7a8f0d341",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
