import { Mockgoose } from "mockgoose-fix";
import * as mongoose from "mongoose";

(mongoose as any).Promise = global.Promise;

const mockgoose = new Mockgoose(mongoose);
mockgoose.helper.setDbVersion("3.4.3");

mockgoose.prepareStorage().then((): void => {
  mongoose.connect("mongodb://127.0.0.1/db", {
    useMongoClient: true,
  });
});

export { mongoose };