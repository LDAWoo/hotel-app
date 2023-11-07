import RadioInput from "../../../components/RadioInput/RadioInput";
import Title from "../../../components/Title/Title";

const ComponentCalendarSync = () => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <Title
          title='Your property will be automatically available for bookings for the next 18 months – excluding days you import that are marked as unavailable. You can update your calendar after registration.'
          nowrap={false}
          xl
        />

        <Title
          title='Do you use a channel manager?'
          nowrap={false}
          xxl
          fontBold
        />

        <RadioInput
          name='calendar-sync'
          id={1}
          title='Yes, I use a channel manager'
        />
        <RadioInput
          name='calendar-sync'
          id={2}
          title='No, I don’t use a channel manager'
        />
      </div>
    </div>
  );
};

export default ComponentCalendarSync;
