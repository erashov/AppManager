Prerequisite
NodeJS - Install it from https://nodejs.org/en/download/current/
Node for IIS - Install it from https://github.com/tjanczuk/iisnode/releases

Make sure latest npm is installed. So, execute the command npm install -g npm
Then update the Angular package using commands:
npm install -g npm-check-updates
and then ncu -u

1. Now we need to modify the webpack.config.js

Open webpack.config.js in Visual Studio and replace all occurrences of AotPlugin to AngularCompilerPlugin
Save and close webpack.config.js.

2. Open file ClientApp/boot.server.ts

You will see error at line 25 (zone.onError.subscribe((errorInfo: any) => reject(errorInfo));)
Change the declaration at line 22
From this - const zone = moduleRef.injector.get(NgZone);
To this   - const zone: NgZone = moduleRef.injector.get(NgZone);
The error will now be gone. Save and close this file.

3. Open file ClientApp/app/app.browser.module.ts

And add the following after the last import statement:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
Also, in the import section add – BrowserAnimationsModule

1) npm install
2) dotnet restore
3) webpack --config webpack.config.vendor.js --env.prod
4) webpack --config webpack.config.js --env.prod
5) Add-Migration InitialCreate 
6) Update-Database   