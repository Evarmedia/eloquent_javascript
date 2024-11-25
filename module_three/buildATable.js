const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  
  // Get the parent node
  const parent = document.getElementById("mountains");
  
  // Create the table
  const table = document.createElement("table");
  
  // Get the key names from the first object
  const keyNames = Object.keys(MOUNTAINS[0]);
  
  // Create the header row
  const headerRow = document.createElement("tr");
  keyNames.forEach(keyName => {
    const headerCell = document.createElement("th");
    headerCell.textContent = keyName;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);
  
  // Create the data rows
  MOUNTAINS.forEach(mountain => {
    const row = document.createElement("tr");
    keyNames.forEach(keyName => {
      const cell = document.createElement("td");
      const value = mountain[keyName];
      cell.textContent = value;
      // Right-align cells with number values
      if (typeof value === "number") {
        cell.style.textAlign = "right";
      }
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  
  // Add the table to the parent node
  parent.appendChild(table);