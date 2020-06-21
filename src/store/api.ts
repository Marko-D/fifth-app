import { createAction } from "@reduxjs/toolkit";

export const apiRequestStart: any = createAction("api/requestStart");
export const apiRequestSuccess: any = createAction("api/requestSuccess");
export const apiRequestError: any = createAction("api/requestError");
