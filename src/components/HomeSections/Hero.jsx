import logo from "../../assets/voip_logo (1)/voip_logo.png";
import eth from "../../assets/Images/eth.png";
import usdt from "../../assets/Images/usdt.png";
import bnb from "../../assets/Images/bnb.png";


import Facebook from "../../assets/social/facebook.png"
import youtube from "../../assets/social/youtube.png"
import Twitter from "../../assets/social/twitter.png"
import Telegram from "../../assets/social/telegram.png"
import Instagram from "../../assets/social/instagram.png"
import Medium from "../../assets/social/reddit.png"

const Hero = () => {
    // const openPDF = () => {
    //     window.open("/assets/IPCD whitepaper.pdf", "_blank");
    // };

    return (
        <>

            <div
                id="Hero"
                className=" mb-[50px]  relative  min-h-[100vh] w-[100vw] flex justify-center   px-4   pb-20 md:px-20 desktop:flex-col desktop:items-center "
            >


                <div id="blob" className=" max-w-[1246px]  absolute left-0 top-[-10%]  z-0 ">
                    
                </div>




                <div
                    id="hero-left"
                    className=" z-10 mt-[100px] w-[60%] h-[100%] flex flex-col justify-center  gap-[4vmax] desktop:w-[100%]  desktop:mt-[50px] "
                >
                    <div id="hero-left-top" className="  flex flex-col gap-[3vmax]">

                        <h1 className=" text-[50px] font-bold relative font-outfit leading-tight  desktop:text-center phone:text-[35px]    ">

                        Welcome to Bittu Bee<br />
                            <span className=" phone:text-[27px] text-primary-gradient">
                            Empowering Futures <br />
                            </span>

                            & Digital Ecosystems
                        </h1>

                        <p className=" flex font-light leading-snug text-gray-200 text-[18px] w-[80%] tracking-[0.35px] desktop:w-[90%] desktop:text-center  desktop:m-auto desktop:phone:w-[100%] ">
                        Bittu Bee is not just about innovation; it's about empowerment. Our platform provides individuals with the tools, resources, and opportunities they need to thrive in the digital age.

                        </p>
                    </div>

                    <div id="hero-left-bottom" className="flex desktop:justify-center ">
                        <div
                            id="hero-l-bottom-right"
                            className="flex flex-col justify-center   gap-3 max-[760px]:ml-[0px]  "
                        >

                            <div id="hero-bottom-buttons"
                                className="flex  gap-4 phone:flex-wrap phone:justify-center "
                            >
                                <a href="   " target="blank">
                                    <button
                                        type="button"
                                        className=" font-outfit btn2 text-white   font-medium   text-sm       "
                                    >
                                        White Paper
                                    </button>
                                </a>
                                <a
                                    href="#contract1"
                                    type="button"
                                    className=" font-outfit btn2 text-white   font-medium   text-sm  "
                                >
                                    Audit
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 desktop:items-center ">
                        <h3 className="text-xl phone:text-center ">Audited & KYC | 100% Secure & Verified</h3>
                        <div id="shocial-media" className="flex gap-4 items-center ">
                        <a target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " href="https://www.facebook.com/profile.php?id=61556826016562&mibextid=ZbWKwL">
                                <img src={Facebook} width={35} height={35} alt="" />
                            </a>
                            <a target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " href="https://twitter.com/bee_bittu?t=XvmjAENquUm5X3VQvyStjg&s=08">
                                <img src={Twitter} width={35} height={35} alt="" />
                            </a>
                            <a target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " href="https://t.me/bee_bittu">
                                <img src={Telegram} width={35} height={35} alt="" />
                            </a>
                            <a target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " href="https://youtube.com/@bee_bittu?si=MypRPoOPz6xYA_8f">
                                <img src={youtube} width={35} height={35} alt="" />
                            </a>
                            <a target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " href="https://www.instagram.com/bee_bittu?utm_source=qr&igsh=Z3g2a3FqYmY0emsx">
                                <img src={Instagram} width={35} height={35} alt="" />
                            </a>
                            <a target="blank" className=" hover:scale-[1.2] transform-scale duration-200  " href="https://www.reddit.com/u/Bittu_bee/s/HpCpQQmqjM">
                                <img src={Medium} width={35} height={35} alt="" />
                            </a>
                        </div>
                    </div>


                </div>

                <div
                    id="hero-right"
                    className="relative z-10 mt-10 w-[40%] h-[100%] flex justify-center gap-0  desktop:w-[100%] "
                >

                    <div
                        id="hero-right-container"
                        className=" flex flex-col py-5 justify-center gap-5   min-h-[auto] min-w-[160px] max-w-[600px] overflow-hidden  px-12
                         
                        "

                    >
                        
<img src="https://res.cloudinary.com/dyqkppjr1/image/upload/v1711648715/bittubee/nryptxkpckwmuz8jk0vz.png" width="100%" height="auto"/>

                        

                        



                    </div>
                </div>
            </div >
        </>
    );
};

export default Hero;
