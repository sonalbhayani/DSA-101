let map=new Map();

// checkthe map is empty or not using size property
if(map.size===0) 
console.log("empty");
else
console.log("not Empty");

// check the map is empty or not using for of loop
let isEmpty=true;
for(let [k,v] of map){
    isEmpty=false;
}
if(isEmpty) 
console.log("empty");
else
console.log("not Empty");

// check the map is empty or not using keys() method of map
let result= map.keys().next().done;
if(result) 
console.log("empty");
else
console.log("not Empty");

// / check the map is empty or not using entries() method of map
// console.log(map.entries().next().done);
let result1= map.entries().next().done;
if(result1) 
console.log("empty");
else
console.log("not Empty");

map.set(1,'abc');
map.set(3,'xyz');
map.set(2,'pqr');
// convert map to array using [...spreat operator]
// console.log(map);

// // sort the map using map.entries method


let arr=[...map];
console.log(arr)
// convert map to array usinf Array.from() method
let arr1=Array.from(map);
console.log(arr1);
// convert map to array using forEach() mathod
let arr2=[];
map.forEach((key,value)=>{
    arr2.push({value,key});
});
console.log(arr2)
let map3=new Map([...map].sort());
console.log(map3);

let map4=new Map(Array.from(map).sort((a,b)=>a[1]-b[1]));
console.log(map4);


// convert array of object to map using array map method

let a=[
    {'id':1,'value':100},
    {'id':2,'value':200},
    {'id':3,'value':300},
    ];
let map1=new Map(a.map((ele)=>[ele.id,ele.value]));
console.log(map1);

// convert array of object to map using array reduce method

let m=a.reduce((acc,o)=>{
    acc.set(o.id,o.value);
    return acc;
},new Map());
console.log(m);

// convert array of object to map using array forEach method

let m1=new Map();
a.forEach((ele)=>m1.set(ele.id,ele.value));
console.log(m1);

// convert array of object to map using  for of loop
let m2=new Map();
for(let o of a){
    m2.set(o.id,o.value);
}
console.log(m2);


// convert array of object to map using map method
let m3=new Map(a.map(({id,value})=>[id,value]));
console.log(m3);
