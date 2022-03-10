import React, { useRef, useState, useCallback, useEffect } from "react";

function Ex() {
  React.useEffect(() => {
    // 변수 선언
    let str: string = "Hello, Typescript!";
    let num: number = 38;
    let bool: boolean = false;

    // 가능은 하지만 권장하지 않는 타입들
    // undifined 만 할당 가능
    let un: undefined = undefined;
    // null
    let nu: null = null;
    // unkowon
    let idontknow: unknown = "?";
    // any
    let comeon: any = {
      name: 123,
      age: 13,
    };

    let Arr: Array<number> = [1, 2, 3];
    let arr2: string[] = ["a", "b", "c"];

    let obj: object = {};
    let obj2: { name: String; age: Number } = {
      name: "LHS",
      age: 38,
    };
    let obj3 = {
      name: "Choco",
      age: 12,
      ok: false,
    };

    // 함수 선언
    function add(a: number, b: number) {
      return a + b;
    }

    // Optional Param
    function optionalAdd(a: number, b: number, c?: number) {
      return a + b + c;
    }

    console.log(optionalAdd(1, 2));

    function optionalAdd2(a: number, b: number, c?: number) {
      let sum: number = 0;
      if (c) {
        sum = a + b + c;
      } else {
        sum = a + b;
      }
      return sum;
    }

    console.log(optionalAdd2(1, 2));

    // defalut Param
    function defaultFunc(name: string = "LHS") {
      console.log(name);
    }

    console.log(defaultFunc());
  });

  return <div></div>;
}

export default Ex;
