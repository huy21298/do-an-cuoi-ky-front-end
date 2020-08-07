import React, { useState } from 'react';

import AnswereItem from './AnswereItem';

const Question1 = ({ question, index }) => {
    console.log('question', question)
    const [currentQuestion, setcurrentQuestion] = useState(-1);
    return (
        <section className="question-item" id={`q${index}`}>
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
                {mapAnswere(question.cau_hoi_id.lua_chon)}
            </section>
        </section>
    )
}

const mapAnswere = answeres => {
    return answeres.map((item, index) => {
        return <AnswereItem answere={item} key={index} />
    })
}

export default Question1;