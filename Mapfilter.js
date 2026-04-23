const result = trainees
  .filter(trainee => trainee.vertical === "Dev")
  .map(trainee => trainee.name)
  .sort();
