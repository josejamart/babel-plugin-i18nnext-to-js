import pluginTester  from 'babel-plugin-tester';
import plugin from "../index";
import path from "path";

pluginTester({
  plugin,
  fixtures: path.join(__dirname, 'fixtures')
})