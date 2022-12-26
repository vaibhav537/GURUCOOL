import React from "react";

const Alert = (props) => {


  return (
    <div style={{ height: "70px" }} className="dark:bg-gray-600 bg-gray-100">
      {props.alert && (
        <div
          className={`p-4 pb-4 mb-4 text-sm text-${props.alert.color}-700 bg-${props.alert.color}-100 rounded-lg dark:bg-${props.alert.color}-200 dark:text-${props.alert.color}-800`}
          role="alert"
        >
          <span className="font-semibold text-2xl ml-5">{props.alert.type}:</span><span className="text-lg ml-2">{props.alert.msg}</span> 
        </div>
      )}
    </div>

  );
};

export default Alert;
