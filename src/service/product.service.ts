import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/database/db.json");

//get all product
export const readProduct = () => {
  console.log(process.cwd());
  console.log("first", filePath);
  const products = fs.readFileSync(filePath, "utf-8");
  //   console.log(products.toString())
  // console.log(products)
  return JSON.parse(products);
};


export const insertProduct =(payload: any) => {
fs.writeFileSync(filePath, JSON.stringify(payload))
}