import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-pr',
  templateUrl: './fetch-pr.component.html',
  styleUrls: ['./fetch-pr.component.css']
})
export class FetchPrComponent implements OnInit {

  private pulls: Array<string> = [];
  private count = 0;

  private newPr: Array<string> = [];
  private recentlyPr: Array<string> = [];
  private oldPr: Array<string> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Todo configuration the get repos url. see: https://developer.github.com/v3/repos/
    const getReposApiUrl = '';
    // Todo configuration the get pulls url. see: https://developer.github.com/v3/pulls/
    const getPullsApiUrlBase = '';

    const fetch = (repoNames: Array<string>) => {
      for (const key in repoNames) {
        if (repoNames.hasOwnProperty(key)) {
          const name = repoNames[key];
          this.http
            .get(`${getPullsApiUrlBase}/${name}/pulls`)
            .subscribe((res: Array<any>) => {
              if (res.length > 0) {
                this.pulls = this.pulls.concat(res);
                this.count += res.length;

                for (const pr of res) {
                  switch (this.findLabel(new Date(pr['created_at']))) {
                    case 'new':
                      this.newPr.push(pr);
                      break;
                    case 'recently':
                      this.recentlyPr.push(pr);
                      break;
                    case 'old':
                    default:
                      this.oldPr.push(pr);
                  }
                }
              }
            });
        }
      }
    };

    this.http
      .get(getReposApiUrl)
      .subscribe((res: Array<any>) => {
        const repos: Array<string> = res.map(repo => repo.name);
        fetch(repos);
      });
  }

  public findLabel(createdAt: Date): string {
    const now = new Date();
    const toHour = (msec: number) => Math.floor(msec / 1000 / 60 / 60);

    const diff: number = toHour(now.getTime() - createdAt.getTime());
    console.log(diff);
    if (diff < 24) {
      return 'new';
    } else if (diff < 168) {
      return 'recently';
    } else {
      return 'old';
    }
  }

  public slice(str: string, maxlen: number): string {
    if (str.length > maxlen) {
      return str.slice(0, maxlen) + '..';
    } else {
      return str;
    }
  }

}
