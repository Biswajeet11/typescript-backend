import "dotenv/config";
import App from "./app";
import IndexRoute from "./routes/IndexRoute";
import LocationRoutes from "./routes/LocationRoutes";


const app = new App([
  new IndexRoute(),
  new LocationRoutes()
]);

app.listen();