export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About StyleMart
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          StyleMart is your trusted online shopping destination for quality
          fashion products. We offer trendy clothing, footwear, and accessories
          at affordable prices while providing a simple and secure shopping
          experience.
        </p>
      </div>

    

      {/* Features */}
      <section className="mb-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose StyleMart?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🛍️</div>

            <h3 className="text-xl font-semibold mb-2">
              Quality Products
            </h3>

            <p className="text-gray-600">
              We provide carefully selected products to ensure the best quality
              for our customers.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🚚</div>

            <h3 className="text-xl font-semibold mb-2">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              Enjoy reliable and timely delivery so your orders reach you as
              quickly as possible.
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🔒</div>

            <h3 className="text-xl font-semibold mb-2">
              Secure Shopping
            </h3>

            <p className="text-gray-600">
              Your privacy and payment information are protected with secure
              technologies.
            </p>
          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="bg-indigo-200 rounded-2xl p-10 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-7">
          Our mission is to make premium fashion accessible to everyone by
          offering quality products, competitive prices, excellent customer
          service, and a seamless online shopping experience.
        </p>

      </section>

    </div>
  );
}