const calculateFlightPath = (req, res) => {
  // Get the calculated flight path
  const flightPath = getFlightPath(req.body);

  // If no valid flight path is found, return a 400 error response
  if(!flightPath.length) 
    return res.status(400).json({ error: "Invalid input" });

  // Return the calculated flight path as a JSON response
  res.json(flightPath);
};

const getFlightPath = (flights) => {
  // Check if the input is a valid array and not empty
  if (!Array.isArray(flights) || !flights.length)
    return [];

  // Iterate over the flights and update the in-degree and out-degree counts
  const flightMap = new Map();

  flights.forEach(([src, dest]) => {
    flightMap.set(src, (flightMap.get(src) ?? 0) - 1);
    flightMap.set(dest, (flightMap.get(dest) ?? 0) + 1);
  });

  // Find the start and end airports by filtering the map entries with non-zero counts
  const flightEnds = Array.from(flightMap).filter(([code, count]) => count);
  if(flightEnds.length != 2) return [];

  // Determine the correct order of the endpoints based on their degrees
  const [[code1, count1], [code2, count2]] = flightEnds;
  if(count1 === -1 && count2 === 1) return [code1, code2];
  if(count1 === 1 && count2 === -1) return [code2, code1];

  // Return an empty array if the counts do not match the expected values
  return [];
};

module.exports = {
  calculateFlightPath,
  getFlightPath,
};
