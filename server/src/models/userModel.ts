import mongoose from "mongoose";
import { IUser } from "../@types/user";

const userSchema = new mongoose.Schema(
    {
        name: String,
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
userSchema.pre("save", function (next) {
    this.name = this.firstName + " " + this.lastName;
    next();
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
