import { NgModule, APP_INITIALIZER } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "./config.service";

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => 
        () => configService.getConfiguration(),
      deps: [ConfigService],
      multi: true
    }
  ]
})
export class ConfigModule { }

// export function loadConfiguration(configService: ConfigurationService) {
//   return () => configService.loadConfiguration();
// }