import React, { useState, useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
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
  const [sessionData, setSessionsData] = useState([]);
  const { tasks, setLoading } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/sessions', { withCredentials: true })
      .then((response) => {
        let eventData = [];
        response.data.map((session) => {
          return eventData.push({
            id: session._id,
            title: session.description,
            start: session.start,
            end: session.end
          });
        });
        setSessionsData(eventData);
        console.log(eventData);
      })
      .catch((error) => console.log(error.toString()));
  }, []);

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
  // console.log(sessionData);

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
          events={sessionData}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          // select={handleDateSelect}
          eventClick={handleEventClick}
          // eventsSet={handleEvents}
          //-- these will communicate with Database
          // eventAdd={function () {}}
          // eventChange={function () {}}
          // eventRemove={function () {}}
        />
      </MDBContainer>
      <PlannedSessionAdder />
    </MDBView>
  );
};

export default Calendar;
