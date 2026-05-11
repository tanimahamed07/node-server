import type { IncomingMessage, ServerResponse } from "http";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  // Ekhane logic-ta hobe: jekhetu routeHandler already /products match koreche,
  // tai ekhane amra shora-shori data pathate pari.

  const products = [
    { id: 1, name: "Product-1" },
    { id: 2, name: "Product-2" },
  ];

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    }),
  );
};
