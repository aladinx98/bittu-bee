
// import logo1 from "../assets/voip_logo (1)/logotext.png"
import youtube from "../assets/socialmedia/youtube.svg"
import twiter from "../assets/socialmedia/x.svg"
import Telegram from "../assets/socialmedia/telegram.svg"
import Instagram from "../assets/socialmedia/insta.svg"
import Medium from "../assets/socialmedia/reddit.svg"
import Facebook from "../assets/socialmedia/facebook.svg"

const Footer = () => {
    return (
        <>
            <footer className="  bg-[#101010] z-10  ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                    <div className="md:flex md:justify-between tablet:justify-center z-10">

                        <div className=" flex  flex-col gap-5 mb-6 max-w-[40%] tablet:max-w-[100%] tablet:items-center  md:mb-0">
                            <a href="" className="flex items-center">
                                {/* <img src={logo1} className="h-[50px] me-3" alt="FlowBite Logo" /> */}
                                <img className=' ' src="/logo_wht.png" width="60px"/>
                            </a>
                            <p className=" tablet:text-center " > Join Bittu Bee today and be part of a revolution in digital empowerment. Together, let's redefine the landscape of possibility and shape a brighter tomorrow for all.</p>
                            <div className="flex gap-5" >
                            <a target="blank" href="https://www.facebook.com/profile.php?id=61556826016562&mibextid=ZbWKwL"> <img className="hover:scale-[1.3] transform-scale duration-300" src={Facebook} alt="" width={35} height={35}/> </a>
                            <a target="blank" href="https://twitter.com/bee_bittu?t=XvmjAENquUm5X3VQvyStjg&s=08"> <img className="hover:scale-[1.3] transform-scale duration-300" src={twiter} alt="" width={35} height={35}/> </a>
                            <a target="blank" href="https://t.me/bee_bittu"> <img className="hover:scale-[1.3] transform-scale duration-300" src={Telegram} alt="" width={35} height={35}/> </a>
                                <a target="blank" href="https://youtube.com/@bee_bittu?si=MypRPoOPz6xYA_8f"> <img className="hover:scale-[1.3] transform-scale duration-300" src={youtube} alt="" width={35} height={35}/> </a>
                               
                                
                                <a target="blank" href="https://www.instagram.com/bee_bittu?utm_source=qr&igsh=Z3g2a3FqYmY0emsx"> <img className="hover:scale-[1.3] transform-scale duration-300" src={Instagram} alt="" width={35} height={35}/> </a>
                                <a target="blank" href="https://www.reddit.com/u/Bittu_bee/s/HpCpQQmqjM"> <img className="hover:scale-[1.3] transform-scale duration-300" src={Medium} alt="" width={35} height={35}/> </a>

                            </div>
                        </div>
                        <div className=" mt-16 mt- flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className=" flex flex-col tablet:items-center " >
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold   uppercase text-white">Links</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center  ">
                                        <a href="#" className="unline  hover:underline " >Presale</a>
                                    </li>
                                    <li className="  tablet:text-center  " >
                                        <a href="#" className="hover:underline">Stake</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold  uppercase text-white">Source</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a href="#" className="hover:underline ">Github</a>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <a href="#" className="hover:underline">BSC Scan</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold   uppercase text-white">Docs</h2>
                                <ul className="  text-gray-400 font-medium">
                                    <li className="mb-4 tablet:text-center">
                                        <a href="#" className="hover:underline">Whitepaper</a>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  border-gradient sm:mx-auto border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm   sm:text-center  text-gray-400">© 2024 <a href="" className="hover:underline">BITTU BEE</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer