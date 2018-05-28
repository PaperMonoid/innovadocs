const peek = f => x => {
    f(x);
    return x;
};

const peekException = f => e => {
    f(e);
    throw e;
};

export {
    peek,
    peekException
}
