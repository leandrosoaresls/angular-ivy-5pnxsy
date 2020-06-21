import { Component, VERSION, OnInit } from "@angular/core";
import { BillbreakdownService, DutyCycle } from "./bill-breakdown.service";
import moment from 'moment';
import UtilsDate from './utils-date'

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  constructor(private billbreakdownService: BillbreakdownService) {}

  ngOnInit(): void {
    const startTime = this.billbreakdownService.getApplianceStartTime();

    console.log("labels ", startTime);
    this.sliceDates(startTime[0]["startTime"]);
  }

  sliceDates(dates: Date[]) {
    let day31 = [];
    dates.forEach(date => {
      // console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
      if (
        date.getDate() === 31 &&
        date.getMonth() + 1 === 5 &&
        date.getFullYear() === 2020
      ) {
        console.log("date aqui ", date);
        day31.push(date);
      }
    });

    let onlyTimes = day31.map(item => moment(item).format('LTS'))

    let min = UtilsDate.getMinDate(day31);
    console.log("TESTE AAIIIUI ", onlyTimes)
  
    const result = UtilsDate.getAverageTime(onlyTimes)
  }
}
