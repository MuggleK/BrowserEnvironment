;var Intl = new (class Intl{});
safefunction(Intl);
Object.defineProperties(Intl, {
    [Symbol.toStringTag]: {
        value: "Intl",
        configurable: true
    }
});

Intl['Collator'] = function Collator(){debugger;};   safefunction(Intl['Collator']);
Intl['DateTimeFormat'] = function DateTimeFormat(){debugger;};   safefunction(Intl['DateTimeFormat']);
Intl['DisplayNames'] = function DisplayNames(){debugger;};   safefunction(Intl['DisplayNames']);
Intl['ListFormat'] = function ListFormat(){debugger;};   safefunction(Intl['ListFormat']);
Intl['Locale'] = function Locale(){debugger;};   safefunction(Intl['Locale']);
Intl['NumberFormat'] = function NumberFormat(){debugger;};   safefunction(Intl['NumberFormat']);
Intl['PluralRules'] = function PluralRules(){debugger;};   safefunction(Intl['PluralRules']);
Intl['RelativeTimeFormat'] = function RelativeTimeFormat(){debugger;};   safefunction(Intl['RelativeTimeFormat']);
Intl['Segmenter'] = function Segmenter(){debugger;};   safefunction(Intl['Segmenter']);
Intl['getCanonicalLocales'] = function getCanonicalLocales(){debugger;};   safefunction(Intl['getCanonicalLocales']);
Intl['v8BreakIterator'] = function v8BreakIterator(){debugger;};   safefunction(Intl['v8BreakIterator']);

//每个模块互相不依赖 采用依赖注入模式 减少耦合
//注入到window
Object.defineProperty(window, "Intl", {
    configurable: true,
    writable: true,
    value: Intl
});