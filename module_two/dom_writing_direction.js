function characterScript(code) {
    // Sample implementation that searches for a character script based on the Unicode value.
    // You can use a complete list of scripts with direction information if available.
    // This is an example script array.
    const SCRIPTS = [
      { name: "Latin", ranges: [[65, 90], [97, 122]], direction: "ltr" },
      { name: "Arabic", ranges: [[1536, 1791]], direction: "rtl" },
      // Add other scripts as needed
    ];
  
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => code >= from && code < to)) {
        return script;
      }
    }
    return null;
  }
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({ name, count: 1 });
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");
  
    if (scripts.length === 0) return "ltr"; // Default to 'ltr' if no scripts found
  
    return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  
  console.log(dominantDirection("Hello!")); // → ltr
  console.log(dominantDirection("Hey, مساء الخير")); // → rtl
  