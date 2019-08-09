
var cars = [
    { brandName : "Toyota", model : "Land Cruiser", productionYear : 2015},
    { brandName : "Skoda", model : "Oktavia", productionYear : 2004},
    { brandName : "Audi", model : "A5", productionYear : 2000},
    { brandName : "Mersedes-benz", model : "W213", productionYear : 2010},
    { brandName : "Toyota", model : "Corolla", productionYear : 1999},
    { brandName : "Audi", model : "A7", productionYear : 2004},
    { brandName : "Toyota", model : "Land Cruiser", productionYear : 2011},
    { brandName : "Mersedes-benz", model : "A170", productionYear : 2004},
    { brandName : "Mersedes-benz", model : "W213", productionYear : 2006},
    { brandName : "Skoda", model : "Fabia", productionYear : 1995},
    { brandName : "Audi", model : "A7", productionYear : 2003},
    { brandName : "Tesla", model : "S", productionYear : 2011},
]

//functions

function Car(brandName, model, productionYear){
    this.brandName = brandName;
    this.model = model;
    this.productionYear = productionYear;
};

function showData(data){
    console.log(data);
};

$("#groop-by-brandname").click(function(){
    var gropedByBrandName= _.groupBy(cars, "brandName"); 
    showData(gropedByBrandName);
});

$("#groop-by-model").click(function(){
    var gropedByModel = _.groupBy(cars, "model"); 
    showData(gropedByModel);
});

$("#groop-by-prodyear").click(function(){
    var gropedByProdYear = _.groupBy(cars, "productionYear"); 
    showData(gropedByProdYear);
});

$("#filter-by-year").click(function(){
    var prodYear = prompt("Enter Production Year", 2000);
    var filteredByProdYear = _.filter(cars, function(unit){   
        return unit.productionYear == prodYear;
    }); 
    showData(filteredByProdYear);
});

$("#newest-car").click(function(){
    var maxProdYear = _.max(cars, function(unit){
        return unit.productionYear;
    }); 
    showData(maxProdYear);
});

$("#oldest-car").click(function(){
    var minProdYear = _.min(cars, function(unit){
        return unit.productionYear;
    }); 
    showData(minProdYear);
});