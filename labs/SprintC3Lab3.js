let checkHumidityLevel = (perc) => {
  if (perc >= 70) {
    throw new Error("Humidity is over 70%.");
  } else {
    return null;
  }
};

class UnknownError extends Error {
  constructor() {
    super("Unknown error.");
  }
}

class ArgumentError extends Error {
  constructor() {
    super("Temperature monitor is broken.");
  }
}
class OverheatingError extends Error {
  constructor() {
    super("Temperature is over 500 C.");
  }
}
let reportOverheating = (temp) => {
  if (temp > 500) {
    OverheatingError.temperature = temp;
    throw OverheatingError;
  } else if (temp == null) {
    throw ArgumentError;
  }
};

let monitorTheMachine = (actions) => {
  try {
    actions.check;
  } catch (e) {
    if (e instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (e instanceof OverheatingError) {
      if (error.temperature > 600) {
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      throw e;
    }
  }
};
