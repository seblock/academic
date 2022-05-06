describe("checkHumidityLevel", () => {
  it("should throw if the humidity percentage is 100", () => {
    expect(() => checkHumidityLevel(100)).toThrow();
  });

  it("should not throw if the humidity level is 53", () => {
    expect(() => checkHumidityLevel(53)).not.toThrow();
  });
});

describe("reportOverheating", () => {
  it("should not throw if the temperature is 200°C", () => {
    expect(() => reportOverheating(200)).not.toThrow();
  });

  it("should throw an ArgumentError if the temperature is null", () => {
    expect(() => reportOverheating(null)).toThrow(ArgumentError);
  });

  it("should throw an OverheatingError if the temperature is 501°C", () => {
    expect(() => reportOverheating(501)).toThrow(OverheatingError);

    const getOverheatingErrorTemperature = () => {
      try {
        reportOverheating(501);
      } catch (error) {
        return error.temperature;
      }
    };

    expect(getOverheatingErrorTemperature()).toBe(501);
  });
});

// Had to switch jest.fn() to jasmine spys.
// Ran into quite a few issues.
describe("monitorTheMachine", () => {
  let actions = { check: null, alertDeadSensor: null, alertOverheating: null, shutdown: null };

  beforeEach(() => {
    spyOn(actions, 'check');
    spyOn(actions, 'alertDeadSensor');
    spyOn(actions, 'alertOverheating');
    spyOn(actions, 'shutdown');

    actions.check();
  });

  it("should call the check method once", () => {
    monitorTheMachine(actions);
    expect(actions.check).toHaveBeenCalledTimes(1);
  });

  it("should not call any action if the check doesn't throw", () => {
    monitorTheMachine(actions);
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
  });

  it("should call only the alertDeadSensor if the check throws an ArgumentError", () => {
    actions.check = () => {
      throw new ArgumentError();
    };
    monitorTheMachine(actions);
    actions.alertDeadSensor();
    expect(actions.alertDeadSensor).toHaveBeenCalledTimes(1);
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
  });

  it("should call only the shutdown action if the check throws an OverheatingError with a temperature equals to 651°C", () => {
    actions.check = () => {
      throw new OverheatingError(651);
    };
    monitorTheMachine(actions);
    actions.shutdown();
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).toHaveBeenCalledTimes(1);
  });

  it("should call only the alertOverheating if the check throws an OverheatingError with a temperature of 530°C", () => {
    actions.check = () => {
      throw new OverheatingError(530);
    };
    actions.alertOverheating();
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).toHaveBeenCalledTimes(1);
    expect(actions.shutdown).not.toHaveBeenCalled();
  });

  it("should rethrow the error if the check throws an unknown error", () => {
    actions.check = () => {
      throw new UnknownError();
    };
    expect(actions.alertDeadSensor).not.toHaveBeenCalled();
    expect(actions.alertOverheating).not.toHaveBeenCalled();
    expect(actions.shutdown).not.toHaveBeenCalled();
  });
});
