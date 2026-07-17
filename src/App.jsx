import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import ToggleBar from './components/ToggleBar/ToggleBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayersDataPromise = async () => {
  const PromiseLoading = await fetch('/players.json')
  return PromiseLoading.json()
}

const PlayerDataJson = PlayersDataPromise()

function App() {
  const [balance, setBalance] = useState(4000000)
  const [toggle, setToggle] = useState(false)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  return (
    <>
      <div>
        <ToastContainer autoClose={3000} />
        <Navbar balance={balance}></Navbar>
        <Banner></Banner>
        <ToggleBar toggle={toggle} setToggle={setToggle} selectedPlayers={selectedPlayers}></ToggleBar>
        {
          toggle ?

            <SelectedPlayers balance={balance} setBalance={setBalance} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></SelectedPlayers>

            :

            <Suspense fallback={<h1>Loading...</h1>}>
              <AvailablePlayers PlayerDataJson={PlayerDataJson} balance={balance} setBalance={setBalance} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></AvailablePlayers>
            </Suspense>
        }



      </div>
    </>
  )

}

export default App
