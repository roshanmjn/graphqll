import global from "./global/typeDefs/index.js";
import course from "./course/typeDefs.js";
import genre from "./genre/typeDefs.js";
import category from "./category/typeDefs.js";
import product from "./product/typeDefs.js";

const typeDefs = [...global, course, genre, category, product];

export default typeDefs;
