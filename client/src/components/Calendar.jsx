import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MDBContainer, MDBView } from 'mdbreact';
import UsersNav from './UsersNav';

const Calendar = () => {
  const [eventID, setEventID] = useState(1);

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: eventID,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
      setEventID(eventID + 1);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <MDBView>
      <UsersNav />
      <MDBContainer
        className="mt-5"
        style={{ width: '70%', paddingTop: '40px' }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          // eventsSet={handleEvents}
          //-- these will communicate with Database
          // eventAdd={function () {}}
          // eventChange={function () {}}
          // eventRemove={function () {}}
        />
      </MDBContainer>
    </MDBView>
  );
};

export default Calendar;
