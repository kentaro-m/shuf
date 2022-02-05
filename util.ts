import { readLines } from "https://deno.land/std@0.125.0/io/mod.ts";
import * as path from "https://deno.land/std@0.125.0/path/mod.ts";
import { shuffle } from './shuffle.ts';

type ReadContents = (reader: Deno.Reader) => Promise<string[]>;

export const readContents: ReadContents = async (reader) => {
  const result: string[] = [];
  for await (const line of readLines(reader)) {
    result.push(line);
  }
  return result;
}

type CreateFileReader = (fileName: string) => Promise<Deno.File>;

export const createFileReader: CreateFileReader = async (fileName) => {
  try {
    const filePath = path.join(Deno.cwd(), fileName);
    const fileReader = await Deno.open(filePath);
    return fileReader;
  } catch {
    const message = 'No such file or directory';
    console.log(
      fileName ? 
      `${fileName}: ${message}` :
      message
    );
    Deno.exit(1);
  }
}

type ShowResult = (contents: string[]) => void;

export const showResult: ShowResult = (contents) => {
  console.log(shuffle(contents).join('\n'));
}; 