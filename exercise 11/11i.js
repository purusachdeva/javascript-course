function minMax(arr) {
  if(arr.length === 0) {
    return {
      min: NULL,
      max: NULL
    };
  }


  obj = {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER
  };

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > obj.max) {
      obj.max = arr[i];
    }

    if(arr[i] < obj.min) {
      obj.min = arr[i];
    }
  }

  return obj;
}

console.log(minMax([3]));

words = ['apple', 'grape', 'apple', 'apple'];

function countWords(words) {
  obj = {};

  for(let i = 0; i < words.length; i++) {
    if(obj[words[i]] === undefined) {
      obj[words[i]] = 1;
    } else {
      obj[words[i]]++;
    }
  }

  return obj;
}

console.log(countWords(words));