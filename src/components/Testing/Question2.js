import React from 'react';
import TextField from '@material-ui/core/TextField';

import AnswereItem from './AnswereItem';

const Question2 = () => {
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
                <TextField
                    id="outlined-multiline-static"
                    label="Đáp án"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                />
            </section>
        </section>
    )
}

export default Question2;