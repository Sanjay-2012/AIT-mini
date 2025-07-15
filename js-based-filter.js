
let products = [
  {
    productPhoto: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/r/7/z/1-fk-183bdtgch-timewear-men-original-imahb5w5nwjyqvuk.jpeg?q=70",
    productName: "TIMEWEAR",
    productDescription: "Formal Blue Dial Day and Date Watch",
    productPrice: 299,
    category: "Watch"
  },
  {
    productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfOHvIZbIQJZlSSWLnEAA-3MQb_xHIrwMeA&s",
    productName: "RUSTET",
    productDescription: "Day & Date Analog Watch - For Boys",
    productPrice: 399,
    category: "Watch"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/p/b/c/-original-imahc78p69ccgzre.jpeg?q=70",
    productName: 'PETER ENGLAND ',
    productDescription: "Analog Watch - For Men PE000008F",
    productPrice: 899,
    category: "Watch"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70",
    productName: "Samsung Galaxy F05",
    productDescription: "4 GB RAM | 64 GB ROM",
    productPrice: 6999,
    category: "Mobiles"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/i/a/-original-imah2y7hazjdbrzh.jpeg?q=70",
    productName: 'realme GT 6 ',
    productDescription: "12 GB RAM | 256 GB ROM  | 32MP Front Camera 5500 mAh  ",
    productPrice: 27999,
    category: "Mobiles"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/y/k/-original-imah4t2mazqcnkrh.jpeg?q=70",
    productName: 'realme P2 Pro 5G',
    productDescription: "12 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Battery 7s Gen2 Processor",
    productPrice: 18299,
    category: "Mobiles"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/z/4/w/-original-imahd2uywywyg8eh.jpeg?q=70",
    productName: "Samsung TV 32",
    productDescription: "HD Ready | Tizen OS | 20W Sound",
    productPrice: 11999,
    category: "Tv"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/r/0/-original-imahd98mswfhfqxc.jpeg?q=70",
    productName: 'XIAOMI by Mi Fire Tv 80 cm (32 inch)',
    productDescription: "Operating System: FireTv OS Resolution: HD Ready 1366 x 768 Pixels Sound Output: 20 W Refresh Rate: 60 Hz",
    productPrice: 11999,
    category: "Tv"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/d/n/c/-original-imahdzrcyffb5uzh.jpeg?q=70",
    productName: 'LG AI TV UR7500 126 cm (50 inch)',
    productDescription: "Operating System: WebOS Resolution: Ultra HD (4K) 3840 x 2160 Pixels Sound Output: 20 W Refresh Rate: 60 Hz",
    productPrice: 36999,
    category: "Tv"
  },
];

let product = "<section>";
for (let i = 0; i < products.length; i++) {
   product += '<figure>';
   product += '<img src="' +products[i].productPhoto + '" alt="cricket" /><br><br>';
    product += '<figcaption>' + products[i].productName + '</figcaption> <br>';
    product += '<figcaption>' + products[i].productDescription + '</figcaption> <br>';
    product += '<figcaption>' + products[i].productPrice+ '</figcaption>';
    product += '</figure>';
}
product += "</section>";

document.write(product);
