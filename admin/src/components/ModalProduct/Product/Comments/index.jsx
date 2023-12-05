import React, { useState } from "react";
import cn from "classnames";
import styles from "./Comments.module.sass";
import Icon from "../../../Icon";
import Item from "./Item";
import TooltipGlodal from "../../../TooltipGlodal";
import Editor from "../../../Editor";

// data
import { commentsProduct } from "../../../../mocks/comments";

const Comments = ({ className, onClose }) => {
    const [content, setContent] = useState();

    return (
        <>
            <div className={cn(styles.comments, className)}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <div className={styles.counter}>4</div>
                        Comments
                    </div>
                    <button className={styles.close} onClick={onClose}>
                        <Icon name="close" size="24" />
                    </button>
                </div>
                <Editor
                    state={content}
                    onChange={setContent}
                    classEditor={styles.editor}
                    label="Review this product?"
                    tooltip="You’re product owner"
                    button="Comment"
                />
                <div className={styles.list}>
                    {commentsProduct.map((x, index) => (
                        <Item className={styles.item} item={x} key={index} />
                    ))}
                </div>
            </div>
            <TooltipGlodal />
        </>
    );
};

export default Comments;
