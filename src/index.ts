export type MyType = {
    value: number;
}

export default class MyClient {
    do() {
        return 0;
    }

    doWithArgs(a: number, b: number) {
        return a + b;
    }

    doWithType(a: MyType, b: MyType): MyType {
        return { value: a.value + b.value };
    }
}
