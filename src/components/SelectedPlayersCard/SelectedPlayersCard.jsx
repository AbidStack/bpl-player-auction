import bin from '../../assets/bin.png'

const SelectedPlayersCard = ({ players, setSelectedPlayers, setBalance }) => {

    const handleRemovePlayer = ({ players }) => {
        setSelectedPlayers(currentPlayers =>
            currentPlayers.filter(currentPlayer => currentPlayer !== players)
        )

        setBalance(currentBalance => currentBalance + players.price)
    }

    return (
        <div className='flex items-center justify-between p-6 border-2 rounded-2xl border-[#13131310]'>
            <div className='flex items-center gap-6'>
                <img className='h-18 w-18 rounded-lg' src={players.image} alt="" />
                <div className='flex flex-col gap-1'>
                    <p className='text-xl font-bold'>{players.name}</p>
                    <p className='text-[#13131380]'>{players.role}</p>
                </div>
            </div>
            <button type="button">
                <img src={bin} alt="" onClick={() => handleRemovePlayer({ players })} />
            </button>
        </div>
    );
};

export default SelectedPlayersCard;