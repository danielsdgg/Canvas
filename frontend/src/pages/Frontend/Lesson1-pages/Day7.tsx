import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";


const Day7: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    assignmentId: 1,
    userId: userData?.userDetails.id, // Ensuring a valid initial state
    fileUrl: "",
  });

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(prev => ({
        ...prev,
        [name]: value
    }));
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log("Form Data:", form);
    console.log("User Token:", userToken);
  
    if (!userToken) {
      alert("Authentication error. Please log in again.");
      return;
    }
  
    // Check if token is expired
    // try {
    //   const decoded: any = jwtDecode(userToken);
    //   if (decoded.exp * 1000 < Date.now()) {
    //     alert("Session expired. Please log in again.");
    //     return;
    //   }
    // } catch (error) {
    //   console.error("Invalid token:", error);
    //   alert("Authentication error. Please log in again.");
    //   return;
    // }
  
    try {
      const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
        method: "POST",
        headers: { 
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        setSubmitted(true);
        alert("Assignment submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
      alert("Failed to submit. Please try again later.");
    }
  };
  

  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">Tags,Links and Images in HTML</h1>
        <p className="text-gray-700 mb-4">
    Explore commonly used HTML tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>,
    <code>&lt;div&gt;</code>, and more. These tags help structure content effectively on a webpage.
  </p>
  <p className="text-gray-700 mb-4">
    Commonly used tags include:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>&lt;p&gt;</strong>: Defines a paragraph, used for regular text content.</li>
    <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Define headings from largest (<code>&lt;h1&gt;</code>) to smallest (<code>&lt;h6&gt;</code>). Use headings to structure your content hierarchically.</li>
    <li><strong>&lt;div&gt;</strong>: Groups content into sections for styling or scripting purposes. Commonly used as a container for other elements.</li>
    <li><strong>&lt;span&gt;</strong>: Inline container for text or elements, often used for styling parts of text.</li>
    <li><strong>&lt;img&gt;</strong>: Embeds an image in the document. Requires the <code>src</code> attribute to specify the image file.</li>
    <li><strong>&lt;a&gt;</strong>: Defines a hyperlink, used to link to other pages or resources.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<h1>Main Heading</h1>
<p>This is a paragraph.</p>
<div>
  <h2>Subheading</h2>
  <p>Content inside a div.</p>
  <img src="example.jpg" alt="Example Image">
  <a href="https://example.com">Visit Example</a>
</div>`}
  </pre>
  <p className="text-gray-700 mt-4">
    <strong>Note:</strong> Proper use of HTML tags not only improves the structure and readability of your code but also enhances SEO and accessibility.
  </p>
  <div className="mb-8">
  <h3 className="text-xl font-bold text-center mt-8"> Links and Images</h3>
  <p className="text-gray-700 mb-4">
    Learn how to add links using the <code>&lt;a&gt;</code> tag and include images with the <code>&lt;img&gt;</code> tag. Links and images are fundamental elements for navigation and visual content on web pages.
  </p>
  <p className="text-gray-700">
    Adding links and images is essential for creating interactive and visually appealing pages. Here are key aspects to understand:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong>&lt;a href="url"&gt;</strong>: The anchor tag used to create hyperlinks that connect to other pages or resources. The <code>href</code> attribute specifies the URL of the page the link goes to. You can also use <code>target="_blank"</code> to open the link in a new tab.</li>
    <li><strong>&lt;img src="image.jpg" alt="description"&gt;</strong>: The image tag is used to embed images. The <code>src</code> attribute specifies the path to the image file, and the <code>alt</code> attribute provides alternative text for the image if it fails to load or for screen readers.</li>
  </ul>
  <p className="text-gray-700">
    Example of a basic hyperlink:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<a href="https://example.com" target="_blank">Visit Example</a>`}
  </pre>
  <p className="text-gray-700">
    Example of an image with alternative text:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<img src="image.jpg" alt="A beautiful scenery">`}
  </pre>
  <p className="text-gray-700">
    You can also add more attributes to enhance functionality, such as:
  </p>
  <ul className="list-disc list-inside text-gray-700">
    <li><strong><code>title</code></strong>: Provides additional information on hover. Example: <code>&lt;a href="https://example.com" title="Click to visit Example"&gt;Visit Example&lt;/a&gt;</code></li>
    <li><strong><code>width</code> and <code>height</code></strong>: Adjust the dimensions of an image. Example: <code>&lt;img src="image.jpg" alt="Scenery" width="500" height="300"&gt;</code></li>
  </ul>
</div>
<h2 className="text-3xl font-semibold  text-red rounded-t-lg">
                Examples:
            </h2>
            
            <div className="space-y-6 mt-6">
                {/* HTML Basics */}
                <div>
                    <h3 className="text-2xl font-medium text-gray-500 mb-2">1. Basic HTML Structure</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Every HTML document follows a basic structure. Below is a simple example:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        {`<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a basic HTML document structure.</p>
</body>
</html>`}
                    </pre>
                </div>

                {/* HTML Headings and Paragraphs */}
                <div>
                    <h3 className="text-2xl font-medium text-gray-500 mb-2">2. Headings and Paragraphs</h3>
                    <p className="text-gray-700 leading-relaxed">
                        HTML provides six levels of headings, from &lt;h1&gt; to &lt;h6&gt;, and paragraph tags.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        {`<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>`}
                    </pre>
                </div>

                {/* Links in HTML */}
                <div>
                    <h3 className="text-2xl font-medium text-gray-500 mb-2">3. Adding Links</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Use the &lt;a&gt; tag to create hyperlinks.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        {`<a href="https://www.google.com" target="_blank">Visit Google</a>`}
                    </pre>
                </div>

                {/* Images in HTML */}
                <div>
                    <h3 className="text-2xl font-medium text-gray-500 mb-2">4. Displaying Images</h3>
                    <p className="text-gray-700 leading-relaxed">
                        The &lt;img&gt; tag is used to display images.
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                        {`<img src="image.jpg" alt="A description of the image">`}
                    </pre>
                </div>
            </div>
                            {/* exercise */}
            <section className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold bg-blue-800 text-white py-4 px-6 rounded-t-lg">
                HTML Tags, Links, and Images - Practical Exercise
            </h2>
            <div className="space-y-6 p-6">
                <p className="text-gray-700 leading-relaxed">
                    In this exercise, you will create a simple HTML document that includes:
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-6 space-y-1">
                    <li>A heading and a paragraph.</li>
                    <li>An ordered and unordered list.</li>
                    <li>A hyperlink that opens in a new tab.</li>
                    <li>An image with alternative text.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                    Below is a template for you to follow. Modify it and submit your version.
                </p>
                <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-auto">
{`<!DOCTYPE html>
<html>
<head>
    <title>HTML Exercise</title>
</head>
<body>
    <h1>My First HTML Page</h1>
    <p>This is a paragraph about HTML basics.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <a href="https://example.com" target="_blank">Visit Example</a>
    <br>
    <img src="image.jpg" alt="Sample Image">
</body>
</html>`}
                </pre>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        name = 'fileUrl'
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={6}
                        placeholder="Paste your HTML solution here..."
                        value={form.fileUrl}
                        onChange={handleFileChange}
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                    >
                        Submit Exercise
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-600 font-medium">Your exercise has been submitted successfully!</p>
                )}
            </div>
        </section>
        {/* Summary Section */}
        <div className="mt-10 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">SUMMARY: HTML Tags, Links, and Images</h3>
                <p className="text-gray-700 mb-4">
                    Understanding HTML tags, links, and images is fundamental for web development. Mastering these topics allows students to create structured, navigable, and visually appealing webpages.
                </p>
                <p className="text-gray-700 mb-4">
                    With this knowledge, students can confidently build web pages, link different resources, and enhance their designs with images. These skills are crucial in becoming a proficient frontend developer.
                </p>
                <h4 className="text-xl font-medium text-gray-700">Additional Resources</h4>
                <ul className="list-disc list-inside text-gray-700 ml-6 space-y-2">
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-blue-600 hover:underline">MDN Web Docs - HTML</a></li>
                    <li><a href="https://www.w3schools.com/html/" className="text-blue-600 hover:underline">W3Schools HTML Tutorial</a></li>
                    <li><a href="https://html.com/" className="text-blue-600 hover:underline">HTML.com Guide</a></li>
                </ul>
            </div>
            
    </section>
    </>
  )
}

export default Day7
