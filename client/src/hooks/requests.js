const api_base_url = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch(`${api_base_url}/planets/`);
  return await response.json();
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch(`${api_base_url}/launches/`);
  const fetchedResp = await response.json();
  return fetchedResp.sort((a, b) => a.flightNumber - b.flightNumber);
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  const response = await fetch(`${api_base_url}/launches/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(launch),
  });
  const fetchedResp = await response.json();
  return fetchedResp;
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  const response = await fetch(`${api_base_url}/launches/${id}`, {
    method: "delete",
  });
  const fetchedResp = await response.json();
  return fetchedResp;
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
