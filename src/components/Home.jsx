const Home = () => {
  const handleDownloadResume = () => {
    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1fGvEh94CnmhXsZGp9bG4kpmD-mSJMkhK";

    // Open the direct download link in a new tab
    window.open(downloadUrl, "_blank");
  };

  return (
    <div name="home" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img
          src="/Profile.png"
          alt="Ayush Kandari"
          className="border-8 border-gray-500 rounded-full mx-auto my-6 w-80 h-80"
        />
        <h1 className="text-5xl font-bold mb-4">Hi I'm Ayush Kandari</h1>
        <p className="text-3xl text-red-700">Front End Developer</p>
        <button
          onClick={handleDownloadResume}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mt-8 rounded-lg transition-colors"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Home;