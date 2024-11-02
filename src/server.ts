import { Config } from './config';
import app from './config/app';

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
