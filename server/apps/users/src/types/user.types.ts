import { ObjectType , Field } from "@nestjs/graphql";
import { User } from "../entities/users.entity";

@ObjectType()
export class ErrorType {
    @Field()
    message: string;

    @Field({nullable : true})
    code?: string;
};

@ObjectType()
export class RegisterResponse {
    @Field(() => User, {nullable : true})
    user?: User | any;

    @Field(() => ErrorType, {nullable : true})
    error?: ErrorType | any;
};

@ObjectType()
export class LoginResponse {
    @Field(() => User)
    user: User;

    @Field(() => ErrorType, {nullable : true})
    error?: ErrorType | any;
};
