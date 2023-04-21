import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // New
      rootPath: join(__dirname, '..', 'client/.output/public'), // New
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
