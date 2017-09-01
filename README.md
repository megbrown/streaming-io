# streaming-io

## Requirements

Create a JavaScript file to act as a Node.js program named `streams.js`. This program
should read a file `languages.json` and output to a file `languages_caps.json`. Use the second
command-line argument to declare the destination. You will not need to make your own `Readable` for this exercise. Simply use
[`fs.createReadStream`][createreadstream] instead. In between, all letters
should be capitalized with your own `Transform` stream. Then the data should be passed to your own `Writable` stream. The [`fs.appendFile`][appendfile] will be helpful
for this task.

In addition, use some other method in the `fs` module make sure executing the
program multiple times does not continue making a larger and larger
`09.Caps.json` file.

Expected:

```bash
$ cat 09.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
$ ./09.js 09_Caps.json
$ cat 09_Caps.json
{
  "LANGUAGES": {
    "JAVASCRIPT": "AWESOME",
    "C++": "DIFFICULT",
    "BASIC": "OLD"
  }
}
```

## Bonus

-   ES6 Object Destructuring

## Additional Reading

[EOF][eof]
[EOT][eot]
[FIN][fin]
[Node.js Streams Handbook][streamhandbook]
[Node.js streams][node.js streams]
[`pipe`][pipe]
[`createReadStream`][createreadstream]
[Streams2][streams2]
[Buffers][Buffers]
[`writeFile`][writefile]
[`appendFile`][appendfile]

[eof]: https://en.wikipedia.org/wiki/End-of-file
[eot]: https://en.wikipedia.org/wiki/End-of-Transmission_character
[fin]: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Connection_termination
[node.js streams]: https://nodejs.org/api/stream.html
[pipe]: https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
[createreadstream]: https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
[streamhandbook]: https://github.com/substack/stream-handbook
[streams2]: https://nodejs.org/en/blog/feature/streams2/
[Buffers]: https://nodejs.org/api/buffer.html
[writefile]: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
[appendfile]: https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
