import { Command } from "https://deno.land/x/cliffy@v0.20.1/command/mod.ts";
import { handler } from './handler.ts';

await new Command()
  .name("shuf")
  .version("0.1.0")
  .description("Write a random permutation of the input lines to standard output.")
  .arguments('[fileName:string]')
  .action(async (_, fileName: string) => await handler(fileName))
  .parse(Deno.args);
