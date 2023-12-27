import { useEffect, useReducer } from "react";
import Checkbox from "../../../../../../components/Checkbox/Checkbox";
import { ControlData } from "../../../../../../components/Constants/SecureBooking/ControlData";
import RadioInput from "../../../../../../components/RadioInput/RadioInput";
import Title from "../../../../../../components/Title/Title";
import useRegisterControl from "../../../../../../hooks/SecureBooking/useRegisterControl";

function Control() {
  const { areYouTravellingForWork, setField } = useRegisterControl();

  const initState = ControlData.map((item, index) => {
    const id = item?.id;
    let selectedValue = [];
    if (item?.data[index - 1]?.type === "checkbox") {
      selectedValue = [];
    }

    if (item?.data[index - 1]?.type === "radio") {
      selectedValue = false;
    }

    return { id, selectedValue };
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_OPTION": {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            const value = action.payload.value;
            const isSelected = item.selectedValue.some(
              (s) => value === s.selectedValue,
            );

            if (isSelected) {
              // Nếu giá trị đã được chọn, xóa nó khỏi mảng
              const updatedSelectedValue = item.selectedValue.filter(
                (s) => s.selectedValue !== value,
              );
              return { ...item, selectedValue: updatedSelectedValue };
            } else {
              // Nếu giá trị chưa được chọn, thêm nó vào mảng
              const updatedSelectedValue = [
                ...item.selectedValue,
                { selectedValue: value },
              ];
              return { ...item, selectedValue: updatedSelectedValue };
            }
          }

          return item;
        });
      }
      case "CHECKED_RADIO_OPTION": {
        return state.map((item) => {
          if (item?.id === action.payload.id) {
            return { ...item, selectedValue: action.payload?.value };
          }
          return item;
        });
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const handleChange = (id, value) => {
    dispatch({ type: "CHANGE_OPTION", payload: { id, value } });
  };

  const handleCheckedRadio = (id, value) => {
    dispatch({ type: "CHECKED_RADIO_OPTION", payload: { id, value } });
  };

  useEffect(() => {
    state.forEach((item) => setField(item?.id, item?.selectedValue));
  }, [state, setField]);

  console.log(state);

  return (
    <div className='flex flex-col gap-4 w-full'>
      {ControlData.map((item, index) => (
        <div key={index}>
          {item?.title && <Title title={item?.title} xl fontBold />}
          {item?.type === "input" && (
            <>
              {item?.data &&
                item?.data.map((x, index) => (
                  <div key={index}>
                    {x?.type === "checkbox" && (
                      <div className='flex flex-col gap-0'>
                        <Checkbox
                          title={x?.name}
                          value={index}
                          onChange={(e) =>
                            handleChange(item?.id, e.target.value)
                          }
                        />
                        {x?.subName && (
                          <Title
                            className='ml-7 dark:text-primary-50'
                            title={x?.subName}
                            large
                          />
                        )}
                      </div>
                    )}
                    {x?.type === "radio" && (
                      <div className='mb-1 '>
                        <RadioInput
                          id={x?.id}
                          title={x?.title}
                          name={x?.name}
                          value={x?.value}
                          isChecked={
                            state.find((s) => s.id === item?.id)?.selectedValue
                          }
                          onChange={() =>
                            handleCheckedRadio(item?.id, x?.value)
                          }
                        />
                      </div>
                    )}
                  </div>
                ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Control;
