
import tokobg from "../../assets/Images/tokenomics.png"
import toko from "../../assets/Images/tokendistribution.png"
import { motion } from "framer-motion"

const Tokenomics = () => {
    return (
        <>
            <div id="Tokenomics" className=" overflow-x-hidden relative flex gap-20 flex-col   min-h-screen bg-no-repeat    items-center justify-center my-20">

            <video autoPlay loop muted className='video-background'>
          <source src="https://res.cloudinary.com/dyqkppjr1/video/upload/v1711909915/bittubee/q3shqmlctobsqmp3mpme.mp4" type='video/mp4'  />
        </video>

                <div className=" z-10 text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-6xl  font-bold '>
                        <span className="text-primary-gradient    " >Tokenomics </span>
                    </h1>
                    {/* <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p> */}
                </div>

                <div>
                    <div className=" z-10 relative object-cover flex justify-center items-center">
                        <div>
                            <img src={tokobg} alt="" id="bgimg" />
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            transition={{
                                duration: 1,
                                ease: [0.6, 0.01, -0.05, 0.9],

                            }}
                            whileInView={{ scale: [0.5, 0.95] }}

                            className=" absolute   top-[17px] object-contain w-[100%] h-[100%] flex justify-center items-center ">
                            <img src="https://res.cloudinary.com/dyqkppjr1/image/upload/v1711732996/bittubee/bekgheey5pzphc7iyye4.png" alt="" className="  w-[100%] " id="bgimg" />
                        </motion.div>
                    </div>
                </div>

                <div className="flex z-10   max-w-[1300px] flex-wrap justify-center " >


                    <div className="w-[400.51px] phone:max-w-[310px]  h-[87px] mx-4 my-3 ">
                        <div className=" flex phone:max-w-[400px] justify-between  gap-5  p-6   bg-gradient-to-b from-[#f3c929] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Token Name</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">BITTU BEE</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex   justify-between gap-5  p-6    bg-gradient-to-b from-[#f3c929] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Symbol</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">BITTU</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-[#f3c929] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Decimal</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">18</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-[#f3c929] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Network</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">BEP20</div>
                        </div>
                    </div>
                    <div className="w-[400.51px] phone:max-w-[310px] h-[87px] mx-4 my-3 ">
                        <div className=" flex justify-between  gap-5  p-6   bg-gradient-to-b from-[#f3c929] to-gray-950 rounded-tl-2xl rounded-tr-2xl  border-toko " >
                            <div className="   text-white text-2xl phone:text-xl font-medium font-['Outfit'] leading-[30px]">Supply</div>
                            <div className="   text-white text-2xl phone:text-xl  font-medium font-['Outfit'] leading-[30px]">10M</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Tokenomics