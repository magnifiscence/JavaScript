let synonyms = ["plethora", "array", "cornocopia"];
undefined

synonyms
Array(3) [ "plethora", "array", "cornocopia" ]

synonyms[1] = "variety";
"variety"

synonyms
Array(3) [ "plethora", "variety", "cornocopia" ]

let lastItem = synonyms.pop();
undefined

lastItem
"cornocopia"

synonyms
Array [ "plethora", "variety" ]

synonyms.push("multitude");
3

synonyms
Array(3) [ "plethora", "variety", "multitude" ]

["c","a", "d", "b"].sort()
Array(4) [ "a", "b", "c", "d" ]

[100, 10, 1].sort()
Array(3) [ 1, 10, 100 ]

["100","2", "5"]
Array(3) [ "100", "2", "5" ]

["lions", "tigers", "bears"].join(" & ")
"lions & tigers & bears"
Array(6) [ 1, 2, 3, 4, 5, 6 ]