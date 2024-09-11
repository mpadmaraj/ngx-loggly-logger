import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogglyService } from './loggly.service';
import { HttpClientModule } from '@angular/common/http';

export * from './loggly.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  exports: []
})
export class NgxLogglyModule {
  static forRoot(): ModuleWithProviders {
    let s="a";
    return {
      ngModule: NgxLogglyModule,
      providers: [LogglyService]
    };
  }
}
