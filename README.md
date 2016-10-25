#  Simplified Ignite React Native starter

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `npm install`

**Step 4:** (optional) Install Ignite CLI `npm install -g react-native-ignite`

## Main features

* ALL CODE works with iOS and Android
* Redux State Management
* Optional Redux Persistence (uses AsyncStorage via [redux-persist](https://github.com/rt2zz/redux-persist))
* ESlint - AirBNB Javascript with some settings off
* Redux Sagas
* Githooks
* AVA Tests - even React Native components!
* Code Coverage Reports
* API Ready
* Reactotron Ready
* Included Common Libs:
  * [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
  * [react-native-animatable](https://github.com/oblador/react-native-animatable)
  * [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n)
  * [react-native-drawer](https://github.com/root-two/react-native-drawer)
  * [apisauce](https://github.com/skellock/apisauce)
  * [reduxsauce](https://github.com/skellock/reduxsauce)
  * [react-native-maps](https://github.com/lelandrichardson/react-native-maps)
  * [rn-translate-template](https://github.com/hiaw/rn-translate-template)
* Included Developer Libs:
  * [reactotron](https://github.com/skellock/reactotron)
  * [AVA](https://github.com/avajs/ava)
  * [enzyme](https://github.com/airbnb/enzyme)
  * [react-native-mock](https://github.com/lelandrichardson/react-native-mock)
  * [mockery](https://github.com/mfncooper/mockery)
  * [nyc](https://github.com/bcoe/nyc)

## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

## :open_file_folder: Related Articles
Ignite Documentation - [Ignite Wiki https://github.com/infinitered/ignite/wiki](https://github.com/infinitered/ignite/wiki)
