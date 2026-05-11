import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utility/partsBody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  console.log("request", req);
  const url = req.url;
  const method = req.method;
  // /products =>  /products/1  => ['','products','1']

  const urlParts = url?.split("/");
  // console.log(urlParts);
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  // console.log("This is the acutal id : ", id);
  // Get All Products
  if (url === "/products" && method === "GET") {
    const products = readProduct();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrived successfully",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    {
      const products = readProduct(); // [{}]

      const product = products.find((p: IProduct) => p.id === id); // id === id

      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product retrived successfully",
          data: product,
        }),
      );
    }
  } else if (method === "POST" && url === "/product") {
    const body = await parseBody(req);
    const products = readProduct();

    const newProduct = {
      id: Date.now(),
      ...body,
    };
    products.push(newProduct);
    console.log(newProduct);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrived successfully",
        data: newProduct,
      }),
    );
  }
};
