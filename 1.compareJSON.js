function areEqualJSONObjects(json1, json2) {
    // Step 1: Convert JSON strings to objects
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);
  
    // Step 2: Sort the properties of each object
    const sortedObj1 = sortObjectProperties(obj1);
    const sortedObj2 = sortObjectProperties(obj2);
  
    // Step 3: Compare the sorted objects
    const areEqual = JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2);
    return areEqual;
  }
  
  function sortObjectProperties(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(sortObjectProperties);
    }
  
    const sortedObj = {};
    Object.keys(obj).sort().forEach(key => {
      sortedObj[key] = sortObjectProperties(obj[key]);
    });
  
    return sortedObj;
  }
  
  // Example usage:
  const json1 = '{"name": "person 1", "age": 30}';
  const json2 = '{"age": 30, "name": "person 1"}';
  
  const result = areEqualJSONObjects(json1, json2);
  console.log(result); // Output: true
  