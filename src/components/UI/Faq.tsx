const Faq = () => {
  return (
    <div className="max-w-[1183px] mx-auto px-2">
      <div className="text-center ">
        <h1 className="text-5xl font-bold my-5">FAQs</h1>
        <p className="my-2">
          If you have any questions that aren’t listed below, please send your
          question to: info@ExpatGlobalGirls.com
        </p>
      </div>

      {/* Accordion-section  */}
      <div className="my-10">
        {/* accordion-1  */}
        <div className="collapse collapse-plus bg-white my-4">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-semibold">
            {" "}
            What cars do you have in your inventory?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur. Integer facilisi sit
              tortor lobortis amet. Risus vestibulum nec fringilla sed in
              tincidunt tempus porta. Vulputate ornare vitae turpis mauris.{" "}
            </p>
          </div>
        </div>
        {/* accordion-2  */}
        <div className="collapse collapse-plus bg-white my-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {" "}
            What cars do you have in your inventory?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur. Integer facilisi sit
              tortor lobortis amet. Risus vestibulum nec fringilla sed in
              tincidunt tempus porta. Vulputate ornare vitae turpis mauris.{" "}
            </p>
          </div>
        </div>
        {/* accordion-3  */}
        <div className="collapse collapse-plus bg-white my-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {" "}
            What cars do you have in your inventory?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur. Integer facilisi sit
              tortor lobortis amet. Risus vestibulum nec fringilla sed in
              tincidunt tempus porta. Vulputate ornare vitae turpis mauris.{" "}
            </p>
          </div>
        </div>
        {/* accordion-4  */}
        <div className="collapse collapse-plus bg-white my-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {" "}
            What cars do you have in your inventory?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur. Integer facilisi sit
              tortor lobortis amet. Risus vestibulum nec fringilla sed in
              tincidunt tempus porta. Vulputate ornare vitae turpis mauris.{" "}
            </p>
          </div>
        </div>
        {/* accordion-5  */}
        <div className="collapse collapse-plus bg-white my-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {" "}
            What cars do you have in your inventory?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur. Integer facilisi sit
              tortor lobortis amet. Risus vestibulum nec fringilla sed in
              tincidunt tempus porta. Vulputate ornare vitae turpis mauris.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
