const context = {
    title: 'CORONAVIUS Grocery Cleaning Guide',
    body: 'Everyone is having a difficult time deciding how much risk they are willing to take during the current COVID-19 pandemic.  This guide was created to help people minimize the risk associated with bringing groceries into their home.  Groceries seem like they should be safe, but from production to transportation to sitting on shelves, there are dozens of opportunities for COVID-19 to attach to the surface of your groceries.  While we cannot completely eliminate the risk of infection, we can minimize it!  Please use the following guide to help your household.',
    instruments: [
      {
        image: '',
        name: '',
        description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
        price: '$1,999.00',
        sale: '$1,699.89'
      },
      {
        image: '',
        name: 'Electric Guitar',
        description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
        price: '$599.99'
      },
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/bass-guitar.png',
        name: 'Bass Guitar',
        description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
        price: '$624.99'
      },
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/drum-kit.png',
        name: 'Drum Kit',
        description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
        price: '$649.00',
        sale: '$349.00'
      },
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/violin.png',
        name: 'Violin',
        description: 'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
        price: '$245.00'
      }
    ]
  };
  const templateElement = document.getElementById("templateHB");
  const templateSource = templateElement.innerHTML
  const template = Handlebars.compile(templateSource);
  const compiledHtml = template(context);
  document.getElementById('information').innerHTML = compiledHtml;