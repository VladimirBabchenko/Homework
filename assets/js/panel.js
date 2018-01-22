var Panel = (function () {
    var panel = document.querySelector(".panel");
    var btnAddEvent = document.getElementById("add-event");
    var formAddEvent = document.querySelector(".template-add-events");
    var eventNameForm = document.querySelector("#event-name-textarea");
    var eventDateForm = document.querySelector("#event-date-textarea");
    var btnOk = document.getElementById("event-ok");
    var btnCancel = document.getElementById("event-cancel");
    var count = 0;
    var oldHTML = eventDateForm.innerHTML;

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
                eventDateForm.innerHTML = oldHTML;
                showForm(target);
                return;
            }
            if (target === eventDateForm) {
                return;
            }

            if (target === eventNameForm) {
                return;
            }

            if (target === btnOk) {
                complete(target);
            }

            if (target === btnCancel) {
                cancel();
                return;
            }
            target = target.parentNode;
        }
        close();
    }

    function complete() {
        if (!eventNameForm.innerHTML || !eventDateForm.innerHTML) return;
        var eventItemLeft = document.querySelector(".event-item");
        var eventItemright = document.querySelector(".event-item-calendar");
        var eventBlock = eventItemLeft.cloneNode(true);
        var eventCalendar = eventItemright.cloneNode(true);
        var futureField = eventCalendar.querySelector(".event-future");
        var endedField = eventCalendar.querySelector(".event-ended");
        eventItemLeft.parentNode.appendChild(eventBlock);
        eventItemright.parentNode.appendChild(eventCalendar);

        var num = eventBlock.querySelector(".event-num");
        var name = eventBlock.querySelector(".event-name");
        num.textContent = eventItemLeft.parentNode.children.length - 1;
        eventCalendar.children[0].textContent = ++count;
        name.textContent = eventNameForm.innerHTML;
        eventCalendar.children[1].textContent = eventNameForm.textContent;
        var remainingDate = eventBlock.querySelector(".event-remain-time");
        var remains = timer(eventDateForm.textContent);
        if (!remains) return;
        remainingDate.innerHTML = remains.remainingDays + " d : " + remains.remainingHours + " h : " + remains.remainingMin + " min";
        futureField.innerHTML = remains.planningDate.toLocaleString();
        endedField.innerHTML = "";

        var timerId = setInterval(function () {
            timer(eventDateForm.textContent);
            remainingDate.innerHTML = remains.remainingDays + " d : " + remains.remainingHours + " h : " + remains.remainingMin + " min";
        }, 1000);

        waiting(remains.remainingDateMs, eventBlock)
            .then(function (event) {
                clearInterval(timerId);
                event.parentNode.removeChild(event);
                endedField.innerHTML = futureField.innerHTML;
                futureField.innerHTML = "";
            });
        close();
    }

    function cancel() {
        close();
        eventDateForm.innerHTML = oldHTML;
    }

    function close() {
        formAddEvent.style.display = "none";

    }

    function waiting(time, event) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(event)
            }, time)
        });
    }

    function showForm() {
        formAddEvent.style.display = (getComputedStyle(formAddEvent).display === "none" ? "block" : "none");
        eventNameForm.innerHTML = "";
        eventNameForm.focus();
    }

    function timer(data) {
        var arr = data.split(",");
        var arrNum = arr.map(function (value) {
            return parseInt(value)
        });
        var planningDate = new Date(arrNum[0], arrNum[1] - 1, arrNum[2], arrNum[3], arrNum[4]);
        var now = new Date();
        var remainingDate = planningDate - now;
        if (!remainingDate) return;
        var remainingDays = Math.floor(remainingDate / 1000 / 60 / 60 / 24);
        var remainingHours = Math.floor((remainingDate - remainingDays * 24 * 60 * 60 * 1000) / 1000 / 60 / 60);
        var remainingMin = Math.floor((remainingDate - remainingDays * 24 * 60 * 60 * 1000 - remainingHours * 60 * 60 * 1000) / 1000 / 60);
        return {
            planningDate: planningDate,
            remainingDateMs: remainingDate,
            remainingDays: remainingDays,
            remainingHours: remainingHours,
            remainingMin: remainingMin
        }
    }


    return Panel;
}());



