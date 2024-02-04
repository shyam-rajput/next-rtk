"use client"

import { store } from "./store";

const { Provider } = require("react-redux");

export function Providers({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>
}

// Provider: Provider ka kaam yeh hota hai ki yeh hamari redux toolkit ko and hamari nextjs ya reactjs ki application ko connect karta hai, matlab Provider jo hamari nextjs ya reactjs application hoti hai uske sabhi taraf ek layer bana deta hai redux toolkit ki taaki ham usko use kar paaye and ham Provider ke ander sabhi childeren pass kar denege and store ko bhi pass kar deneg jisse sabhi child coomponent is store ko access kar sake.

// Ham is 'Providers' ko use karenge layout.js file ke ander or us layout.js file se ham children pass karenge and in childere ko ham Providers ke props ke thru yaha par use karenege.

// Yaha par childern ka matlab hai ki ham jitne bhi componen t create karenge bho sabhi yaha par aa jaayenge, and ham store ko is Provider ke ander pass par denge jisse jitne bhi child component hai bho is store ko access kar sake.