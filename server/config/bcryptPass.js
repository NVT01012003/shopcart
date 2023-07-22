import bcrypt from "bcrypt";

export const createHashPass = (myPlaintextPassword, saltRounds = 10) => {
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    return hash;
};

export const comparePass = (myPlaintextPassword, hash) => {
    return bcrypt.compareSync(myPlaintextPassword, hash);
};
