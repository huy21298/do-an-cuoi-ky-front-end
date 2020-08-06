import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Skeleton from "@material-ui/lab/Skeleton";

const StudentItem = ({ student, loading }) => {
    return (
        <Grid item md={6}>
            <section className="student-item">
                <article className="student-avatar">
                    {getAvatar(loading, student.anh_dai_dien)}
                </article>
                <article className="student-name">{getName(loading, student.hoten)}</article>
            </section>
        </Grid>
    )
}

const getAvatar = (loading, avatar) => {
    return loading ? (
        <Skeleton animation="wave" variant="circle" width={50} height={50} />
    ) : (
            <div className="wrap-icon">
                <Avatar
                    src={avatar}
                    alt="Ảnh đại diện"
                />
            </div>
        );
}

const getName = (loading, name) => {
    return loading ? (
        <Skeleton
            animation="wave"
            height={30}
            width={180}
            style={{ marginBottom: 6 }}
        />
    ) : (
            name
        );
}

export default StudentItem;