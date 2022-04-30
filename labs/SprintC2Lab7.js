let age = (planet, seconds) => {
  let result = 0;
  let earthYear = 31557600;
  let mercuryYear = earthYear * 0.2408467;
  let venusYear = earthYear * 0.61519726;
  let marsYear = earthYear * 1.8808158;
  let jupiterYear = earthYear * 11.862615;
  let saturnYear = earthYear * 29.447498;
  let uranusYear = earthYear * 84.016846;
  let neptuneYear = earthYear * 164.79132;

  if (planet == "earth") {
    result = Math.round((seconds/earthYear)*100)/100;
  }
  else if (planet == "mercury") {
    result = Math.round((seconds/mercuryYear)*100)/100;
  }
  else if (planet == "venus") {
    result = Math.round((seconds/venusYear)*100)/100;
  }
  else if (planet == "mars") {
    result = Math.round((seconds/marsYear)*100)/100;
  }
  else if (planet == "jupiter") {
    result = Math.round((seconds/jupiterYear)*100)/100;
  }
  else if (planet == "saturn") {
    result = Math.round((seconds/saturnYear)*100)/100;
  }
  else if (planet == "uranus") {
    result = Math.round((seconds/uranusYear)*100)/100;
  }
  else if (planet == "neptune") {
    result = Math.round((seconds/neptuneYear)*100)/100;
  }

  return result;
};