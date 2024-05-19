export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '',
            authority: 'https://login.microsoftonline.com/tenant'
        }
    },
    apiConfig: {
        scopes: ['openid', 'profile', 'User.Read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    },
    apiUrl: "http://localhost:32783/"
};