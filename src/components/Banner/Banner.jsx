import banner from '../../assets/bg.png'
import bannerLogo from '../../assets/banner-main.png'

export default function Banner () {
    return (
        <div
            className="mx-auto flex w-full flex-col items-center text-center bg-cover bg-center text-white gap-4 py-8 rounded-3xl px-2"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <img src={bannerLogo} alt="Cricket" />
            <h1 className='text-[40px] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h2 className='text-2xl text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</h2>
            <div className='rounded-2xl border border-[#E7FE29] p-2'>
                <button className='rounded-xl bg-[#E7FE29] px-5 py-3 text-lg font-bold text-[#131313]'>
                    Claim Free Credit
                </button>
            </div>
        </div>
    )
}