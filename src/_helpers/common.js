
export default {
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
    escapeRegexCharacters: (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}