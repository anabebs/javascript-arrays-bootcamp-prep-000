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
<<<<<<< HEAD

  array.shift()
  return array
  
}

function destructivelyRemoveElementFromEndOfArray(array){

  array.pop()
=======
  
  array.shift()
>>>>>>> b452be61c4f8a9beaee73e834dd4eb046177a867
  return array
  
}

<<<<<<< HEAD
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
=======
function 
>>>>>>> b452be61c4f8a9beaee73e834dd4eb046177a867
