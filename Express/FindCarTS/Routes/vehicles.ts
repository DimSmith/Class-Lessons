//getting the methods we need
import express , {NextFunction,Request,Response} from 'express';
import { bikeInfo, carInfo, truckInfo ,handiInfo, offInfo, recallInfo, carBoom } from '../logic/TransportLogic';

const carRouter = express.Router();

carRouter.get(
    "/car/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(carInfo(request.params.id));
    }
)

carRouter.get(
    "/bike/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(bikeInfo(request.params.id));
    }
)

carRouter.get(
    "/truck/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(truckInfo(request.params.id));
    }
)

carRouter.get(
    "/handicap/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(handiInfo(request.params.id));
    }
)

carRouter.get(
    "/offRoad/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(offInfo(request.params.id));
    }
)

carRouter.get(
    "/recallInfo/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(200).json(recallInfo(request.params.id));
    }
)

carRouter.get(
    "/carBoom/:id",
    async (request:Request, response:Response, nextFunction:NextFunction)=>{        
        response.status(201).json(carBoom(request.params.id));
    }
)

export default carRouter;

