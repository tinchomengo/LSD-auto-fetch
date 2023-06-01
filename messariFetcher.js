/*
// This is node.js example code for making requests with an API key using the stdlib.
require("https")
  .request(
    {
      host: "data.messari.io",
      path: "/api/v1/assets/fxs",
      // from https://messari.io/account/api (create messari account first)
      headers: {
        "x-messari-api-key": "q5mrwEzB042LOueMpilhwlGXZpBzZVeg9L1NcQtpl9F8PnwV",
      },
    },
    function (response) {
      let str = "";
      response.on("data", (chunk) => (str += chunk));
      response.on("end", () => console.log(JSON.parse(str)));
    }
  )

  .end();
/*
*/
const https = require("https");

const options = {
  host: "data.messari.io",
  path: "/api/v1/assets/btc/metrics",
  headers: {
    "x-messari-api-key": "q5mrwEzB042LOueMpilhwlGXZpBzZVeg9L1NcQtpl9F8PnwV",
  },
};

https
  .get(options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      const result = JSON.parse(data);
      const percentChangeLastWeek =
        result.data.roi_data.percent_change_last_1_week;
      console.log("Percent Change Last 1 Week:", percentChangeLastWeek);
    });
  })
  .on("error", (error) => {
    console.error("Error:", error.message);
  });
