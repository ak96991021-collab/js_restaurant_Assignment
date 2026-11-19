//Q no 1

// var dishes = ["Chicken Biryani", "Beef Biryani", "Chicken Pulao", "Special Biryani"];
// var dishesPrices = [350, 450, 300, 550];

// alert("1) Chicken Biryani Rs: 350 \n 2) Beef Biryani Rs: 450 \n 3) Chicken Pulao Rs: 300 \n 4) Special Biryani Rs: 550");

// var dishesNum = +prompt("Enter your Dishes number :");

// if (dishesNum >= 1 && dishesNum <= 4) {

//     var plates = +prompt("Enter your Plates :");

//     if (plates >= 1) {
//         var orderName = ['Dine-in', 'Takeaway'];
//         var orderType = +prompt("1) Dine-in \n 2) Takeaway");

//         if (orderType >= 1 && orderType <= 2) {
//             console.log(`item: ${dishes[dishesNum - 1]}`);
//             console.log(`Quantity : ${plates}`)
//             console.log(`Price: ${dishesPrices[dishesNum - 1]}`);
//             var totalBill = dishesPrices[dishesNum - 1] * plates;
//             console.log(`SubTotal : ${totalBill}`)
//             if (plates >= 5) {
//                 var discount = dishesPrices[dishesNum - 1] * plates / 10;
//                 console.log(`Discount : ${discount}`);
//             } else {
//                 console.log(`Discount : 0`)
//             }

//             console.log(`Order Type : ${orderName[orderType - 1]}`)

//             if (orderType == 1) {
//                 console.log(`Packaging Charges : 50`);

//                 console.log(`Final Bill : ${totalBill - discount + 50}`);
//             } else {
//                 console.log(`Packaging Charges : 30`);

//                 console.log(`Final Bill : ${totalBill - discount + 30}`);
//             }



//         } else {
//             console.log("Again Order");
//         }

//     } else {
//         console.log("PlZ Order");
//     }

// } else {
//     console.log("Invalid Quantity ");
// }


//Q no 2