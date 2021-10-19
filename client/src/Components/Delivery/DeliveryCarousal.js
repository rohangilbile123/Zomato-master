import React from "react";

//carousal component
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
    return (
        <>
        <h3 className="text-xl font-semibold my-3"> Eat what makes you happy!!</h3>
        <div className="flex flex-wrap justify-between gap-3"> 
            <DeliveryFoodCategory />
              <DeliveryFoodCategory />
              <DeliveryFoodCategory />
              <DeliveryFoodCategory />
              <DeliveryFoodCategory />
        </div>
        </>

    )

};

export default DeliveryCarousal;