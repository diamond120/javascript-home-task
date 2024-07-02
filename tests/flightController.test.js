const { getFlightPath } = require("../controllers/flightController");

describe("getFlightPath", () => {
  test("should return the correct flight path for a single flight", () => {
    const flights = [["SFO", "EWR"]];
    const result = getFlightPath(flights);
    expect(result).toEqual(["SFO", "EWR"]);
  });

  test("should return the correct flight path for multiple flights", () => {
    const flights = [
      ["ATL", "EWR"],
      ["SFO", "ATL"],
    ];
    const result = getFlightPath(flights);
    expect(result).toEqual(["SFO", "EWR"]);
  });

  test("should return the correct flight path for unordered flights", () => {
    const flights = [
      ["IND", "EWR"],
      ["SFO", "ATL"],
      ["GSO", "IND"],
      ["ATL", "GSO"],
    ];
    const result = getFlightPath(flights);
    expect(result).toEqual(["SFO", "EWR"]);
  });

  test('should handle cycles correctly and return remaining flights', () => {
    const flights = [
      ["IND", "EWR"],
      ["EWR", "IND"],
      ["IND", "GSO"],
    ];
    const result = getFlightPath(flights);
    expect(result).toEqual(["IND", "GSO"]);
  });

  test('should detect invalid path and return an empty array', () => {
    const flights = [
      ["IND", "EWR"],
      ["EWR", "GSO"],
      ["ATL", "GSO"],
    ];
    const result = getFlightPath(flights);
    expect(result).toEqual([]);
  });

  test("should return an empty array if no flights are provided", () => {
    const flights = [];
    const result = getFlightPath(flights);
    expect(result).toEqual([]);
  });
});
