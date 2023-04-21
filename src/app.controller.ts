import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect(
    'https://nestjstypescriptstartereewd8c-a5t5--3000--95b70c8d.local-credentialless.webcontainer.io',
  )
  index() {}
}
