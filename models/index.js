const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

// Many to Many relationship requires two belongstoMany methods

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

/*Location.hasMany( Traveller, {
  through: {
    model: Trip,
    unique: false
  }
}

)*/ 

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };
