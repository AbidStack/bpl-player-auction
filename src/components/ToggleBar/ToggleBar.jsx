const ToggleBar = ({toggle, setToggle, selectedPlayers}) => {
    return (
        <div className='flex flex-col md:flex-row gap-2 items-center justify-between text-xl my-10 mx-2 text-[#13131350]'>
            <p className='text-2xl text-[#131313] font-bold'>{toggle ? `Selected Player (${selectedPlayers.length}/6)` : "Available Players"}</p>
            <div>
                <button
                    onClick={() => setToggle(false)}
                    className={`px-6 py-4 rounded-l-2xl border-l-2 border-y-2 border-[#13131310] ${!toggle ? 'bg-[#E7FE29] font-bold text-[#131313]' : ''}`}
                >
                    Available
                </button>
                <button
                    onClick={() => setToggle(true)}
                    className={`px-6 py-4 rounded-r-2xl border-r-2 border-y-2 border-[#13131310] ${toggle ? 'bg-[#E7FE29] font-bold text-[#131313]' : ''}`}
                >
                    Selected ({selectedPlayers.length})
                </button>
            </div>
        </div>
    );
};

export default ToggleBar;