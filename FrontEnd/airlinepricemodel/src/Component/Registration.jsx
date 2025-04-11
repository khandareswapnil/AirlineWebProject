import React from "react";

export const Registration=()=>{
    return(
        <>
        <div className="w-100 border border-primary p-2">
      <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
      </div>
        </>
    )
}