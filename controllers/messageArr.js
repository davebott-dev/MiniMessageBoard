const messages = [
    {
      text: "Hi there!",
      user: "David B.",
      added: new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }) + ' ' + new Date().toLocaleTimeString(),
      index: 1,
    },
    {
      text: "Hello World",
      user: "Tech Guy",
      added: new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }) + ' ' + new Date().toLocaleTimeString(),
      index: 2,
    },
  ];

  module.exports = messages;