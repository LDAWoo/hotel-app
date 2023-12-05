import React, { useState } from "react";
import styles from "./RecentPost.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Loader from "../../../components/Loader";
import Modal from "../../../components/Modal";
import Row from "./Row";
import NewPost from "./NewPost";

// data
import { posts } from "../../../mocks/posts";

const intervals = ["Last 7 days", "This month", "All time"];

const RecentPost = ({ className }) => {
  const [sorting, setSorting] = useState(intervals[0]);
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Recent post"
        classTitle={cn("title-blue", styles.title)}
        classCardHead={styles.head}
        head={
          <>
            <Dropdown
              className={styles.dropdown}
              classDropdownHead={styles.dropdownHead}
              value={sorting}
              setValue={setSorting}
              options={intervals}
              small
            />
            <button
              className={cn("button-small", styles.button)}
              onClick={() => setVisibleModal(true)}
            >
              New post
            </button>
          </>
        }
      >
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>Post</div>
            <div className={styles.col}>Distribution</div>
            <div className={styles.col}>Link clicks</div>
            <div className={styles.col}>Views</div>
            <div className={styles.col}>Engagement</div>
          </div>
          {posts.map((x, index) => (
            <Row item={x} key={index} />
          ))}
        </div>
        <div className={styles.foot}>
          <button className={cn("button-stroke button-small", styles.button)}>
            <Loader className={styles.loader} />
            <span>Load more</span>
          </button>
        </div>
      </Card>
      <Modal
        outerClassName={styles.outer}
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      >
        <NewPost />
      </Modal>
    </>
  );
};

export default RecentPost;
