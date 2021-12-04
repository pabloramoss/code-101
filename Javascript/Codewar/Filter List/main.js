
const filter_list = [1,2,'aasf','1','123',123];

const filteredList = filter_list.filter(function(list){
  return typeof(list) === 'number';
})
console.log(filteredList);