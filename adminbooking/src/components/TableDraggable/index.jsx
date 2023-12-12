import { useCallback, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "../Buttons/Button";
import Drag from "../Drag";

function TableDraggable({ initData, component, setItems, currentData, setCurrentData, onClick }) {
  const initialState = initData?.map((item) => {
    const id = item?.id;
    const title = item?.title;
    const icon = item?.icon;
    const initValue = item?.menu;
    const menu = initValue;
    return { id, title, icon, menu };
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "dropdown":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, menu: action.payload.data };
          }
          return item;
        });

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [currentState, setCurrentState] = useState([]);

  const [dropdownOpen, setDropdownOpen] = useState({});
  const handleToggleDropdown = useCallback(
    (id) => {
      setDropdownOpen((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    },
    [setDropdownOpen]
  );

  const handleOutsideDropdownMenu = useCallback(
    (id) => {
      if (dropdownOpen[id]) {
        setDropdownOpen((prev) => ({ ...prev, [id]: false }));
      }
    },
    [dropdownOpen, setDropdownOpen]
  );

  useEffect(() => {
    if (dropdownOpen.customize_data) {
      dispatch({ type: "dropdown", payload: { id: "customize_data", data: currentData } });
    }

    if (dropdownOpen.customize_view) {
      dispatch({ type: "dropdown", payload: { id: "customize_view", data: currentData } });
    }
  }, [dropdownOpen, setCurrentData, currentData]);

  useEffect(() => {
    setCurrentState(state);
  }, [state]);

  useEffect(() => {
    setItems(currentState);
  }, [currentState, setItems]);

  const handleChange = (id, e) => {
    setCurrentState((prevState) => {
      const updatedState = prevState.map((s) => {
        if (s.id === id) {
          const updatedMenu = s.menu.map((menuItem) => {
            if (menuItem.id === e.target.value) {
              return { ...menuItem, status: !menuItem.status };
            } else {
              return menuItem;
            }
          });
          setCurrentData(updatedMenu);
          return { ...s, menu: updatedMenu };
        }

        return s;
      });

      return updatedState;
    });
  };

  return (
    <div className="flex flex-col 2md:flex-row gap-2">
      {currentState.map((item, index) => (
        <OutsideClickHandler key={index} onOutsideClick={() => handleOutsideDropdownMenu(item.id)}>
          <div className="relative">
            {item?.menu ? (
              <>
                <Button onClick={() => handleToggleDropdown(item.id)} title={item?.title} icon={item?.icon} size={18} fontMedium xl className="pt-1 pb-1 pl-2 pr-2 duration-300 hover:bg-hotel-25 hover:text-hotel-75 text-primary-100" />
                {item?.menu.length > 0 && dropdownOpen[item.id] && (
                  <div className="absolute left-0 2md:left-auto right-auto 2md:right-0 top-full z-[100]">
                    <div className="p-4 max-w-[360px] bg-white shadow-[0_2px_8px_0_rgba(0,0,0,.16)] rounded-sm">
                      <Drag setCurrentData={setCurrentData} currentData={currentData} data={currentState.find((s) => s.id === item.id).menu} droppableId={item.id} handleChange={handleChange} component={component} />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Button onClick={() => onClick(item.id)} title={item?.title} icon={item?.icon} size={18} fontMedium xl className="pt-1 pb-1 pl-2 pr-2 duration-300 hover:bg-hotel-25 hover:text-hotel-75 text-primary-100" />
            )}
          </div>
        </OutsideClickHandler>
      ))}
    </div>
  );
}

TableDraggable.propTypes = {
  initData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      icon: PropTypes.func,
      menu: PropTypes.array,
    })
  ),
  component: PropTypes.any,
  setItems: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

export default TableDraggable;
