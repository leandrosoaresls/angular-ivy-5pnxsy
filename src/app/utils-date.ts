export default class UtilsDate {
  static getAverageTime(times: string[]) {
    /**
     *  times = ['07:00:00 AM', '11:00:00 PM', '12:00:00 AM'];
     */
    const count = times.length;
    const timesInSeconds = [];

    // loop through times
    for (let i = 0; i < count; i++) {
      // parse
      const pieces = times[i].split(":");
      let secsampm = pieces[2].split(" ");
      let aux1,
        aux2 = pieces[2].split(" ");
      console.log("ampm ", aux1);
      let hrs = Number(pieces[0]);
      const mins = Number(pieces[1]);
      const secs = Number(secsampm[0]);
      let ampm = secsampm[1];

      // convert to 24 hr format (military time)
      if (ampm === "PM") hrs = hrs + 12;

      // find value in seconds of time
      let totalSecs = hrs * 60 * 60;
      totalSecs += mins * 60;
      totalSecs += secs;

      // add to array
      timesInSeconds[i] = totalSecs;
    }

    // find average timesInSeconds
    let total = 0;
    // console.log(timesInSeconds)
    for (let j = 0; j < count; j++) {
      total = total + Number(timesInSeconds[j]);
    }
    const avg = Math.round(total / count);
    // console.log("avg secs: " + avg);
    // turn seconds back into a time
    let avgMins = Math.floor(avg / 60);
    let avgSecs = avg - 60 * avgMins;
    let avgHrs = Math.floor(avgMins / 60);
    // console.log("hours: " + avgHrs);
    avgMins = avgMins - 60 * avgHrs;
    // convert back to 12 hr. format
    let avgAmpm = "AM";
    if (avgHrs > 12) {
      avgAmpm = "PM";
      avgHrs = avgHrs - 12;
    }
    // add leading zeros for seconds, minutes
    // avgSecs = ("0" + avgSecs).slice(-2);
    // avgMins = ("0" + avgMins).slice(-2);
    // your answer
    return (
      avgHrs +
      ":" +
      ("0" + avgMins).slice(-2) +
      ":" +
      ("0" + avgSecs).slice(-2) +
      " " +
      avgAmpm
    );
  }

  static getMinDate(dates: Date[]): Date {
    return dates.reduce(function(a, b) {
      return a < b ? a : b;
    });
  }

  static getMaxDate(dates: Date[]): Date {
    return dates.reduce(function(a, b) {
      return a > b ? a : b;
    });
  }
}
