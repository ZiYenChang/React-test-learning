import React, { useState } from 'react'
import './RankingBox.css'

function RankingBox() {
    const [first, setFirst] = useState(1);
    const [second, setSecond] = useState(2);
    const [third, setThird] = useState(3);
    const [fourth, setFourth] = useState(4);
    const [postRank, setPostRank] = useState(false);

    // when clicking up button (exchange value with the higher rank)
    const handleUp = (evt) => {
        let temp = evt;
        if (evt === second) {
            setSecond(first);
            setFirst(temp);
        }
        else if (evt === third) {
            setThird(second);
            setSecond(temp);
        }
        else {
            setFourth(third);
            setThird(temp);
        }
    };

    // when clicking down button (exchange value with the lower rank)
    const handleDown = (evt) => {
        let temp = evt;
        if (evt === first) {
            setFirst(second);
            setSecond(temp);
        }
        else if (evt === second) {
            setSecond(third);
            setThird(temp);
        }
        else {
            setThird(fourth);
            setFourth(temp);
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const rankData = {first, second, third, fourth}

        console.log(rankData);

        // post request (post to 'ratingDB.json' under the folder "data")
        fetch('http://localhost:8000/Ranking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rankData)
        })
            .then(console.log("rating submitted"))
            .catch((error) => {
                console.error('Error:', error);
            })

        // boolean that show a message for 3 secs after submit button is clicked
        setPostRank(true);
        setTimeout(() => {
            setPostRank(false)
          }, 3000);
    };


    return (
        <div className="rankingBox" >
            <div className="ranking-container">
                <form className="rankingForm" onSubmit={handleSubmit}>
                    <h3>Rank the articles!</h3>
                    <div className="rank-sequence">
                        <label><span className="rank-num">1<sup> st</sup></span><span className="articleRank">Article {first}</span></label>
                        <span className="single-button1 buttongroup">
                            <button type="button" className="down-button" onClick={() => handleDown(first)}>&#x25BC;</button>
                        </span>
                    </div>

                    <div className="rank-sequence">
                        <label><span className="rank-num">2<sup>nd</sup></span><span className="articleRank">Article {second}</span></label>
                        <span className="buttongroup">
                            <button type="button" className="up-button" onClick={() => handleUp(second)}>&#x25B2;</button> <button type="button" className="down-button" onClick={() => handleDown(second)}>&#x25BC;</button>
                        </span>
                    </div>

                    <div className="rank-sequence">
                        <label><span className="rank-num">3<sup>rd</sup></span><span className="articleRank">Article {third}</span></label>
                        <span className="buttongroup">
                            <button type="button" className="up-button" onClick={() => handleUp(third)}>&#x25B2;</button> <button type="button" className="down-button" onClick={() => handleDown(third)}>&#x25BC;</button>
                        </span>
                    </div>

                    <div className="rank-sequence">
                        <label><span className="rank-num">4<sup>th</sup></span><span className="articleRank">Article {fourth}</span></label>
                        <span className="single-button4 buttongroup">
                            <button type="button" className="down-button" onClick={() => handleUp(fourth)}>&#x25B2;</button>
                        </span>
                    </div>


                    <input type="submit" value="Submit" className="submit-button" />
                </form>
                {/* show message for 3 secs after submit */}
                {postRank ? <p className="message">You submitted a feedback</p> : null}
            </div>
        </div>
    )
}

export default RankingBox
