// import React from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Loaders({ type, className, height, iconSize }) {
  switch (type) {
    case "linear-loader":
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-12 w-full min-h-[200px] flex items-center justify-center">
          <div className="p-12">
            <div className="h-1.5 w-40 bg-gray-200 overflow-hidden rounded relative">
              <div className="absolute top-0 left-0 bottom-0 bg-[#0C6967] w-1/2 rounded animate-pulse" />
            </div>
          </div>
        </div>
      );

    case "circular-loader":
      return (
        <div
          className={
            className
              ? className
              : "w-full mb-3 flex items-center justify-center"
          }
          style={{ height: height ? height : "60px" }}
        >
          <p className="flex items-center justify-center">
            <span className="w-8 h-8 border-4 border-gray-200 border-t-[#0C6967] rounded-full animate-spin"></span>
          </p>
        </div>
      );

    case "btn-loader":
      return (
        <div
          className={className ? className : "flex items-center justify-center"}
        >
          <FaSpinner
            className={`animate-spin ${iconSize ? iconSize : "text-lg"}`}
          />
        </div>
      );

    case "spiner-loader":
      return (
        <div className="text-center bg-white border border-gray-200 rounded-lg p-6 flex justify-center items-center">
          <FaSpinner className="animate-spin text-2xl text-[#0C6967]" />
        </div>
      );

    default:
      return null;
  }
}
