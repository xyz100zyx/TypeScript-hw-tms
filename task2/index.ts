type myCollectionOfNumberOrString = any;

interface User {
    id: number;
    name: string;
    age: number;
    friends: User[];
}

// создать тип на основе BaseType с помощью утилити тайпов, но все поля должны быть обязательны
interface BaseType {
    id: number;
    age?: number;
    name?: string;
}
type RequiredType = Required<BaseType>;

// создать тип на основе BaseType с помощью утилити тайпов, но все поля должны быть ридонли
type ReadonlyType = Readonly<BaseType>;

// вывести с помощью утилити тайпов тип возвращаемого значения функции
const sum = (a: number, b: number): number => a + b;
type SumReturn = ReturnType<typeof sum>;

// создать тип на основе данного выбрар только поля id и label
interface Car {
    id: number;
    price: number;
    label: string;
}


type CarNoCost = Extract<keyof Car, "id" | "label">;

// создать интерфейс на основе User у которого нет поля id, а все остальные поля - опциональные
type NewUser = Partial<Exclude<keyof User, "id">>;

// Написать дженерик тип, который достает второй параметр функии
type Sum = (a: number, b: number) => number;
type Log = (msg: string, role: 'admin' | 'user') => number;

type SecondParam = Parameters<Sum | Log>[1]

// напр: SecondParam<typeof Sum> => number
// напр: SecondParam<typeof Log> => 'admin' | 'user'

// сделать тип обязательным с помощью утили тайпов, т.е. чтобы не мог быть null
type Type = string | number | boolean | null | undefined;
type TypeWithNull = any;

type ReqWithoutNull = Required<NonNullable<Type>>
type _ReqWithoutNull = Required<NonNullable<TypeWithNull>>

// написать дженерик обратный NonNullable, т.е. чтобы к текущему типу добавлся тип null | undefined;
type Nullable = any;

type WithNull = Nullable | undefined | null