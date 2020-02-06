db.Restaurants.insert({
"address": {
    "building": "1221",
    "street": "Apple Str",
    "zipcode": "54321"
},
"city": "Toronto",
"cuisune": "Fast Food",
"name": "Yummy Food Place Thing",
"restaurant_id": 12345678
});

db.getCollection('Restaurants').find({})

db.getCollection('Restaurants').find({
    "cuisine": "Japanese"
})

db.getCollection('Restaurants').find(
    {"cuisine": "Japanese"},
    {"cuisine":1, "name":1}
)

db.getCollection('Restaurants').find({}).sort({KEY:1})