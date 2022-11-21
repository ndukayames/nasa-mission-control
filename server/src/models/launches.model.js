const launches = new Map();

let latestFlightNumber = 1;
const launch = {
  flightNumber: 1,
  mission: "Kepler Exploratin X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "kepler-422 b",
  customers: ["Nduka", "James"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  // validate input
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return { success: false, err: "Missing required launch property" };
  }
  launch.flightNumber = ++latestFlightNumber;
  launch.customers = ["Nduka", "NASA"];
  launch.success = true;
  launch.upcoming = true;
  launch.launchDate = new Date(launch.launchDate);
  // check if launch date is valid
  if (isNaN(launch.launchDate)) {
    return { success: false, err: "Invalid Launch Date" };
  }

  launches.set(launch.flightNumber, launch);
  return { success: true, msg: "launch created" };
}

function deleteLaunch(id) {
  const launchId = Number(id);
  const launch = launches.has(launchId);
  if (launch) {
    const toAbort = launches.get(launchId);
    toAbort.success = false;
    toAbort.upcoming = false;
    return { success: true, msg: "launch deleted" };
  } else {
    return { success: false, msg: "launch not found" };
  }
}
module.exports = {
  getAllLaunches,
  addNewLaunch,
  deleteLaunch,
};
