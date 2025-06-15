const groceryItems = [
    { name: "Whole Wheat Bread", category: "Bakery", mfgDate: "2025-05-01", expDate: "2025-05-15", price: 45.0 },
    { name: "Amul Butter", category: "Dairy", mfgDate: "2025-04-20", expDate: "2025-08-20", price: 55.0 },
    { name: "Tomato Ketchup", category: "Condiments", mfgDate: "2025-02-15", expDate: "2026-02-15", price: 99.0 },
    { name: "Basmati Rice", category: "Grains", mfgDate: "2025-01-10", expDate: "2026-01-10", price: 120.0 },
    { name: "Toor Dal", category: "Pulses", mfgDate: "2025-03-22", expDate: "2026-03-22", price: 90.0 },
    { name: "Maggi Noodles", category: "Snacks", mfgDate: "2025-04-05", expDate: "2025-10-05", price: 15.0 },
    { name: "Fortune Sunflower Oil", category: "Oils", mfgDate: "2025-03-01", expDate: "2026-03-01", price: 130.0 },
    { name: "Mother Dairy Milk", category: "Dairy", mfgDate: "2025-06-10", expDate: "2025-06-12", price: 24.0 },
    { name: "Salted Butter Popcorn", category: "Snacks", mfgDate: "2025-04-25", expDate: "2025-10-25", price: 35.0 },
    { name: "Brown Eggs (12 pcs)", category: "Poultry", mfgDate: "2025-06-09", expDate: "2025-06-16", price: 72.0 },
    { name: "Tata Salt", category: "Spices", mfgDate: "2025-03-15", expDate: "2027-03-15", price: 20.0 },
    { name: "Kissan Mixed Fruit Jam", category: "Spreads", mfgDate: "2025-01-30", expDate: "2026-07-30", price: 135.0 },
    { name: "Coca-Cola (2L)", category: "Beverages", mfgDate: "2025-05-15", expDate: "2025-08-15", price: 85.0 },
    { name: "Britannia Cheese Slices", category: "Dairy", mfgDate: "2025-05-05", expDate: "2025-07-05", price: 110.0 },
    { name: "Aashirvaad Atta (5kg)", category: "Grains", mfgDate: "2025-03-18", expDate: "2026-03-18", price: 275.0 },
    { name: "Haldiram's Bhujia", category: "Snacks", mfgDate: "2025-04-01", expDate: "2025-10-01", price: 55.0 },
    { name: "Green Tea Bags", category: "Beverages", mfgDate: "2025-01-20", expDate: "2026-01-20", price: 120.0 },
    { name: "Chana Masala Powder", category: "Spices", mfgDate: "2025-02-10", expDate: "2026-02-10", price: 38.0 },
    { name: "Nestlé Milkmaid", category: "Dairy", mfgDate: "2025-04-11", expDate: "2026-04-11", price: 125.0 },
    { name: "Peanut Butter", category: "Spreads", mfgDate: "2025-03-09", expDate: "2026-03-09", price: 165.0 }
];



function foreach(array,mfdate,epdate,print){
    for(let element of array){
       let dat1 = new Date(mfdate(element));
       let dat2 = new Date(epdate(element));
       let difTime = Math.abs(dat2 - dat1);
       let difDays = Math.floor(difTime/(1000 * 60 * 60 * 24));
       element.difInDays = difDays;
       print(difDays);
    }
}

foreach(groceryItems,(e) =>{return e.mfgDate},(e) =>{return e.expDate});

console.log(groceryItems);
