export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '355c610c-70dd-4089-b75e-4becebb8e0ff',
            authority: 'https://login.microsoftonline.com/common'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};