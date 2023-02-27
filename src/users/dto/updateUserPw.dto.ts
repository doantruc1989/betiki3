import { IsNotEmpty, Length, Matches } from "class-validator";
import { MESSAGES, REGEX } from "src/utils/app.utils";

export class updateUserPwDto {
    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
    password: string;
}