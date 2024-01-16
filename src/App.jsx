import { Provider } from "react-redux"
import Questions from "./Components/Questions/Questions"
import store from "./App/store"

export default function app() {
  return (
    <>
    <Provider store={store}>
      <Questions/>
    </Provider>
    </>
  )
}
