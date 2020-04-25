import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "./config.model";
import { tap } from 'rxjs/operators/tap';

@Injectable({providedIn: "root"})
export class ConfigService {
  private readonly CONFIGURATION_URL = "./assets/config/config.json";
  private _config: Config;
  public get config(): Config {
    return this._config;
  }

  constructor(private http: HttpClient) {}

  public getConfiguration(): Promise<Config> {
    return this.http.get(this.CONFIGURATION_URL).pipe(
        tap((response: Config) => this._config = response)
      ).toPromise();
  }
}
