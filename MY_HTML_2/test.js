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
