
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1HGBH41JXMN109186', make: 'Volkswagen', model: 'Gti', mileage: '5,420', automatic: 'false', title: 'clean'},
        {VIN: '2HGBH41JXMN109186', make: 'BMW', model: 'M3', mileage: '18,125', automatic: 'false', title: 'clean'},
        {VIN: '3HGBH41JXMN109186', make: 'Honda', model: 'Pilot', mileage: '12,931', automatic: 'true', title: 'salvage'},
        {VIN: '4HGBH41JXMN109186', make: 'Mazda', model: 'Miata', mileage: '22,725', automatic: 'true', title: 'lemon'}
      ]);
    });
};
