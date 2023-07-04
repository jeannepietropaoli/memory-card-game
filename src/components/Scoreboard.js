import React from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import "../styles/Scoreboard.css"

export default function Scoreboard(props) {
    React.useEffect(() => {
        if (isExploding) {
            const timeoutId = setTimeout(() => {
                console.log('off')
                setIsExploding(false);
            }, confettiProps.duration);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, []);

    const [isExploding, setIsExploding] = React.useState(true/* props.perfectScore */);
    const text = props.perfectScore ? "You won !" : "Game over !"

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
                        <p className="end-game-description">{text}</p>
                        <p className="score">Your score is {props.score}/{props.maxScore}</p>
                        {isExploding && <ConfettiExplosion {...confettiProps} />}
                    </div>
                    <button className="play-again-button" onClick={props.playAgain}>Play again</button>
                </div>
            </div>
        </>
    )
}