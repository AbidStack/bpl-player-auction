import SelectedPlayersCard from '../SelectedPlayersCard/SelectedPlayersCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, balance, setBalance }) => {
    return (
        <div className='flex flex-col gap-6'>
            {
                selectedPlayers.map((players, index) => <SelectedPlayersCard setSelectedPlayers={setSelectedPlayers} balance={balance} setBalance={setBalance} players={players} key={index} />

                )
            }
        </div>
    );
};

export default SelectedPlayers;