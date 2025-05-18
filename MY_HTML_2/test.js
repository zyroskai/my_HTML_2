//NODE JS

/*node js object*/
const sum = {
name:'kailash',
age:'20',
fun : function tem(){
   console.log('test '+ this.name);
 }
 }
   console.log(sum.tem);



/*Arrow funtion in array*/
const arrays = ["apple","ball"];

console.log(arrays.map( (tem)=>{ return tem+' Hello'}))




/*Arrow funtion in array simpliefed*/

const arrays1 = ["apple","ball"];

console.log(arrays1.map( tem => tem+' Hello'))



/*Copy array*/
const arrays = ['apple','ball']
const arrays1=  arrays.slice()

arrays.push('cat')

console.log(arrays1);
console.log(arrays);



/*copy elements in array with spread operator*/
const arrays = ['apple','ball']
const arrays1 = [...arrays]

arrays1.push('cat')

console.log(arrays1);
console.log(arrays);



/*it's also possible to add elements into array while copying elements in array using spread operator*/
const arrays = ['apple','ball']
const arrays1 = [...arrays,'cat']

arrays1.push('dog')

console.log(arrays1);
console.log(arrays);



/*copy elements in array without spread operator*/
const arrays = ['apple','ball']
const arrays1 = [arrays]

arrays1.push('cat')

console.log(arrays1);
console.log(arrays);


/*it's also possible to add objects into array while copying elements in array using spread operator*/
const food = {fruit:'apple'};
const eat = {...food, veg:'carrot'};
console.log(eat,food);


/* Print elements in array using he below methods*/
const hobbies = ['sports','cookies',2];
for(const hobby of hobbies)
{
console.log(hobby+' test');
}
--------------------------------------------------------------
console.log(hobbies.map((hobby)=> { return hobby+'test'}));
--------------------------------------------------------------
console.log(hobbies.map((hobby)=> hobby+'test'));

