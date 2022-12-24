import Button from "./Button";
import Divider from "./Divider";
import DiceIcon from "../images/icon-dice.svg";
import axios from "axios";
import { useState } from "react";

function AdviceGenerator(){
    const [advice, setAdvice] = useState("“It is easy to sit up and take notice, what's difficult is getting up and taking action.”");
    const [adviceID, setAdviceID] = useState("117");

    const handleClick = async () => {
        const result = await axios.get(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * (224)) + 1}`);
        setAdvice(result.data.slip.advice);
        setAdviceID(result.data.slip.id);
    }

    return (
        <div className="bg-[#313A48] flex flex-col justify-center items-center min-h-[19.75rem] w-[21.625rem] lg:w-[540px] rounded-xl relative px-[24px] py-[40px]">
            <h1 className="text-[#53FFAA] text-[11px] font-extrabold tracking-[3.46px] uppercase mb-[24px]">Advice #{adviceID}</h1>
            <section className="text-[#CEE3E9] text-[24px] font-extrabold mb-[24px] text-center">{ advice }</section>
            <Divider />
            <Button tailwindButton={"bg-[#53FFAA] p-4 rounded-full absolute bottom-[-32px] hover:shadow-[0_0px_40px_-5px_#53FFAA]"}
             tailwindWrapper={"flex justify-center items-center"}
             onClick={handleClick}>
                <img src={DiceIcon} alt="dice icon"></img>
                </Button>
        </div>
    );
}

export default AdviceGenerator;