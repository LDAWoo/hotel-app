import React, { useState } from "react";
import cn from "classnames";
import styles from "./Settings.module.sass";
import Form from "../../../components/Form";
import Dropdown from "../../../components/Dropdown";
import Checkbox from "../../../components/Checkbox";
import Icon from "../../../components/Icon";
import { Range, getTrackBackground } from "react-range";
import useDarkMode from "use-dark-mode";

const options = ["Featured", "Popular", "New"];
const optionsRating = ["1 and up", "2 and up", "3 and up", "4 and up", "5"];
const filters = [
  "All products",
  "UI Kit",
  "Illustration",
  "Wireframe kit",
  "Icons",
];

const STEP = 1;
const MIN = 0;
const MAX = 120;

const Settings = () => {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState(options[0]);
  const [rating, setRating] = useState(optionsRating[3]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [values, setValues] = useState([32, 80]);
  const darkMode = useDarkMode(false);

  const handleSubmit = (e) => {
    alert();
  };

  const handleChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((x) => x !== filter));
    } else {
      setSelectedFilters((selectedFilters) => [...selectedFilters, filter]);
    }
  };

  return (
    <div className={styles.settings}>
      <Form
        className={styles.form}
        value={search}
        setValue={setSearch}
        onSubmit={() => handleSubmit()}
        placeholder="Search for products"
        type="text"
        name="search"
        icon="search"
      />
      <div className={styles.group}>
        <div className={styles.item}>
          <Dropdown
            className={styles.dropdown}
            classDropdownHead={styles.dropdownHead}
            classDropdownLabel={styles.label}
            value={sorting}
            setValue={setSorting}
            options={options}
            label="Sort by"
          />
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Showing</div>
          <div className={styles.list}>
            {filters.map((x, index) => (
              <Checkbox
                className={styles.checkbox}
                content={x}
                value={selectedFilters.includes(x)}
                onChange={() => handleChange(x)}
                key={index}
                reverse
              />
            ))}
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Price</div>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              setValues(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  width: "100%",
                  paddingTop: 20,
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "4px",
                    width: "100%",
                    borderRadius: "2px",
                    background: getTrackBackground({
                      values,
                      colors: darkMode.value
                        ? ["#272B30", "#2A85FF", "#272B30"]
                        : ["#EFEFEF", "#2A85FF", "#EFEFEF"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ index, props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "16px",
                  width: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  border: "2px solid #2A85FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "inset 0px 2px 2px #FFFFFF",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "calc(100% + 5px)",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "18px",
                    fontFamily: "Inter",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    backgroundColor: "#272B30",
                  }}
                >
                  ${values[index].toFixed(0)}
                </div>
              </div>
            )}
          />
        </div>
        <div className={styles.item}>
          <div className={styles.box}>
            <Dropdown
              className={styles.dropdown}
              classDropdownLabel={styles.label}
              classDropdownHead={styles.dropdownHead}
              value={rating}
              setValue={setRating}
              options={optionsRating}
              label="Rating"
              upBody
            />
            <Icon name="heart-fill" size="24" />
          </div>
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke", styles.button)}>Reset</button>
          <button className={cn("button", styles.button)}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
