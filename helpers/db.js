import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://auth_test:DDDhdz7JFJc5KSoK@cluster0.awonqel.mongodb.net/auth-demo?retryWrites=true&w=majority",
  );

  return client;
}
