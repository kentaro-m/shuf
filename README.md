# shuf
Write a random permutation of the input lines to standard output.

## Usage
```shell
$ deno install --allow-read --name shuf https://github.com/kentaro-m/shuf/raw/main/cli.ts

$ echo 'bob\njohn\ntom' | shuf
Tom
Bob
John

$ shuf sample.csv
Tom
Bob
John

$ shuf -h

  Usage:   shuf [fileName]
  Version: 0.1.0

  Description:

    Write a random permutation of the input lines to standard output.

  Options:

    -h, --help     - Show this help.
    -V, --version  - Show the version number for this program.
```

## Development
```shell
$ deno run --allow-read cli.ts sample.csv
Mina
Tom
Ken

$ cat sample.csv | deno run --allow-read cli.ts
Ken
Mina
Tom
```



## Licence
MIT
