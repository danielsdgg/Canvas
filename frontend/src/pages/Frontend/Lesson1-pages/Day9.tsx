import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Day9:React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
    <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105">
            <FaArrowLeft className="mr-2" />
            Back
        </button>
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">Multimedia Elements</h1>
  <p className="text-gray-700 mb-4">
    Explore how to add audio and video to your webpage using the <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags. These elements provide a simple way to include media without needing third-party plugins.
  </p>
  <p className="text-gray-700 mb-4">
    The <code>&lt;audio&gt;</code> tag is used to embed audio content, while the <code>&lt;video&gt;</code> tag is used for embedding video content. Both tags support the `controls` attribute to allow users to play, pause, and control the volume.
  </p>
  <p className="text-gray-700 mb-4">
    Common attributes for these tags include:
  </p>
  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>controls</strong>: Adds play, pause, and volume control buttons.</li>
    <li><strong>autoplay</strong>: Automatically starts playing when the page loads.</li>
    <li><strong>loop</strong>: Replays the media automatically when it reaches the end.</li>
    <li><strong>muted</strong>: Starts the media with the sound muted.</li>
    <li><strong>poster</strong>: Specifies an image to be shown while the video is downloading or until the user hits play.</li>
  </ul>
  <p className="text-gray-700 mb-4">
    Example of embedding an audio file:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
  </pre>
  <p className="text-gray-700 mb-4">
    Example of embedding a video file:
  </p>
  <pre className="bg-gray-800 text-white p-4 rounded">
    {`<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
  </pre>
  <p className="text-gray-700 mt-4">
    Practice embedding audio and video files into your webpage using these examples. Experiment with adding additional attributes to customize the media behavior, such as setting the `autoplay` or `loop` attributes for a unique user experience.
  </p>
  <h2 className="text-xl text-center font-semibold text-blue-700 text-black py-2 px-3 rounded-t-lg">
        Further Resources on HTML Multimedia Elements
      </h2>
      <p className="text-gray-700 mt-2">
        To enhance your understanding of multimedia elements such as images, audio, and video in HTML, explore the following resources:
      </p>

      <div className="space-y-2 mt-1">
        <p>
          📌 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MDN Web Docs - HTML Audio Element</a>  
          <br />
          Learn how to embed and control audio playback using the <code className="bg-gray-200 px-1 rounded">{"<audio>"}</code> tag.
        </p>

        <p>
          🎥 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MDN Web Docs - HTML Video Element</a>  
          <br />
          A complete guide to using the <code className="bg-gray-200 px-1 rounded">{"<video>"}</code> tag for embedding videos in your web pages.
        </p>

        <p>
          📚 <a href="https://www.w3schools.com/html/html_multimedia.asp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">W3Schools - HTML Multimedia</a>  
          <br />
          A simple tutorial covering audio, video, and other multimedia elements.
        </p>

        <p>
          🌍 <a href="https://html.com/media/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HTML.com - Multimedia Elements</a>  
          <br />
          A beginner-friendly resource explaining how multimedia elements enhance web content.
        </p>

        <p>
          🎬 <a href="https://www.youtube.com/watch?v=7Xz5sDmuE5U" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube Tutorial - HTML5 Audio and Video</a>  
          <br />
          A video tutorial demonstrating multimedia implementation in HTML.
        </p>
      </div>
    </section>
    </>
  )
}

export default Day9
