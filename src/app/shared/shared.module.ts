import { NgModule } from '@angular/core';

import { PipesModule } from '@shared/pipes/pipes.module';
import { NativeModule } from '@shared/native/native.module';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModule } from '@app/core/language/language.module';

@NgModule({
  imports: [
    PipesModule,
    NativeModule,
    TranslateModule,
    LanguageModule,
  ],
  exports: [
    PipesModule,
    NativeModule,
    TranslateModule,
    LanguageModule
  ]
})

export class SharedModule { }
