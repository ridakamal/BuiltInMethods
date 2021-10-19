const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// extracts all the key names from robot and save it as an array and assign it to a variable "robotkeys"
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// extracts all the key AND Values names from robot and save it as an array and assign it to a variable "robotEntries"
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Adds given key-value pair to the object robot
const newRobot = Object.assign ({laserBlaster: true, voiceRecognition:true}, robot)
console.log(newRobot);