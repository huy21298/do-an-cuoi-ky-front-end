import React from 'react';

import AnswereItem from './AnswereItem';

const Question = () => {
    return (
        <section className="question-item" id="q1">
            <div className="title">
                <span className="question-number">Câu 1:</span>
                <span className="score">(30đ)</span>
                <span className="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sed
                    est ullam. Id, magni placeat mollitia quod earum voluptatibus
                    consequuntur? Tempore dignissimos velit corporis eaque quidem ut
                    animi nemo amet.
            </span>
            </div>
            <section className="answere type1">
                <AnswereItem />
                <AnswereItem />
                <AnswereItem />
                <AnswereItem />
            </section>
        </section>
    )
}

export default Question;