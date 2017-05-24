
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries_modules').del()
    .then(function() {
      // Inserts seed entries
      return knex('entries_modules').insert([
        {
          id: 1,
          entry_id: 1,
          module_id: 3,
          font: 'sans-serif',
          content: ['Events of Today']
        },
        {
          id: 2,
          entry_id: 1,
          module_id: 4,
          font: 'sans-serif',
          content: ['Happy']
        },
        {
          id: 3,
          entry_id: 1,
          module_id: 1,
          font: 'sans-serif',
          content: ['Run', 'Apply to 3 jobs', 'Listen to JavaScript Jabber 180', 'Review May Spending', 'Practice for Technical Interview']
        },
        {
          id: 4,
          entry_id: 1,
          module_id: 2,
          font: 'sans-serif',
          content: ['Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.', 'Steve Jobs']
        },
        {
          id: 5,
          entry_id: 1,
          module_id: 5,
          font: 'sans-serif',
          content: ['https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg', 'I wish I was as wise as an Owl.']
        },
        {
          id: 6,
          entry_id: 1,
          module_id: 6,
          font: 'sans-serif',
          content: ['Fap tilde shoreditch snackwave vape cliche. Artisan slow-carb asymmetrical, craft beer cornhole truffaut iPhone wolf occupy. Church-key sartorial tousled, meggings locavore bitters 3 wolf moon gentrify literally master cleanse synth. Green juice quinoa copper mug post-ironic craft beer vinyl. Kogi kombucha brunch, franzen portland drinking vinegar live-edge hot chicken DIY fanny pack post-ironic cliche forage disrupt skateboard. Microdosing kombucha everyday carry pop-up. Artisan cornhole lyft, listicle man bun seitan actually franzen banjo unicorn bitters brooklyn. Vegan pok pok sustainable jean shorts YOLO tumeric. Banjo semiotics XOXO, fap humblebrag viral helvetica lomo franzen subway tile gluten-free hashtag YOLO. Tofu plaid chia glossier chambray. Tofu dreamcatcher freegan try-hard, farm-to-table sartorial pop-up. Taxidermy chicharrones slow-carb, direct trade yuccie chartreuse humblebrag listicle keytar raclette roof party franzen craft beer schlitz. Subway tile normcore distillery, vice pickled edison bulb blue bottle fingerstache prism semiotics. Meggings pabst chambray, blue bottle kombucha taxidermy drinking vinegar viral.']
        },
        {
          id: 7,
          entry_id: 2,
          module_id: 1,
          font: 'sans-serif',
          content: ['Research open positions', 'Call HR at Zayo', 'Network with 2 people', 'Modify Resume', 'Finish Personal Website']
        },
        {
          id: 8,
          entry_id: 2,
          module_id: 2,
          font: 'sans-serif',
          content: ['Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it.', 'Kevyn Aucoin']
        },
        {
          id: 9,
          entry_id: 2,
          module_id: 3,
          font: 'sans-serif',
          content: ['Job Prep']
        },
        {
          id: 10,
          entry_id: 2,
          module_id: 4,
          font: 'sans-serif',
          content: ['Motivated']
        },
        {
          id: 11,
          entry_id: 2,
          module_id: 5,
          font: 'sans-serif',
          content: ['https://cdn01.vulcanpost.com/wp-uploads/2014/09/bigstock-Business-woman-holding-a-card-29452100.jpg', 'Hire me! I need a job']
        },
        {
          id: 12,
          entry_id: 2,
          module_id: 6,
          font: 'sans-serif',
          content: ['Lorem ipsum dolor sit amet, vim et wisi bonorum nominavi, at quodsi ponderum per. Ut eum ornatus tacimates. Ad deserunt recusabo cum, etiam detraxit ex pri. Ea sed illum animal, te eum choro blandit euripidis. Fierent principes honestatis vel an, porro apeirian explicari eum no, accusam adolescens eu vis. Qui ea torquatos percipitur. In vix fugit paulo omittam. Quo in aliquid appareat appellantur. Ex sea placerat apeirian, ea deleniti theophrastus pro. Nam stet noluisse ad, et his eros verear deserunt, id sonet urbanitas scripserit est. Lorem ipsum dolor sit amet, vim et wisi bonorum nominavi, at quodsi ponderum per. Ut eum ornatus tacimates. Ad deserunt recusabo cum, etiam detraxit ex pri. Ea sed illum animal, te eum choro blandit euripidis. Fierent principes honestatis vel an, porro apeirian explicari eum no, accusam adolescens eu vis. Qui ea torquatos percipitur. In vix fugit paulo omittam. Quo in aliquid appareat appellantur. Ex sea placerat apeirian, ea deleniti theophrastus pro. Nam stet noluisse ad, et his eros verear deserunt, id sonet urbanitas scripserit est.']
        },
        {
          id: 13,
          entry_id: 3,
          module_id: 1,
          font: 'sans-serif',
          content: ['Search on builtincolorado.com', 'Finalize resume', 'Take someone out to coffee at a company I want to work at']
        },
        {
          id: 14,
          entry_id: 3,
          module_id: 2,
          font: 'cursive',
          content: ['Don\'t blame others as an excuse for your not working hard enough.', 'Unknown']
        },
        {
          id: 15,
          entry_id: 3,
          module_id: 3,
          font: 'sans-serif',
          content: ['Job Board - Looking Forward']
        },
        {
          id: 16,
          entry_id: 3,
          module_id: 4,
          font: 'sans-serif',
          content: ['Content']
        },
        {
          id: 17,
          entry_id: 3,
          module_id: 5,
          font: 'sans-serif',
          content: ['https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg', 'Can\'t wait for my new job!']
        },
        {
          id: 18,
          entry_id: 3,
          module_id: 6,
          font: 'sans-serif',
          content: ['Searching for a job has been challenging! But I have faith I will find a job that lets me be creative and happy!']
        },
        {
          id: 19,
          entry_id: 4,
          module_id: 1,
          font: 'sans-serif',
          content: ['Do Laundry', 'Eat all 3 meals', 'Take a walk']
        },
        {
          id: 20,
          entry_id: 4,
          module_id: 2,
          font: 'cursive',
          content: ['Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy', 'Robert Tew']
        },
        {
          id: 21,
          entry_id: 4,
          module_id: 3,
          font: 'sans-serif',
          content: ['May 22nd, 2017']
        },
        {
          id: 22,
          entry_id: 4,
          module_id: 4,
          font: 'sans-serif',
          content: ['Happy']
        },
        {
          id: 23,
          entry_id: 4,
          module_id: 5,
          font: 'sans-serif',
          content: ['https://upload.wikimedia.org/wikipedia/en/5/56/Flatirons_with_Spring_flowers.jpg', 'The flatirons keep me centered!']
        },
        {
          id: 24,
          entry_id: 4,
          module_id: 6,
          font: 'sans-serif',
          content: [' Easy day, piece of cake']
        },
        {
          id: 25,
          entry_id: 5,
          module_id: 1,
          font: 'sans-serif',
          content: ['Do Laundry', 'Eat all 3 meals', 'Take a walk']
        },
        {
          id: 26,
          entry_id: 5,
          module_id: 2,
          font: 'cursive',
          content: ['Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy', 'Robert Tew']
        },
        {
          id: 27,
          entry_id: 5,
          module_id: 3,
          font: 'sans-serif',
          content: ['May 22nd, 2017']
        },
        {
          id: 28,
          entry_id: 5,
          module_id: 4,
          font: 'sans-serif',
          content: ['Happy']
        },
        {
          id: 29,
          entry_id: 5,
          module_id: 5,
          font: 'sans-serif',
          content: ['https://upload.wikimedia.org/wikipedia/en/5/56/Flatirons_with_Spring_flowers.jpg', 'The flatirons keep me centered!']
        },
        {
          id: 30,
          entry_id: 5,
          module_id: 6,
          font: 'sans-serif',
          content: [' Easy day, piece of cake']
        },
        {
          id: 31,
          entry_id: 6,
          module_id: 1,
          font: 'sans-serif',
          content: ['Do Laundry', 'Eat all 3 meals', 'Take a walk']
        },
        {
          id: 32,
          entry_id: 6,
          module_id: 2,
          font: 'cursive',
          content: ['Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy', 'Robert Tew']
        },
        {
          id: 33,
          entry_id: 6,
          module_id: 3,
          font: 'sans-serif',
          content: ['May 22nd, 2017']
        },
        {
          id: 34,
          entry_id: 6,
          module_id: 4,
          font: 'sans-serif',
          content: ['Happy']
        },
        {
          id: 35,
          entry_id: 6,
          module_id: 5,
          font: 'sans-serif',
          content: ['https://upload.wikimedia.org/wikipedia/en/5/56/Flatirons_with_Spring_flowers.jpg', 'The flatirons keep me centered!']
        },
        {
          id: 36,
          entry_id: 6,
          module_id: 6,
          font: 'sans-serif',
          content: [' Easy day, piece of cake']
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'entries_modules_id_seq\', (SELECT MAX(id) FROM entries_modules));')
    })
}
