import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day9: React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
        
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          Multimedia Elements in HTML
        </h1>

        <p className="text-gray-700 mb-4">
          Explore how to add **audio and video** to your webpage using the{" "}
          <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags. These
          elements provide a simple way to include **multimedia content**
          without requiring third-party plugins like Flash.
        </p>

        <p className="text-gray-700 mb-4">
          The <code>&lt;audio&gt;</code> tag is used to embed **sound clips or
          music**, while the <code>&lt;video&gt;</code> tag allows embedding{" "}
          **video content**. Both elements support the **controls** attribute,
          which provides users with options to play, pause, and control volume.
        </p>
        <p className="text-gray-700 mb-4">
          Multimedia elements enhance web interactivity by allowing the integration of audio, video, and other dynamic content. 
          This lesson will explore how to embed and manipulate multimedia elements in HTML using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags.
        </p>

        <h2 className="text-xl font-semibold text-blue-700 mb-2">The Audio Element</h2>
        <p className="text-gray-700 mb-4">
          The <code>&lt;audio&gt;</code> tag allows you to embed sound content into web pages. The supported audio formats include MP3, Ogg, and WAV.
        </p>

        <h3 className="text-lg font-medium text-gray-800 mb-2">Basic Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
        </pre>

        <h3 className="text-lg font-medium text-gray-800 mb-2">Advanced Example with Multiple Sources:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`}
        </pre>

        <h2 className="text-xl font-semibold text-blue-700 mb-2">The Video Element</h2>
        <p className="text-gray-700 mb-4">
          The <code>&lt;video&gt;</code> tag is used to embed video content into a web page. It supports MP4, WebM, and Ogg formats.
        </p>

        <h3 className="text-lg font-medium text-gray-800 mb-2">Basic Example:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
        </pre>

        <h3 className="text-lg font-medium text-gray-800 mb-2">Using Poster Attribute:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded mb-4">
          {`<video controls width="600" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
</video>`}
        </pre>

        <h2 className="text-xl font-semibold text-blue-700 mb-2">Best Practices for Using Multimedia Elements</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Always provide multiple file formats for better browser compatibility.</li>
          <li>Use the <code>controls</code> attribute to allow user interaction.</li>
          <li>Optimize media files to reduce loading times and improve performance.</li>
          <li>Include fallback text for browsers that do not support multimedia elements.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-700 mb-2">Practice Exercises</h2>
        <p className="text-gray-700 mb-4">
          Try the following exercises to reinforce your understanding of multimedia elements:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Create an HTML page with both an audio and a video element.</li>
          <li>Add controls, autoplay, and loop attributes to the audio and video elements.</li>
          <li>Use different file formats and test browser compatibility.</li>
          <li>Embed a video from YouTube using the <code>&lt;iframe&gt;</code> tag.</li>
        </ol>

        <h2 className="text-xl font-semibold text-blue-700 text-black py-2 px-3 rounded-t-lg">
          Further Resources on HTML Multimedia Elements
        </h2>
        <div className="space-y-2 mt-1">
          <p>
            📌 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MDN Web Docs - HTML Audio Element</a>
          </p>
          <p>
            🎥 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MDN Web Docs - HTML Video Element</a>
          </p>
          <p>
            📚 <a href="https://www.w3schools.com/html/html_multimedia.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">W3Schools - HTML Multimedia</a>
          </p>
          <p>
            🌍 <a href="https://html.com/media/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HTML.com - Multimedia Elements</a>
          </p>
          <p>
            🎬 <a href="https://www.youtube.com/watch?v=7Xz5sDmuE5U" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube Tutorial - HTML5 Audio and Video</a>
          </p>
        </div>
    </section>
    </>
  )
}

export default Day9;