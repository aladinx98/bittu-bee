import echo1 from "../../assets/Images/echo1.png"
import echo2 from "../../assets/Images/echo2.png"
import echo3 from "../../assets/Images/echo3.png"
import echo4 from "../../assets/Images/echo4.png"
import echo5 from "../../assets/Images/echo5.png"

const Ecosystem = () => {
    return (
        <>
            <div id="Ecosystem" className="flex z-10 gap-14 flex-col bg-cover w-[100vw] min-h-[130vh] bg-no-repeat   bg-left  bg-[url(https://res.cloudinary.com/dyqkppjr1/image/upload/v1711913030/bittubee/vacok0hxqqyi12faerjv.jpg)] items-center justify-center my-14">
                <div className=" text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '>
                        Bittu Bee  <span className="text-primary-gradient leading-tight   " >Use Case </span>
                    </h1>
                    <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">

                    Explore how Bittu Bee transforms the landscape of blockchain technology through its versatile use cases.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center max-w-[1400px] gap-28 laptop:gap-10 " >


                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left   bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src="" alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3>Game Integration    </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                            Immerse yourself in the world of blockchain gaming, where ownership of in-game assets, provably fair gameplay, and secure transactions are made possible with Bittu Bee.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo2} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3>NFT Marketplace    </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                            Dive into a decentralized marketplace where digital art, collectibles, and unique assets are bought, sold, and traded with transparency and security, all powered by Bittu Bee.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo3} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3> Exchange  </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                            Seamlessly trade a diverse range of digital assets with ease, security, and competitive fees on the Bittu Bee exchange platform, empowering users to access global markets.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo4} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3> Payment Gateway Integration   </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                            Embrace the future of finance by accepting cryptocurrency payments, expanding your customer base, and reducing reliance on traditional payment processors with Bittu Bee's versatile payment gateway.

                            </div>
                        </div>
                    </div>

                    <div className="brradis z-10 max-w-[352px] min-h-[350px] origin-top-left    bg-blue-400  bg-opacity-10 rounded-[30px] border-2   " >

                        <div className="flex gap-5 px-10 py-10 justify-center items-center flex-col">
                            <div className="w-[72px] h-[72px] flex justify-center items-center p-3 echosystem-gradient rounded-full " >
                                <img className=" w-[100%] h-[100%] shadow-xl text-bold  " src={echo5} alt="" />
                            </div>
                            <div className="text-3xl text-center font-bold">
                                <h3>Staking and Rewards  </h3>
                            </div>
                            <div className=" text-center text-gray-200 " >
                            Put your digital assets to work, support blockchain ecosystems, and earn passive income through staking rewards on the Bittu Bee platform, empowering users to contribute to network consensus mechanisms.
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Ecosystem