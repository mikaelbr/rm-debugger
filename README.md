# Codemod for removing `debugger;`

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Simplest [`codemod`](https://github.com/facebook/jscodeshift) you can think of,
but is still handy: Remove all `debugger;` statements from your code.

You could also do a regex replace for this, but it wouldn't be as stable
and predictable and is much likely to miss something, all though removing
`debugger;` seems pretty straight forward.

## Usage from terminal



Install using

```
npm install -g rm-debugger
```

Run:

```
rm-debugger ./my/src
```

Usage

```shell
Usage: rm-debugger <path>... [options]

path     Files or directory to transform

Options:
   -c, --cpus      (all by default) Determines the number of processes started.
   -v, --verbose   Show more information about the transform process  [0]
   -d, --dry       Dry run (no changes are made to files)
   -p, --print     Print output, useful for development
   --babel         Apply Babel to transform files  [true]
   --extensions    File extensions the transform file should be applied to  [js]
```

Options same as running [`jscodeshift`](https://github.com/facebook/jscodeshift) directly,
but with a predefined codemod.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/rm-debugger
[npm-image]: http://img.shields.io/npm/v/rm-debugger.svg?style=flat

[travis-url]: http://travis-ci.org/mikaelbr/rm-debugger
[travis-image]: http://img.shields.io/travis/mikaelbr/rm-debugger.svg?style=flat
