import { registerEnumType } from "@nestjs/graphql";

export enum Message{
    SOMETHING_WENT_WRONG = "Something Went Wrong!",
    NO_DATA_FOUND = "No data is found!",
    CREATE_FAILED = "Create is failed!",
    UPDATE_FAILED = "Update is failed!",
    REMOVE_FAILED = "Remove failed!",
    UPLOAD_FAILED = "Upload failed",
    BAD_REQUEST = "Bad Request",

    USED_MEMBER_NICK_OR_PHONE = "Already used member nick or phone!",
    USED_NICK_PHONE = "You are inserting already used nick or phone number!",
    NO_MEMBER_NICK = "No memeber with that member nick!",
    WRONG_PASSWORD = "Wrong password inserted!",
    NOT_AUTHENTICATED = "You are not authenticated, Please login first",
    BLOCKED_USER = "You have been blocked, contact admin!",
    TOKEN_NOT_EXIST = "Bearer Token is not provided!",
    ONLY_SPECIFIC_ROLES_ALLOWED = "Allowed only for members with specific roles!",
    NOT_ALLOWED_REQUEST = "Not Allowed Request!",
    PROVIDE_ALLOWED_FORMAT = "Please provide jpg, jpeg, or png images",
    SELF_SUBSCRIPTION_DENIED = "Self subscription is denied!",
    TOKEN_CREATION_FAILED = "Token creation error!",
}

export enum Direction{
    ASC = 1,
    DESC = -1,
}

registerEnumType(Direction, {
    name: 'Direction',
});