import express from 'express';
import { AppDataSource } from './dataSource';
import { errorMiddleware } from './middlewares/error';
import routes from './routes';

import cors from 'cors';

const PORT = process.env.PORT as number | undefined;


AppDataSource.initialize().then(() => {
    const app = express();
    
    app.use(cors());
    app.use(express.json());
    
    app.use(routes);
    app.use(errorMiddleware);

    return app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
});