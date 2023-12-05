import React, { useState } from "react";
import cn from "classnames";
import styles from "./Discussion.module.sass";
import Card from "../../../components/Card";
import Editor from "../../../components/Editor";

const Discussion = ({ className }) => {
    const [content, setContent] = useState();

    return (
        <Card
            className={cn(styles.card, className)}
            title="Discussion"
            classTitle="title-red"
        >
            <Editor
                state={content}
                onChange={setContent}
                classEditor={styles.editor}
                label="Message to reviewer"
                tooltip="Description Message to reviewer"
            />
        </Card>
    );
};

export default Discussion;
