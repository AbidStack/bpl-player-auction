import User from '../assets/user.png'
import flag from '../assets/flag.png'
import { useState } from 'react';
import { toast } from 'react-toastify';


const AvailablePlayersCard = ({ player, balance, setBalance, selectedPlayers, setSelectedPlayers }) => {

    const [selected, setSelected] = useState(false)

    function handleChoosePlayer(player) {
        const price = player.price
        if (balance < price) {
            toast('You do not have sufficient balance')
            return
        }

        else if (selectedPlayers.length >= 6) {
            toast('You have reached player purchasing limit')
            return
        }

        setBalance(currentBalance => currentBalance - price)
        toast('Player purchased')
        setSelected(true)
        setSelectedPlayers(currentPlayers => [...currentPlayers, player])
    }

    return (
        <div className='flex flex-col gap-4 p-4 border-2 rounded-xl border-[#13131320]'>
            <img className='rounded-xl' src={player.image} alt="" />
            <div className='flex items-center gap-2'>
                <img src={User} alt="" />
                <p>{player.name}</p>
            </div>
            <div className='flex items-center gap-4 justify-between'>
                <div className='flex items-center gap-4'>
                    <img src={flag} alt="" />
                    <p className=' text-[#13131380]'>{player.country}</p>
                </div>
                <p className=' text-[#131313] bg-[#13131310] py-2 px-6 rounded-md'>{player.role}</p>
            </div>
            <hr className=' border-t-2 border-[#13131310]' />
            <p className='font-bold'>Rating : {player.rating / 10}</p>
            <div className='flex justify-between items-center text-sm font-bold'>
                <p>{player.battingStyle}</p>
                <p>{player.bowlingStyle}</p>
            </div>
            <div className=' flex justify-between items-center'>
                <p className=' font-bold'>USD ${player.price}</p>
                <button
                    type='button'
                    disabled={selected}
                    className='rounded-lg border-2 border-[#13131310] p-2 text-sm disabled:cursor-not-allowed disabled:opacity-50'
                    onClick={() => handleChoosePlayer(player)}>
                    {selected ? 'Selected' : 'Choose Player'}
                </button>
            </div>
        </div>

    );
};

export default AvailablePlayersCard;