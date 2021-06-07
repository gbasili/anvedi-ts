'use strict'
export type QueryAtom = {
    f: string,
    o: string,
    v: string,
    t: string
}

export type SortingAtom = {
    f: string,
    a: boolean
}

/*
 "q": [
        { "f": "Id", "o": "gt", "v": 0, "t": "s" }
      ],
      "s": [{ "f": "Id", "a": true }],
      "p": { "l": 100, "o": 0 },
      "l":[],
      "i": []
*/

