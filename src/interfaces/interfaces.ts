// Interfaz de datos que se envian a traves del form -dylan
export interface IUserRegister{
    name: string;
    email: string;
    password: string;
    phone_number: string;
    birthdate: string;
    gender: "male" | "female" | "other" ;
    height: string;
    //agregar en el form que sea ingreso numerico y que se le agregue un Cm al final-dylan
    weight: string;
    //Lo mismo de arriba pero con Kg- dylan
    address: string;
}

export interface IUser{
    name?: string;
    email?: string;
    phoneNumber?: string;
    birthdate: Date;
    gender?: string ;
    height?: string;
    profile_image?:string;
    user_membership:any;
    weight?: string;
    address?: string;
}

export interface ILoginSend{
    email:string;
    password:string;
}

export interface ILoginValidate{
    email:string;
    password:string;
    confirmPassword:string;
}

export interface ITrainer{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: number,
}


export interface IUserComplete{
        id: string,
		name: string,
		email: string,
		profile_image: string,
		phoneNumber: string,
		birthdate:Date,
		signup_date: string,
		gender: string,
		address: string,
		height: null | string,
		weight: null | string,
		role: string,
		isActive: true | false
}