import React from "react";

const SellerDetails = () => {
  return (
    <div>
      <div className="px-2 lg:px-7 pt-5">
        <div className="w-full p-4  bg-[#283046] rounded-md">
          <div className="w-full flex flex-wrap text-[#d0d2d6]">
            <div className="w-3/12 flex justify-center items-center py-3">
              <div>
                <img
                  className="w-full h-[230px]"
                  src="/images/seller.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Basic Info</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md">
                  <div className="flex gap-2">
                    <span>Name : </span>
                    <span>rfff</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Email : </span>
                    <span>sdfe@fedd</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Role : </span>
                    <span>sdfeee</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Status : </span>
                    <span>dgdg</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Payment Account : </span>
                    <span>pending</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Address</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md">
                  <div className="flex gap-2">
                    <span>Shop Name : </span>
                    <span>edddd</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division : </span>
                    <span>sdfdsf</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District : </span>
                    <span>reaj</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub-District : </span>
                    <span>dhaka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className="flex gap-4 py-3">
                <select
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
                  name=""
                  required
                  id=""
                >
                  <option value="">--select status--</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
                <button className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 w-[170px] ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
