const context = {
  title: 'CORONAVIUS Grocery Cleaning Guide',
  body: 'Everyone is having a difficult time deciding how much risk they are willing to take during the current COVID-19 pandemic.  This guide was created to help people minimize the risk associated with bringing groceries into their home.  Groceries seem like they should be safe, but from production to transportation to sitting on shelves, there are dozens of opportunities for COVID-19 to attach to the surface of your groceries.  While we cannot completely eliminate the risk of infection, we can minimize it!  Please use the following guide to help your household.',
  instruments: [
    {
      image: 'https://assets.fishersci.com/TFS-Assets/CCG/Dupont-Personal-Protection/product-images/31hJnaRnwcL.jpg-650.jpg',
      name: 'Cleaning Station',
      description: 'It is important to set up a single area for cleaning your groceries.  This will limit the possible areas for cross contamination and streamline the porcess.',
      price: ''
    },
    {
      image: 'https://cdn.thomasnet.com/insights-images/embedded-images/bea03b4e-0494-4a04-a58c-13c486bec48d/fbbdc284-997d-446d-b460-54e59319b937/FullHD/shutterstock_1607293264-min.jpg',
      name: 'Gloves, Disinfectant Wipes or Spray',
      description: 'Using nitrile or latex gloves during the cleaning process will both protect your skin from cleaning chemicals and prevent the virus from getting on your hands.  If you do not have gloves, thourghly wash your hands before and after cleaning your groceries and do not touch your face while conducting the cleaning.',
      price: '',
    },
    {
      image: 'https://www.meijer.com/content/dam/meijer/product/0070/88/2068/69/0070882068698_1_A1C1_1200.png',
      name: 'Packaged Meat',
      description: 'Packaged meat presents a challenge since it must enter your refridgerator immediately.  Wipe down all sides of the packaging with a disinfecting wipe, or apply a mist of disinfecting spray from a bottled product to all sides and then wipe it with a dry towel.',
      price: ''
    },
    {
      image: 'https://www.seriouseats.com/images/2014/01/20140122-taste-test-nuggets-overhead-primary.jpg',
      name: 'Frozen Food',
      description: 'Frozen food generally comes in a plastic container, so the process is just like the one used for packaged meat.  Wipe down all sides of the packaging with a disinfecting wipe, or apply a mist of disinfecting spray from a bottled product to all sides and then wipe it with a dry towel.',
      price: ''
    },
    {
      image: 'https://www.minimus.biz/Images/F25-2509105-4100bg-1.jpg',
      name: 'Cardboard Packaged Food',
      description: 'The coronavirus has a relatively short life span on cardboard items. If possible you can leave the cardboard items out for 24 hours to eliminate the virus. If you need to use the items in a shorter time span, wipe the box down with a disinfectant.',
      price: ''
    }
  ]
};
const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;

/*import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
  <p1>{new Date()}</p1>, 
  document.getElementById('app')
  );
 */
let curDate = document.createElement('p');
curDate.id = 'info'; 
curDate.innerHTML = new Date();
document.getElementById('app').appendChild(curDate);

