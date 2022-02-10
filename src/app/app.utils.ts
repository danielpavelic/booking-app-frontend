import { HttpHeaders } from "@angular/common/http";
import { UserModel } from "./models/user.model";

export class Util {

    static formatCssClass(input: string): string {
        return input.trim().toLocaleLowerCase();
    }

    static sanitizeUserDataForTransfer(obj: UserModel): Partial<UserModel> {
        const { _id, name, email } = obj;
        return { _id, name, email }
    }

}

