const schedule = require("node-schedule");
const message = require("./message");
const events = require("./events");

events.add({ name: "eat breakfast", type: "food", period: "morning" });
events.add({ name: "eat lunch", type: "food", period: "afternoon" });
events.add({ name: "eat dinner", type: "food", period: "evening" });
events.add({ name: "jump", type: "exercise", period: "evening" });
events.add({ name: "code", type: "professional", period: "afternoon" });
events.add({ name: "duolingo", type: "personal", period: "evening" });

const week = events.createWeek(3);
const dailyUpdate = () => {
  const today = new Date().getDay();
  const changedEvent = week[today];
  if (changedEvent != null) {
    message(
      `Do not ${changedEvent.name} this ${changedEvent.period}, figure it out!`
    );
  } else {
    message("Just have a good day! :D");
  }

  console.log("Message sent");
};

const job = schedule.scheduleJob({ hour: 5, minute: 30 }, dailyUpdate);
message("Choala is waiting");
