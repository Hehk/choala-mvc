let events = [];
const randInt = n => Math.floor(Math.random() * n);
const add = ({ name, period, type }) =>
  (events = [{ name, period, type, added: new Date() }, ...events]);

const createWeek = dayTotal => {
  let week = new Array(7);
  let days = 0;
  console.log("test");

  while (dayTotal > days) {
    const i = Math.floor(Math.random() * 7);
    if (week[i] == undefined) {
      week[i] = events[randInt(events.length)];
      days += 1;
    }
  }

  return week;
};

module.exports = {
  add,
  createWeek
};
