let transform = (object) => {
  let transformed = {};
  for(let key in object){
        let value = object[key];
        let item;
        for(let j=0; item = value[j]; j++){
            transformed[item.toLowerCase()] = parseInt(key);
        }
  }
  return transformed;
};