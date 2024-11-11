import { Helmet } from "react-helmet";

const News = () => {
  return (
    <div className="my-6">
      <Helmet>
        <title>News || Gadgets BD</title>
      </Helmet>
      <div className="card space-y-4 p-4 border-2 rounded-lg mb-4">
        <img
          src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-16.png"
          alt=""
          className="h-40 object-contain"
        />
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Apple Unveils iPhone 16 with Enhanced Camera Features
        </h2>
        <p className="font-thin text-base md:text-lg text-center">
          Apple has launched its newest iPhone, featuring an upgraded camera
          system, faster processor, and longer battery life. The new device is
          expected to set new benchmarks in smartphone technology.
        </p>
        <div className="text-center">
          <button className="btn btn-outline w-[120px] hover:bg-[#731fb8]">
            Read More
          </button>
        </div>
      </div>

      <div className="card space-y-4 p-4 border-2 rounded-lg mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZrho1H1Ixiro136ml8ytJaiBH9vPC37Phw&s"
          alt=""
          className="h-40 object-contain"
        />
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Samsung Galaxy Fold 5: A New Era of Foldable Phones
        </h2>
        <p className="font-thin text-base md:text-lg text-center">
          Samsung continues to innovate with its Galaxy Fold 5, a device that
          brings a larger screen in a compact foldable format. The new release
          promises durability and improved multitasking features.
        </p>
        <div className="text-center">
          <button className="btn btn-outline w-[120px] hover:bg-[#731fb8]">
            Read More
          </button>
        </div>
      </div>

      <div className="card space-y-4 p-4 border-2 rounded-lg mb-4">
        <img
          src="https://www.dpreview.com/files/p/articles/3382512956/both_back.jpeg"
          alt=""
          className="h-40 object-contain"
        />
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Google Announces Pixel 8 with AI-Powered Features
        </h2>
        <p className="font-thin text-base md:text-lg text-center">
          The Google Pixel 8 is here, bringing AI advancements to enhance the
          camera, battery efficiency, and user experience. Google aims to
          redefine the smart in smartphones.
        </p>
        <div className="text-center">
          <button className="btn btn-outline w-[120px] hover:bg-[#731fb8]">
            Read More
          </button>
        </div>
      </div>

      <div className="card space-y-4 p-4 border-2 rounded-lg mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8nfOOULltk9R3O4gj8rO3aGdQdCUCT-g6w&s"
          alt=""
          className="h-40 object-contain"
        />
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Dell’s New XPS Line: Lightweight Yet Powerful Laptops
        </h2>
        <p className="font-thin text-base md:text-lg text-center">
          Dell introduces its latest XPS laptops, designed for power users who
          demand portability and performance. With improved graphics and a sleek
          design, the new XPS series is a solid choice for professionals.
        </p>
        <div className="text-center">
          <button className="btn btn-outline w-[120px] hover:bg-[#731fb8]">
            Read More
          </button>
        </div>
      </div>

      <div className="card space-y-4 p-4 border-2 rounded-lg mb-4">
        <img
          src="https://smartbd.com/wp-content/webp-express/webp-images/uploads/2023/05/wh1.jpg.webp"
          alt=""
          className="h-40 object-contain"
        />
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Sony Launches WH-1000XM5: The Next Level of Noise Cancellation
        </h2>
        <p className="font-thin text-base md:text-lg text-center">
          Sony’s latest headphones in the WH-1000XM series offer top-tier noise
          cancellation, longer battery life, and improved sound quality, making
          them a must-have for audiophiles.
        </p>
        <div className="text-center">
          <button className="btn btn-outline w-[120px] hover:bg-[#731fb8]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
