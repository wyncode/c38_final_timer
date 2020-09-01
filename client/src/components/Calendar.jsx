import React, { useState, useContext, useEffect } from 'react';
import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MDBContainer, MDBView } from 'mdbreact';
import UsersNav from './UsersNav';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import PlannedSessionAdder from './PlannedSessionAdd';

const Calendar = () => {
  const [eventID, setEventID] = useState(1);
  const { tasks, setLoading, sessions, setSessions } = useContext(AppContext);

  useEffect(() => {
    //this doesnt work yet
    axios
      .get('/api/sessions', { withCredentials: true })
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => console.log(error.toString()));
  }, [setSessions]);

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
      axios
        .delete('/api/session/:id', { withCredentials: true })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(sessions);

  return (
    <MDBView>
      <UsersNav />
      <MDBContainer
        className="mt-1"
        style={{ width: '70%', paddingTop: '40px' }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          // events={sessions.map((session) => {
          //   [
          //     {
          //       title: session.description,
          //       id: session._id,
          //       start: session.start,
          //       end: session.end,
          //       allDay: session.allDay
          //     }
          //   ];
          // })}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventClick={handleEventClick}
        />
      </MDBContainer>
      <PlannedSessionAdder />
    </MDBView>
  );
};

export default Calendar;
