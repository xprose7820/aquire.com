$(document).ready(function() {
    $('#calendar').fullCalendar({
      events: [
        {
          title: 'Event 1',
          start: '2022-01-01'
        },
        {
          title: 'Event 2',
          start: '2022-01-05',
          end: '2022-01-07'
        }
      ],
      selectable: true,
      select: function(start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true);
        }
        $('#calendar').fullCalendar('unselect');
      }
    });
  });
 


