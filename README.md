# eslint + prettier + typescript 3.8 example setup (Yet Another...)

## Log
- 22/5/2020 eslint 7, TypeScript 3.9.3

With prettier 2.0 we can finally use TypeScript 3.8 new syntax features!
[https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html)

See [src/main.ts](src/main.ts)

Prettier is integrated as eslint plugin.  
Means, eslint will report prettier errors, and `eslint "src/**" --fix` will fix prettier errors as-well  
type info based rules are also enabled.  
Plus more React stuff!
