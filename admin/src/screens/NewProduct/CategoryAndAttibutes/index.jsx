import React, { useState } from "react";
import cn from "classnames";
import styles from "./CategoryAndAttibutes.module.sass";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Tooltip from "../../../components/Tooltip";
import Checkbox from "../../../components/Checkbox";
import { WithContext as ReactTags } from "react-tag-input";

const compatibility = [
  {
    id: 0,
    title: "Sketch",
  },
  {
    id: 1,
    title: "WordPress",
  },
  {
    id: 2,
    title: "Procreate",
  },
  {
    id: 3,
    title: "Figma",
  },
  {
    id: 4,
    title: "HTML",
  },
  {
    id: 5,
    title: "Illustrator",
  },
  {
    id: 6,
    title: "Adobe XD",
  },
  {
    id: 7,
    title: "Keynote",
  },
  {
    id: 8,
    title: "Framer",
  },
  {
    id: 9,
    title: "Photoshop",
  },
  {
    id: 10,
    title: "Maya",
  },
  {
    id: 11,
    title: "In Design",
  },
  {
    id: 12,
    title: "Cinema 4D",
  },
  {
    id: 13,
    title: "Blender",
  },
  {
    id: 14,
    title: "After Effect",
  },
];

const optionsCategory = ["Select category", "Category 1", "Category 2"];

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

const CategoryAndAttibutes = ({ className }) => {
  const [category, setCategory] = useState(optionsCategory[0]);

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleChange = (id) => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== id));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, id]);
    }
  };

  const [tags, setTags] = useState([{ id: "Geometry", text: "Geometry" }]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const onClearAll = () => {
    setTags([]);
  };

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice();
    updatedTags.splice(i, 1, newTag);
    setTags(updatedTags);
  };

  return (
    <Card
      className={cn(styles.card, className)}
      title="Category & attibutes"
      classTitle="title-purple"
    >
      <div className={styles.images}>
        <Dropdown
          className={styles.field}
          label="Category"
          tooltip="Maximum 100 characters. No HTML or emoji allowed"
          value={category}
          setValue={setCategory}
          options={optionsCategory}
        />
        <div className={styles.label}>
          Compatibility{" "}
          <Tooltip
            className={styles.tooltip}
            title="Maximum 100 characters. No HTML or emoji allowed"
            icon="info"
            place="right"
          />
        </div>
        <div className={styles.list}>
          {compatibility.map((x, index) => (
            <Checkbox
              className={styles.checkbox}
              content={x.title}
              value={selectedFilters.includes(x.id)}
              onChange={() => handleChange(x.id)}
              key={index}
            />
          ))}
        </div>
        <div className={styles.head}>
          <div className={styles.label}>
            Tags{" "}
            <Tooltip
              className={styles.tooltip}
              title="Maximum 100 characters. No HTML or emoji allowed"
              icon="info"
              place="right"
            />
          </div>
          <div className={styles.counter}>
            <span>1</span>/12 tags
          </div>
        </div>
        <div className={styles.tags}>
          <ReactTags
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            delimiters={delimiters}
            handleTagClick={handleTagClick}
            onClearAll={onClearAll}
            onTagUpdate={onTagUpdate}
            suggestions={[{ id: "1", text: "Geometry" }]}
            placeholder="Enter tags to describe your item"
            minQueryLength={2}
            maxLength={20}
            autofocus={false}
            allowDeleteFromEmptyInput={true}
            autocomplete={true}
            readOnly={false}
            allowUnique={true}
            allowDragDrop={true}
            inline={true}
            inputFieldPosition="inline"
            allowAdditionFromPaste={true}
            editable={true}
            clearAll={true}
            tags={tags}
          />
        </div>
      </div>
    </Card>
  );
};

export default CategoryAndAttibutes;
