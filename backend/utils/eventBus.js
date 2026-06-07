const EventEmitter = require("events");
const eventBus = new EventEmitter();

// Global event logger (you can later connect Kafka / Redis here)
eventBus.on("assessment_event", (data) => {
  console.log("📡 EVENT:", data);
});

module.exports = eventBus;