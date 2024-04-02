
import blog1 from "../../assets/Images/blog1.png"
import blog2 from "../../assets/Images/blog2.png"
import blog3 from "../../assets/Images/blog3.png"
import blog4 from "../../assets/Images/blog4.png"
import blog5 from "../../assets/Images/blog5.png"

const Blogs = () => {
    return (
        <>
            <div id="blog-main" className="flex relative gap-20 flex-col my-20 phone:my-4 phone:px-5  min-h-screen bg-no-repeat items-center justify-center  ">

                

                <div className=" text-center z-10  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-5xl  font-bold '> Our Recent
                        <span className="text-primary-gradient  " > Blogs </span>

                    </h1>
                </div>

                <div className="z-10" >
                    <div className=" flex justify-center  gap-[4vmax] flex-wrap ">

                        <a href="/" target="blank">
                            <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                                <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                    <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://res.cloudinary.com/dyqkppjr1/image/upload/v1711767791/bittubee/brr9h3mbxktcjvligywd.png" />

                                    <div className=" flex flex-col gap-5">


                                        <div className="left-[2px] text-center  text-white text-lg font-bold leading-[18px]">Exploring the Future of Decentralized Finance (DeFi) with Bittu Bee</div>

                                        {/* <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div> */}

                                        <div className="   text-neutral-400 text-md text-center font-normal   leading-tight ">Decentralized finance represents a paradigm shift in the way we think about traditional financial services. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/" target="blank">
                            <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                                <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                    <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://res.cloudinary.com/dyqkppjr1/image/upload/v1711767790/bittubee/d0dchllfj2qztr27j4aq.png" />

                                    <div className=" flex flex-col gap-5">


                                        <div className="left-[2px] text-center  text-white text-lg font-bold leading-[18px]">The Power of Community: Building Connections with Bittu Bee</div>

                                        {/* <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div> */}

                                        <div className="   text-neutral-400 text-md text-center font-normal     leading-tight ">Community is at the heart of everything we do at Bittu Bee. We believe in the power of collaboration, bringing together individuals with diverse backgrounds.</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="/" target="blank">
                            <div id="blogcard" className="  p-5 flex  justify-center items-center    bg-zinc-900 rounded-[28px]  " >

                                <div className=" max-w-[300px] h-[100%] flex gap-5 justify-center items-center flex-col    ">

                                    <img className="w-full h-60   rounded-[19px] shadow border border-white" src="https://res.cloudinary.com/dyqkppjr1/image/upload/v1711767790/bittubee/omvp4da1jsswiifruveu.png" />

                                    <div className=" flex flex-col gap-5">


                                        <div className="left-[2px] text-center  text-white text-lg font-bold leading-[18px]">Navigating the World of Non-Fungible Tokens (NFTs) with Bittu Bee</div>

                                        {/* <div className="left-[2px] top-[282px]  text-white text-[12px] font-medium leading-[10px]">26 July 2023</div> */}

                                        <div className="   text-neutral-400 text-md text-center font-normal   leading-tight ">Unlike traditional cryptocurrencies like Bitcoin & Ethereum, which are fungible & can be exchanged on a one-to-one basis.</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Blogs