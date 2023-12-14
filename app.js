// create a function and following the progressions inside the function.
let getMessage = document.getElementById('message');
// Progression 1: Create a promise call which fetches data

// using async function that will create a promiseof fetched data and handling that promise by using async.
 async function fetchedandPrint(){
  try{
    const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(fetchedData)
    const data =await fetchedData.json();
    console.log(data)
    // Progression 2: Display the fetched data in the form of list
    const stored = data.map((person) => {
      const eachPersonDiv = document.createElement('div');
      eachPersonDiv.className = 'player';
     
      const createTagandAdd = (tagName,description) => {
        const tag = document.createElement(tagName);
        tag.innerText =description;
        eachPersonDiv.appendChild(tag);
      };
      createTagandAdd('h1',person.name);
      createTagandAdd('li', person.email);
      createTagandAdd('li', person.phone);
      createTagandAdd('li', person.website);
      createTagandAdd('li', person.company.name);
      createTagandAdd('li', person.address.city);
      createTagandAdd('li', person.address.zipcode);

      return eachPersonDiv;
    });
    // for button
    const button=document.getElementById('btnGet');
let click=true;
button.addEventListener("click",function(){
  if (click){
    stored.forEach((element) => {
      getMessage.style.display="grid";
      getMessage.appendChild(element);
      click=false;
    })
  }
  else{
    getMessage.style.display='none';
    click=true;
  }
})}
// Progression 3: When the promise call is rejected then throw an error
    catch (error){
        console.log('Promise rejected.');
        console.log(error.message);
      }
}

fetchedandPrint();

