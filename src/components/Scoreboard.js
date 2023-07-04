import React from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import "../styles/Scoreboard.css"

export default function Scoreboard(props) {
    React.useEffect(() => {
        if(record === null || props.score > record) {
            localStorage.setItem("record", JSON.stringify(props.score))
            setRecord(props.score)
        }
        if (isExploding) {
            const timeoutId = setTimeout(() => {
                setIsExploding(false);
            }, confettiProps.duration);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, []);

    const [isExploding, setIsExploding] = React.useState(props.perfectScore);
    const [record, setRecord] = React.useState(JSON.parse(localStorage.getItem("record")) || null)
    const endGameText = props.perfectScore ? "You won !" : "Game over !"
    const scoreText = `Your score is ${props.score}/${props.maxScore}`

    const confettiProps = {
        force: 0.8,
        duration: 3000,
        particleCount: 400,
        width: 1600,
        colors: ["#42BDFF", "#82FFE1", "#F8CC31", "#FD42F4", "#F8CC31"],
        zIndex: 1
      };

    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div>
                        <p className="end-game-description">{endGameText}</p>
                        <p className="score">{scoreText}</p>
                        {isExploding && <ConfettiExplosion {...confettiProps} />}
                        {record === props.score && <p>New record !</p>}
                    </div>
                    <button className="play-again-button" onClick={props.playAgain}>Play again</button>
                </div>
            </div>
        </>
    )
}