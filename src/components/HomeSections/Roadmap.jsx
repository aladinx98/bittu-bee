
import PropTypes from 'prop-types';

const Step = ({ color, phase, heading, pera, pera2 }) => {
    return (
        <>
            <div id="step-main" className=" z-10 flex gap-20 justify-center   p-5 tablet:flex-col tablet:items-center tablet:gap-10  " >

                <div id="step-left" className="w-[40%] relative phone:tablet:w-[95%] tablet:w-[90%]">
                    <div className="  w-[100%] relative flex justify-center " >
                        <h1 className=" text-stroke-custom text-4xl font-bold   text-center absolute bottom-[100%] phone:text-4xl "
                        >{phase}</h1>
                    </div>
                    <div className={`roadmap-clip py-3   px-9 ${color}`} >
                        <h2 className="text-3xl phone:text-2xl text-center " >{heading}</h2>
                    </div>
                </div>

                <div id="step-right " className="w-[50%] flex justify-center phone:tablet:w-[95%] tablet:w-[90%] ">
                    <div className="w-[90%]  flex gap-3 phone:w-[100%]  " >
                        <p className=" " >✧</p>
                        <div className='flex flex-col gap-2'>
                            <p className=" text-xl" dangerouslySetInnerHTML={{ __html: pera }}></p>
                            <p className=" text-xl" dangerouslySetInnerHTML={{ __html: pera2 }}></p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
Step.propTypes = {
    color: PropTypes.string.isRequired,
    phase: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    pera: PropTypes.string.isRequired,
    pera2: PropTypes.string.isRequired

};

const Roadmap = () => {
    return (
        <>
            <div id="Roadmap" className="   relative flex gap-20 flex-col   min-h-screen bg-no-repeat    items-center justify-center my-20">

                

                <div className=" z-10 text-center  flex flex-col justify-center items-center gap-7 ">
                    <h1
                        className='text-6xl  font-bold '>
                        <span className="text-primary-gradient    " >Roadmap  </span>
                    </h1>
                    {/* <p className=" max-w-[60%] text-xl  laptop:max-w-[90%]  ">
                        VOIP Finance aims to disrupt the traditional VoIP industry by leveraging blockchain technology to provide a decentralized, secure, and cost-effective solution for voice communication. The VOIP token serves as the native currency within the VOIP Finance ecosystem, enabling users to
                    </p> */}
                </div>

                <div className='flex flex-col gap-1 phone:gap-10'>


                    <Step
                        color="bg-[--secondry01-color]"
                        phase="PHASE 1"
                        heading="Foundation"
                        pera="Lay the groundwork for the Bittu Bee platform, focusing on robust infrastructure, security measures, and user experience enhancements."
                        pera2="Engage with early adopters, establish social media presence, and foster partnerships to build a strong foundation for the Bittu Bee community."
                    />
                    <Step
                        color="bg-[--secondry-color]"
                        phase="PHASE 2"
                        heading="Presale & Listing"
                        pera="Engage with our community during the presale event, where participants can contribute to the growth and development of Bittu Bee while earning exclusive benefits and rewards."
                        pera2="Allocate a portion of the presale tokens to strategic partners, advisors, and ecosystem development to ensure the long-term sustainability and success of the Bittu Bee platform."

                    />
                    <Step
                        color="bg-[--secondry1-color]"
                        phase="PHASE 3"
                        heading="Platform Launch"
                        pera="Officially launch the Bittu Bee platform, including features such as cryptocurrency exchange, NFT marketplace, staking, and payment gateway integration."
                        pera2="Ramp up marketing efforts to attract new users and expand our reach within the blockchain and cryptocurrency communities."

                    />
                    <Step
                        color="bg-[--secondry-color]"
                        phase="PHASE 4"
                        heading="Growth and Innovation"
                        pera="Continuously improve and iterate upon existing platform features based on user feedback and market trends."
                        pera2="Explore additional use cases and product offerings, such as decentralized finance (DeFi) integrations and innovative blockchain solutions."

                    />

                    <Step
                        color="bg-[--secondry1-color]"
                        phase="PHASE 5"
                        heading="Gaming Platform Launch"
                        pera="Experience a new era of gaming with Bittu Bee's blockchain gaming platform, offering immersive gameplay, decentralized ownership of in-game assets."
                        pera2="Gain ownership of rare and unique in-game assets through Bittu Bee's NFT marketplace for gaming, allowing players to buy, sell."

                    />




                </div>
            </div>

        </>
    )
}

export default Roadmap