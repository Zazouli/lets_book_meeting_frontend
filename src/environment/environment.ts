export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '355c610c-70dd-4089-b75e-4becebb8e0ff',
            authority: 'https://login.microsoftonline.com/ecff9f9a-df85-442b-ae3e-d68210356282'
        }
    },
    apiConfig: {
        scopes: ['openid', 'profile', 'User.Read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    },
    apiUrl: "http://localhost:32771/"
};