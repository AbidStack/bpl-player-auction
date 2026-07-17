import { use } from 'react';
import AvailablePlayersCard from '../AvailablePlayersCard';

const AvailablePlayers = ({ PlayerDataJson, balance, setBalance, selectedPlayers, setSelectedPlayers }) => {
    const PlayersData = use(PlayerDataJson)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                PlayersData.map((player, index) => (
                    <AvailablePlayersCard key={player.id ?? index} player={player} balance={balance} setBalance={setBalance} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}  />
                ))
            }
        </div>
    );
};

export default AvailablePlayers;