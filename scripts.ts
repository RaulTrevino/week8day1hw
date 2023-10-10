// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */

type Student={
    id:string,
    name:string
    age:number,
    isTired:boolean,
    projectsCompleted:string[]
    pet?:string
} 

let student1:Student = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}


let student2:Student= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3:Student = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 


// Question #2

// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function  */

type Fruit={
  color:string,
  shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null

function printFruit(fruit:Fruit|null):void{
    if(fruit){
        console.log(fruit.color)
    }else{
        console.log(`You ate my fruit already`)
    }

}
// console.log(apple.color)
printFruit(eaten)



// Question #3

// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
type Book={
  isbn:string,
  title:string,
  author:string
}

type DigitalBook={
  fileType:string,
}

type Ebook = Book&DigitalBook
const eleBook :Ebook={
    isbn:'bookid',
    title:'book name',
    author:'R.L Stein',
    fileType:'Scary'
}


// Question #4

// Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

// - All ShopItems have an numeric id that can not be edited 
// - All ShopItems have a price
// - All ShopItems have a description
// - Some ShopItems have a color
// - All ShopItems have a Category represented with an enum 
//     - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
// - All ShopItems have a list of keywords used to help search for the ShopItem 
//     - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

// After Creating the `ShopItem` type create 3 items using this type */

type ShopItem={
    readonly id:number,
    price:number,
    description:string,
    color:string,
    keywords:string[],
    catagories:Categories}   
 enum Categories{
    TShirt='tee',
    Shoes='shoes',
    Pants='pants',
    Cup='cup',
    Mask='mask',
}console.log(Categories.TShirt)

// type storeItems=ShopItem& Categories
// const itemsinstore : storeItems = {
//     id:1,
//     price:10,
//     description:'shirt,pants,hat',
//     color:'red,yellow,black,yellow',
//     keywords:['Ironman,Marvel,Tony Stark,Hulk,Marvel,Hulk Smash'],
//     Catagories:'shirt=1,shoes=2,pants=3,hats=4',

// } 

    let item1:ShopItem={
        id:1,
        price:50,
        description:'t-Shirt',
        color:'Red',
        keywords:['Ironman','Marvel','Tony Stark'],
        catagories:Categories.TShirt
    }
        
    
        
    let item2:ShopItem={
        id:2,
        price:20,
        description:'Ironman Cup',
        color:'Red,Gold',
        keywords:['Ironman','Marvel','Tony Stark'],
        catagories:Categories.Cup
        }

    let item3:ShopItem={
        id:3,
        price:60,
        description:'Hulk Mask',
        color:'Green',
        keywords:['Hulk','Marvel','Hulk Smash'],
        catagories:Categories.Mask
        }    

        console.log(item1,item2,item3)