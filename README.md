# Matcha React lib

## Usage

1. Install:
   `$ npm install -S matcha-react-lib`
2. Use in your React project:

```javascript
import { MatchaAdvisor } from "matcha-react-lib"

const MyMatchaAdvisor = () => <MatchaAdvisor clientId="my-client-id" />
export default MyMatchaAdvisor
```

3. Configure it:

- Mandatory parameters:

  - **clientId** : Your Matcha webchat token. It is different from API identifiers.

* Optional parameters:

  - **newTab** : Boolean (default false).
    By default, when the user clicks on a wine, the chatbot opens the wine page in the same tab.
    To open in a new tab, enable this property, without value: `<script [...] newTab></script>`

  - **userId** : String.
    An identifier to track your users in conversation logs.
    This can be the id of your logged users, or an identifier of origin (campaigns, analytics, etc...).

  - **shopId** : String.
    If you have several stores and have entered the sku information, shopId filters the chatbot selection on a specific store.

  - **onPurchase** : Function.
    **This integration is strongly recommended.**
    Sends the purchase action to your website kart via the [Matcha purchase API](https://gist.github.com/DiesIrae/b9a2260dbb7c411d7bb6807f892575bf#file-matchapurchase-md) (see this documentation to implement it).

  - **onPurchase** : Function.
    **This integration is strongly recommended.**
    Sends the purchase action to your website kart via the [Matcha purchase API](https://gist.github.com/DiesIrae/b9a2260dbb7c411d7bb6807f892575bf#file-matchapurchase-md) (see this documentation to implement it).

  - **lang** : String (default "fr"). Values can be in: `["en", "fr"]`.
    Interface & conversation language of Matcha Advisor.
