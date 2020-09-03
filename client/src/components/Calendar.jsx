import React, { useState, useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MDBContainer, MDBView } from 'mdbreact';
import UsersNav from './UsersNav';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const Calendar = () => {
  const { loading, sessions, setSessions } = useContext(AppContext);
  const [sessionArray, setSessionArray] = useState([]);

  useEffect(() => {
    axios
      .get('/api/sessions', { withCredentials: true })
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => console.log(error.toString()));
  }, [loading]);

  //populates calendar with sessions
  useEffect(() => {
    const initArray = [];
    sessions.map((session) => {
      if (session.sessionType === 'planned') {
        initArray.push({
          title: `Planned:${session.description}-${session.taskName}`,
          id: session._id,
          start: session.start[0],
          end: session.end[0],
          allDay: session.allDay,
          color: 'orange'
        });
      } else {
        initArray.push({
          title: `${session.description}-${session.taskName}`,
          id: session._id,
          start: session.start[0],
          end: session.end[0],
          allDay: session.allDay,
          color: 'green'
        });
      }
    });
    setSessionArray(initArray);
  }, [sessions]);

  //deletes sessions on Calendar by interaction (interpolated value is the ID)
  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
      axios
        .delete(`/api/session/${clickInfo.event._def.publicId}`, {
          withCredentials: true
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <MDBView>
      <MDBContainer style={{ paddingTop: '40px' }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={sessionArray}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventClick={handleEventClick}
        />
      </MDBContainer>
    </MDBView>
  );
};

export default Calendar;
