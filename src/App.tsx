import './App.css'
import { IscContainer } from './components/interactiveSignalChain/iscContainer'
import { AppStateContext } from './components/providers/appStateProvider'

function App() {
  return (
    <AppStateContext>
      <div className="App">
        <IscContainer />
      </div>
    </AppStateContext>
  )
}

export default App
