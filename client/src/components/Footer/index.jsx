import React from "react";

function Footer() {
  return (
    <section className="w-full h-[50vh] flex mt-14">
      <div className="text-black w-[50%] section-1">
        <div className="flex flex-col items-start justify-center h-full pl-14 ">
          <h2 className="my-5 text-[40px] font-bold text-start">TrendCraze</h2>
          <p className="inline-flex text-sm font-normal text-start">
            Give your wardrobe the upgrade it deserves with our latest
            collection of fashion-forward pieces. Explore the newest arrivals
            that combine style, quality, and versatility to effortlessly elevate
            your everyday look
          </p>
        </div>
      </div>
      <div className="section-2 w-[50%] ">
        <div className="flex items-center justify-center h-full">
          <div className=" w-[30%] p-2">
            <h3 className="text-normal">Shop</h3>
            <ul className="mt-2 font-semibold ">
              <li className="mt-2">Men's Product</li>
              <li className="mt-2">Women’s Product</li>
              <li className="mt-2">Winter Edition</li>
              <li className="mt-2">Accessories</li>
              <li className="mt-2">Discounts</li>
            </ul>
          </div>

          <div className=" w-[26%] pl-3 p-2">
            <h3 className="text-normal">Company</h3>
            <ul className="mt-2 font-semibold ">
              <li className="mt-2">About US</li>
              <li className="mt-2">Careers</li>
              <li className="mt-2">Investors</li>
              <li className="mt-2">News</li>
              <li className="mt-2">purpose</li>
            </ul>
          </div>

          <div className=" w-[30%] p-2">
            <h3 className="text-normal">Support</h3>
            <ul className="mt-2 font-semibold ">
              <li className="mt-2">Order Status</li>
              <li className="mt-2">Shipping & Delivery</li>
              <li className="mt-2">Returns</li>
              <li className="mt-2">Payment Option</li>
              <li className="mt-2">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Footer };
