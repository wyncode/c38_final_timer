import React, { useState, useContext, useEffect } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MDBContainer, MDBView } from 'mdbreact';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const Calendar = () => {
  const { loading } = useContext(AppContext);
  const [sessionArray, setSessionArray] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get('/api/sessions', { withCredentials: true })
      .then((response) => {
        setSessions(response.data);
      })
      .catch((error) => console.log(error.toString()));
  }, [loading]);

  useEffect(() => {
    axios
      .get('/api/tasks', { withCredentials: true })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error.toString()));
  }, [loading]);
  //populates calendar with sessions
  useEffect(() => {
    const initArray = [];
    tasks.map((task) => {
      let date = Date.parse(task.dueDate);
      let datePlus1 = date + 172800000;
      let formattedDate = new Date(datePlus1).toISOString();
      console.log(task);
      initArray.push({
        title: `DUE: ${task.name}`,
        id: task._id,
        start: formattedDate,
        allDay: true,
        color: 'purple'
      });
    });
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
          color: 'blue'
        });
      }
    });
    setSessionArray(initArray);
  }, [sessions, tasks]);

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
