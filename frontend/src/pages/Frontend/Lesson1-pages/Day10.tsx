import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day10:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">Flexbox & Grid</h1>
        <div className="mb-8">
            <p className="text-gray-800 mb-4">
              Flexbox and Grid are not mutually exclusive; they can be combined to create highly flexible and powerful layouts. This combination is especially useful when creating complex designs with both rows and columns while maintaining precise alignment of elements.
            </p>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">
              Why Combine Flexbox & Grid?
            </h4>
            <ul className="list-disc ml-6 text-gray-800">
              <li>
                Use Grid for the overall layout structure, such as dividing the page into rows and columns.
              </li>
              <li>
                Use Flexbox for precise alignment and spacing of items within each grid cell.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-blue-600 mt-4">Code Example:</h4>
            <p className="text-gray-800 mb-4">
              Here's an example of combining Grid for the overall structure and Flexbox for aligning content:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Box 1</div>
            <div>Box 2</div>
          </div>`}
            </pre>
            <p className="text-gray-800 mt-4">
              In Tailwind CSS, this can be achieved using:
              <code className="bg-gray-100 p-1 rounded mx-1">grid grid-cols-2 gap-5</code> for the grid layout and
              <code className="bg-gray-100 p-1 rounded mx-1">flex justify-center items-center</code> for aligning content within the flex container.
            </p>
              
            <div className="grid grid-cols-2 gap-5 bg-yellow-200 p-5 rounded mt-4">
              <div className="flex justify-center items-center bg-white p-4 border">Box 1</div>
              <div className="bg-white p-4 border">Box 2</div>
            </div>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Practical Applications:</h4>
            <p className="text-gray-800">
              Combining Flexbox and Grid is ideal for:
            </p>
            <ul className="list-disc ml-6 text-gray-800 mt-2">
              <li>Dashboard layouts with cards and charts</li>
              <li>Product grids with centered content</li>
              <li>Responsive layouts where alignment and spacing need fine-tuning</li>
            </ul>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Advanced Example:</h4>
            <p className="text-gray-800">
              Let's create a layout with a header, sidebar, and main content area where Flexbox is used inside the grid cells for alignment:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`<div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '10px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1>Logo</h1>
              <nav>Navigation</nav>
            </header>
            <aside>Sidebar</aside>
            <main>Main Content</main>
          </div>`}
            </pre>
              
            <div className="grid grid-cols-2 gap-5 bg-yellow-200 p-5 rounded mt-4">
              <header className="flex justify-between items-center bg-white p-4 border col-span-2">
                <h1 className="font-bold">Logo</h1>
                <nav>Navigation</nav>
              </header>
              <aside className="bg-white p-4 border">Sidebar</aside>
              <main className="bg-white p-4 border">Main Content</main>
            </div>
              
            <h4 className="text-lg font-semibold text-blue-600 mt-4">Try It Yourself:</h4>
            <div className="bg-gray-100 p-4 rounded mt-2">
              <p className="text-gray-800">
                Create a responsive product grid with centered content using this concept:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                {`<div class="grid grid-cols-3 gap-4">
                <div class="flex justify-center items-center bg-gray-300 h-24">Product 1</div>
                <div class="flex justify-center items-center bg-gray-300 h-24">Product 2</div>
                <div class="flex justify-center items-center bg-gray-300 h-24">Product 3</div>
                </div>`}
              </pre>
              <p className="text-gray-800 mt-4">
                We will have a deep look at TailwindCss next week.
              </p>
            </div>
          </div>
    </section>
    </>
  )
}

export default Day10
