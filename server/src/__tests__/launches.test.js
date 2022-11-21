const request = require("supertest");
const app = require("../app.js");

describe("Test GET /launches", () => {
  test("It should respond wiht 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect(200)
      .expect("Content-Type", /json/);
    // expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launches", () => {
  const launchData = {
    mission: "NIG Probe",
    rocket: "9ja Pirate",
    target: "Kepler-186 f",
    launchDate: "January 4, 2028",
  };

  const launchDataWithInvalidDate = {
    mission: "NIG Probe",
    rocket: "9ja Pirate",
    target: "Kepler-186 f",
    launchDate: "January",
  };

  const launchDataWithMissingField = {
    mission: "NIG Probe",
    rocket: "9ja Pirate",
    target: "Kepler-186 f",
    // launchDate: "January 4, 2028",
  };
  const launchResponse = {
    success: true,
    msg: "launch created",
  };

  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchData)
      .expect(201)
      .expect("Content-Type", /json/);

    console.log(response.body);
    expect(response.body).toMatchObject(launchResponse);
  });
  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithMissingField)
      .expect(400)
      .expect("Content-Type", /json/);

    console.log(response.body);
    expect(response.body).toStrictEqual({
      success: false,
      err: "Missing required launch property",
    });
  });
  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect(400)
      .expect("Content-Type", /json/);

    console.log(response.body);
    expect(response.body).toStrictEqual({
      success: false,
      err: "Invalid Launch Date",
    });
  });
});
