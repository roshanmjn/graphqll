import global from "./global/typeDefs/index.js";
import course from "./course/typeDefs.js";
import genre from "./genre/typeDefs.js";

const typeDefs = [...global, course, genre];

export default typeDefs;
