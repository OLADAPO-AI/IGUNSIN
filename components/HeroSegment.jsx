function HeroSegment() {
  return (
    <div className=" bg-[#05141d]">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-white lg:text-5xl">
            Your Ideas,<span className=" text-orange-700 ">Our Community,</span>{' '}
            Real Impact
          </h1>
          <p className="mt-6 text-2xl font-sans text-gray-300">
            Join a movement of young leaders committed to positive change
          </p>
          <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-orange-600 rounded-lg hover:bg-orange-500 lg:mx-0 lg:w-auto focus:outline-none">
            Connect with Us
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSegment
