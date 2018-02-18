module.exports = (function () {
    function Clock(pattern) {
        this.pattern = pattern;
    }

    Clock.prototype.construct = function () {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        return {hours: hours, minutes: minutes, seconds: seconds}
    };

    Clock.prototype.setBackground = function(pattern) {
        var time = this.construct();
        if (time["hours"] > 0 && time["hours"] <= 5) {
            document.body.style.cssText = pattern.night;
        }
        if (time["hours"] > 5 && time["hours"] <= 12) {
            document.body.style.cssText = pattern.morning;
        }
        if (time["hours"] > 12 && time["hours"] <= 19) {
            document.body.style.cssText = pattern.afternoon;
        }
        if (time["hours"] > 19 && time["hours"] <= 24) {
            document.body.style.cssText = pattern.evening;
        }
    };

    Clock.prototype.render = function () {
        var wrapper = document.getElementById("clock");
        var timer = this.construct();
        this.setBackground(this.pattern);
        for (var key in timer) {
            timer[key] = "<span>" + timer[key] + "</span>";
        }
        wrapper.innerHTML = timer["hours"] + " : " + timer["minutes"] + " : " + timer["seconds"];
    };

    Clock.prototype.start = function () {
        this.timerId = setInterval(this.render.bind(this), 1000);
    };

    Clock.prototype.stop = function () {
        clearInterval(this.timerId);
    };
    return Clock;
}());
