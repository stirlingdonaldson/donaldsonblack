import Header from './header';

export default function Home() {
  return (
    <main className=''>
      <div className='flex items-center justify-center h-screen bg-gray-400 '>
        <div className="container mx-auto bg-gray-200  max-w-xxl h-screen flex flex-col ">
        {/*  className=" center flex min-w-lg max-w-xl min-h-screen flex-col items-center justify-between p-24 bg-gray-500 "  */}

          <Header />

          <h1 className='m-10'>Home</h1>

        </div>
      </div>
    </main>
  );
}