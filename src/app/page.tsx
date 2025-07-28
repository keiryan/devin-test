import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Innovative
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                designer for a
              </h1>
              <h1 className="text-5xl lg:text-6xl font-light text-gray-400 leading-tight">
                digital age
              </h1>
            </div>
            
            <div className="space-y-4 pt-8">
              <p className="text-lg text-gray-700">
                I&apos;m Ivan, a Visual Designer living in Munich, and I focus on making digital experiences that are easy to use, enjoyable, and get the job done.
              </p>
              
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Let&apos;s Talk →
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] max-w-full">
              <Image
                src="/hero-image.jpg"
                alt="Ivan - Visual Designer"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-gray-900">pipefy</h3>
            <p className="text-sm text-gray-600">UX &amp; Branding</p>
            <p className="text-sm text-gray-500">2022</p>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-gray-900">Honorable Mention</h3>
            <p className="text-sm text-gray-600">2022 - AWWWARDS</p>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-gray-900">Site of The Day</h3>
            <p className="text-sm text-gray-600">2022 - CSS Winner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
