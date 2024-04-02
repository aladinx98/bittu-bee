
import vglob from "../../assets/Images/vglob.png"


const Vglob = () => {
    return (
        <>
            <div id="listing" className='   relative min-h-[30vh] w-[100vw] px-10 py-10 phone:py-1   flex flex-col gap-20'>

            <video autoPlay loop muted className='video-background'>
          <source src="https://res.cloudinary.com/dyqkppjr1/video/upload/v1711912050/bittubee/ynrzivvysv3h6lofy4om.mp4" type='video/mp4'  />
        </video>

                <div id="filler-main" className='flex z-10  w-full gap-10 tablet:flex-col-reverse tablet:items-center '>



                    <div id="filler-left" className=' z-10 w-[50%] h-[100%] flex tablet:w-[80%] tablet:phone:w-[100%]  justify-center '>
                        <img
                            src="https://res.cloudinary.com/dyqkppjr1/image/upload/v1711911688/bittubee/othu88slvxrkaf9uzol1.png"
                            alt='Bittu  '
                            className='   '
                        />
                    </div>



                    <div id="filler-right" className=' w-[60%] flex flex-col justify-center   gap-10 tablet:w-[100%] tablet:text-center '>
                        <h1 className='text-4xl font-bold  tablet:text-4xl   '>
                            
Unlock Exclusive Benefits
                            <span className="text-primary-gradient"> Earn 5% Referral Rewards in Presale Token Buys </span>

                        </h1>
                        <div className="  max-w-2xl  ">

                            <p className="text-xl text-gray-200  tablet:text-center">
                            At Bittu Bee, we believe in rewarding our community for their support and contribution to our platform's growth. That's why we're excited to introduce our exclusive referral program, where you can earn 5% referral rewards in presale token buys for every friend you invite to participate.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </>

    )
}

export default Vglob