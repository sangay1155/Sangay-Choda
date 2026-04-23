const devs = [
  { name: "Karma", vertical: "Dev" },
  { name: "Tshering", vertical: "Dev" }
];

const devNames = devs.map(dev => dev.name);

console.log(devNames);

const result = devs
  .filter(trainee => trainee.vertical === "Dev")
  .map(trainee => trainee.name)
  .sort();
