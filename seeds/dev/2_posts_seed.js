
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex('tutorials').del()
    .then(function () {
      // Inserts seed entries
      return knex('tutorials').insert([
        {id: 1,
          user_id: 1,
          title: "things are fun",
          url: 'www.cool-me.com',
          content: "Here is a long story aobut how cool Amir is and all of the things that he knows about stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 1000.12
        },
        {id: 2,
          user_id: 2,
          title: "I like to eat Pie",
          url: 'www.pie-me.com',
          content: "I like to eat Pie. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 0
        },
        {id: 3,
          user_id: 3,
          title: "CSS is for the brave",
          url: 'www.css-me.com',
          content: "Css is so cool. If you use to to make animations instead of using JS you'll be so happy with how fast it is. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 10
        },
        {id: 4,
          user_id: 4,
          title: "Another Title",
          url: 'www.cool-me.com',
          content: "Here is a long story aobut how cool Amir is and all of the things that he knows about stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 0
        },
        {id: 5,
          user_id: 5,
          title: "Last Title",
          url: 'www.cool-me.com',
          content: "Here is a long story aobut how cool Amir is and all of the things that he knows about stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 1.20
        },
        {id: 6,
          user_id: 6,
          title: "just kidding, this is the Last Title",
          url: 'www.cool-me.com',
          content: "Here is a long story aobut how cool Amir is and all of the things that he knows about stuff. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 1.20
        }
      ]);
    });
};
