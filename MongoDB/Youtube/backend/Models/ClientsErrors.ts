export class ClientError{
    public status:number;
    public message:string;

    public constructor(status:number, message:string){
        this.status=status;
        this.message=message;
    }
}

//routeNotFound, UserNotLogged, videoNotFound

export class RouteNotFound extends ClientError{
    constructor(route:string){
        super(404,`route ${route} was not found`)
    }
}

export class UserNotLogged extends ClientError{
    constructor(){
        super(401,"User not authorized,please login.")
    }
}

export class videoNotFound extends ClientError{
    constructor(errorMessage:string){
        super(400,errorMessage)
    }
}