var chocolateBars =  ["snickers", "hundred grand" , "kit kat", "skittles"];




function addElementToBeginningOfArray(array, someElement) {
	return [someElement,...array] }
	




function destructivelyAddElementToBeginningOfArray(array,someElement){
  array.unshift(someElement)
  return array
};



function destructivelyAddElementToEndOfArray(array, someElement) 
{
  array.push(someElement)
  return array
}





function accessElementInArray(array, index){
  return array[index]
  
}



function destructivelyRemoveElementFromBeginningOfArray(array){

  array.shift()
  return array
  
}

function destructivelyRemoveElementFromEndOfArray(array){

  array.pop()
  return array
  
}

function removeElementFromBeginningOfArray (array){
  array = array.slice(1)
  return array
}

function addElementToEndOfArray(array,element){
  array = [...array,element]
  return array  
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length -1)
  return array
  
}