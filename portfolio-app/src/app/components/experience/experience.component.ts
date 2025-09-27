import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

interface Job {
  title: string,
  company: string
}

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  imports: [TimelineModule, CardModule]
})
export class ExperienceComponent implements OnInit {
  jobs: Job[] = new Array<Job>();

  constructor() {
    this.getJobs();
   }

  ngOnInit() {
  }

  private getJobs() {
    const job1: Job = {
      title: 'Engineer', company: 'DBS'
    }
    const job2: Job = {
      title: 'Intern', company: 'Oracle'
    }

    this.jobs.push(job1);
    this.jobs.push(job2);
  }

}
