async function activityTable(day) {
    let logFileList = await textFile("camera_logs.txt");
    logFileList = logFileList.split("\n");
  
    let table = new Array(24).fill(0);
  
    for (let logFile of logFileList) {
      let timestamps = await textFile(logFile);
      timestamps = timestamps.split("\n").map(Number);
  
      for (let timestamp of timestamps) {
        let date = new Date(timestamp);
        if (date.getDay() === day) {
          table[date.getHours()]++;
        }
      }
    }
  
    return table;
  }