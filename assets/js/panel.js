var Panel = (function () {
  var panel = document.querySelector(".panel");
  var btnAddEvent = document.getElementById("add-event");
  var formAddEvent = document.querySelector(".template-add-events");
  var eventNameForm = document.querySelector("#event-name-textarea");
  var eventDateForm = document.querySelector("#event-date-textarea");
  var btnOk = document.getElementById("event-ok");
  var btnCancel = document.getElementById("event-cancel");
  var count = 0;

  function Panel() {
    document.querySelector(".panel").style.display = "block";
    addEvent();
  }

  function addEvent() {
    panel.addEventListener("click", render);
  }

  function render(event) {
    var target = event.target;
    while (target !== panel) {
      if (target === btnAddEvent) {
        showForm();
        return;
      }
      if (target === eventDateForm) {
        target.innerHTML = "";
        return;
      }

      if (target === btnOk) {
        complete(target);
      }
      target = target.parentNode;
    }
  }

  function complete(target) {
    var eventItem = document.querySelector(".event-item");
    var eventBlock = eventItem.cloneNode(true);
    eventItem.parentNode.appendChild(eventBlock);
    var num = eventBlock.querySelector(".event-num");
    var name = eventBlock.querySelector(".event-name");
    num.textContent = ++count;
    name.textContent = eventNameForm.innerHTML;
    var remainingDate = eventBlock.querySelector(".event-remain-time");
    remainingDate.textContent = timer(eventDateForm.textContent);
    return false;
  }

  function showForm() {
    formAddEvent.style.display = (getComputedStyle(formAddEvent).display === "none" ? "block" : "none");
    eventNameForm.innerHTML = "";
    eventNameForm.focus();
  }

  function timer(data) {
    var futureDate = new Date(parseInt(data));
    var now = new Date();
    return futureDate - now;
  }


  return Panel;
}());

var panel = new Panel();


