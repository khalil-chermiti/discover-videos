import { Magic } from "magic-sdk";

// Magic class depends on window object
// make sure to instanciate only in client side

function createMagic() {
  const API_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY ;

  return typeof window !== "undefined" && new Magic(API_KEY) ;
};

export const magic = createMagic();
