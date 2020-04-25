// L01 - Recap & Foundation

// Variablen
let v = 1;              // zuerst muss mit Schlüsselwort "let" die Variable deklariert werden, dann kann sie durch einen Inhalt definiert werden
v = v + 1;
console.log(v);

// Datentypen
let w = 1;              // TS verlangt Typisierung/Annotation, erkennt durch Inhalt das Typ "number" vorliegt
w = w + 1;
console.log(w);

let x = "1";            // TS verlangt Typisierung/Annotation, erkennt durch Inhalt das Typ "string" vorliegt
x = x + 1;
console.log(x);

let y = true;           // durch "true" als Schlüsselwort erkennt TS das es sich um den Typ "boolean" handelt 
y = y + 1;              // Additionsoperator "+" kann bei einem Boolean nicht verwendet werden 
console.log(y);

// Explizite Typisierung
let a: number = true;   // nach Annotation wird ein anderer Inhalt als ein Zahlenwert ls Fehler angezeigt 
a = a + 1;
console.log(a);

let b: number = 1;
b = b + "1";            // zu "b" kann kein "string" = "1" hinzugeordnet werden, da sie als "number" annotiert wurde
console.log(b);

// Array
let c = [7, true, "Hallo"];     // heterogenes Array, Elemente mit unterschiedliche Typen
console.log(c);                 // Ausgabe: [7, true, "Hallo"]
console.log(c[0]);              // Ausgabe: 7 | bei c[1] : true | bei c[2] : "Hallo" | bei c[3,4,5,...] : undefined
c[4] = [101, 102];              // an Stelle 4 wird Array mit Elementen "101, 102" eingefügt 
console.log(c);                 // Ausgabe: [7, true, "Hallo", empty, Array(2)]
console.log(c[4]);              // Ausgabe: [101, 102]

let d: number[] = [7, true, "Hallo"];   // eingeschränktes Array = homogen, Fehler da <true + "Hallo"> nicht Typ "number" entsprechen

// Assoziatives Array
let e1 = {"zahl": 7, "wahr" : true, "text": "Hallo"};
let e2 = {zahl: 7, wahr : true, "text": "Hallo"};         //// Key/Schlüssel können sowohl in "Anführungszeichen" als auch Ohne geschrieben werden
console.log(e1, e2);                            // Ausgabe: {zahl: 7, wahr: true, text: "Hallo"} {zahl: 7, wahr: true, text: "Hallo"}
console.log(e1["zahl"], e1.zahl);               // Ausgabe: 7
console.log(e1.neu);                            // Ausgabe: undefined; Fehler, da Schlüssel nicht existiert
e2[4] = [101, 102];                             // an erster Stelle wird Array mit Elementen "101, 102" (Key: 4)
console.log(e2);                                // Ausgabe: {4: Array(2), zahl: 7, wahr: true, text: "Hallo"}; neues Element vorne eingefügt 
console.log(e2["4"]);                           // Ausgabe: [101, 102]
// Zugriff auf einzelne Elemente mit numerischen Key nicht mit Punktsyntax (e2.4), nur mit Klammersyntax (e2["4"])
e2["falsch"] = false;                           // hinzufügen eines Elements, keine Zahl wird also am Ende hinzugefügt
console.log(e2);                                // Ausgabe: {4: Array(2), zahl: 7, wahr: true, text: "Hallo", falsch: false}
// wenn Zahlen als Key genutzt und hinzugefügt werden, werden vor anderen Elementen, geordnet (1, 2, 3, ...)

// Werte vs. Referenzen
let f1: number;                 //   ↓          
let f2: number;                 // Deklaration zweier Variablen - primitiver Typ
f1 = 5;                 // Definition der Ersten
f2 = f1;                // Wert der Ersten der Zweiten zuweisen
f1 = f1 + 5;            // Wert der Ersten verändern
console.log(f1);        // Ausgabe: 10
console.log(f2);        // Ausgabe: 5
// der Wert der Zweiten entspricht noch immer dem ursprünglichen Wert der Ersten

let g1: number[] = [1, 6, 8, 2];    // Deklaration einer Variable - komplexen Typs + Definition
let g2: number[] = g1;              // Deklaration einer zweiten Variable - kom.T. + zusweisen der Werte der Ersten zur Zweiten
g1[4] = 7;                  // Verändern/Hinzufügen der Werte der ersten Variable
console.log(g1);            // Ausgabe: [1, 6, 8, 2, 7]
console.log(g2);            // Ausgabe: [1, 6, 8, 2, 7]
// die Werte beider Variablen sind gleich, trotz das nur bei g1 ein neues Element hinzugefügt wurde
