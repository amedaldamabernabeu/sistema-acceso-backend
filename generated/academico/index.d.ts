
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model division
 * 
 */
export type division = $Result.DefaultSelection<Prisma.$divisionPayload>
/**
 * Model departamento
 * 
 */
export type departamento = $Result.DefaultSelection<Prisma.$departamentoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Divisions
 * const divisions = await prisma.division.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Divisions
   * const divisions = await prisma.division.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.division`: Exposes CRUD operations for the **division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): Prisma.divisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departamento`: Exposes CRUD operations for the **departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentos
    * const departamentos = await prisma.departamento.findMany()
    * ```
    */
  get departamento(): Prisma.departamentoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    division: 'division',
    departamento: 'departamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    academico?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "division" | "departamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      division: {
        payload: Prisma.$divisionPayload<ExtArgs>
        fields: Prisma.divisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.divisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.divisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload>
          }
          findFirst: {
            args: Prisma.divisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.divisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload>
          }
          findMany: {
            args: Prisma.divisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload>[]
          }
          create: {
            args: Prisma.divisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload>
          }
          createMany: {
            args: Prisma.divisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.divisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload>
          }
          update: {
            args: Prisma.divisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload>
          }
          deleteMany: {
            args: Prisma.divisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.divisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.divisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$divisionPayload>
          }
          aggregate: {
            args: Prisma.DivisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivision>
          }
          groupBy: {
            args: Prisma.divisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.divisionCountArgs<ExtArgs>
            result: $Utils.Optional<DivisionCountAggregateOutputType> | number
          }
        }
      }
      departamento: {
        payload: Prisma.$departamentoPayload<ExtArgs>
        fields: Prisma.departamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload>
          }
          findFirst: {
            args: Prisma.departamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload>
          }
          findMany: {
            args: Prisma.departamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload>[]
          }
          create: {
            args: Prisma.departamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload>
          }
          createMany: {
            args: Prisma.departamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.departamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload>
          }
          update: {
            args: Prisma.departamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload>
          }
          deleteMany: {
            args: Prisma.departamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.departamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentoPayload>
          }
          aggregate: {
            args: Prisma.DepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartamento>
          }
          groupBy: {
            args: Prisma.departamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.departamentoCountArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    division?: divisionOmit
    departamento?: departamentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DivisionCountOutputType
   */

  export type DivisionCountOutputType = {
    departamento: number
  }

  export type DivisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DivisionCountOutputTypeCountDepartamentoArgs
  }

  // Custom InputTypes
  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionCountOutputType
     */
    select?: DivisionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountDepartamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model division
   */

  export type AggregateDivision = {
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  export type DivisionAvgAggregateOutputType = {
    clave_div: number | null
  }

  export type DivisionSumAggregateOutputType = {
    clave_div: number | null
  }

  export type DivisionMinAggregateOutputType = {
    clave_div: number | null
    nombre_div: string | null
  }

  export type DivisionMaxAggregateOutputType = {
    clave_div: number | null
    nombre_div: string | null
  }

  export type DivisionCountAggregateOutputType = {
    clave_div: number
    nombre_div: number
    _all: number
  }


  export type DivisionAvgAggregateInputType = {
    clave_div?: true
  }

  export type DivisionSumAggregateInputType = {
    clave_div?: true
  }

  export type DivisionMinAggregateInputType = {
    clave_div?: true
    nombre_div?: true
  }

  export type DivisionMaxAggregateInputType = {
    clave_div?: true
    nombre_div?: true
  }

  export type DivisionCountAggregateInputType = {
    clave_div?: true
    nombre_div?: true
    _all?: true
  }

  export type DivisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which division to aggregate.
     */
    where?: divisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionOrderByWithRelationInput | divisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: divisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned divisions
    **/
    _count?: true | DivisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionMaxAggregateInputType
  }

  export type GetDivisionAggregateType<T extends DivisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDivision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivision[P]>
      : GetScalarType<T[P], AggregateDivision[P]>
  }




  export type divisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: divisionWhereInput
    orderBy?: divisionOrderByWithAggregationInput | divisionOrderByWithAggregationInput[]
    by: DivisionScalarFieldEnum[] | DivisionScalarFieldEnum
    having?: divisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionCountAggregateInputType | true
    _avg?: DivisionAvgAggregateInputType
    _sum?: DivisionSumAggregateInputType
    _min?: DivisionMinAggregateInputType
    _max?: DivisionMaxAggregateInputType
  }

  export type DivisionGroupByOutputType = {
    clave_div: number
    nombre_div: string
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  type GetDivisionGroupByPayload<T extends divisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionGroupByOutputType[P]>
        }
      >
    >


  export type divisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clave_div?: boolean
    nombre_div?: boolean
    departamento?: boolean | division$departamentoArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["division"]>



  export type divisionSelectScalar = {
    clave_div?: boolean
    nombre_div?: boolean
  }

  export type divisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clave_div" | "nombre_div", ExtArgs["result"]["division"]>
  export type divisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | division$departamentoArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $divisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "division"
    objects: {
      departamento: Prisma.$departamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      clave_div: number
      nombre_div: string
    }, ExtArgs["result"]["division"]>
    composites: {}
  }

  type divisionGetPayload<S extends boolean | null | undefined | divisionDefaultArgs> = $Result.GetResult<Prisma.$divisionPayload, S>

  type divisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<divisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisionCountAggregateInputType | true
    }

  export interface divisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['division'], meta: { name: 'division' } }
    /**
     * Find zero or one Division that matches the filter.
     * @param {divisionFindUniqueArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends divisionFindUniqueArgs>(args: SelectSubset<T, divisionFindUniqueArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Division that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {divisionFindUniqueOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends divisionFindUniqueOrThrowArgs>(args: SelectSubset<T, divisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionFindFirstArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends divisionFindFirstArgs>(args?: SelectSubset<T, divisionFindFirstArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionFindFirstOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends divisionFindFirstOrThrowArgs>(args?: SelectSubset<T, divisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.division.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.division.findMany({ take: 10 })
     * 
     * // Only select the `clave_div`
     * const divisionWithClave_divOnly = await prisma.division.findMany({ select: { clave_div: true } })
     * 
     */
    findMany<T extends divisionFindManyArgs>(args?: SelectSubset<T, divisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Division.
     * @param {divisionCreateArgs} args - Arguments to create a Division.
     * @example
     * // Create one Division
     * const Division = await prisma.division.create({
     *   data: {
     *     // ... data to create a Division
     *   }
     * })
     * 
     */
    create<T extends divisionCreateArgs>(args: SelectSubset<T, divisionCreateArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Divisions.
     * @param {divisionCreateManyArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends divisionCreateManyArgs>(args?: SelectSubset<T, divisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Division.
     * @param {divisionDeleteArgs} args - Arguments to delete one Division.
     * @example
     * // Delete one Division
     * const Division = await prisma.division.delete({
     *   where: {
     *     // ... filter to delete one Division
     *   }
     * })
     * 
     */
    delete<T extends divisionDeleteArgs>(args: SelectSubset<T, divisionDeleteArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Division.
     * @param {divisionUpdateArgs} args - Arguments to update one Division.
     * @example
     * // Update one Division
     * const division = await prisma.division.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends divisionUpdateArgs>(args: SelectSubset<T, divisionUpdateArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Divisions.
     * @param {divisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.division.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends divisionDeleteManyArgs>(args?: SelectSubset<T, divisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends divisionUpdateManyArgs>(args: SelectSubset<T, divisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Division.
     * @param {divisionUpsertArgs} args - Arguments to update or create a Division.
     * @example
     * // Update or create a Division
     * const division = await prisma.division.upsert({
     *   create: {
     *     // ... data to create a Division
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Division we want to update
     *   }
     * })
     */
    upsert<T extends divisionUpsertArgs>(args: SelectSubset<T, divisionUpsertArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.division.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends divisionCountArgs>(
      args?: Subset<T, divisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DivisionAggregateArgs>(args: Subset<T, DivisionAggregateArgs>): Prisma.PrismaPromise<GetDivisionAggregateType<T>>

    /**
     * Group by Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {divisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends divisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: divisionGroupByArgs['orderBy'] }
        : { orderBy?: divisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, divisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the division model
   */
  readonly fields: divisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for division.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__divisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamento<T extends division$departamentoArgs<ExtArgs> = {}>(args?: Subset<T, division$departamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the division model
   */
  interface divisionFieldRefs {
    readonly clave_div: FieldRef<"division", 'Int'>
    readonly nombre_div: FieldRef<"division", 'String'>
  }
    

  // Custom InputTypes
  /**
   * division findUnique
   */
  export type divisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * Filter, which division to fetch.
     */
    where: divisionWhereUniqueInput
  }

  /**
   * division findUniqueOrThrow
   */
  export type divisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * Filter, which division to fetch.
     */
    where: divisionWhereUniqueInput
  }

  /**
   * division findFirst
   */
  export type divisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * Filter, which division to fetch.
     */
    where?: divisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionOrderByWithRelationInput | divisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for divisions.
     */
    cursor?: divisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * division findFirstOrThrow
   */
  export type divisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * Filter, which division to fetch.
     */
    where?: divisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionOrderByWithRelationInput | divisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for divisions.
     */
    cursor?: divisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * division findMany
   */
  export type divisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * Filter, which divisions to fetch.
     */
    where?: divisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of divisions to fetch.
     */
    orderBy?: divisionOrderByWithRelationInput | divisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing divisions.
     */
    cursor?: divisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` divisions.
     */
    skip?: number
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * division create
   */
  export type divisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * The data needed to create a division.
     */
    data: XOR<divisionCreateInput, divisionUncheckedCreateInput>
  }

  /**
   * division createMany
   */
  export type divisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many divisions.
     */
    data: divisionCreateManyInput | divisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * division update
   */
  export type divisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * The data needed to update a division.
     */
    data: XOR<divisionUpdateInput, divisionUncheckedUpdateInput>
    /**
     * Choose, which division to update.
     */
    where: divisionWhereUniqueInput
  }

  /**
   * division updateMany
   */
  export type divisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update divisions.
     */
    data: XOR<divisionUpdateManyMutationInput, divisionUncheckedUpdateManyInput>
    /**
     * Filter which divisions to update
     */
    where?: divisionWhereInput
    /**
     * Limit how many divisions to update.
     */
    limit?: number
  }

  /**
   * division upsert
   */
  export type divisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * The filter to search for the division to update in case it exists.
     */
    where: divisionWhereUniqueInput
    /**
     * In case the division found by the `where` argument doesn't exist, create a new division with this data.
     */
    create: XOR<divisionCreateInput, divisionUncheckedCreateInput>
    /**
     * In case the division was found with the provided `where` argument, update it with this data.
     */
    update: XOR<divisionUpdateInput, divisionUncheckedUpdateInput>
  }

  /**
   * division delete
   */
  export type divisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
    /**
     * Filter which division to delete.
     */
    where: divisionWhereUniqueInput
  }

  /**
   * division deleteMany
   */
  export type divisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which divisions to delete
     */
    where?: divisionWhereInput
    /**
     * Limit how many divisions to delete.
     */
    limit?: number
  }

  /**
   * division.departamento
   */
  export type division$departamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    where?: departamentoWhereInput
    orderBy?: departamentoOrderByWithRelationInput | departamentoOrderByWithRelationInput[]
    cursor?: departamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * division without action
   */
  export type divisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the division
     */
    select?: divisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the division
     */
    omit?: divisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: divisionInclude<ExtArgs> | null
  }


  /**
   * Model departamento
   */

  export type AggregateDepartamento = {
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  export type DepartamentoAvgAggregateOutputType = {
    clave_depto: number | null
    division_depto: number | null
  }

  export type DepartamentoSumAggregateOutputType = {
    clave_depto: number | null
    division_depto: number | null
  }

  export type DepartamentoMinAggregateOutputType = {
    clave_depto: number | null
    nombre_depto: string | null
    division_depto: number | null
  }

  export type DepartamentoMaxAggregateOutputType = {
    clave_depto: number | null
    nombre_depto: string | null
    division_depto: number | null
  }

  export type DepartamentoCountAggregateOutputType = {
    clave_depto: number
    nombre_depto: number
    division_depto: number
    _all: number
  }


  export type DepartamentoAvgAggregateInputType = {
    clave_depto?: true
    division_depto?: true
  }

  export type DepartamentoSumAggregateInputType = {
    clave_depto?: true
    division_depto?: true
  }

  export type DepartamentoMinAggregateInputType = {
    clave_depto?: true
    nombre_depto?: true
    division_depto?: true
  }

  export type DepartamentoMaxAggregateInputType = {
    clave_depto?: true
    nombre_depto?: true
    division_depto?: true
  }

  export type DepartamentoCountAggregateInputType = {
    clave_depto?: true
    nombre_depto?: true
    division_depto?: true
    _all?: true
  }

  export type DepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departamento to aggregate.
     */
    where?: departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentos to fetch.
     */
    orderBy?: departamentoOrderByWithRelationInput | departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departamentos
    **/
    _count?: true | DepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamentoMaxAggregateInputType
  }

  export type GetDepartamentoAggregateType<T extends DepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamento[P]>
      : GetScalarType<T[P], AggregateDepartamento[P]>
  }




  export type departamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departamentoWhereInput
    orderBy?: departamentoOrderByWithAggregationInput | departamentoOrderByWithAggregationInput[]
    by: DepartamentoScalarFieldEnum[] | DepartamentoScalarFieldEnum
    having?: departamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamentoCountAggregateInputType | true
    _avg?: DepartamentoAvgAggregateInputType
    _sum?: DepartamentoSumAggregateInputType
    _min?: DepartamentoMinAggregateInputType
    _max?: DepartamentoMaxAggregateInputType
  }

  export type DepartamentoGroupByOutputType = {
    clave_depto: number
    nombre_depto: string
    division_depto: number
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  type GetDepartamentoGroupByPayload<T extends departamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type departamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clave_depto?: boolean
    nombre_depto?: boolean
    division_depto?: boolean
    division?: boolean | divisionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>



  export type departamentoSelectScalar = {
    clave_depto?: boolean
    nombre_depto?: boolean
    division_depto?: boolean
  }

  export type departamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"clave_depto" | "nombre_depto" | "division_depto", ExtArgs["result"]["departamento"]>
  export type departamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | divisionDefaultArgs<ExtArgs>
  }

  export type $departamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departamento"
    objects: {
      division: Prisma.$divisionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      clave_depto: number
      nombre_depto: string
      division_depto: number
    }, ExtArgs["result"]["departamento"]>
    composites: {}
  }

  type departamentoGetPayload<S extends boolean | null | undefined | departamentoDefaultArgs> = $Result.GetResult<Prisma.$departamentoPayload, S>

  type departamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartamentoCountAggregateInputType | true
    }

  export interface departamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departamento'], meta: { name: 'departamento' } }
    /**
     * Find zero or one Departamento that matches the filter.
     * @param {departamentoFindUniqueArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departamentoFindUniqueArgs>(args: SelectSubset<T, departamentoFindUniqueArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departamentoFindUniqueOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, departamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentoFindFirstArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departamentoFindFirstArgs>(args?: SelectSubset<T, departamentoFindFirstArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentoFindFirstOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, departamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentos
     * const departamentos = await prisma.departamento.findMany()
     * 
     * // Get first 10 Departamentos
     * const departamentos = await prisma.departamento.findMany({ take: 10 })
     * 
     * // Only select the `clave_depto`
     * const departamentoWithClave_deptoOnly = await prisma.departamento.findMany({ select: { clave_depto: true } })
     * 
     */
    findMany<T extends departamentoFindManyArgs>(args?: SelectSubset<T, departamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departamento.
     * @param {departamentoCreateArgs} args - Arguments to create a Departamento.
     * @example
     * // Create one Departamento
     * const Departamento = await prisma.departamento.create({
     *   data: {
     *     // ... data to create a Departamento
     *   }
     * })
     * 
     */
    create<T extends departamentoCreateArgs>(args: SelectSubset<T, departamentoCreateArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departamentos.
     * @param {departamentoCreateManyArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departamentoCreateManyArgs>(args?: SelectSubset<T, departamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departamento.
     * @param {departamentoDeleteArgs} args - Arguments to delete one Departamento.
     * @example
     * // Delete one Departamento
     * const Departamento = await prisma.departamento.delete({
     *   where: {
     *     // ... filter to delete one Departamento
     *   }
     * })
     * 
     */
    delete<T extends departamentoDeleteArgs>(args: SelectSubset<T, departamentoDeleteArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departamento.
     * @param {departamentoUpdateArgs} args - Arguments to update one Departamento.
     * @example
     * // Update one Departamento
     * const departamento = await prisma.departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departamentoUpdateArgs>(args: SelectSubset<T, departamentoUpdateArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departamentos.
     * @param {departamentoDeleteManyArgs} args - Arguments to filter Departamentos to delete.
     * @example
     * // Delete a few Departamentos
     * const { count } = await prisma.departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departamentoDeleteManyArgs>(args?: SelectSubset<T, departamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departamentoUpdateManyArgs>(args: SelectSubset<T, departamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departamento.
     * @param {departamentoUpsertArgs} args - Arguments to update or create a Departamento.
     * @example
     * // Update or create a Departamento
     * const departamento = await prisma.departamento.upsert({
     *   create: {
     *     // ... data to create a Departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamento we want to update
     *   }
     * })
     */
    upsert<T extends departamentoUpsertArgs>(args: SelectSubset<T, departamentoUpsertArgs<ExtArgs>>): Prisma__departamentoClient<$Result.GetResult<Prisma.$departamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentoCountArgs} args - Arguments to filter Departamentos to count.
     * @example
     * // Count the number of Departamentos
     * const count = await prisma.departamento.count({
     *   where: {
     *     // ... the filter for the Departamentos we want to count
     *   }
     * })
    **/
    count<T extends departamentoCountArgs>(
      args?: Subset<T, departamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartamentoAggregateArgs>(args: Subset<T, DepartamentoAggregateArgs>): Prisma.PrismaPromise<GetDepartamentoAggregateType<T>>

    /**
     * Group by Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departamentoGroupByArgs['orderBy'] }
        : { orderBy?: departamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departamento model
   */
  readonly fields: departamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    division<T extends divisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, divisionDefaultArgs<ExtArgs>>): Prisma__divisionClient<$Result.GetResult<Prisma.$divisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the departamento model
   */
  interface departamentoFieldRefs {
    readonly clave_depto: FieldRef<"departamento", 'Int'>
    readonly nombre_depto: FieldRef<"departamento", 'String'>
    readonly division_depto: FieldRef<"departamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * departamento findUnique
   */
  export type departamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * Filter, which departamento to fetch.
     */
    where: departamentoWhereUniqueInput
  }

  /**
   * departamento findUniqueOrThrow
   */
  export type departamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * Filter, which departamento to fetch.
     */
    where: departamentoWhereUniqueInput
  }

  /**
   * departamento findFirst
   */
  export type departamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * Filter, which departamento to fetch.
     */
    where?: departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentos to fetch.
     */
    orderBy?: departamentoOrderByWithRelationInput | departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departamentos.
     */
    cursor?: departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * departamento findFirstOrThrow
   */
  export type departamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * Filter, which departamento to fetch.
     */
    where?: departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentos to fetch.
     */
    orderBy?: departamentoOrderByWithRelationInput | departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departamentos.
     */
    cursor?: departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * departamento findMany
   */
  export type departamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * Filter, which departamentos to fetch.
     */
    where?: departamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentos to fetch.
     */
    orderBy?: departamentoOrderByWithRelationInput | departamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departamentos.
     */
    cursor?: departamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentos.
     */
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * departamento create
   */
  export type departamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a departamento.
     */
    data: XOR<departamentoCreateInput, departamentoUncheckedCreateInput>
  }

  /**
   * departamento createMany
   */
  export type departamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departamentos.
     */
    data: departamentoCreateManyInput | departamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departamento update
   */
  export type departamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a departamento.
     */
    data: XOR<departamentoUpdateInput, departamentoUncheckedUpdateInput>
    /**
     * Choose, which departamento to update.
     */
    where: departamentoWhereUniqueInput
  }

  /**
   * departamento updateMany
   */
  export type departamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departamentos.
     */
    data: XOR<departamentoUpdateManyMutationInput, departamentoUncheckedUpdateManyInput>
    /**
     * Filter which departamentos to update
     */
    where?: departamentoWhereInput
    /**
     * Limit how many departamentos to update.
     */
    limit?: number
  }

  /**
   * departamento upsert
   */
  export type departamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the departamento to update in case it exists.
     */
    where: departamentoWhereUniqueInput
    /**
     * In case the departamento found by the `where` argument doesn't exist, create a new departamento with this data.
     */
    create: XOR<departamentoCreateInput, departamentoUncheckedCreateInput>
    /**
     * In case the departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departamentoUpdateInput, departamentoUncheckedUpdateInput>
  }

  /**
   * departamento delete
   */
  export type departamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
    /**
     * Filter which departamento to delete.
     */
    where: departamentoWhereUniqueInput
  }

  /**
   * departamento deleteMany
   */
  export type departamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departamentos to delete
     */
    where?: departamentoWhereInput
    /**
     * Limit how many departamentos to delete.
     */
    limit?: number
  }

  /**
   * departamento without action
   */
  export type departamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamento
     */
    select?: departamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamento
     */
    omit?: departamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamentoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DivisionScalarFieldEnum: {
    clave_div: 'clave_div',
    nombre_div: 'nombre_div'
  };

  export type DivisionScalarFieldEnum = (typeof DivisionScalarFieldEnum)[keyof typeof DivisionScalarFieldEnum]


  export const DepartamentoScalarFieldEnum: {
    clave_depto: 'clave_depto',
    nombre_depto: 'nombre_depto',
    division_depto: 'division_depto'
  };

  export type DepartamentoScalarFieldEnum = (typeof DepartamentoScalarFieldEnum)[keyof typeof DepartamentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const divisionOrderByRelevanceFieldEnum: {
    nombre_div: 'nombre_div'
  };

  export type divisionOrderByRelevanceFieldEnum = (typeof divisionOrderByRelevanceFieldEnum)[keyof typeof divisionOrderByRelevanceFieldEnum]


  export const departamentoOrderByRelevanceFieldEnum: {
    nombre_depto: 'nombre_depto'
  };

  export type departamentoOrderByRelevanceFieldEnum = (typeof departamentoOrderByRelevanceFieldEnum)[keyof typeof departamentoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type divisionWhereInput = {
    AND?: divisionWhereInput | divisionWhereInput[]
    OR?: divisionWhereInput[]
    NOT?: divisionWhereInput | divisionWhereInput[]
    clave_div?: IntFilter<"division"> | number
    nombre_div?: StringFilter<"division"> | string
    departamento?: DepartamentoListRelationFilter
  }

  export type divisionOrderByWithRelationInput = {
    clave_div?: SortOrder
    nombre_div?: SortOrder
    departamento?: departamentoOrderByRelationAggregateInput
    _relevance?: divisionOrderByRelevanceInput
  }

  export type divisionWhereUniqueInput = Prisma.AtLeast<{
    clave_div?: number
    AND?: divisionWhereInput | divisionWhereInput[]
    OR?: divisionWhereInput[]
    NOT?: divisionWhereInput | divisionWhereInput[]
    nombre_div?: StringFilter<"division"> | string
    departamento?: DepartamentoListRelationFilter
  }, "clave_div">

  export type divisionOrderByWithAggregationInput = {
    clave_div?: SortOrder
    nombre_div?: SortOrder
    _count?: divisionCountOrderByAggregateInput
    _avg?: divisionAvgOrderByAggregateInput
    _max?: divisionMaxOrderByAggregateInput
    _min?: divisionMinOrderByAggregateInput
    _sum?: divisionSumOrderByAggregateInput
  }

  export type divisionScalarWhereWithAggregatesInput = {
    AND?: divisionScalarWhereWithAggregatesInput | divisionScalarWhereWithAggregatesInput[]
    OR?: divisionScalarWhereWithAggregatesInput[]
    NOT?: divisionScalarWhereWithAggregatesInput | divisionScalarWhereWithAggregatesInput[]
    clave_div?: IntWithAggregatesFilter<"division"> | number
    nombre_div?: StringWithAggregatesFilter<"division"> | string
  }

  export type departamentoWhereInput = {
    AND?: departamentoWhereInput | departamentoWhereInput[]
    OR?: departamentoWhereInput[]
    NOT?: departamentoWhereInput | departamentoWhereInput[]
    clave_depto?: IntFilter<"departamento"> | number
    nombre_depto?: StringFilter<"departamento"> | string
    division_depto?: IntFilter<"departamento"> | number
    division?: XOR<DivisionScalarRelationFilter, divisionWhereInput>
  }

  export type departamentoOrderByWithRelationInput = {
    clave_depto?: SortOrder
    nombre_depto?: SortOrder
    division_depto?: SortOrder
    division?: divisionOrderByWithRelationInput
    _relevance?: departamentoOrderByRelevanceInput
  }

  export type departamentoWhereUniqueInput = Prisma.AtLeast<{
    clave_depto?: number
    AND?: departamentoWhereInput | departamentoWhereInput[]
    OR?: departamentoWhereInput[]
    NOT?: departamentoWhereInput | departamentoWhereInput[]
    nombre_depto?: StringFilter<"departamento"> | string
    division_depto?: IntFilter<"departamento"> | number
    division?: XOR<DivisionScalarRelationFilter, divisionWhereInput>
  }, "clave_depto">

  export type departamentoOrderByWithAggregationInput = {
    clave_depto?: SortOrder
    nombre_depto?: SortOrder
    division_depto?: SortOrder
    _count?: departamentoCountOrderByAggregateInput
    _avg?: departamentoAvgOrderByAggregateInput
    _max?: departamentoMaxOrderByAggregateInput
    _min?: departamentoMinOrderByAggregateInput
    _sum?: departamentoSumOrderByAggregateInput
  }

  export type departamentoScalarWhereWithAggregatesInput = {
    AND?: departamentoScalarWhereWithAggregatesInput | departamentoScalarWhereWithAggregatesInput[]
    OR?: departamentoScalarWhereWithAggregatesInput[]
    NOT?: departamentoScalarWhereWithAggregatesInput | departamentoScalarWhereWithAggregatesInput[]
    clave_depto?: IntWithAggregatesFilter<"departamento"> | number
    nombre_depto?: StringWithAggregatesFilter<"departamento"> | string
    division_depto?: IntWithAggregatesFilter<"departamento"> | number
  }

  export type divisionCreateInput = {
    nombre_div: string
    departamento?: departamentoCreateNestedManyWithoutDivisionInput
  }

  export type divisionUncheckedCreateInput = {
    clave_div?: number
    nombre_div: string
    departamento?: departamentoUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type divisionUpdateInput = {
    nombre_div?: StringFieldUpdateOperationsInput | string
    departamento?: departamentoUpdateManyWithoutDivisionNestedInput
  }

  export type divisionUncheckedUpdateInput = {
    clave_div?: IntFieldUpdateOperationsInput | number
    nombre_div?: StringFieldUpdateOperationsInput | string
    departamento?: departamentoUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type divisionCreateManyInput = {
    clave_div?: number
    nombre_div: string
  }

  export type divisionUpdateManyMutationInput = {
    nombre_div?: StringFieldUpdateOperationsInput | string
  }

  export type divisionUncheckedUpdateManyInput = {
    clave_div?: IntFieldUpdateOperationsInput | number
    nombre_div?: StringFieldUpdateOperationsInput | string
  }

  export type departamentoCreateInput = {
    nombre_depto: string
    division: divisionCreateNestedOneWithoutDepartamentoInput
  }

  export type departamentoUncheckedCreateInput = {
    clave_depto?: number
    nombre_depto: string
    division_depto: number
  }

  export type departamentoUpdateInput = {
    nombre_depto?: StringFieldUpdateOperationsInput | string
    division?: divisionUpdateOneRequiredWithoutDepartamentoNestedInput
  }

  export type departamentoUncheckedUpdateInput = {
    clave_depto?: IntFieldUpdateOperationsInput | number
    nombre_depto?: StringFieldUpdateOperationsInput | string
    division_depto?: IntFieldUpdateOperationsInput | number
  }

  export type departamentoCreateManyInput = {
    clave_depto?: number
    nombre_depto: string
    division_depto: number
  }

  export type departamentoUpdateManyMutationInput = {
    nombre_depto?: StringFieldUpdateOperationsInput | string
  }

  export type departamentoUncheckedUpdateManyInput = {
    clave_depto?: IntFieldUpdateOperationsInput | number
    nombre_depto?: StringFieldUpdateOperationsInput | string
    division_depto?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DepartamentoListRelationFilter = {
    every?: departamentoWhereInput
    some?: departamentoWhereInput
    none?: departamentoWhereInput
  }

  export type departamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type divisionOrderByRelevanceInput = {
    fields: divisionOrderByRelevanceFieldEnum | divisionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type divisionCountOrderByAggregateInput = {
    clave_div?: SortOrder
    nombre_div?: SortOrder
  }

  export type divisionAvgOrderByAggregateInput = {
    clave_div?: SortOrder
  }

  export type divisionMaxOrderByAggregateInput = {
    clave_div?: SortOrder
    nombre_div?: SortOrder
  }

  export type divisionMinOrderByAggregateInput = {
    clave_div?: SortOrder
    nombre_div?: SortOrder
  }

  export type divisionSumOrderByAggregateInput = {
    clave_div?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DivisionScalarRelationFilter = {
    is?: divisionWhereInput
    isNot?: divisionWhereInput
  }

  export type departamentoOrderByRelevanceInput = {
    fields: departamentoOrderByRelevanceFieldEnum | departamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type departamentoCountOrderByAggregateInput = {
    clave_depto?: SortOrder
    nombre_depto?: SortOrder
    division_depto?: SortOrder
  }

  export type departamentoAvgOrderByAggregateInput = {
    clave_depto?: SortOrder
    division_depto?: SortOrder
  }

  export type departamentoMaxOrderByAggregateInput = {
    clave_depto?: SortOrder
    nombre_depto?: SortOrder
    division_depto?: SortOrder
  }

  export type departamentoMinOrderByAggregateInput = {
    clave_depto?: SortOrder
    nombre_depto?: SortOrder
    division_depto?: SortOrder
  }

  export type departamentoSumOrderByAggregateInput = {
    clave_depto?: SortOrder
    division_depto?: SortOrder
  }

  export type departamentoCreateNestedManyWithoutDivisionInput = {
    create?: XOR<departamentoCreateWithoutDivisionInput, departamentoUncheckedCreateWithoutDivisionInput> | departamentoCreateWithoutDivisionInput[] | departamentoUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: departamentoCreateOrConnectWithoutDivisionInput | departamentoCreateOrConnectWithoutDivisionInput[]
    createMany?: departamentoCreateManyDivisionInputEnvelope
    connect?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
  }

  export type departamentoUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<departamentoCreateWithoutDivisionInput, departamentoUncheckedCreateWithoutDivisionInput> | departamentoCreateWithoutDivisionInput[] | departamentoUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: departamentoCreateOrConnectWithoutDivisionInput | departamentoCreateOrConnectWithoutDivisionInput[]
    createMany?: departamentoCreateManyDivisionInputEnvelope
    connect?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type departamentoUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<departamentoCreateWithoutDivisionInput, departamentoUncheckedCreateWithoutDivisionInput> | departamentoCreateWithoutDivisionInput[] | departamentoUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: departamentoCreateOrConnectWithoutDivisionInput | departamentoCreateOrConnectWithoutDivisionInput[]
    upsert?: departamentoUpsertWithWhereUniqueWithoutDivisionInput | departamentoUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: departamentoCreateManyDivisionInputEnvelope
    set?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    disconnect?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    delete?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    connect?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    update?: departamentoUpdateWithWhereUniqueWithoutDivisionInput | departamentoUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: departamentoUpdateManyWithWhereWithoutDivisionInput | departamentoUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: departamentoScalarWhereInput | departamentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type departamentoUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<departamentoCreateWithoutDivisionInput, departamentoUncheckedCreateWithoutDivisionInput> | departamentoCreateWithoutDivisionInput[] | departamentoUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: departamentoCreateOrConnectWithoutDivisionInput | departamentoCreateOrConnectWithoutDivisionInput[]
    upsert?: departamentoUpsertWithWhereUniqueWithoutDivisionInput | departamentoUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: departamentoCreateManyDivisionInputEnvelope
    set?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    disconnect?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    delete?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    connect?: departamentoWhereUniqueInput | departamentoWhereUniqueInput[]
    update?: departamentoUpdateWithWhereUniqueWithoutDivisionInput | departamentoUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: departamentoUpdateManyWithWhereWithoutDivisionInput | departamentoUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: departamentoScalarWhereInput | departamentoScalarWhereInput[]
  }

  export type divisionCreateNestedOneWithoutDepartamentoInput = {
    create?: XOR<divisionCreateWithoutDepartamentoInput, divisionUncheckedCreateWithoutDepartamentoInput>
    connectOrCreate?: divisionCreateOrConnectWithoutDepartamentoInput
    connect?: divisionWhereUniqueInput
  }

  export type divisionUpdateOneRequiredWithoutDepartamentoNestedInput = {
    create?: XOR<divisionCreateWithoutDepartamentoInput, divisionUncheckedCreateWithoutDepartamentoInput>
    connectOrCreate?: divisionCreateOrConnectWithoutDepartamentoInput
    upsert?: divisionUpsertWithoutDepartamentoInput
    connect?: divisionWhereUniqueInput
    update?: XOR<XOR<divisionUpdateToOneWithWhereWithoutDepartamentoInput, divisionUpdateWithoutDepartamentoInput>, divisionUncheckedUpdateWithoutDepartamentoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type departamentoCreateWithoutDivisionInput = {
    nombre_depto: string
  }

  export type departamentoUncheckedCreateWithoutDivisionInput = {
    clave_depto?: number
    nombre_depto: string
  }

  export type departamentoCreateOrConnectWithoutDivisionInput = {
    where: departamentoWhereUniqueInput
    create: XOR<departamentoCreateWithoutDivisionInput, departamentoUncheckedCreateWithoutDivisionInput>
  }

  export type departamentoCreateManyDivisionInputEnvelope = {
    data: departamentoCreateManyDivisionInput | departamentoCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type departamentoUpsertWithWhereUniqueWithoutDivisionInput = {
    where: departamentoWhereUniqueInput
    update: XOR<departamentoUpdateWithoutDivisionInput, departamentoUncheckedUpdateWithoutDivisionInput>
    create: XOR<departamentoCreateWithoutDivisionInput, departamentoUncheckedCreateWithoutDivisionInput>
  }

  export type departamentoUpdateWithWhereUniqueWithoutDivisionInput = {
    where: departamentoWhereUniqueInput
    data: XOR<departamentoUpdateWithoutDivisionInput, departamentoUncheckedUpdateWithoutDivisionInput>
  }

  export type departamentoUpdateManyWithWhereWithoutDivisionInput = {
    where: departamentoScalarWhereInput
    data: XOR<departamentoUpdateManyMutationInput, departamentoUncheckedUpdateManyWithoutDivisionInput>
  }

  export type departamentoScalarWhereInput = {
    AND?: departamentoScalarWhereInput | departamentoScalarWhereInput[]
    OR?: departamentoScalarWhereInput[]
    NOT?: departamentoScalarWhereInput | departamentoScalarWhereInput[]
    clave_depto?: IntFilter<"departamento"> | number
    nombre_depto?: StringFilter<"departamento"> | string
    division_depto?: IntFilter<"departamento"> | number
  }

  export type divisionCreateWithoutDepartamentoInput = {
    nombre_div: string
  }

  export type divisionUncheckedCreateWithoutDepartamentoInput = {
    clave_div?: number
    nombre_div: string
  }

  export type divisionCreateOrConnectWithoutDepartamentoInput = {
    where: divisionWhereUniqueInput
    create: XOR<divisionCreateWithoutDepartamentoInput, divisionUncheckedCreateWithoutDepartamentoInput>
  }

  export type divisionUpsertWithoutDepartamentoInput = {
    update: XOR<divisionUpdateWithoutDepartamentoInput, divisionUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<divisionCreateWithoutDepartamentoInput, divisionUncheckedCreateWithoutDepartamentoInput>
    where?: divisionWhereInput
  }

  export type divisionUpdateToOneWithWhereWithoutDepartamentoInput = {
    where?: divisionWhereInput
    data: XOR<divisionUpdateWithoutDepartamentoInput, divisionUncheckedUpdateWithoutDepartamentoInput>
  }

  export type divisionUpdateWithoutDepartamentoInput = {
    nombre_div?: StringFieldUpdateOperationsInput | string
  }

  export type divisionUncheckedUpdateWithoutDepartamentoInput = {
    clave_div?: IntFieldUpdateOperationsInput | number
    nombre_div?: StringFieldUpdateOperationsInput | string
  }

  export type departamentoCreateManyDivisionInput = {
    clave_depto?: number
    nombre_depto: string
  }

  export type departamentoUpdateWithoutDivisionInput = {
    nombre_depto?: StringFieldUpdateOperationsInput | string
  }

  export type departamentoUncheckedUpdateWithoutDivisionInput = {
    clave_depto?: IntFieldUpdateOperationsInput | number
    nombre_depto?: StringFieldUpdateOperationsInput | string
  }

  export type departamentoUncheckedUpdateManyWithoutDivisionInput = {
    clave_depto?: IntFieldUpdateOperationsInput | number
    nombre_depto?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}