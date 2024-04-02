

import abt1 from "../../assets/Images/abt1.png"


const About = () => {

    return (
        <>
            {/* bg-[url('/assets/aboutbg.svg')] */}
            <div className="flex relative gap-16 phone:gap-3 flex-col items-center justify-center my-[100px] phone:my-[50px] phone:mb-[40px] ">

            <video autoPlay loop muted className='video-background'>
          <source src="https://res.cloudinary.com/dyqkppjr1/video/upload/v1711914095/bittubee/su2q6dpkgf5vwvku0vca.mp4" type='video/mp4'  />
        </video>
              

                <div className=" z-10  text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        About <span className="text-primary-gradient    " >Bittu Bee</span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                    At Bittu Bee, we're on a mission to revolutionize the way you engage with blockchain technology and digital assets. Born from a vision of inclusivity, empowerment, and technological advancement, Bittu Bee is more than just a platform—it's a catalyst for change in the digital landscape.
                    </p>
                </div>


                <div id="about-main" className=" z-10 relative flex justify-center items-center  py-8 min-h-[60vh] gap-10 w-[100vw]  overflow-hidden tablet:flex-col tablet:items-center " >




                    <div id="about-left" className=' object-cover flex justify-center items-center h-[90%] w-[40%] tablet:w-[80%] phone:w-[90%]'>
                        <div className=" w-[60%]   h-[90%]  tablet:w-[70%] tablet:phone:w-[75%] " >

                            <img
                                src="https://res.cloudinary.com/dyqkppjr1/image/upload/v1711910262/bittubee/gz9mmdbulw1wtdc1pwxo.png"
                                className="rounded-[20px] border abt-img"
                                alt="Picture "
                            />
                        </div>
                    </div>

                    <div id="about-right" className=' h-[100%] w-[60%] flex flex-col justify-center items-center    gap-[20px]  tablet:w-[80%]'>
                        <div className='w-[100%] flex flex-col   gap-[30px]'>
                            <div className=" space-y-4 ">
                                <h3 className=' w-fit  text-primary-gradient font-bold text-5xl '>Our Features</h3>
                                {/* <h1
                                    className='text-5xl oxanium '>
                                    <span className="text-primary-gradient font-bold " >VOIP</span>  DeFi Crypto Call
                                </h1> */}
                            </div>


                            <ul

                                className='flex flex-col gap-[20px] w-[75%] tablet:w-[100%] text-[23px]  leading-tight'>
                                <li className=" font-extralight " >
                                    <span className="text-2xl font-medium "> Intuitive Interface : </span> Seamlessly navigate the world of blockchain with our user-centric design.
                                </li>
                                <li className="font-extralight  " >
                                    <span className="text-2xl font-medium "> Vibrant Community : </span> Connect with like-minded individuals, collaborate on projects, and engage in lively discussions within our thriving community.
                                </li>
                                <li className="font-extralight  " >
                                    <span className="text-2xl font-medium "> Innovative Solutions : </span> Explore a diverse range of opportunities, from decentralized finance to non-fungible tokens, with our innovative solutions.
                                </li>
                                <li className="font-extralight  " >
                                    <span className="text-2xl font-medium "> Security : </span> Enjoy end-end Encrypted calls while keeping identity secure with Voip Finance DeFi and Web3 systems.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default About