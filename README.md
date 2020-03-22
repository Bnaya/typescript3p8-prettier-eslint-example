# eslint + prettier + typescript 3.8 example setup

With prettier 2.0 we can finally use TypeScript 3.8 new syntax features!
[https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html)

See [src/main.ts](src/main.ts)

Prettier is integrated as eslint plugin.  
Means, eslint will report prettier errors, and `eslint "src/**" --fix` will fix prettier errors as-well
