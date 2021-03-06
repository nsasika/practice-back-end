import mongodb from "mongodb";

const connectDb = (app) => {
  const MongoClient = mongodb.MongoClient;

  const port = process.env.PORT || 8000;

  MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
    maxPoolSize: 50,
    wtimeoutMS: 250,
  })
    .catch((err) => {
      console.error(err.stack);
      process.exit(1);
    })
    .then(async (client) => {
      app.listen(port, () => {
        console.log(`listening on port ${port}`);
      });
    });
};

export default connectDb;
