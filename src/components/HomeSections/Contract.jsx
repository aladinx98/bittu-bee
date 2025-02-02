
import { useState } from "react";
import { motion } from "framer-motion"


const Contract = () => {
    const [copied, setCopied] = useState(false);
    const text = "0x579d95DB26A8d565DA72626E6ac33136dca8D576";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000); // Hide the popup after 2 seconds
            })
            .catch((err) => {
                console.error("Copy failed: ", err);
            });
    };




    return (
        <>


            <div id="contract1" className=" z-10  py-10 ">


                <div id="contract" className=" flex z-10  flex-col justify-center items-center gap-5 ">
                    <motion.h5
                        initial={{ x: 0 }}
                        whileInView={{ x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 }, }}
                        className=" text-[var(--prime-yellow)] font-medium  oxanium text-3xl">Contract Address
                    </motion.h5>

                    <h3 className=" text-primary-gradient text-3xl tablet:text-[4vw] z-10 "  >{text}</h3>


                    <div id="contract-button" className="flex z-10 flex-wrap justify-center gap-7">

                        <motion.button
                            initial={{ y: 40 }}
                            transition={{ duration: 1 }}
                            whileInView={{ y: 0 }}
                            className="btn2 "
                            style={{ width: "230px" }}
                            onClick={handleCopy}
                        >
                            <span className="flex oxanium">
                                
                                Copy Address
                            </span>
                        </motion.button>
                       
                    </div>
                    {copied && (
                        <div className="popup mt-3" style={{ zIndex: 1, color: "white" }}>
                            Copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contract;
