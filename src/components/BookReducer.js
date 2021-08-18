import React, { useReducer, useContext, createContext } from 'react'

// Context for storing the state for our cart, each element will be the trip in the cart
const CartStateContext = createContext()
// Context for holding the dispatch function that lets us fire the action in the user
const CartDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item] // We need to get the new array

    case 'REMOVE':
      const newArr = [...state]
      newArr.splice(action.idx, 1)
      return newArr
    case 'CHECKOUT':
      return []
    default:
      throw new Error(`unknown action ${action.type}`)
  }
}

// Component that we can use to wrap our whole application
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []) // useReducer takes default value wich is an empty array

  console.table('useContext', state)

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = () => useContext(CartStateContext) // Access the context that will hold the state of our card
export const useDispatchCart = () => useContext(CartDispatchContext) // Function that will hold the context fort dispatch
