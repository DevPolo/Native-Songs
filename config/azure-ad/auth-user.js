import { AsyncStorage } from 'react-native'
import { AppAuth } from 'expo'

import { KEY } from './'

const StorageKey = '@Bread:MicrosoftOAuthKey'

const config = {
  issuer: `https://login.microsoftonline.com/${KEY.ONEDRIVE_TENANT_ID}`,
  clientId: KEY.ONEDRIVE_APP_ID,
  scopes: ['files.read.all'],
  redirectUrl: 'urn:ietf:wg:oauth:2.0:oob'
}

export const signInAsync = async () => {
  const authState = await AppAuth.authAsync(config)
  await cacheAuthAsync(authState)
}

const cacheAuthAsync = authState => {
  return AsyncStorage.setItem(StorageKey, JSON.stringify(authState))
}

export const getCachedAuthAsync = async () => {
  const value = await AsyncStorage.getItem(StorageKey)
  const authState = JSON.parse(value)
  //  TODO: accessToken undefined (Links in dev-keys)

  if (authState) {
    if (checkIfTokenExpired(authState)) {
      return refreshAuthAsync(authState)
    } else {
      return authState
    }
  }
  return null
}

const checkIfTokenExpired = async ({ additionalParameters }) => {
  return new Date(additionalParameters.expires_on) < new Date()
}

const refreshAuthAsync = async ({ refreshToken, ...props }) => {
  console.log(props)
  const authState = await AppAuth.refreshAsync(config, refreshToken)
  await cacheAuthAsync(authState)
  return authState
}

export const signOutAsync = async ({ accessToken }) => {
  try {
    await AppAuth.revokeAsync(config, {
      token: accessToken,
      isClientIdProvided: true
    })

    await AsyncStorage.removeItem(StorageKey)
    return null
  } catch ({ message }) {
    alert(`Failed to revoke token: ${message}`)
  }
}
