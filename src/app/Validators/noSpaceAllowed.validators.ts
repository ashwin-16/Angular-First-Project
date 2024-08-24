import { AbstractControl, FormControl } from "@angular/forms";
import { rejects } from "node:assert";
import { resolve } from "node:path";

export class CustomValidators{
    static noSpaceAllowed(control :FormControl){
        if(control.value!=null && control.value.indexOf(' ')!=-1){
            return{noSpaceAllowed:true}
        }
        return null;
    }

    static checkUsername(control:AbstractControl):Promise<any>{
        return userNameAllowed(control.value);
    }
}

function userNameAllowed(username:string){
    const takenUserNames=['John','Sabu','Alan'];

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(takenUserNames.includes(username)){
                resolve({checkUsername:true});
            }else{
                resolve(null);
            }
        },3000);
    });
}