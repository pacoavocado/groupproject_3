const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "【﻿ＶＩＥＷ N O N E】" },
    { name: "ＳＴΛＴＵΞＳ" },
    { name: "ᴚ∀˥˥Ǝ⊥SᴚƎ⊥NI" },
    { name: "ㄥ　卂　丂　乙" },
    { name: " ⓖ𝐥𝕚ţ匚н" },
    { name: "𝓂𝕚ⓢς乇𝔩lΔᑎｅό𝕦𝓼" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "F_L_Y_I_N_G_*_G_U_Y",
      description: "person flying through vaperwave landscape.",
      image: "supermanButt.gif",
      category: categories[1]._id,
      price: 2.99,
      quantity: 5,
    },
    {
      name: "J_E_L_L_O_*_S_C_U_L_P_T_U_R_E",
      description: "female sculpture",
      image: "jellostatue.gif",
      category: categories[1]._id,
      price: 1.99,
      quantity: 20,
    },
    {
      name: "P_A_T_H_W_A_Y_",
      category: categories[5]._id,
      description: "pathway to the unknown",
      image: "openDoor.gif",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "S_K_U_L_L_S_",
      category: categories[3]._id,
      description: "laser-eyed skull",
      image: "skulls.gif",
      price: 3.25,
      quantity: 50,
    },
    {
      name: "P_Y_R_A_M_I_D_*_H_E_A_D",
      category: categories[1]._id,
      description: "tropical illuminati head",
      image: "randompyramidHead.gif",
      price: 15.99,
      quantity: 10,
    },
    {
      name: "N_E_O_N_*_M_O_U_N_T_A_I_N",
      category: categories[2]._id,
      description: "midnight drive through space mountain",
      image: "moreMountains.gif",
      price: 25.0,
      quantity: 10,
    },
    {
      name: "T_A_I_N_T_E_D_*_L_O_V_E",
      category: categories[1]._id,
      description: "basic human interaction, a hug",
      image: "hugging.gif",
      price: 19.99,
      quantity: 1,
    },
    {
      name: "M_I_D_N_I_T_E_*_H_E_A_T",
      category: categories[2]._id,
      description: "heatwave mountains",
      image: "mountains.gif",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "S_U_N_S_E_T",
      category: categories[2]._id,
      description: "sunset through tron",
      image: "ravine.gif",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "B_R_O_K_E_N_*_C_O_D_E",
      category: categories[1]._id,
      description: "static head",
      image: "head.gif",
      price: 2.99,
      quantity: 5,
    },
    {
      name: "L_I_G_H_T_S_T_I_C_K_",
      category: categories[3]._id,
      description: "han solo and his lightstick",
      image: "lightingWand.gif",
      price: 125.5,
      quantity: 2,
    },
    {
      name: "C_I_T_Y_$_C_A_P_E_",
      category: categories[2]._id,
      description: "midnight city",
      image: "cityView.gif",
      price: 9.99,
      quantity: 5,
    },
    {
      name: "4_0_4",
      category: categories[4]._id,
      description: "404",
      image: "404nope.gif",
      price: 5.99,
      quantity: 8,
    },
    {
      name: "C_I_T_Y_$_C_R_O_L_L",
      category: categories[2]._id,
      description: "city landscape",
      image: "cityScroll.gif",
      price: 2.99,
      quantity: 10,
    },
    {
      name: "G_L_I_T_C_H_Y_*_F_A_C_E",
      category: categories[4]._id,
      description: "distorted face",
      image: "distortion.gif",
      price: 20.99,
      quantity: 5,
    },
    {
      name: "I_T_*_$_*_O_V_E_R",
      category: categories[4]._id,
      description: "its over pop up",
      image: "itsOver.gif",
      price: 4.25,
      quantity: 15,
    },
    {
      name: "$_H_A_V_E_D_*_I_C_E",
      description: "statue eating ice cream",
      image: "doubleBust.gif",
      category: categories[1]._id,
      price: 8.25,
      quantity: 15,
    },
    {
      name: "M_O_O_N_L_I_G_H_T",
      description: "green orb moonlight",
      image: "greenOrb.gif",
      category: categories[2]._id,
      price: 10.25,
      quantity: 13,
    },
    {
      name: "M_A_G_I_C_*_H_A_N_D",
      description: "magic hand",
      image: "magicMan.gif",
      category: categories[5]._id,
      price: 8.25,
      quantity: 8,
    },
    {
      name: "N_A_V_I_G_A_T_O_R",
      description: "flying ",
      image: "navigator.gif",
      category: categories[2]._id,
      price: 15.0,
      quantity: 5,
    },
    {
      name: "P_A_I_N_T_E_D_*_R_I_V_E_R",
      description: "painted window pop up",
      image: "paintedRiver.gif",
      category: categories[4]._id,
      price: 5.25,
      quantity: 80,
    },
    {
      name: "P_A_N_0_R_A_M_A_*_V_I_E_W",
      description: "panorama view sky",
      image: "panorama.gif",
      category: categories[2]._id,
      price: 15.25,
      quantity: 1,
    },
    {
      name: "P_0_L_Y_*_G_0_N_0",
      description: "poloygram glitch",
      image: "polyGono.gif",
      category: categories[4]._id,
      price: 24.99,
      quantity: 9,
    },
    {
      name: "S_K_E_L_E_T_0_N",
      description: "skelli striked",
      image: "skeelli.gif",
      category: categories[5]._id,
      price: 3.49,
      quantity: 40,
    },

  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
