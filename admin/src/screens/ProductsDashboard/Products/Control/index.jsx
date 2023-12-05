import React from "react";
import styles from "./Control.module.sass";
import cn from "classnames";
import Icon from "../../../../components/Icon";
import Actions from "../../../../components/Actions";

const actions = [
    {
        title: "Edit product",
        icon: "edit",
        action: () => console.log("Edit product"),
    },
    {
        title: "View comment",
        icon: "message",
        action: () => console.log("View comment"),
    },
    {
        title: "Edit title & description",
        icon: "edit",
        action: () => console.log("Edit title & description"),
    },
    {
        title: "Get shareable link",
        icon: "link",
        action: () => console.log("Get shareable link"),
    },
    {
        title: "Delete forever",
        icon: "trash",
        action: () => console.log("Delete forever"),
    },
];

const Control = ({ className, visibleActions, setVisibleActions, up }) => {
    return (
        <div className={cn(styles.control, className)}>
            <button className={styles.button}>
                <Icon name="edit" size="20" />
            </button>
            <button className={styles.button}>
                <Icon name="message" size="20" />
            </button>
            <Actions
                className={styles.actions}
                classActionsHead={styles.actionsHead}
                classActionsBody={styles.actionsBody}
                classActionsOption={styles.actionsOption}
                items={actions}
                visible={visibleActions}
                setVisible={setVisibleActions}
                up={up}
            />
        </div>
    );
};

export default Control;
