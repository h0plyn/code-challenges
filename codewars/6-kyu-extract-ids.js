// Complete the method so that it returns an array of all ID's passed in. 
// The method should be able to handle the case of empty data being passed in.
// Note: The only arrays that need to be traversed are those assigned to the "items" property.

var data = {
    id: 1,
    items: [{id: 2}, {id: 3, items: [{id: 4},{id: 5}]}
    ]
  }

function extractIds(data, result = []) {
  let extractor = (item) => {
    for (key in item) {

      if (key === 'id') {
        result.push(item[key]);
      }

      if (typeof item[key] === 'object') {
        extractor(item[key]);
      }

    }
  }

  return extractor(data), result
};
