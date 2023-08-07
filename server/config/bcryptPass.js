import bcrypt from "bcrypt";

export const passwordPattern =
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&.,?]).{6,10}/;
export const emailPattern = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

export const createHashPass = (myPlaintextPassword, saltRounds = 10) => {
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    return hash;
};

export const comparePass = (myPlaintextPassword, hash) => {
    return bcrypt.compareSync(myPlaintextPassword, hash);
};
