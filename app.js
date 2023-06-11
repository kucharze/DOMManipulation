// DOM MANIPULATION

// Goal: Retail Site
// Dynamically change the Entire Site with a click of a button
// General -- Mens -- Womens -- Children​

let majorContainer = {
  mens: {
    headImage:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
    productImages: [
      {
        name: "Sneakers",
        pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      },
      {
        name: "Boots",
        pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      },
      {
        name: "Flannels",
        pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Scarves",
        pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Hoodies",
        pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Hats",
        pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80",
      },
    ],
    textDescription:
      "Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.",
    lowImage:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  womens: {
    headImage:
      "https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=",
    optionTags: ["Dresses", "Shirts", "Shoes", "Jeans"],
    productImages: [
      {
        name: "Dress",
        pic: "https://www.nautica.com/on/demandware.static/-/Sites-nau-Library/default/dw2b9b97c9/2023/dept-pages/womens/020823/0208_MB_Dresses-min.jpg",
      },
      {
        name: "Shoes",
        pic: "https://www.health.com/thmb/kEe4JSZHS-jZq6ndMXuN70hrEIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ht-best-wide-width-shoes-for-women-tout-f31017bc87444cb097ecd69d4b7b8619.jpg",
      },
      {
        name: "Jeans",
        pic: "https://oldnavy.gap.com/Asset_Archive/ONWeb/content/0029/745/704/assets/230501_12-M5101_W_DP_Sale.jpg",
      },
      {
        name: "Skirts",
        pic: "https://40plusstyle.com/wp-content/uploads/2020/05/summerskirts-1.jpg",
      },
      {
        name: "Summer Dress",
        pic: "https://www.whitehouseblackmarket.com/Product_Images/570346324_5090.jpg?imgPolicy=productMed",
      },
      {
        name: "Tops",
        pic: "https://images.contentstack.io/v3/assets/blt95bd61b348310fa3/bltbddfe53444370df3/64776721ae5aa2d7144cbcb0/M-6.04_Hero.jpg?format=pjpg&auto=webp&quality=60&fit=bounds",
      },
    ],
    textDescription:
      "Women's Clothing Sale Boasts an Unbeatable Selection. Whether you need a top that's ideal for a sunny day spent outdoors or sleeveless when working up a sweat, you'll feed what you want at the prices you like during our current women's clothing sale. ",
    lowImage:
      "https://media.istockphoto.com/id/1271796113/photo/women-is-holding-handbag-near-luxury-car.jpg?s=612x612&w=0&k=20&c=-jtXLmexNgRa-eKqA1X8UJ8QYWhW7XgDiWNmzuuCHmM=",
  },
  kids: {
    headImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2AxcMtXRGXZplATAMNgGZuMYsQNrrs64Ml6Uzgwu830uRWgdsYwoolJy_dPDhRtKiVQ&usqp=CAU",
    optionTags: ["Shirts", "Pants", "Shoes", "Coats"],
    productImages: [
      {
        name: "Shirts",
        pic: "https://target.scene7.com/is/image/Target/GUEST_26881f52-1230-42c1-afc9-f919da4bdc6c",
      },
      {
        name: "Swimwear",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRocde2MIMske_rQLNeNq370sDRUhR2JlLaw&usqp=CAU",
      },
      {
        name: "Dresses",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMI1yHW9NXOMC3CcLR3xd42YjfkAHM9lUD5g&usqp=CAU",
      },
      {
        name: "Pants",
        pic: "https://1.bp.blogspot.com/-rgWAHTDoMM4/TVqSuMtYz2I/AAAAAAAAlyk/FlVdTu09Z_M/s1600/a.jpg",
      },
      {
        name: "Sweats",
        pic: "https://i.etsystatic.com/13694911/r/il/846b9c/3078268171/il_fullxfull.3078268171_hazr.jpg",
      },
      {
        name: "Pjs",
        pic: "https://media.istockphoto.com/id/473707118/photo/weve-got-the-moves-likes-jagger.jpg?s=612x612&w=0&k=20&c=HHsnzHp256n8XDwwjztBYdLz7lyUAEmWLaD2B8rZiQ4=",
      },
    ],
    textDescription:
      "Upgrade your little one's wardrobe with a variety of boys' activewear options. We have many of your favorite brands.",
    lowImage:
      "https://media.istockphoto.com/id/875614000/photo/chilling-before-class-starts.jpg?s=612x612&w=0&k=20&c=FU7NmpZ1K3TeCkcZ7WU98BlZc7m2zN9k0siwif8D2ow=",
  },
};
// -----------------------

let mainImage = document.querySelector(".mainImg");
let option = document.querySelector(".options");
let miniOp = document.querySelectorAll(".choice");
let productBox = document.querySelector(".productContainer");
let pic = document.querySelector(".polaroid");
let textBox = document.querySelector(".textContainer");

const clearAll = () => {
  option.replaceChildren();
  productBox.replaceChildren();
  mainImage.replaceChildren();
};

const changeAll = (type) => {
  clearAll();
  changeTopPic(type);
  changeOptions(type);
  product(type);
  changePolaroid(type);
  changeTextBox(type);
};
const changeTopPic = (type) => {
  // createImage
  let newimage = document.createElement("img");
  if (type === "men") {
    newimage.setAttribute("src", majorContainer.mens.headImage);
  } else if (type === "women") {
    newimage.setAttribute("src", majorContainer.womens.headImage);
  } else if (type === "kids") {
    newimage.setAttribute("src", majorContainer.kids.headImage);
  }
  newimage.setAttribute("class", "topPic");
  // replaceWith current
  mainImage.append(newimage);
};

const changeOptions = (type) => {
  if (type === "men") {
    majorContainer.mens.optionTags.forEach((tagname) => {
      // CREATE ELE
      let txt = document.createElement("div");
      txt.innerHTML = tagname;
      // REPLACE ELEMENT WITH NEW ELEMENT
      option.append(txt);
    });
  } else if (type === "women") {
    majorContainer.womens.optionTags.forEach((tagname) => {
      // CREATE ELE
      let txt = document.createElement("div");
      txt.innerHTML = tagname;
      // REPLACE ELEMENT WITH NEW ELEMENT
      option.append(txt);
    });
  } else {
    majorContainer.kids.optionTags.forEach((tagname) => {
      // CREATE ELE
      let txt = document.createElement("div");
      txt.innerHTML = tagname;
      // REPLACE ELEMENT WITH NEW ELEMENT
      option.append(txt);
    });
  }
};

const changePolaroid = (type) => {
  if (type === "men") {
    pic.setAttribute("src", majorContainer.mens.lowImage);
  } else if (type === "women") {
    pic.setAttribute("src", majorContainer.womens.lowImage);
  } else {
    pic.setAttribute("src", majorContainer.kids.lowImage);
  }
};

const product = (type) => {
  if (type === "men") {
    majorContainer.mens.productImages.forEach((obj) => {
      let shopBox = document.createElement("img");
      shopBox.setAttribute("src", obj.pic);
      shopBox.setAttribute("class", "product");
      productBox.append(shopBox);
    });
  } else if (type === "women") {
    majorContainer.womens.productImages.forEach((obj) => {
      let shopBox = document.createElement("img");
      shopBox.setAttribute("src", obj.pic);
      shopBox.setAttribute("class", "product");
      productBox.append(shopBox);
    });
  } else {
    majorContainer.kids.productImages.forEach((obj) => {
      let shopBox = document.createElement("img");
      shopBox.setAttribute("src", obj.pic);
      shopBox.setAttribute("class", "product");
      productBox.append(shopBox);
    });
  }
};

const changeTextBox = (type) => {
  if (type === "men") {
    textBox.innerHTML = majorContainer.mens.textDescription;
  } else if (type === "women") {
    textBox.innerHTML = majorContainer.womens.textDescription;
  } else if (type === "kids") {
    textBox.innerHTML = majorContainer.kids.textDescription;
  }
};
