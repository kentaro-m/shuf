import { readContents, createFileReader, showResult } from './util.ts';

type Handler = (fileName: string) => void;

export const handler: Handler = async (fileName) => {
  const isatty = Deno.isatty(Deno.stdin.rid);
  const reader = isatty ?
    await createFileReader(fileName) : Deno.stdin;

  if (reader) {
    const contents = await readContents(reader).catch(() => Deno.exit(1));
    showResult(contents);
  }
};
