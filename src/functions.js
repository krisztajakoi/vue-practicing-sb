const bela = data => {
  list();

  // lehet itt is a tömböd
  const myArray1 = [];
  // list all completed todos
  function list() {
    //vagy itt
    const myArray2 = [];
    for (var i = 0; i < data.length; ++i) {
      // console.log(data[i])
      if (data[i].completed) {
        // console.log('completed: ', data[i]);
      }
    }
  }
  console.log(myArray1);
};

// convert array to an object where the the properties are the item ids (not the user id!)
// create arrays by users (each array should contain items from the same user)
// list those items that contains the word "est" within the description property
// extend all items with another property that contains the character length of the description
// create one string from the 1st word of the descriptions. Use '-' character between words
export const practice = function(scope) {
  console.log("this is where we get the data");
  scope.$http
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(({ data }) => {
      bela(data);
    });
};
