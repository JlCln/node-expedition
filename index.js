import "dotenv/config.js";
import { say } from "cowsay";

const { MY_NAME, MY_CAMPUS } = process.env;

console.log(say({ text: `I am ${MY_NAME} from ${MY_CAMPUS}!` }));
