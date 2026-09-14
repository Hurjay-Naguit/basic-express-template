import app from "./app.js";

const PORT = process.env.PORT || 5000;

const main = async () => {
  app.listen(PORT, () => {
    console.log(`Server is currently running at port ${PORT}`);
  });
};

main();
