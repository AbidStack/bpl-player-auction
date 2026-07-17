import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'

function Navbar({balance}) {
    return (
        <div className='flex justify-between items-center my-4'>
            <div>
                <a href="">
                    <img src={logo} alt="nai" />
                </a>
            </div>
            <div className='flex gap-4 items-center text-[#13131380]'>
                <div className=' hidden'>
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Teams</a>
                <a href="">Schedules</a>
                </div>
                <div className='flex items-center gap-1 font-bold rounded-lg border-[#13131310] border-2 p-2 text-[#131313]'>
                    <p>{balance} Coin</p>
                    <img className='h-5 w-5 object-contain' src={coin} alt="Coin" />
                </div>
            </div>

        </div>
    )
}

export default Navbar