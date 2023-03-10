// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentHour = dayjs().hour() 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  function clickHandler() {
    var userText = $(this).siblings('textarea').val()
    var hour = $(this).parent().attr('id')
    localStorage.setItem(hour, userText) 
  }
  console.log(currentHour)

  $('.row').each(function() {
    var hourString = $(this).attr('id').split('-')[1]
    var hour = parseInt(hourString)
    console.log(hour)
    if (currentHour > hour) {
      $(this).addClass('past')
    } else if (currentHour == hour) {
      $(this).addClass('present') 
    } else {
      $(this).addClass('future')
    }
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('.btn').on('click',clickHandler)
  $('#hour-09').children('textarea').val(localStorage.getItem('hour-09'))
  $('#hour-10').children('textarea').val(localStorage.getItem('hour-10'))
  $('#hour-11').children('textarea').val(localStorage.getItem('hour-11'))
  $('#hour-12').children('textarea').val(localStorage.getItem('hour-12'))
  $('#hour-13').children('textarea').val(localStorage.getItem('hour-13'))
  $('#hour-14').children('textarea').val(localStorage.getItem('hour-14'))
  $('#hour-15').children('textarea').val(localStorage.getItem('hour-15'))
  $('#hour-16').children('textarea').val(localStorage.getItem('hour-16'))
  $('#hour-17').children('textarea').val(localStorage.getItem('hour-17'))
  
});
