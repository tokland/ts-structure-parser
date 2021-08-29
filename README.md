# TypeScript File Parser

Parse `ts` files and convert them to JSON objects.

## Usage

```js
import tsFileStruct from "ts-file-parser";

const filePath = "./src/typescript-file.ts";
const decls = fs.readFileSync(filePath).toString();
const jsonStructure = tsFileStruct.parseStruct(decls, {}, filePath);
```
