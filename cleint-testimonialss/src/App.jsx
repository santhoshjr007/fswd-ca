import React from "react";
import "./App.css";
import CustomerCard from "./components/TestimonialCard";

const customers = [
  {
  
    fullName: "Arjuna",
    review:"very good!"
  },{
  
    fullName: "Dhuryodhan",
    review:"Awesome!"
  },{
  
    fullName: "Karna",
    review:"Nice Product!"
  },
 
];

const App = () => {
  return (
    
      <div className="customer-list">
        {customers.map((customer, index) => (
          <CustomerCard key={index} {...customer} />
        ))}
      </div>

   
  );
};

export default App;
